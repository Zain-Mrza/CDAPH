import { useState } from "react";
import NavigationActions from "../../components/NavigationActions";
import SurveyQuestion from "../../components/SurveyQuestion";

type Answer = boolean | "unknown" | "unavailable" | undefined;

type Props = {
    onNext?: (value: boolean | "unknown" | "unavailable") => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
    initialValue?: boolean | "unknown" | "unavailable";
};

export default function PhysicallyActiveQuestion({
    onNext,
    onBack,
    onSkip,
    language,
    initialValue,
}: Props) {
    const [answer, setAnswer] = useState<Answer>(initialValue);

    return (
        <SurveyQuestion
            question="Are you physically active?"
            questionNumber={3}
            maxQuestionNumber={3}
            onSkip={onSkip}
        >
            <fieldset className="surveyFieldset">
                <legend className="srOnly">Are you physically active?</legend>

                <div
                    className="surveyMultipleChoice"
                    role="radiogroup"
                    aria-label="Are you physically active?"
                >
                    <label
                        className={`surveyButton ${answer === true ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="physicalActivity"
                            value="yes"
                            checked={answer === true}
                            onChange={() => setAnswer(true)}
                        />
                        <span>Yes</span>
                    </label>

                    <label
                        className={`surveyButton ${answer === false ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="physicalActivity"
                            value="no"
                            checked={answer === false}
                            onChange={() => setAnswer(false)}
                        />
                        <span>No</span>
                    </label>

                    <label
                        className={`surveyButton ${answer === "unknown" ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="physicalActivity"
                            value="unknown"
                            checked={answer === "unknown"}
                            onChange={() => setAnswer("unknown")}
                        />
                        <span>I don't know</span>
                    </label>
                </div>
            </fieldset>

            <NavigationActions
                clickNext={() => {
                    if (answer !== undefined && onNext) {
                        onNext(answer);
                    }
                }}
                clickBack={onBack}
                language={language}
                disableNext={answer === undefined}
                nextLabel="completeSurvey"
            />
        </SurveyQuestion>
    );
}
