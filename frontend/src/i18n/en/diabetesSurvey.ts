import type { DiabetesSurveyTypes } from "../types";

export const DiabetesSurveyText: DiabetesSurveyTypes = {
    intro: {
        title: "Diabetes Risk Survey",
        description:
            "We will now ask three questions to help assess your risk for diabetes.",
        bullet1: "This survey takes about 1 minute.",
        bullet2: "You may skip the survey at any time.",
        skipLabel: "Skip this survey",
    },

    questions: {
        yes: "Yes",
        no: "No",
        unknown: "I don't know",
        skipLabel: "Skip this survey",
        questionCounter: (current, total) => `Question ${current} of ${total}`,
        relative: "Do you have a parent, sibling, or child with diabetes?",
        hypertension: "Have you ever had high blood pressure?",
        physicallyActive: "Are you physically active?",
    },

    summary: {
        title: "Review Your Responses",
        instruction:
            "Please confirm that your answers below are correct before we calculate your diabetes risk.",
        relativeLabel: "Parent, sibling, or child with diabetes",
        hypertensionLabel: "History of hypertension",
        physicallyActiveLabel: "Physically active",
        yes: "Yes",
        no: "No",
        unknown: "I don't know",
        notAnswered: "Not answered",
        skipLabel: "Skip this survey",
    },

    results: {
        title: "Diabetes Risk Results",
        unavailable: "Unable to display your result at this time.",
        skipped: "This diabetes survey was skipped.",
        noResults: "There are no diabetes risk results to display.",
        conditionName: "Diabetes",
        highRiskIntro:
            "Your answers suggest that you may be at an increased risk for developing type 2 diabetes.",
        highRiskBullet1:
            "Consider confirmatory testing such as fasting glucose or HbA1c.",
        highRiskBullet2:
            "Lifestyle changes like improved diet and regular physical activity can reduce risk.",
        highRiskBullet3:
            "You may benefit from a diabetes prevention program or nutrition counseling.",
        lowRiskIntro:
            "Your answers suggest a lower risk for developing type 2 diabetes.",
        lowRiskBullet1: "Continue maintaining a healthy lifestyle.",
        lowRiskBullet2:
            "Regular physical activity and balanced diet help reduce diabetes risk.",
        lowRiskBullet3:
            "Consider periodic screening as recommended by your healthcare provider.",
    },
};
