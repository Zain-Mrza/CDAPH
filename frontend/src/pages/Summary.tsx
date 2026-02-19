import NavigationActions from "../components/NavigationActions";
import { SummaryTranslations } from "../i18n/summary";

interface BloodPressure {
    systolic: number;
    diastolic: number;
}

interface SummaryStepProps {
    age: number | null;
    sex: number | null;
    bloodPressure: BloodPressure | null;
    heightCm: number | null;
    weightKg: number | null;
    language: "en" | "es";
    onNext?: () => void;
    onBack?: () => void;
}

export default function SummaryStep({
    age,
    sex,
    bloodPressure,
    heightCm,
    weightKg,
    language,
    onNext,
    onBack,
}: SummaryStepProps) {
    const text = SummaryTranslations[language];
    const sexLabel =
        sex === 1
            ? text.male
            : sex === 2
              ? text.female
              : sex === 3
                ? text.intersex
                : text.preferNotToSay;

    return (
        <div className="kioskCard" role="region" aria-label="Summary">
            <div className="kioskHeader">
                <h1>{text.measurementsComplete}</h1>
                <p>{text.reviewValuesBelow}</p>
            </div>

            <div className="summaryList">
                <div className="summaryRow">
                    <span className="summaryLabel">Age</span>
                    <span className="summaryValue">
                        {age !== null ? `${age} ${text.years}` : "—"}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">{text.biologicalSex}</span>
                    <span className="summaryValue">
                        {sex !== null ? sexLabel : "—"}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">{text.bloodPressure}</span>
                    <span className="summaryValue">
                        {bloodPressure
                            ? `${bloodPressure.systolic} / ${bloodPressure.diastolic} mmHg`
                            : "—"}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">{text.height}</span>
                    <span className="summaryValue">
                        {heightCm !== null ? `${heightCm} cm` : "—"}
                    </span>
                </div>

                <div className="summaryRow">
                    <span className="summaryLabel">{text.weight}</span>
                    <span className="summaryValue">
                        {weightKg !== null ? `${weightKg} kg` : "—"}
                    </span>
                </div>
            </div>

            <NavigationActions clickNext={onNext} clickBack={onBack} />
        </div>
    );
}
