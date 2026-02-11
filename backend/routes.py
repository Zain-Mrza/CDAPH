from algorithms.algorithms import bp_risk, calculate_bmi
from flask import Blueprint, jsonify, request
from state import patient_state

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/measurement", methods=["POST"])
def submit_measurement():
    data = request.json

    measurement_type = data.get("measurement")
    value = data.get("value")

    if measurement_type == "bp":
        systolic, diastolic = value.split("/")
        patient_state["blood_pressure"] = {
            "systolic": int(systolic),
            "diastolic": int(diastolic),
        }

    elif measurement_type == "height":
        patient_state["height_cm"] = float(value)

    elif measurement_type == "weight":
        patient_state["weight_kg"] = float(value)

    elif measurement_type == "waist":
        patient_state["waist_cm"] = float(value)

    else:
        return jsonify({"error": "unknown measurement type"}), 400

    return jsonify({"status": f"{measurement_type} stored"}), 200


# -----------------------------
# Final risk computation
# -----------------------------
@api.route("/risk", methods=["GET"])
def run_risk():
    # Will uncomment once everything is done
    # missing = [k for k, v in patient_state.items() if v is None]

    # if missing:
    #     return jsonify({"error": "missing data", "missing_fields": missing}), 400

    hypertension = bp_risk(
        patient_state.get("blood_pressure").get("systolic"),
        patient_state["blood_pressure"]["diastolic"],
    )

    bmi = calculate_bmi(patient_state["weight_kg"], patient_state["height_cm"])

    return jsonify({"bp": hypertension, "bmi": bmi, "inputs": patient_state}), 200


# -----------------------------
# Reset session
# -----------------------------
@api.route("/reset", methods=["POST"])
def reset_session():
    for key in patient_state:
        patient_state[key] = None

    return jsonify({"status": "session reset"}), 200
