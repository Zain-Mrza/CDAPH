type Props = {
    score: number;
    conditionName?: string;
};

export default function RiskSlider({
    score,
    conditionName = "Diabetes",
}: Props) {
    const clampedScore = Math.max(0, Math.min(10, score));
    const percent = (clampedScore / 10) * 100;

    const getRiskStatus = (value: number) => {
        if (value >= 5) {
            return {
                label: "Higher Risk",
                className: "high",
                caption: `Your score falls in the higher-risk range for ${conditionName.toLowerCase()}.`,
            };
        }

        return {
            label: "Lower Risk",
            className: "low",
            caption: `Your score falls in the lower-risk range for ${conditionName.toLowerCase()}.`,
        };
    };

    const risk = getRiskStatus(clampedScore);

    return (
        <div
            className="riskDisplay"
            aria-label={`${clampedScore} out of 10, ${risk.label}`}
        >
            <div className="riskSummaryBlock">
                <p className="riskSummaryEyebrow">
                    Your {conditionName} Risk Result
                </p>

                <div className={`riskSummaryBadge ${risk.className}`}>
                    <span className="riskSummaryBadgeDot" aria-hidden="true" />
                    <span>{risk.label}</span>
                </div>

                <p className="riskSummaryCaption">{risk.caption}</p>
            </div>

            <div className="riskScaleSection">
                <div
                    className="riskGradientBar"
                    role="img"
                    aria-label={`Risk scale from 0 to 10. Your score is ${clampedScore}.`}
                >
                    <div
                        className="riskScaleMarker"
                        style={{ left: `${percent}%` }}
                    />
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
