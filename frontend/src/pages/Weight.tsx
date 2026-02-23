import MeasurementInput from "../components/MeasurementInput";
import { loadLanguage } from "../i18n";

type Props = {
    onNext: (weightKg: number) => void;
    onBack?: () => void;
    initialWeight?: number | null;
    language: "en" | "es";
};

export default function Weight({
    onNext,
    onBack,
    initialWeight,
    language,
}: Props) {
    const t = loadLanguage(language);
    const text = t.measurementInput.weight;

    return (
        <MeasurementInput
            measurement="weight"
            title={text.title}
            subtitle={text.instruction}
            label={text.label1}
            unit="kg"
            placeholder="e.g., 72"
            min={20}
            max={300}
            onSubmit={onNext}
            onBack={onBack}
            initialValue={initialWeight}
            language={language}
        />
    );
}
