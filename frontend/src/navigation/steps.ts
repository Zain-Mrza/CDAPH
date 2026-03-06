export const steps = [
    "start",
    "ageSex",
    "bpInstructions",
    "bp",
    "heightInstructions",
    "height",
    "weightInstructions",
    "weight",
    "summary",
    "diabetesIntro",
    "diabetesFirst",
    "diabetesSecond",
    "diabetesThird",
] as const;

export type Step = (typeof steps)[number];

export type AppState = {
    age: number | null;
    sex: number | null;
    bloodPressure: { systolic: number; diastolic: number } | null;
    heightCm: number | null;
    weightKg: number | null;
    relativeWithDiabetes: boolean | null;
};

type StepTarget = Step | ((state: AppState) => Step);

export type StepConfig = {
    next?: StepTarget;
    back?: StepTarget;
    skip?: StepTarget;
};

export const stepFlow: Record<Step, StepConfig> = {
    start: { next: "ageSex" },
    ageSex: { next: "bpInstructions", back: "start" },
    bpInstructions: { next: "bp", back: "ageSex" },
    bp: { next: "heightInstructions", back: "bpInstructions" },
    heightInstructions: { next: "height", back: "bp" },
    height: { next: "weightInstructions", back: "heightInstructions" },
    weightInstructions: { next: "weight", back: "height" },
    weight: { next: "summary", back: "weightInstructions" },
    summary: { next: "diabetesIntro", back: "weight" },
    diabetesIntro: { next: "diabetesFirst", back: "summary", skip: "summary" },
    diabetesFirst: {
        next: "diabetesSecond",
        back: "diabetesIntro",
        skip: "diabetesThird",
    },
    diabetesSecond: {
        next: "diabetesThird",
        back: "diabetesFirst",
        skip: "diabetesThird",
    },
    diabetesThird: {
        next: "diabetesIntro",
        back: "diabetesSecond",
        skip: "diabetesIntro",
    },
};
