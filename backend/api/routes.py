from flask import Blueprint, request, jsonify

from state import patient_state
from algorithm import calculate_risk

api = Blueprint("api", __name__, url_prefix="/api")


# -----------------------------
# Health check (ping)
# -----------------------------
@api.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok"}), 200


# -----------------------------
# Measurement endpoints
# -----------------------------

@api.route("/bp", methods=["POST"])
def submit_bp():
    data = request.json

    patient_state["blood_pressure"] = {
        "systolic": data.get("systolic"),
        "diastolic": data.get("diastolic"),
    }

    return jsonify({"status": "blood pressure stored"}), 200


@api.route("/height", methods=["POST"])
def submit_height():
    data = request.json

    patient_state["height_cm"] = data.get("height_cm")

    return jsonify({"status": "height stored"}), 200


@api.route("/weight", methods=["POST"])
def submit_weight():
    data = request.json

    patient_state["weight_kg"] = data.get("weight_kg")

    return jsonify({"status": "weight stored"}), 200


@api.route("/waist", methods=["POST"])
def submit_waist():
    data = request.json

    patient_state["waist_cm"] = data.get("waist_cm")

    return jsonify({"status": "waist stored"}), 200


@api.route("/visual_acuity", methods=["POST"])
def submit_visual_acuity():
    data = request.json

    patient_state["visual_acuity"] = data["visual_acuity"]

    return jsonify({"status": "visual acuity stored"}), 200


# -----------------------------
# Final risk computation
# -----------------------------
@api.route("/risk", methods=["POST"])
def run_risk():
    missing = [k for k, v in patient_state.items() if v is None]

    if missing:
        return jsonify({
            "error": "missing data",
            "missing_fields": missing
        }), 400

    result = calculate_risk(patient_state)

    return jsonify({
        "result": result,
        "inputs": patient_state
    }), 200


# -----------------------------
# Reset session
# -----------------------------
@api.route("/reset", methods=["POST"])
def reset_session():
    for key in patient_state:
        patient_state[key] = None

    return jsonify({"status": "session reset"}), 200
