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
    start: string;
    next: string;
    nextQuestion: string;
    back: string;
    skipSurvey: string;
    completeSurvey: string;
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

export interface DiabetesSurveyTypes {
    intro: {
        title: string;
        description: string;
        bullet1: string;
        bullet2: string;
        skipLabel: string;
    };

    questions: {
        yes: string;
        no: string;
        unknown: string;
        skipLabel: string;
        questionCounter: (current: number, total: number) => string;
        relative: string;
        hypertension: string;
        physicallyActive: string;
    };

    summary: {
        title: string;
        instruction: string;
        relativeLabel: string;
        hypertensionLabel: string;
        physicallyActiveLabel: string;
        yes: string;
        no: string;
        unknown: string;
        notAnswered: string;
        skipLabel: string;
    };

    results: {
        title: string;
        unavailable: string;
        conditionName: string;
        highRiskIntro: string;
        highRiskBullet1: string;
        highRiskBullet2: string;
        highRiskBullet3: string;
        lowRiskIntro: string;
        lowRiskBullet1: string;
        lowRiskBullet2: string;
        lowRiskBullet3: string;
    };
}
