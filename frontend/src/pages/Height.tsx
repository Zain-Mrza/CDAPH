import MeasurementInput from "../components/MeasurementInput";
import { loadLanguage } from "../i18n";
import { useState, useEffect } from "react";

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
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(async () => {
            // Maybe rate limit
            const res = await fetch("/api/stadiometer");
            const data = await res.json();

            if (data.status === "ready") {
                setHeight(data.height_cm); // height = whatever is passed from Arduino
                console.log(data.height_cm);
                clearInterval(interval);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

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
            initialValue={initialHeight ?? height}
            language={language}
        />
    );
}
