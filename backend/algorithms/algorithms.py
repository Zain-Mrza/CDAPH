def bp_risk(systolic: float, diastolic: float) -> str:

    if systolic >= 180 or diastolic >= 120:
        return "Hypertensive Crisis"

    elif systolic >= 140 or diastolic >= 90:
        return "Hypertension Stage 2"

    elif systolic >= 130 or diastolic >= 80:
        return "Hypertension Stage 1"

    elif 120 <= systolic < 130 and diastolic < 80:
        return "Elevated"

    else:
        return "Normal"


def calculate_bmi(
    weight_kg: float,
    height_cm: float,  # Determine if whole numbers will be passed or imperial
) -> int:
    height_m = height_cm / 100
    bmi = weight_kg / height_m**2

    return int(round(bmi))
