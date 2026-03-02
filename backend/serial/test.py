import serial

# Establish serial port, Arduino response is NOT INSTANT
ser = serial.Serial(port="COM3", baudrate=9600)

# Wait for Arduino to send ready code
while True:
    line = ser.readline().decode("utf-8").strip()
    if line == "READY":
        break

# Encode and write data to Arduino
data = "CODEWORD"
encoded_data = data.encode("utf-8")
bytes = ser.write(encoded_data)


try:
    # Read incoming data from Arduino
    while True:
        raw_data = ser.readline()

        decoded_data = raw_data.decode("utf-8").strip()  # Decode into string

        if decoded_data:
            print(f"Received: {decoded_data}")

except KeyboardInterrupt:
    print("Serial reading stopped by user.")

finally:
    if ser.is_open:
        ser.close()
        print("Serial port closed.")
