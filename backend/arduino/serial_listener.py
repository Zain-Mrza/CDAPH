import serial
from state import patient_state

print("SERIAL state id:", id(patient_state))


def listen_to_stadiometer():

    ser = serial.Serial(port="COM3", baudrate=9600)

    # Wait for Arduino ready
    while True:
        line = ser.readline().decode("utf-8").strip()
        if line == "READY":
            break

    while True:
        raw = ser.readline()  # Recieve from Arduino
        decoded = raw.decode("utf-8").strip()

        print(decoded)
        if decoded:
            try:
                height_cm = int(round(float(decoded)))
                print(height_cm)

                # Update patient state
                patient_state["height_cm"] = height_cm
                print("Height updated:", patient_state["height_cm"])

            except ValueError:
                print("Invalid serial data:", decoded)
