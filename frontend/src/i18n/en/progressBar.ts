import type { ProgressBarTypes } from "../types";

export const ProgressBarText: ProgressBarTypes = {
    currentSection: "Current section",
    stepOf: (current, total) => `Step ${current} of ${total}`,
    sectionStepOf: (current, total) => `${current} of ${total} in this section`,
    completedLabel: "Completed",
    ariaValueText: (sectionTitle, currentStep, totalSteps) =>
        `${sectionTitle}, step ${currentStep} of ${totalSteps}`,
    sections: {
        measurements: "Health measurements",
        diabetes: "Diabetes risk check",
        nutrition: "Eating habits",
    },
};
