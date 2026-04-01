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
        saveError: string;
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
        error3: string;
        error4: string;
        saveError: string;
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

export interface MiniEatQuestionItem {
    prompt: string;
    summaryLabel: string;
    examples: string[];
    notes: string[];
    servingSize: string;
}

export interface MiniEatSurveyTypes {
    intro: {
        title: string;
        description: string;
        bullet1: string;
        bullet2: string;
        skipLabel: string;
    };

    questions: {
        skipLabel: string;
        questionCounter: (current: number, total: number) => string;
        examplesLabel: string;
        servingSizeLabel: string;
        options: string[];
        items: MiniEatQuestionItem[];
    };

    summary: {
        title: string;
        instruction: string;
        notAnswered: string;
        skipLabel: string;
    };

    results: {
        title: string;
        unavailable: string;
        eyebrow: string;
        conditionName: string;
        unhealthyLabel: string;
        intermediateLabel: string;
        healthyLabel: string;
        unhealthyCaption: string;
        intermediateCaption: string;
        healthyCaption: string;
        scaleAriaLabel: (score: number, maxScore: number) => string;
        unhealthyIntro: string;
        unhealthyBullet1: string;
        unhealthyBullet2: string;
        unhealthyBullet3: string;
        intermediateIntro: string;
        intermediateBullet1: string;
        intermediateBullet2: string;
        intermediateBullet3: string;
        healthyIntro: string;
        healthyBullet1: string;
        healthyBullet2: string;
        healthyBullet3: string;
    };
}

export interface RiskSliderTypes {
    ariaLabel: (score: number, riskLabel: string, maxScore: number) => string;
    resultEyebrow: (conditionName: string) => string;
    highRiskLabel: string;
    mediumRiskLabel: string;
    lowRiskLabel: string;
    highRiskCaption: (conditionName: string) => string;
    mediumRiskCaption: (conditionName: string) => string;
    lowRiskCaption: (conditionName: string) => string;
    scaleAriaLabel: (
        score: number,
        possible: number | null,
        minScore: number,
        maxScore: number,
    ) => string;
    rangeLabel: string;
    scoreLabel: string;
    lowerRiskRangeLabel: string;
    higherRiskRangeLabel: string;
}

export interface ProgressBarTypes {
    currentSection: string;
    stepOf: (current: number, total: number) => string;
    sectionStepOf: (current: number, total: number) => string;
    completedLabel: string;
    ariaValueText: (
        sectionTitle: string,
        currentStep: number,
        totalSteps: number,
    ) => string;
    sections: {
        measurements: string;
        diabetes: string;
        nutrition: string;
    };
}
