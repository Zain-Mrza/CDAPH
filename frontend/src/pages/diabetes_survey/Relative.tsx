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

export default function RelativeQuestion({
    onNext,
    onSkip,
    onBack,
    language,
    initialValue,
}: Props) {
    const [answer, setAnswer] = useState<boolean | undefined | null>(
        initialValue,
    );

    return (
        <SurveyQuestion
            question="Do you have a parent or sibling with diabetes?"
            questionNumber={1}
            maxQuestionNumber={3}
            onSkip={onSkip}
        >
            <div className="surveyMultipleChoice">
                <button
                    type="button"
                    className={`surveyButton ${answer === true ? "selected" : ""}`}
                    onClick={() => {
                        setAnswer(true);
                    }}
                >
                    Yes
                </button>

                <button
                    type="button"
                    className={`surveyButton ${answer === false ? "selected" : ""}`}
                    onClick={() => {
                        setAnswer(false);
                    }}
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
