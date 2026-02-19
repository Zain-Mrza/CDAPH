import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";

type Props = {
    onNext?: () => void;
    onBack?: () => void;
    onSkip?: () => void;
};

export default function DiabetesSurveyIntro({ onNext, onSkip, onBack }: Props) {
    return (
        <Screen title="Diabetes Risk Survey">
            <p className="instructionText">
                You will now answer some questions about your health.
            </p>

            <p className="instructionText">
                This survey takes about 15 minutes.
            </p>

            <p className="instructionText">
                You can skip any question or stop at any time.
            </p>

            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                clickSkip={onSkip}
                nextLabel="Start Survey"
            />
        </Screen>
    );
}
