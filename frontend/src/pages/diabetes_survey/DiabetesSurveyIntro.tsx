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

            <li className="instructionBullet">
                This survey takes about 15 minutes
            </li>

            <li className="instructionBullet">
                You can skip the survey at any time
            </li>

            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                clickSkip={onSkip}
                nextLabel="Start Survey"
            />
        </Screen>
    );
}
