export const SummaryTranslations = {
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
} as const;

export type SummaryTranslationKeys = typeof SummaryTranslations;
