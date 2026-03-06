import threading

from arduino.serial_listener import listen_to_stadiometer
from flask import Flask
from routes import api


def create_app():
    app = Flask(__name__)
    app.register_blueprint(api)
    thread = threading.Thread(target=listen_to_stadiometer, daemon=True)
    thread.start()

    return app


if __name__ == "__main__":
    create_app().run(debug=True, use_reloader=False)
