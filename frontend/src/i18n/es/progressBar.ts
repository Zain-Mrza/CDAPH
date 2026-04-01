import type { ProgressBarTypes } from "../types";

export const ProgressBarText: ProgressBarTypes = {
    currentSection: "Seccion actual",
    stepOf: (current, total) => `Paso ${current} de ${total}`,
    sectionStepOf: (current, total) =>
        `${current} de ${total} en esta seccion`,
    completedLabel: "Completado",
    ariaValueText: (sectionTitle, currentStep, totalSteps) =>
        `${sectionTitle}, paso ${currentStep} de ${totalSteps}`,
    sections: {
        measurements: "Mediciones de salud",
        diabetes: "Revision de riesgo de diabetes",
        nutrition: "Habitos alimenticios",
    },
};
