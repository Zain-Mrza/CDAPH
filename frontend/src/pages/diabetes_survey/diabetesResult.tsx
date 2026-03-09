import NavigationActions from "../../components/NavigationActions";
import RiskSlider from "../../components/RiskSlider";

type Props = {
    score: number | null;
    language: "en" | "es";
    onFinish?: () => void;
    onBack: () => void;
    onNext: () => void;
};

export default function DiabetesResults({
    score,
    language,
    onFinish,
    onBack,
    onNext,
}: Props) {
    if (score === null) {
        return (
            <div className="kioskCard">
                <h1 className="title">Diabetes Risk Results</h1>

                <div className="resultsContainer">
                    <p className="resultExplanation">
                        Unable to display your result at this time.
                    </p>
                </div>

                <NavigationActions clickNext={onFinish} language={language} />
            </div>
        );
    }

    const isHighRisk = score >= 5;

    return (
        <div className="kioskCard">
            <h1 className="title">Diabetes Risk Results</h1>

            <div className="resultsContainer">
                <RiskSlider score={score} conditionName="Diabetes" />

                <div className="resultExplanation">
                    {isHighRisk ? (
                        <>
                            <p>
                                Your answers suggest that you may be at an
                                increased risk for developing type 2 diabetes.
                            </p>

                            <ul>
                                <li>
                                    Consider confirmatory testing such as
                                    fasting glucose or HbA1c.
                                </li>
                                <li>
                                    Lifestyle changes like improved diet and
                                    regular physical activity can reduce risk.
                                </li>
                                <li>
                                    You may benefit from a diabetes prevention
                                    program or nutrition counseling.
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <p>
                                Your answers suggest a lower risk for developing
                                type 2 diabetes.
                            </p>

                            <ul>
                                <li>
                                    Continue maintaining a healthy lifestyle.
                                </li>
                                <li>
                                    Regular physical activity and balanced diet
                                    help reduce diabetes risk.
                                </li>
                                <li>
                                    Consider periodic screening as recommended
                                    by your healthcare provider.
                                </li>
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
