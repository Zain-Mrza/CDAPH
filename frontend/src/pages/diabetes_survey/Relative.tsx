import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";

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
        <Screen
            title="Question 1: Do you have a parent or sibling with diabetes?"
            onSkip={onSkip}
        >
            <button type="button" className="choiceButton">
                Yes
            </button>

            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                language={language}
            />
        </Screen>
    );
}
