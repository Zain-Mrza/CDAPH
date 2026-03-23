import type { RiskSliderTypes } from "../types";

export const RiskSliderText: RiskSliderTypes = {
    ariaLabel: (score, riskLabel, maxScore) =>
        `${score} out of ${maxScore}, ${riskLabel}`,
    resultEyebrow: (conditionName) => `Your ${conditionName} Risk Result`,
    highRiskLabel: "Higher Risk",
    mediumRiskLabel: "Medium Risk",
    lowRiskLabel: "Lower Risk",
    highRiskCaption: (conditionName) =>
        `Your score falls in the higher-risk range for ${conditionName.toLocaleLowerCase("en")}.`,
    mediumRiskCaption: (conditionName) =>
        `Your score falls at the border between the lower-risk and higher-risk ranges for ${conditionName.toLocaleLowerCase("en")}.`,
    lowRiskCaption: (conditionName) =>
        `Your score falls in the lower-risk range for ${conditionName.toLocaleLowerCase("en")}.`,
    scaleAriaLabel: (score, possible, minScore, maxScore) =>
        possible !== null && possible > score
            ? `Risk scale from ${minScore} to ${maxScore}. Your score is ${score}. The upper end of your range is ${possible}.`
            : `Risk scale from ${minScore} to ${maxScore}. Your score is ${score}.`,
    rangeLabel: "Your range",
    scoreLabel: "Your Score",
    lowerRiskRangeLabel: "Lower Risk",
    higherRiskRangeLabel: "Higher Risk",
};
