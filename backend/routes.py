import re

from algorithms.algorithms import bp_risk, calculate_bmi, calculate_diabetes_risk
from flask import Blueprint, jsonify, request
from state import patient_state

print("SERIAL state id:", id(patient_state))
api = Blueprint("api", __name__, url_prefix="/api")

WHOLE_NUMBER_PATTERN = re.compile(r"^\d+$")
VALID_SEX_VALUES = {1, 2, 3, 4}


def error_response(message, status_code=400, **extra):
    payload = {"error": message}
    if extra:
        payload.update(extra)
    return jsonify(payload), status_code


def parse_int_value(value, field_name, min_value=None, max_value=None):
    if isinstance(value, bool) or value is None:
        raise ValueError(f"{field_name} must be a whole number")

    if isinstance(value, int):
        parsed = value
    elif isinstance(value, float):
        if not value.is_integer():
            raise ValueError(f"{field_name} must be a whole number")
        parsed = int(value)
    elif isinstance(value, str):
        stripped = value.strip()
        if not WHOLE_NUMBER_PATTERN.fullmatch(stripped):
            raise ValueError(f"{field_name} must be a whole number")
        parsed = int(stripped)
    else:
        raise ValueError(f"{field_name} must be a whole number")

    if min_value is not None and parsed < min_value:
        raise ValueError(f"{field_name} must be at least {min_value}")

    if max_value is not None and parsed > max_value:
        raise ValueError(f"{field_name} must be at most {max_value}")

    return parsed


def missing_patient_fields(*fields):
    return [field for field in fields if patient_state.get(field) is None]


def parse_survey_answer(value, field_name):
    if isinstance(value, bool):
        return value

    if value in {"unknown", "unavailable"}:
        return value

    raise ValueError(f"{field_name} must be true, false, 'unknown', or 'unavailable'")


@api.route("/measurement", methods=["POST"])
def submit_measurement():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return error_response("invalid JSON body")

    measurement_type = data.get("measurement")
    value = data.get("value")

    try:
        if measurement_type == "age":
            patient_state["age"] = parse_int_value(
                value, "age", min_value=18, max_value=120
            )

        elif measurement_type == "sex":
            sex = parse_int_value(value, "sex")
            if sex not in VALID_SEX_VALUES:
                return error_response("sex must be one of 1, 2, 3, or 4")
            patient_state["sex"] = sex

        elif measurement_type == "bp":
            if not isinstance(value, str):
                return error_response(
                    "blood pressure must be formatted as systolic/diastolic"
                )

            parts = value.split("/")
            if len(parts) != 2:
                return error_response(
                    "blood pressure must be formatted as systolic/diastolic"
                )

            systolic = parse_int_value(
                parts[0], "systolic", min_value=70, max_value=250
            )
            diastolic = parse_int_value(
                parts[1], "diastolic", min_value=40, max_value=150
            )

            if systolic <= diastolic:
                return error_response("systolic must be higher than diastolic")

            patient_state["blood_pressure"] = {
                "systolic": systolic,
                "diastolic": diastolic,
            }

        elif measurement_type == "height":
            patient_state["height_cm"] = parse_int_value(
                value, "height", min_value=50, max_value=250
            )

        elif measurement_type == "weight":
            patient_state["weight_kg"] = parse_int_value(
                value, "weight", min_value=20, max_value=300
            )

        elif measurement_type == "waist":
            patient_state["waist_cm"] = parse_int_value(
                value, "waist", min_value=30, max_value=250
            )

        else:
            return error_response("unknown measurement type")

    except ValueError as exc:
        return error_response(str(exc))

    return jsonify({"status": f"{measurement_type} stored"}), 200


@api.route("/diabetes-risk", methods=["POST"])
def diabetes_risk():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return error_response("invalid JSON body")

    missing = missing_patient_fields("age", "sex", "height_cm", "weight_kg")
    if missing:
        return error_response("missing data", missing_fields=missing)

    try:
        first_degree_relative = parse_survey_answer(
            data.get("firstDegreeRelative"), "firstDegreeRelative"
        )
        hypertension = parse_survey_answer(data.get("hypertension"), "hypertension")
        physically_active = parse_survey_answer(
            data.get("physicallyActive"), "physicallyActive"
        )
    except ValueError as exc:
        return error_response(str(exc))

    result = calculate_diabetes_risk(
        age=patient_state["age"],
        sex=patient_state["sex"],
        first_degree_relative=first_degree_relative,
        hypertension=hypertension,
        physically_active=physically_active,
        bmi=calculate_bmi(patient_state["weight_kg"], patient_state["height_cm"]),
    )

    return jsonify(result)


# -----------------------------
# Final risk computation
# -----------------------------
@api.route("/risk", methods=["GET"])
def run_risk():
    missing = missing_patient_fields("blood_pressure", "height_cm", "weight_kg")
    if missing:
        return error_response("missing data", missing_fields=missing)

    blood_pressure = patient_state["blood_pressure"]

    hypertension = bp_risk(
        blood_pressure["systolic"],
        blood_pressure["diastolic"],
    )

    bmi = calculate_bmi(patient_state["weight_kg"], patient_state["height_cm"])

    return jsonify({"bp": hypertension, "bmi": bmi, "inputs": patient_state}), 200


@api.route("/stadiometer", methods=["GET"])
def get_height():

    # Pull from patient state (Arduino just set it)
    height = patient_state.get("height_cm")

    if height is None:
        return jsonify({"status": "waiting"}), 200

    return jsonify({"status": "ready", "height_cm": str(height)}), 200


# -----------------------------
# Reset session
# -----------------------------
@api.route("/reset", methods=["POST"])
def reset_session():
    for key in patient_state:
        patient_state[key] = None

    return jsonify({"status": "session reset"}), 200
