import { useState } from "react";
import { steps, stepFlow, type Step, type AppState } from "./steps";

function resolveTarget(
    target: Step | ((state: AppState) => Step) | undefined,
    state: AppState,
): Step | undefined {
    if (target === undefined) return undefined;
    return typeof target === "function" ? target(state) : target;
}

export function useNavigation(state: AppState) {
    const [step, setStep] = useState<Step>("start");

    const config = stepFlow[step];

    const goNext = () => {
        const target = resolveTarget(config.next, state);
        if (target) setStep(target);
    };

    const goBack = () => {
        const target = resolveTarget(config.back, state);
        if (target) setStep(target);
    };

    const goSkip = () => {
        const target = resolveTarget(config.skip, state);
        if (target) setStep(target);
    };

    const hasSkip = config.skip !== undefined;

    const currentStepIndex = steps.indexOf(step);
    const currentStepNumber = currentStepIndex + 1;
    const totalSteps = steps.length;
    const showProgress = step !== "start";

    return {
        step,
        goNext,
        goBack,
        goSkip,
        hasSkip,
        currentStepNumber,
        totalSteps,
        showProgress,
    };
}
