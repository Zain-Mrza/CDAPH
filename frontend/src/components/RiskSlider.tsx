type Props = {
    score: number | null;
    risk: string | null;
    possible: number | null;
    conditionName?: string;
};

export default function RiskSlider({
    score,
    risk,
    possible = null,
    conditionName = "Diabetes",
}: Props) {
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
                label: "Higher Risk",
                className: "high",
                caption: `Your score falls in the higher-risk range for ${conditionName.toLowerCase()}.`,
            };
        }

        if (classification === "inconclusive") {
            return {
                label: "Medium Risk",
                className: "inconclusive",
                caption: `Your score falls at the border between the lower-risk and higher-risk ranges for ${conditionName.toLowerCase()}.`,
            };
        }

        return {
            label: "Lower Risk",
            className: "low",
            caption: `Your score falls in the lower-risk range for ${conditionName.toLowerCase()}.`,
        };
    };

    const patientRisk = getRiskStatus(risk);

    return (
        <div
            className="riskDisplay"
            aria-label={`${clampedScore} out of 10, ${patientRisk.label}`}
        >
            <div className="riskSummaryBlock">
                <p className="riskSummaryEyebrow">
                    Your {conditionName} Risk Result
                </p>

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
                    aria-label={
                        hasRange && clampedPossible !== null
                            ? `Risk scale from 0 to 10. Your score is ${clampedScore}. The upper end of your range is ${clampedPossible}.`
                            : `Risk scale from 0 to 10. Your score is ${clampedScore}.`
                    }
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
                                Your range
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
                            Your Score
                        </div>
                    )}
                </div>

                <div className="riskAxisLabels">
                    <span>0</span>
                    <span>10</span>
                </div>

                <div className="riskRangeLabels">
                    <span>Lower Risk</span>
                    <span>Higher Risk</span>
                </div>
            </div>
        </div>
    );
}
