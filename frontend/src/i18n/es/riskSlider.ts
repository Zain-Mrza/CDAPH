import type { RiskSliderTypes } from "../types";

export const RiskSliderText: RiskSliderTypes = {
    ariaLabel: (score, riskLabel, maxScore) =>
        `${score} de ${maxScore}, ${riskLabel}`,
    resultEyebrow: (conditionName) =>
        `Resultado de riesgo de ${conditionName.toLocaleLowerCase("es")}`,
    highRiskLabel: "Riesgo mayor",
    mediumRiskLabel: "Riesgo medio",
    lowRiskLabel: "Riesgo menor",
    highRiskCaption: (conditionName) =>
        `Su puntuacion se encuentra en el rango de mayor riesgo de ${conditionName.toLocaleLowerCase("es")}.`,
    mediumRiskCaption: (conditionName) =>
        `Su puntuacion se encuentra en el limite entre los rangos de menor riesgo y mayor riesgo de ${conditionName.toLocaleLowerCase("es")}.`,
    lowRiskCaption: (conditionName) =>
        `Su puntuacion se encuentra en el rango de menor riesgo de ${conditionName.toLocaleLowerCase("es")}.`,
    scaleAriaLabel: (score, possible, minScore, maxScore) =>
        possible !== null && possible > score
            ? `Escala de riesgo de ${minScore} a ${maxScore}. Su puntuacion es ${score}. El limite superior de su rango es ${possible}.`
            : `Escala de riesgo de ${minScore} a ${maxScore}. Su puntuacion es ${score}.`,
    rangeLabel: "Su rango",
    scoreLabel: "Su puntuacion",
    lowerRiskRangeLabel: "Riesgo menor",
    higherRiskRangeLabel: "Riesgo mayor",
};
