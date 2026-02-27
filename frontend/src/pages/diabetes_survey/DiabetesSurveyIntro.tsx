import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";

type Props = {
    onNext?: () => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
};

export default function DiabetesSurveyIntro({
    onNext,
    onSkip,
    onBack,
    language,
}: Props) {
    return (
        <Screen title="Diabetes Risk Survey" onSkip={onSkip}>
            <p className="instructionText">
                You will now answer some questions about your health.
            </p>

            <div className="infoBox">
                <ul>
                    <li className="instructionBullet">
                        This survey takes about 15 minutes.
                    </li>
                    <li className="instructionBullet">
                        You may skip the survey at any time.
                    </li>
                </ul>
            </div>

            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                nextLabel="Start Survey"
                language={language}
            />
        </Screen>
    );
}
