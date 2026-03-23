import { loadLanguage } from "../i18n";

type StatusConfig = {
    label: string;
    className: "low" | "high" | "inconclusive";
    caption: string;
};

type ThresholdMarker = {
    value: number;
    label: string;
};

type Props = {
    score: number | null;
    risk: string | null;
    possible: number | null;
    language: "en" | "es";
    conditionName?: string;
    minScore?: number;
    maxScore?: number;
    higherIsBetter?: boolean;
    eyebrow?: string;
    lowerRangeLabel?: string;
    higherRangeLabel?: string;
    ariaLabel?: string;
    scaleAriaLabel?: string;
    thresholdMarkers?: ThresholdMarker[];
    statusMap?: Record<string, StatusConfig>;
};

export default function RiskSlider({
    score,
    risk,
    possible = null,
    language,
    conditionName = "Diabetes",
    minScore = 0,
    maxScore = 10,
    higherIsBetter = false,
    eyebrow,
    lowerRangeLabel,
    higherRangeLabel,
    ariaLabel,
    scaleAriaLabel,
    thresholdMarkers = [],
    statusMap,
}: Props) {
    const t = loadLanguage(language);
    const text = t.riskSlider;
    const scoreRange = Math.max(1, maxScore - minScore);
    const clampToScale = (value: number) =>
        Math.max(minScore, Math.min(maxScore, value));
    const clampedScore = clampToScale(score ?? minScore);
    const percent = ((clampedScore - minScore) / scoreRange) * 100;

    const clampedPossible =
        possible !== null ? clampToScale(possible) : null;
    const maximum =
        clampedPossible !== null
            ? ((clampedPossible - minScore) / scoreRange) * 100
            : null;

    const hasRange = clampedPossible !== null && clampedPossible > clampedScore;

    const defaultStatusMap: Record<string, StatusConfig> = {
        high: {
            label: text.highRiskLabel,
            className: "high",
            caption: text.highRiskCaption(conditionName),
        },
        inconclusive: {
            label: text.mediumRiskLabel,
            className: "inconclusive",
            caption: text.mediumRiskCaption(conditionName),
        },
        low: {
            label: text.lowRiskLabel,
            className: "low",
            caption: text.lowRiskCaption(conditionName),
        },
    };

    const getRiskStatus = (classification: typeof risk) => {
        if (classification && statusMap?.[classification]) {
            return statusMap[classification];
        }

        if (classification === "high") {
            return defaultStatusMap.high;
        }

        if (classification === "inconclusive") {
            return defaultStatusMap.inconclusive;
        }

        if (classification === "low") {
            return defaultStatusMap.low;
        }

        return defaultStatusMap.low;
    };

    const patientRisk = getRiskStatus(risk);
    const gradientBackground = higherIsBetter
        ? "linear-gradient(90deg, #e74c3c 0%, #f1c40f 50%, #2ecc71 100%)"
        : "linear-gradient(90deg, #2ecc71 0%, #f1c40f 50%, #e74c3c 100%)";

    return (
        <div
            className="riskDisplay"
            aria-label={
                ariaLabel ?? text.ariaLabel(clampedScore, patientRisk.label, maxScore)
            }
        >
            <div className="riskSummaryBlock">
                <p className="riskSummaryEyebrow">
                    {eyebrow ?? text.resultEyebrow(conditionName)}
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
                        scaleAriaLabel ??
                        text.scaleAriaLabel(
                            clampedScore,
                            clampedPossible,
                            minScore,
                            maxScore,
                        )
                    }
                    style={{ background: gradientBackground }}
                >
                    {thresholdMarkers.map((marker) => {
                        const markerPercent =
                            ((clampToScale(marker.value) - minScore) / scoreRange) *
                            100;

                        return (
                            <div key={`${marker.value}-${marker.label}`}>
                                <div
                                    className="riskScaleMarker riskScaleMarkerThreshold"
                                    style={{ left: `${markerPercent}%` }}
                                    aria-hidden="true"
                                />

                                <div
                                    className="riskScaleMarkerLabel riskScaleMarkerLabelThreshold"
                                    style={{ left: `${markerPercent}%` }}
                                    aria-hidden="true"
                                >
                                    {marker.label}
                                </div>
                            </div>
                        );
                    })}

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
                    <span>{minScore}</span>
                    <span>{maxScore}</span>
                </div>

                <div className="riskRangeLabels">
                    <span>{lowerRangeLabel ?? text.lowerRiskRangeLabel}</span>
                    <span>{higherRangeLabel ?? text.higherRiskRangeLabel}</span>
                </div>
            </div>
        </div>
    );
}
