import { useId, useState } from "react";
import { type MeasurementType, submitMeasurements } from "../client";
import NavigationActions from "./NavigationActions";
import Screen from "./Screen";

type Props = {
    measurement: MeasurementType;
    title: string;
    subtitle?: string;
    label: string;
    unit?: string;
    placeholder?: string;
    helpText?: string;
    min?: number;
    max?: number;
    onSubmit: (value: number) => void;
    buttonText?: string;
    onBack?: () => void; // Function that will be passed all the way from App.tsx to move back
    initialValue?: number | null;
    language: "en" | "es";
};

export default function MeasurementInput({
    measurement,
    title,
    subtitle,
    label,
    unit,
    placeholder,
    helpText,
    min,
    max,
    onSubmit,
    onBack,
    initialValue,
    language,
}: Props) {
    const MeasurementInputText = {
        en: {
            error: "Please enter a number.",
            minError: "Value must be at least",
            maxError: "Value must be at most",
        },
        es: {
            error: "Por favor, ingrese un número.",
            minError: "El valor debe ser al menos",
            maxError: "El valor debe ser como máximo",
        },
    };
    const inputId = useId();

    const errorId = useId();

    const [value, setValue] = useState(
        initialValue ? initialValue.toString() : "",
    );
    const [touched, setTouched] = useState(false);

    const n = Number(value);
    const isNumber = value !== "" && !Number.isNaN(n);

    const text = MeasurementInputText[language];

    let error: string | null = null;
    if (touched) {
        if (!isNumber) error = text.error;
        else if (min !== undefined && n < min)
            error = `${text.minError} ${min}.`;
        else if (max !== undefined && n > max)
            error = `${text.maxError} ${max}.`;
    }

    const canContinue = isNumber && !error;

    function submit() {
        setTouched(true);
        if (canContinue) {
            onSubmit(n);
            submitMeasurements(measurement, n);
        }
    }

    return (
        <Screen title={title} subtitle={subtitle}>
            <div className="field">
                <label htmlFor={inputId}>{label}</label>

                <div className="inputRow">
                    <input
                        id={inputId}
                        className="input"
                        type="text"
                        inputMode="numeric"
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => setTouched(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") submit();
                        }}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? errorId : undefined}
                    />
                    {unit && <span className="unit">{unit}</span>}
                </div>

                {helpText && <div className="help">{helpText}</div>}

                {error && (
                    <div className="error" id={errorId} role="alert">
                        {error}
                    </div>
                )}
            </div>
            <NavigationActions
                clickNext={submit}
                clickBack={onBack}
                disableNext={!canContinue}
                language={language}
            />
        </Screen>
    );
}
