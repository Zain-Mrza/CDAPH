import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";

type Props = {
    relativeWithDiabetes: boolean | "unknown" | "unavailable";
    hypertensionHistory: boolean | "unknown" | "unavailable";
    physicallyActive: boolean | "unknown" | "unavailable";
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
    const formatAnswer = (value: boolean | "unknown" | "unavailable") => {
        if (value === "unavailable") return "Not answered";
        if (value === "unknown") return "I don't know";
        return value ? "Yes" : "No";
    };

    return (
        <Screen title="Review Your Responses" onSkip={onSkip}>
            <p className="instructionText">
                Please confirm that your answers below are correct before we
                calculate your diabetes risk.
            </p>

            <div className="summaryList">
                <div className="summaryRow">
                    <span className="summaryLabel">
                        Parent, sibling, or child with diabetes
                    </span>
                    <span className="summaryValue">
                        {formatAnswer(relativeWithDiabetes)}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">
                        History of hypertension
                    </span>
                    <span className="summaryValue">
                        {formatAnswer(hypertensionHistory)}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">Physically active</span>
                    <span className="summaryValue">
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
