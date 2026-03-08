import NavigationActions from "../../components/NavigationActions";

type Props = {
    language: "en" | "es";
    score: number | null;
    onBack?: () => void;
    onNext?: () => void;
};

export default function DiabetesResults({
    language,
    score,
    onBack,
    onNext,
}: Props) {
    const isHighRisk = score! >= 5;

    const text =
        language === "es"
            ? {
                  title: "Resultados de riesgo de diabetes",
                  subtitle: "Su puntaje de riesgo estimado es:",
                  scoreLabel: "Puntaje",
                  highRiskTitle:
                      "Usted tiene un riesgo alto de diabetes tipo 2.",
                  lowRiskTitle:
                      "Usted no está en la categoría de riesgo alto según esta evaluación.",
                  highRiskBody: [
                      "Se recomienda una prueba de confirmación, como glucosa en ayunas o HbA1c.",
                      "Se recomienda hacer cambios en el estilo de vida, incluyendo dieta y ejercicio.",
                      "Considere participar en programas de prevención de diabetes o consultar con un especialista en nutrición, si está disponible.",
                  ],
                  lowRiskBody: [
                      "Mantenga hábitos saludables, incluyendo actividad física regular y una alimentación balanceada.",
                      "Se recomienda reevaluar su riesgo periódicamente.",
                      "Tenga en cuenta que aún puede existir riesgo, incluso con un puntaje bajo.",
                  ],
                  riskLabel: "Nivel de riesgo",
                  riskHigh: "Alto",
                  riskLow: "Menor",
                  importantNote:
                      "Esta evaluación no es un diagnóstico. Consulte a un profesional de salud para una evaluación completa.",
                  next: "Continue",
                  back: "Back",
              }
            : {
                  title: "Diabetes Risk Results",
                  subtitle: "Your estimated risk score is:",
                  scoreLabel: "Score",
                  highRiskTitle: "You are at high risk for type 2 diabetes.",
                  lowRiskTitle:
                      "You are not in the high-risk category based on this screening.",
                  highRiskBody: [
                      "Confirmatory testing is recommended, such as fasting glucose or HbA1c.",
                      "Lifestyle changes, including diet and exercise, are recommended.",
                      "Consider referral to diabetes prevention programs or nutrition specialists, if available.",
                  ],
                  lowRiskBody: [
                      "Maintain healthy habits, including regular physical activity and a balanced diet.",
                      "Your risk should be reassessed periodically.",
                      "Keep in mind that some risk may still be present even with a lower score.",
                  ],
                  riskLabel: "Risk Level",
                  riskHigh: "High",
                  riskLow: "Lower",
                  importantNote:
                      "This screening is not a diagnosis. Please consult a healthcare professional for a full evaluation.",
                  next: "Continue",
                  back: "Back",
              };

    const bodyPoints = isHighRisk ? text.highRiskBody : text.lowRiskBody;

    return (
        <div className="screen">
            <div className="card">
                <h1 className="screen-title">{text.title}</h1>
                <p className="screen-subtitle">{text.subtitle}</p>

                <div className="result-score-box">
                    <div className="result-score-label">{text.scoreLabel}</div>
                    <div className="result-score-value">{score}</div>
                </div>

                <div
                    className={`result-banner ${
                        isHighRisk ? "result-banner-high" : "result-banner-low"
                    }`}
                >
                    <div className="result-banner-label">{text.riskLabel}</div>
                    <div className="result-banner-value">
                        {isHighRisk ? text.riskHigh : text.riskLow}
                    </div>
                </div>

                <h2 className="result-heading">
                    {isHighRisk ? text.highRiskTitle : text.lowRiskTitle}
                </h2>

                <ul className="result-list">
                    {bodyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                <p className="result-note">{text.importantNote}</p>

                <NavigationActions
                    clickBack={onBack}
                    clickNext={onNext}
                    language={language}
                />
            </div>
        </div>
    );
}
