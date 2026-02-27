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
                We will now ask two questions to help assess your risk for
                diabetes.
            </p>

            <div className="infoBox">
                <ul>
                    <li className="instructionBullet">
                        This survey takes about 1 minute.
                    </li>
                    <li className="instructionBullet">
                        You may skip the survey at any time.
                    </li>
                </ul>
            </div>

            <NavigationActions
                clickNext={onNext}
                clickBack={onBack}
                language={language}
            />
        </Screen>
    );
}
