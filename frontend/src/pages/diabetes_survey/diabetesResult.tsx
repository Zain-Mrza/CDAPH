import NavigationActions from "../../components/NavigationActions";
import RiskSlider from "../../components/RiskSlider";
import { loadLanguage } from "../../i18n";

type Props = {
    score: number | null;
    risk: string | null;
    possible: number | null;
    language: "en" | "es";
    onFinish?: () => void;
    onBack: () => void;
    onNext: () => void;
};

export default function DiabetesResults({
    score,
    risk,
    possible,
    language,
    onFinish,
    onBack,
    onNext,
}: Props) {
    const t = loadLanguage(language);
    const text = t.diabetesSurvey.results;

    if (score === null) {
        return (
            <div className="kioskCard">
                <h1 className="title">{text.title}</h1>

                <div className="resultsContainer">
                    <p className="resultExplanation">{text.unavailable}</p>
                </div>

                <NavigationActions clickNext={onFinish} language={language} />
            </div>
        );
    }

    const isHighRisk = risk === "high";
    const isBorderline = risk === "inconclusive";

    return (
        <div className="kioskCard">
            <h1 className="title">{text.title}</h1>

            <div className="resultsContainer">
                <RiskSlider
                    score={score}
                    risk={risk}
                    possible={possible}
                    language={language}
                    conditionName={text.conditionName}
                />

                <div className="resultExplanation">
                    {isHighRisk || isBorderline ? (
                        <>
                            <p>{text.highRiskIntro}</p>

                            <ul>
                                <li>{text.highRiskBullet1}</li>
                                <li>{text.highRiskBullet2}</li>
                                <li>{text.highRiskBullet3}</li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <p>{text.lowRiskIntro}</p>

                            <ul>
                                <li>{text.lowRiskBullet1}</li>
                                <li>{text.lowRiskBullet2}</li>
                                <li>{text.lowRiskBullet3}</li>
                            </ul>
                        </>
                    )}
                </div>
            </div>

            <NavigationActions
                clickNext={onNext}
                language={language}
                clickBack={onBack}
            />
        </div>
    );
}
