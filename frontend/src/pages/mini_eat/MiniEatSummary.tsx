import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";
import { loadLanguage } from "../../i18n";

type Props = {
    answers: Array<number | null>;
    onNext?: () => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
};

export default function MiniEatSummary({
    answers,
    onNext,
    onBack,
    onSkip,
    language,
}: Props) {
    const t = loadLanguage(language);
    const questionText = t.miniEatSurvey.questions;
    const text = t.miniEatSurvey.summary;

    return (
        <Screen title={text.title} onSkip={onSkip} skipLabel={text.skipLabel}>
            <p className="instructionText">{text.instruction}</p>

            <div className="summaryList">
                {questionText.items.map((question, index) => (
                    <div className="summaryRow" key={question.summaryLabel}>
                        <span className="summaryLabel">{question.summaryLabel}</span>
                        <span className="summaryValue">
                            {answers[index] === null
                                ? text.notAnswered
                                : questionText.options[answers[index]]}
                        </span>
                    </div>
                ))}
            </div>

            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                language={language}
            />
        </Screen>
    );
}
