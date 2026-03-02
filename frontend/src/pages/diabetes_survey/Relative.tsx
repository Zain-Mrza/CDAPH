import NavigationActions from "../../components/NavigationActions";
import SurveyQuestion from "../../components/SurveyQuestion";

type Props = {
    onNext?: () => void;
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
    return (
        <SurveyQuestion
            question="Do you have a parent or sibling with diabetes?"
            questionNumber={1}
            maxQuestionNumber={1}
            onSkip={onSkip}
        >
            <div className="multipleChoice">
                <button type="button" className="choiceButton">
                    Yes
                </button>
                <button type="button" className="choiceButton">
                    No
                </button>
            </div>
            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                language={language}
            />
        </SurveyQuestion>
    );
}
