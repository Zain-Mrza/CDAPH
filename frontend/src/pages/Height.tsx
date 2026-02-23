import MeasurementInput from "../components/MeasurementInput";
import { loadLanguage } from "../i18n";

type Props = {
    onNext: (heightCm: number) => void;
    onBack: () => void;
    language: "en" | "es";
    initialHeight?: number | null;
};

export default function Height({
    onNext,
    onBack,
    initialHeight,
    language,
}: Props) {
    const t = loadLanguage(language);
    const heightText = t.measurementInput.height;
    return (
        <MeasurementInput
            measurement="height" // The name we send to the backend request
            title={heightText.title}
            subtitle={heightText.instruction}
            label={heightText.label1}
            unit="cm"
            placeholder="e.g., 170"
            min={50}
            max={250}
            onSubmit={onNext}
            onBack={onBack}
            buttonText="Continue"
            initialValue={initialHeight}
            language={language}
        />
    );
}
