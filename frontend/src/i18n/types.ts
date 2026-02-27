export type language = "en" | "es";

export interface MeasurementInputTypes {
    ageSex: {
        title: string;
        instruction: string;
        label1: string;
        label2: string;
        helper1: string;
        helper2: string;
        helper3: string;
        helper4: string;
        helper5: string;
        error1: string;
        error2: string;
        error3: string;
        error4: string;
    };

    bp: {
        title: string;
        instruction: string;
        label1: string;
        label2: string;
        helper1: string;
        helper2: string;
        error1: string;
        error2: string;
    };

    height: {
        title: string;
        instruction: string;
        label1: string;
    };

    weight: {
        title: string;
        instruction: string;
        label1: string;
    };
}

export interface NavigationTypes {
    next: string;
    nextQuestion: string;
    back: string;
    skipSurvey: string;
}

export interface InstructionTypes {
    bpInstructions: {
        thanks: string;
        instruction: string;
    };

    heightInstructions: {
        thanks: string;
        instruction: string;
    };

    weightInstructions: {
        thanks: string;
        instruction: string;
    };
}
