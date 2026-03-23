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
    age, sex, first_degree_relative, hypertension, physically_active, bmi
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

    # Sex
    if sex == 1:
        score += 1
    elif sex in [3, 4]:
        width += 1

    # Family history
    if first_degree_relative is True:
        score += 1
    elif first_degree_relative == "unknown":
        width += 1

    # Hypertension
    if hypertension is True:
        score += 1
    elif hypertension == "unknown":
        width += 1

    # Physical activity
    if physically_active is False:
        score += 1
    elif physically_active == "unknown":
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
        "possible": high_end,
    }


def calculate_mini_eat_score(answers):
    if len(answers) == 0:
        raise ValueError("answers must not be empty")

    # Refined grains, high-fat dairy, and sweets are reverse scored.
    reverse_scored_indexes = {5, 7, 8}
    raw_score = 0

    for index, answer in enumerate(answers):
        normalized = 8 - answer if index in reverse_scored_indexes else answer
        raw_score += normalized

    max_raw_score = len(answers) * 8
    max_score = len(answers) * 10
    score = int(round((raw_score / max_raw_score) * max_score))

    if score < 61:
        classification = "unhealthy"
    elif score <= 69:
        classification = "intermediate"
    else:
        classification = "healthy"

    return {
        "score": score,
        "classification": classification,
        "maxScore": max_score,
    }
