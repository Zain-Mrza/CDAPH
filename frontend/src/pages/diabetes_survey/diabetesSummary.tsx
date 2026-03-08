import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";

type Props = {
    relativeWithDiabetes: boolean | null | undefined;
    hypertensionHistory: boolean | null | undefined;
    physicallyActive: boolean | null | undefined;
    onNext?: () => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
};

export default function DiabetesSurveyReview({
    relativeWithDiabetes,
    hypertensionHistory,
    physicallyActive,
    onNext,
    onBack,
    onSkip,
    language,
}: Props) {
    const formatAnswer = (value: boolean | null | undefined) => {
        if (value === undefined) return "Not answered";
        return value ? "Yes" : "No";
    };

    return (
        <Screen title="Review Your Responses" onSkip={onSkip}>
            <p className="instructionText">
                Please confirm that your answers below are correct before we
                calculate your diabetes risk.
            </p>

            <div className="reviewBox">
                <div className="reviewRow">
                    <span className="reviewQuestion">
                        Parent or sibling with diabetes
                    </span>
                    <span className="reviewAnswer">
                        {formatAnswer(relativeWithDiabetes)}
                    </span>
                </div>

                <div className="reviewRow">
                    <span className="reviewQuestion">
                        History of hypertension
                    </span>
                    <span className="reviewAnswer">
                        {formatAnswer(hypertensionHistory)}
                    </span>
                </div>

                <div className="reviewRow">
                    <span className="reviewQuestion">Physically active</span>
                    <span className="reviewAnswer">
                        {formatAnswer(physicallyActive)}
                    </span>
                </div>
            </div>

            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                language={language}
            />
        </Screen>
    );
}
