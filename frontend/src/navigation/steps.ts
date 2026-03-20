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
    "diabetesSummary",
    "diabetesResults",
] as const;

export type Step = (typeof steps)[number];

export const skipTargets: Partial<Record<Step, Step>> = {
    diabetesIntro: "summary",
    diabetesFirst: "diabetesThird",
    diabetesSecond: "diabetesThird",
    diabetesThird: "diabetesIntro",
};
