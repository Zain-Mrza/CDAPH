import { useState } from "react";
import NavigationActions from "../../components/NavigationActions";
import SurveyQuestion from "../../components/SurveyQuestion";

type Props = {
    onNext?: (value: boolean) => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
};

export default function RelativeWithDiabetes({
    onNext,
    onSkip,
    onBack,
    language,
}: Props) {
    const [hasRelative, setHasRelative] = useState<boolean>(false);
    const [touched1, setTouched1] = useState(false);
    const [touched2, setTouched2] = useState(false);

    const touched = touched1 || touched2;

    return (
        <SurveyQuestion
            question="Do you have a parent or sibling with diabetes?"
            questionNumber={1}
            maxQuestionNumber={1}
            onSkip={onSkip}
        >
            <div className="multipleChoice">
                <button
                    type="button"
                    className={`surveyButton ${touched1 ? "selected" : ""}`}
                    onClick={() => {
                        setHasRelative(true);
                        setTouched2(false);
                        setTouched1(true);
                    }}
                >
                    Yes
                </button>

                <button
                    type="button"
                    className={`surveyButton ${touched2 ? "selected" : ""}`}
                    onClick={() => {
                        setHasRelative(false);
                        setTouched1(false);
                        setTouched2(true);
                    }}
                >
                    No
                </button>
            </div>

            <NavigationActions
                clickNext={() => onNext?.(hasRelative)}
                clickBack={onBack}
                language={language}
                disableNext={!touched}
            />
        </SurveyQuestion>
    );
}
