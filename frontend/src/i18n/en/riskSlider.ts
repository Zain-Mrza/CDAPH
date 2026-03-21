import type { RiskSliderTypes } from "../types";

export const RiskSliderText: RiskSliderTypes = {
    ariaLabel: (score, riskLabel) => `${score} out of 10, ${riskLabel}`,
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
    scaleAriaLabel: (score, possible) =>
        possible !== null && possible > score
            ? `Risk scale from 0 to 10. Your score is ${score}. The upper end of your range is ${possible}.`
            : `Risk scale from 0 to 10. Your score is ${score}.`,
    rangeLabel: "Your range",
    scoreLabel: "Your Score",
    lowerRiskRangeLabel: "Lower Risk",
    higherRiskRangeLabel: "Higher Risk",
};
