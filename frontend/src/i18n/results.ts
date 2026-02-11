export type LanguageCode = "en" | "es";

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

export interface BloodPressureRiskPayload extends BloodPressureMessage {
    stage: BloodPressureStage;
    disclaimer: string;
}

export const BLOOD_PRESSURE_MESSAGES: Record<
    LanguageCode,
    Record<BloodPressureStage, BloodPressureMessage>
> = {
    en: {
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
            whatYouSay:
                "Your blood pressure falls in a higher-than-normal range.",
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
    },

    es: {
        Normal: {
            whatYouSay: "Su presión arterial está dentro del rango normal.",
            whatItMeans:
                "Este resultado se asocia con un menor riesgo de enfermedades cardíacas y accidentes cerebrovasculares.",
            nextStep:
                "Continúe con hábitos saludables como actividad física regular, una dieta equilibrada y chequeos médicos rutinarios.",
        },

        Elevated: {
            whatYouSay: "Su presión arterial está ligeramente elevada.",
            whatItMeans:
                "La presión arterial en este rango puede aumentar los riesgos para la salud con el tiempo si se mantiene elevada.",
            nextStep:
                "Cambios en el estilo de vida como reducir el consumo de sal, hacer ejercicio regularmente y manejar el estrés pueden ayudar. Considere volver a medir su presión arterial.",
        },

        "Hypertension Stage 1": {
            whatYouSay:
                "Su presión arterial se encuentra en un rango más alto de lo normal.",
            whatItMeans:
                "Este nivel se asocia con un mayor riesgo de enfermedades cardíacas y accidentes cerebrovasculares con el tiempo.",
            nextStep:
                "Se recomienda consultar con un profesional de la salud. Es posible que sugiera cambios en el estilo de vida y, en algunos casos, medicación.",
        },

        "Hypertension Stage 2": {
            whatYouSay: "Su presión arterial se encuentra en un rango alto.",
            whatItMeans:
                "Este nivel se asocia con un mayor riesgo de complicaciones graves para la salud.",
            nextStep:
                "Debe comunicarse pronto con un profesional de la salud para evaluación y orientación.",
        },

        "Hypertensive Crisis": {
            whatYouSay: "Su lectura de presión arterial es muy alta.",
            whatItMeans: "Este nivel puede requerir atención médica inmediata.",
            nextStep:
                "Si presenta síntomas como dolor en el pecho, dificultad para respirar, mareos o cambios en la visión, busque atención médica de emergencia de inmediato.",
        },
    },
};
