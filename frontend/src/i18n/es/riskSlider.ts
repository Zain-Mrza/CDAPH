import type { RiskSliderTypes } from "../types";

export const RiskSliderText: RiskSliderTypes = {
    ariaLabel: (score, riskLabel) => `${score} de 10, ${riskLabel}`,
    resultEyebrow: (conditionName) =>
        `Resultado de riesgo de ${conditionName.toLocaleLowerCase("es")}`,
    highRiskLabel: "Riesgo mayor",
    mediumRiskLabel: "Riesgo medio",
    lowRiskLabel: "Riesgo menor",
    highRiskCaption: (conditionName) =>
        `Su puntuación se encuentra en el rango de mayor riesgo de ${conditionName.toLocaleLowerCase("es")}.`,
    mediumRiskCaption: (conditionName) =>
        `Su puntuación se encuentra en el límite entre los rangos de menor riesgo y mayor riesgo de ${conditionName.toLocaleLowerCase("es")}.`,
    lowRiskCaption: (conditionName) =>
        `Su puntuación se encuentra en el rango de menor riesgo de ${conditionName.toLocaleLowerCase("es")}.`,
    scaleAriaLabel: (score, possible) =>
        possible !== null && possible > score
            ? `Escala de riesgo de 0 a 10. Su puntuación es ${score}. El límite superior de su rango es ${possible}.`
            : `Escala de riesgo de 0 a 10. Su puntuación es ${score}.`,
    rangeLabel: "Su rango",
    scoreLabel: "Su puntuación",
    lowerRiskRangeLabel: "Riesgo menor",
    higherRiskRangeLabel: "Riesgo mayor",
};
