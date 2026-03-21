import { loadLanguage } from "../i18n";

type Props = {
    score: number | null;
    risk: string | null;
    possible: number | null;
    language: "en" | "es";
    conditionName?: string;
};

export default function RiskSlider({
    score,
    risk,
    possible = null,
    language,
    conditionName = "Diabetes",
}: Props) {
    const t = loadLanguage(language);
    const text = t.riskSlider;
    const clampedScore = Math.max(0, Math.min(10, score ?? 0));
    const percent = (clampedScore / 10) * 100;

    const clampedPossible =
        possible !== null ? Math.max(0, Math.min(10, possible)) : null;
    const maximum =
        clampedPossible !== null ? (clampedPossible / 10) * 100 : null;

    const hasRange = clampedPossible !== null && clampedPossible > clampedScore;

    const getRiskStatus = (classification: typeof risk) => {
        if (classification === "high") {
            return {
                label: text.highRiskLabel,
                className: "high",
                caption: text.highRiskCaption(conditionName),
            };
        }

        if (classification === "inconclusive") {
            return {
                label: text.mediumRiskLabel,
                className: "inconclusive",
                caption: text.mediumRiskCaption(conditionName),
            };
        }

        return {
            label: text.lowRiskLabel,
            className: "low",
            caption: text.lowRiskCaption(conditionName),
        };
    };

    const patientRisk = getRiskStatus(risk);

    return (
        <div
            className="riskDisplay"
            aria-label={text.ariaLabel(clampedScore, patientRisk.label)}
        >
            <div className="riskSummaryBlock">
                <p className="riskSummaryEyebrow">{text.resultEyebrow(conditionName)}</p>

                <div className={`riskSummaryBadge ${patientRisk.className}`}>
                    <span className="riskSummaryBadgeDot" aria-hidden="true" />
                    <span>{patientRisk.label}</span>
                </div>

                <p className="riskSummaryCaption">{patientRisk.caption}</p>
            </div>

            <div className="riskScaleSection">
                <div
                    className="riskGradientBar"
                    role="img"
                    aria-label={text.scaleAriaLabel(clampedScore, clampedPossible)}
                >
                    {hasRange && maximum !== null && (
                        <>
                            <div
                                className="riskRangeConnector"
                                style={{
                                    left: `${percent}%`,
                                    width: `${maximum - percent}%`,
                                }}
                                aria-hidden="true"
                            />

                            <div
                                className="riskScaleMarkerLabel riskScaleMarkerLabelScore"
                                style={{
                                    left: `${percent + (maximum - percent) / 2}%`,
                                }}
                                aria-hidden="true"
                            >
                                {text.rangeLabel}
                            </div>
                        </>
                    )}

                    <div
                        className="riskScaleMarker riskScaleMarkerScore"
                        style={{ left: `${percent}%` }}
                        aria-hidden="true"
                    />

                    {maximum !== null && (
                        <div
                            className="riskScaleMarker riskScaleMarkerScore"
                            style={{ left: `${maximum}%` }}
                            aria-hidden="true"
                        />
                    )}

                    {!hasRange && (
                        <div
                            className="riskScaleMarkerLabel riskScaleMarkerLabelScore"
                            style={{ left: `${percent}%` }}
                            aria-hidden="true"
                        >
                            {text.scoreLabel}
                        </div>
                    )}
                </div>

                <div className="riskAxisLabels">
                    <span>0</span>
                    <span>10</span>
                </div>

                <div className="riskRangeLabels">
                    <span>{text.lowerRiskRangeLabel}</span>
                    <span>{text.higherRiskRangeLabel}</span>
                </div>
            </div>
        </div>
    );
}
