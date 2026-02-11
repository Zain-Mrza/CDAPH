type Props = {
    currentStep: number;
    totalSteps: number;
};

export default function ProgressBar({ currentStep, totalSteps }: Props) {
    const percentage = (currentStep / totalSteps) * 100;

    return (
        <div className="progressBarContainer">
            <div className="progressBarTrack">
                <div
                    className="progressBarFill"
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={currentStep}
                    aria-valuemin={0}
                    aria-valuemax={totalSteps}
                    aria-label={`Step ${currentStep} of ${totalSteps}`}
                />
            </div>
            <div className="progressBarLabel">
                Step {currentStep} of {totalSteps}
            </div>
        </div>
    );
}
