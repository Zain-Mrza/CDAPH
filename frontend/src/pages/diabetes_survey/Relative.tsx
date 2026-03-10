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

export default function RelativeQuestion({
    onNext,
    onSkip,
    onBack,
    language,
    initialValue,
}: Props) {
    const [answer, setAnswer] = useState<Answer>(initialValue);

    return (
        <SurveyQuestion
            question="Do you have a parent, sibling, or child with diabetes?"
            questionNumber={1}
            maxQuestionNumber={3}
            onSkip={onSkip}
        >
            <fieldset className="surveyFieldset">
                <legend className="srOnly">
                    Do you have a parent, sibling, or child with diabetes?
                </legend>

                <div className="surveyMultipleChoice">
                    <label
                        className={`surveyButton ${answer === true ? "selected" : ""}`}
                    >
                        <input
                            type="radio"
                            name="familyHistoryDiabetes"
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
                            name="familyHistoryDiabetes"
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
                            name="familyHistoryDiabetes"
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
