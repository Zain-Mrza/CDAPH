from flask import Blueprint, request, jsonify

api = Blueprint("api", __name__)

@api.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok"}), 200


@api.route("/submit", methods=["POST"])
def submit_measurements():
    data = request.json

    # Placeholder logic
    response = {
        "risk_level": "unknown",
        "recommendation": "This is a placeholder response",
        "received_data": data
    }

    return jsonify(response), 200
