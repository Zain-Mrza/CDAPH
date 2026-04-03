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
    "miniEatIntro",
    "miniEatQuestion1",
    "miniEatQuestion2",
    "miniEatQuestion3",
    "miniEatQuestion4",
    "miniEatQuestion5",
    "miniEatQuestion6",
    "miniEatQuestion7",
    "miniEatQuestion8",
    "miniEatQuestion9",
    "miniEatSummary",
    "miniEatResults",
    "snellenChart",
] as const;

export type Step = (typeof steps)[number];

type ProgressSection = {
    id: "measurements" | "diabetes" | "nutrition";
    title: string;
    description: string;
    steps: readonly Step[];
};

export const progressSections: readonly ProgressSection[] = [
    {
        id: "measurements",
        title: "Health measurements",
        description: "Vitals, height, weight, and a quick review.",
        steps: [
            "ageSex",
            "bpInstructions",
            "bp",
            "heightInstructions",
            "height",
            "weightInstructions",
            "weight",
            "summary",
        ],
    },
    {
        id: "diabetes",
        title: "Diabetes risk check",
        description: "A short history and activity questionnaire.",
        steps: [
            "diabetesIntro",
            "diabetesFirst",
            "diabetesSecond",
            "diabetesThird",
            "diabetesSummary",
            "diabetesResults",
        ],
    },
    {
        id: "nutrition",
        title: "Eating habits",
        description: "Nine food and drink questions plus your result.",
        steps: [
            "miniEatIntro",
            "miniEatQuestion1",
            "miniEatQuestion2",
            "miniEatQuestion3",
            "miniEatQuestion4",
            "miniEatQuestion5",
            "miniEatQuestion6",
            "miniEatQuestion7",
            "miniEatQuestion8",
            "miniEatQuestion9",
            "miniEatSummary",
            "miniEatResults",
        ],
    },
];

export const skipTargets: Partial<Record<Step, Step>> = {
    diabetesIntro: "miniEatIntro",
    diabetesFirst: "miniEatIntro",
    diabetesSecond: "miniEatIntro",
    diabetesThird: "miniEatIntro",
    miniEatIntro: "diabetesResults",
    miniEatQuestion1: "diabetesResults",
    miniEatQuestion2: "diabetesResults",
    miniEatQuestion3: "diabetesResults",
    miniEatQuestion4: "diabetesResults",
    miniEatQuestion5: "diabetesResults",
    miniEatQuestion6: "diabetesResults",
    miniEatQuestion7: "diabetesResults",
    miniEatQuestion8: "diabetesResults",
    miniEatQuestion9: "diabetesResults",
    miniEatSummary: "diabetesResults",
};
