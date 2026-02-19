export type Language = "en" | "es";

export const SummaryTranslations = {
    en: {
        age: "Age",
        biologicalSex: "Biological Sex",
        bloodPressure: "Blood Pressure",
        height: "Height",
        weight: "Weight",
        male: "Male",
        female: "Female",
        intersex: "Intersex",
        preferNotToSay: "Prefer Not to Say",

        measurementsComplete: "Measurements Complete",
        reviewValuesBelow: "Please review the values below.",

        years: "years",
    },
    es: {
        age: "Edad",
        biologicalSex: "Sexo biológico",
        bloodPressure: "Presión arterial",
        height: "Estatura",
        weight: "Peso",
        male: "Masculino",
        female: "Femenino",
        intersex: "Intersexual",
        preferNotToSay: "Prefiero no decirlo",

        measurementsComplete: "Mediciones completadas",
        reviewValuesBelow: "Por favor revise los valores a continuación.",

        years: "años",
    },
} as const;
