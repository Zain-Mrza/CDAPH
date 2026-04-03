import NavigationActions from "../../components/NavigationActions";
import RiskSlider from "../../components/RiskSlider";
import { loadLanguage } from "../../i18n";

type Props = {
    score: number | null;
    classification: "unhealthy" | "intermediate" | "healthy" | null;
    maxScore: number;
    language: "en" | "es";
    onBack: () => void;
    onNext: () => void;
};

export default function MiniEatResult({
    score,
    classification,
    maxScore,
    language,
    onBack,
    onNext,
}: Props) {
    const t = loadLanguage(language);
    const text = t.miniEatSurvey.results;

    if (score === null || classification === null) {
        return (
            <div className="kioskCard">
                <h1 className="title">{text.title}</h1>

                <div className="resultsContainer">
                    <p className="resultExplanation">{text.unavailable}</p>
                </div>

                <NavigationActions clickBack={onBack} language={language} />
            </div>
        );
    }

    const statusMap = {
        unhealthy: {
            label: text.unhealthyLabel,
            className: "high" as const,
            caption: text.unhealthyCaption,
        },
        intermediate: {
            label: text.intermediateLabel,
            className: "inconclusive" as const,
            caption: text.intermediateCaption,
        },
        healthy: {
            label: text.healthyLabel,
            className: "low" as const,
            caption: text.healthyCaption,
        },
    };

    return (
        <div className="kioskCard">
            <h1 className="title">{text.title}</h1>

            <div className="resultsContainer">
                <RiskSlider
                    score={score}
                    risk={classification}
                    possible={null}
                    language={language}
                    conditionName={text.conditionName}
                    minScore={0}
                    maxScore={maxScore}
                    higherIsBetter
                    eyebrow={text.eyebrow}
                    lowerRangeLabel={text.unhealthyLabel}
                    higherRangeLabel={text.healthyLabel}
                    scaleAriaLabel={text.scaleAriaLabel(score, maxScore)}
                    thresholdMarkers={[
                        { value: 61, label: "61" },
                        { value: 69, label: "69" },
                    ]}
                    statusMap={statusMap}
                />

                <div className="resultExplanation">
                    {classification === "unhealthy" ? (
                        <>
                            <p>{text.unhealthyIntro}</p>

                            <ul>
                                <li>{text.unhealthyBullet1}</li>
                                <li>{text.unhealthyBullet2}</li>
                                <li>{text.unhealthyBullet3}</li>
                            </ul>
                        </>
                    ) : classification === "intermediate" ? (
                        <>
                            <p>{text.intermediateIntro}</p>

                            <ul>
                                <li>{text.intermediateBullet1}</li>
                                <li>{text.intermediateBullet2}</li>
                                <li>{text.intermediateBullet3}</li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <p>{text.healthyIntro}</p>

                            <ul>
                                <li>{text.healthyBullet1}</li>
                                <li>{text.healthyBullet2}</li>
                                <li>{text.healthyBullet3}</li>
                            </ul>
                        </>
                    )}
                </div>
            </div>

            <NavigationActions
                clickBack={onBack}
                language={language}
                clickNext={onNext}
            />
        </div>
    );
}
