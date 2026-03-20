import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";
import { loadLanguage } from "../../i18n";

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
    const t = loadLanguage(language);
    const text = t.diabetesSurvey.summary;

    const formatAnswer = (value: boolean | "unknown" | "unavailable") => {
        if (value === "unavailable") return text.notAnswered;
        if (value === "unknown") return text.unknown;
        return value ? text.yes : text.no;
    };

    return (
        <Screen title={text.title} onSkip={onSkip} skipLabel={text.skipLabel}>
            <p className="instructionText">{text.instruction}</p>

            <div className="summaryList">
                <div className="summaryRow">
                    <span className="summaryLabel">{text.relativeLabel}</span>
                    <span className="summaryValue">
                        {formatAnswer(relativeWithDiabetes)}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">{text.hypertensionLabel}</span>
                    <span className="summaryValue">
                        {formatAnswer(hypertensionHistory)}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">{text.physicallyActiveLabel}</span>
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
