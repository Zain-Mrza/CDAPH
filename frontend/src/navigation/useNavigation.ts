import { useState } from "react";
import { skipTargets, steps } from "./steps";

export function useNavigation() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const step = steps[currentStepIndex];

    const moveBy = (offset: number) => {
        setCurrentStepIndex((index) => {
            const nextIndex = index + offset;

            if (nextIndex < 0 || nextIndex >= steps.length) {
                return index;
            }

            return nextIndex;
        });
    };

    const goNext = () => moveBy(1);
    const goBack = () => moveBy(-1);
    const goSkip = () => {
        const target = skipTargets[step];

        if (!target) {
            return;
        }

        setCurrentStepIndex(steps.indexOf(target));
    };

    const currentStepNumber = currentStepIndex + 1;
    const totalSteps = steps.length;
    const showProgress = currentStepIndex > 0;
    const hasSkip = step in skipTargets;

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
