import { useState } from "react";
import NavigationActions from "../../components/NavigationActions";
import SurveyQuestion from "../../components/SurveyQuestion";
import { loadLanguage } from "../../i18n";

type Answer = boolean | "unknown" | "unavailable" | undefined;

type Props = {
    onNext?: (value: boolean | "unknown" | "unavailable") => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
    initialValue?: boolean | "unknown" | "unavailable";
};

export default function HypertensionQuestion({
    onNext,
    onBack,
    onSkip,
    language,
    initialValue,
}: Props) {
    const [answer, setAnswer] = useState<Answer>(initialValue);
    const t = loadLanguage(language);
    const text = t.diabetesSurvey.questions;

    return (
        <SurveyQuestion
            question={text.hypertension}
            questionNumber={2}
            maxQuestionNumber={3}
            onSkip={onSkip}
            skipLabel={text.skipLabel}
            questionCounterLabel={text.questionCounter(2, 3)}
            language={language}
        >
            <fieldset className="surveyFieldset">
                <legend className="srOnly">{text.hypertension}</legend>

                <div className="surveyMultipleChoice">
                    <label
                        className={`surveyButton ${answer === true ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="hypertensionHistory"
                            value="yes"
                            checked={answer === true}
                            onChange={() => setAnswer(true)}
                        />
                        <span>{text.yes}</span>
                    </label>

                    <label
                        className={`surveyButton ${answer === false ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="hypertensionHistory"
                            value="no"
                            checked={answer === false}
                            onChange={() => setAnswer(false)}
                        />
                        <span>{text.no}</span>
                    </label>

                    <label
                        className={`surveyButton ${answer === "unknown" ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="hypertensionHistory"
                            value="unknown"
                            checked={answer === "unknown"}
                            onChange={() => setAnswer("unknown")}
                        />
                        <span>{text.unknown}</span>
                    </label>
                </div>
            </fieldset>

            <NavigationActions
                clickNext={() => {
                    if (answer !== undefined) {
                        onNext?.(answer);
                    }
                }}
                clickBack={onBack}
                language={language}
                disableNext={answer === "unavailable"}
            />
        </SurveyQuestion>
    );
}
