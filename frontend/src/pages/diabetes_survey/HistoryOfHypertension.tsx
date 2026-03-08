import { useState } from "react";
import NavigationActions from "../../components/NavigationActions";
import SurveyQuestion from "../../components/SurveyQuestion";

type Props = {
    onNext?: (value: boolean) => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
    initialValue: boolean | null | undefined;
};

export default function HypertensionQuestion({
    onNext,
    onBack,
    onSkip,
    language,
    initialValue,
}: Props) {
    const [answer, setAnswer] = useState<boolean | null | undefined>(
        initialValue,
    );

    return (
        <SurveyQuestion
            question="Have you ever had high blood pressure?"
            questionNumber={2}
            maxQuestionNumber={3}
            onSkip={onSkip}
        >
            <div className="surveyMultipleChoice">
                <button
                    type="button"
                    className={`surveyButton ${answer === true ? "selected" : ""}`}
                    onClick={() => setAnswer(true)}
                >
                    Yes
                </button>

                <button
                    type="button"
                    className={`surveyButton ${answer === false ? "selected" : ""}`}
                    onClick={() => setAnswer(false)}
                >
                    No
                </button>

                <button
                    type="button"
                    className={`surveyButton ${answer === null ? "selected" : ""}`}
                    onClick={() => setAnswer(null)}
                >
                    I don't know
                </button>
            </div>

            <NavigationActions
                clickNext={() => onNext?.(answer!)}
                clickBack={onBack}
                language={language}
                disableNext={answer === undefined}
            />
        </SurveyQuestion>
    );
}
