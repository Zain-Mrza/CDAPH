import { useEffect, useId, useState } from "react";
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
    onBack?: () => void;
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
    const measurementInputText = {
        en: {
            error: "Please enter a whole number.",
            minError: "Value must be at least",
            maxError: "Value must be at most",
            saveError: "We couldn't save this measurement. Please try again.",
        },
        es: {
            error: "Por favor, ingrese un numero entero.",
            minError: "El valor debe ser al menos",
            maxError: "El valor debe ser como maximo",
            saveError: "No pudimos guardar esta medicion. Intentelo de nuevo.",
        },
    };

    const inputId = useId();
    const errorId = useId();
    const text = measurementInputText[language];

    const [value, setValue] = useState(() =>
        initialValue !== null && initialValue !== undefined
            ? initialValue.toString()
            : "",
    );
    const [touched, setTouched] = useState(false);
    const [userEdited, setUserEdited] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (userEdited) return;
        if (initialValue === null || initialValue === undefined) return;

        const next = initialValue.toString();

        if (value !== next) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setValue(next);
        }
    }, [initialValue, userEdited, value]);

    const normalizedValue = value.trim();
    const isWholeNumber =
        normalizedValue !== "" && /^\d+$/.test(normalizedValue);
    const parsedValue = isWholeNumber ? Number(normalizedValue) : Number.NaN;

    let validationError: string | null = null;

    if (!isWholeNumber) validationError = text.error;
    else if (min !== undefined && parsedValue < min)
        validationError = `${text.minError} ${min}.`;
    else if (max !== undefined && parsedValue > max)
        validationError = `${text.maxError} ${max}.`;

    const shouldShowError = touched || userEdited;
    const error = shouldShowError ? validationError : null;
    const canContinue = isWholeNumber && !validationError;

    async function submit() {
        setTouched(true);

        if (!canContinue || isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            await submitMeasurements(measurement, parsedValue);
            onSubmit(parsedValue);
        } catch (err) {
            setSubmitError(
                err instanceof Error && err.message
                    ? err.message
                    : text.saveError,
            );
        } finally {
            setIsSubmitting(false);
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
                        onChange={(e) => {
                            setUserEdited(true);
                            setSubmitError(null);
                            setValue(e.target.value);
                        }}
                        onBlur={() => setTouched(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                void submit();
                            }
                        }}
                        aria-invalid={Boolean(error) || Boolean(submitError)}
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

                {submitError && (
                    <div className="error" role="alert">
                        {submitError}
                    </div>
                )}
            </div>

            <NavigationActions
                clickNext={() => {
                    void submit();
                }}
                clickBack={onBack}
                disableNext={!canContinue || isSubmitting}
                language={language}
            />
        </Screen>
    );
}
