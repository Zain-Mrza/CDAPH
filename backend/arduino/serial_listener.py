import serial
from state import patient_state


def listen_to_stadiometer():

    ser = serial.Serial(port="COM4", baudrate=9600)

    # Wait for Arduino ready
    while True:
        line = ser.readline().decode("utf-8").strip()
        if line == "READY":
            break

    while True:
        raw = ser.readline()  # Recieve from Arduino
        decoded = raw.decode("utf-8").strip()

        if decoded:
            try:
                height_cm = int(round(float(decoded)))

                # Update patient state
                patient_state["height_cm"] = height_cm
                print("Height updated:", patient_state["height_cm"])

            except ValueError:
                print("Invalid serial data:", decoded)
