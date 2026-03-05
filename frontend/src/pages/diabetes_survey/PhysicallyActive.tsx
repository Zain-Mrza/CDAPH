import { useState } from "react";
import NavigationActions from "../../components/NavigationActions";
import SurveyQuestion from "../../components/SurveyQuestion";

type Props = {
    onNext?: (value: boolean) => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
};

export default function PhysicallyActiveQuestion({
    onNext,
    onBack,
    onSkip,
    language,
}: Props) {
    const [answer, setAnswer] = useState<boolean | null>(null);

    return (
        <SurveyQuestion
            question="Physically active"
            subtitle="Self-reported by patient"
            questionNumber={2}
            maxQuestionNumber={2}
            onSkip={onSkip}
        >
            <div className="multipleChoice">
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
            </div>

            <NavigationActions
                clickNext={() => onNext?.(answer!)}
                clickBack={onBack}
                language={language}
                disableNext={answer === null}
            />
        </SurveyQuestion>
    );
}
