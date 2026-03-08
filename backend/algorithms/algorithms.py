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


def calculate_diabetes_risk(
    age, gender, first_degree_relative, hypertension, physically_active, bmi
):
    width = 0
    score = 0

    # Age
    if age >= 60:
        score += 3
    elif age >= 50:
        score += 2
    elif age >= 40:
        score += 1

    # Gender
    if gender == 1:
        score += 1
    elif gender in [3, 4]:
        width += 1

    # Family history
    if first_degree_relative:
        score += 1
    else:
        width += 1

    # Hypertension
    if hypertension:
        score += 1
    else:
        width += 1

    # Physical activity
    if not physically_active:
        score += 1
    else:
        width += 1

    # BMI
    if bmi >= 40:
        score += 3
    elif bmi >= 30:
        score += 2
    elif bmi >= 25:
        score += 1

    high_end = score + width

    # Risk classification
    if score >= 5:
        risk_level = "high"
    elif high_end < 5:
        risk_level = "low"
    else:
        risk_level = "inconclusive"

    return {
        "score": score,
        "risk": risk_level,
    }
