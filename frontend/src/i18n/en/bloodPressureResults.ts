export type BloodPressureStage =
    | "Normal"
    | "Elevated"
    | "Hypertension Stage 1"
    | "Hypertension Stage 2"
    | "Hypertensive Crisis";

export interface BloodPressureMessage {
    whatYouSay: string;
    whatItMeans: string;
    nextStep: string;
}

export const BLOOD_PRESSURE_MESSAGES: Record<
    BloodPressureStage,
    BloodPressureMessage
> = {
    Normal: {
        whatYouSay: "Your blood pressure is within the normal range.",
        whatItMeans:
            "This result is associated with lower risk for heart disease and stroke.",
        nextStep:
            "Continue healthy habits such as regular physical activity, a balanced diet, and routine checkups.",
    },

    Elevated: {
        whatYouSay: "Your blood pressure is slightly higher than normal.",
        whatItMeans:
            "Blood pressure in this range may increase health risks over time if it remains elevated.",
        nextStep:
            "Lifestyle changes such as reducing salt intake, exercising regularly, and managing stress may help. Consider rechecking your blood pressure.",
    },

    "Hypertension Stage 1": {
        whatYouSay: "Your blood pressure falls in a higher-than-normal range.",
        whatItMeans:
            "This level is associated with an increased risk of heart disease and stroke over time.",
        nextStep:
            "Following up with a healthcare professional is recommended. They may suggest lifestyle changes and, in some cases, medication.",
    },

    "Hypertension Stage 2": {
        whatYouSay: "Your blood pressure is in a high range.",
        whatItMeans:
            "This level is associated with a higher risk of serious health complications.",
        nextStep:
            "You should contact a healthcare professional soon for evaluation and guidance.",
    },

    "Hypertensive Crisis": {
        whatYouSay: "Your blood pressure reading is very high.",
        whatItMeans: "This level may require immediate medical attention.",
        nextStep:
            "If you are experiencing symptoms such as chest pain, shortness of breath, dizziness, or vision changes, seek emergency care immediately.",
    },
};
