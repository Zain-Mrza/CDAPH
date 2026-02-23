export const SummaryTranslations = {
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
} as const;

export type SummaryTranslationKeys = typeof SummaryTranslations;
