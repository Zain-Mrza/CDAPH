from flask import Blueprint, jsonify, request

api = Blueprint("api", __name__)

@api.route("/health", methods=["GET"])
def health_check():
    """
    Checks if Flask server is working.
    """

    return jsonify({"status": "ok"}), 200


@api.route("/submit", methods=["POST"])
def submit_measurements():
    """ 
    Links the frontend to our backend.
    Input from the frontend is recieved, ran through our algorithm and sent back to the frontend.
    This is NOT complete.
    """

    data = request.json

    # TODO: Algorithm goes here

    # Algorithm result is sent back to frontend
    response = {
        "risk_level": "unknown",
        "recommendation": "This is a placeholder response",
        "received_data": data                              # To verify data was passed correctly
        
    }

    return jsonify(response), 200
