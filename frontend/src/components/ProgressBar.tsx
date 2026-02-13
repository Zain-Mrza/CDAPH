import styles from "../styles/progress-bar.module.css";

type Props = {
    currentStep: number;
    totalSteps: number;
};

function CheckIcon() {
    return (
        <svg
            className={styles.checkIcon}
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

export default function ProgressBar({ currentStep, totalSteps }: Props) {
    return (
        <div
            className={styles.progressBarContainer}
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-label={`Step ${currentStep} of ${totalSteps}`}
        >
            <div className={styles.stepsTrack}>
                {Array.from({ length: totalSteps }, (_, i) => {
                    const step = i + 1;
                    const isCompleted = step < currentStep;
                    const isCurrent = step === currentStep;

                    const circleClass = isCompleted
                        ? styles.completed
                        : isCurrent
                          ? styles.current
                          : styles.upcoming;

                    return (
                        <div key={step} className={styles.stepWrapper}>
                            <div
                                className={`${styles.stepCircle} ${circleClass}`}
                            >
                                {isCompleted ? <CheckIcon /> : step}
                            </div>

                            {/* Connector line after each step except the last */}
                            {step < totalSteps && (
                                <div
                                    className={`${styles.stepConnector} ${
                                        isCompleted ? styles.completed : ""
                                    }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
