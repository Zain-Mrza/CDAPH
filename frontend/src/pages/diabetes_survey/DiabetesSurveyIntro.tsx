import NavigationActions from "../../components/NavigationActions";
import Screen from "../../components/Screen";
import { loadLanguage } from "../../i18n";

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
    const t = loadLanguage(language);
    const text = t.diabetesSurvey.intro;

    return (
        <Screen title={text.title} onSkip={onSkip} skipLabel={text.skipLabel}>
            <p className="instructionText">{text.description}</p>

            <div className="infoBox">
                <ul>
                    <li className="instructionBullet">{text.bullet1}</li>
                    <li className="instructionBullet">{text.bullet2}</li>
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
