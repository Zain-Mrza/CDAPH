import { useId, useState } from "react";
import { submitMeasurements } from "../client";
import NavigationActions from "../components/NavigationActions";
import Screen from "../components/Screen";
import { loadLanguage } from "../i18n";

type Props = {
    onNext: (systolic: number, diastolic: number) => void;
    language: "en" | "es";
    onBack?: () => void;
    initialSystolic?: number;
    initialDiastolic?: number;
};

export default function BloodPressure({
    onNext,
    onBack,
    initialSystolic,
    initialDiastolic,
    language,
}: Props) {
    const systolicRange = { min: 70, max: 250 };
    const diastolicRange = { min: 40, max: 150 };
    const sysId = useId();
    const diaId = useId();
    const errId = useId();

    const [systolic, setSystolic] = useState(
        initialSystolic ? initialSystolic.toString() : "",
    );
    const [diastolic, setDiastolic] = useState(
        initialDiastolic ? initialDiastolic.toString() : "",
    );
    const [touched, setTouched] = useState(false);
    const [systolicEdited, setSystolicEdited] = useState(false);
    const [diastolicEdited, setDiastolicEdited] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const normalizedSystolic = systolic.trim();
    const normalizedDiastolic = diastolic.trim();
    const isWholeNumber = (value: string) =>
        value !== "" && /^\d+$/.test(value);
    const sys = isWholeNumber(normalizedSystolic)
        ? Number(normalizedSystolic)
        : Number.NaN;
    const dia = isWholeNumber(normalizedDiastolic)
        ? Number(normalizedDiastolic)
        : Number.NaN;
    const hasValidSystolic = !Number.isNaN(sys);
    const hasValidDiastolic = !Number.isNaN(dia);

    const t = loadLanguage(language);
    const bpText = t.measurementInput.bp;

    let validationError: string | null | undefined = null;
    if (!hasValidSystolic || !hasValidDiastolic) {
        validationError = bpText.error1;
    } else if (sys < systolicRange.min || sys > systolicRange.max) {
        validationError = bpText.error3;
    } else if (dia < diastolicRange.min || dia > diastolicRange.max) {
        validationError = bpText.error4;
    } else if (sys <= dia) {
        validationError = bpText.error2;
    }

    const shouldShowError = touched || systolicEdited || diastolicEdited;
    const error = shouldShowError ? validationError : null;
    const canContinue =
        hasValidSystolic && hasValidDiastolic && !validationError;

    async function submit() {
        setTouched(true);

        if (!canContinue || isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            await submitMeasurements("bp", `${sys}/${dia}`);
            onNext(sys, dia);
        } catch (err) {
            setSubmitError(
                err instanceof Error && err.message
                    ? err.message
                    : bpText.saveError,
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Screen title={bpText.title} subtitle={bpText.instruction}>
            <div className="field">
                <label htmlFor={sysId}>{bpText.label1}</label>
                <div className="inputRow">
                    <input
                        id={sysId}
                        className="input"
                        type="text"
                        inputMode="numeric"
                        value={systolic}
                        placeholder="e.g., 120"
                        onChange={(e) => {
                            setSystolicEdited(true);
                            setSubmitError(null);
                            setSystolic(e.target.value);
                        }}
                        onBlur={() => setTouched(true)}
                        aria-invalid={Boolean(error) || Boolean(submitError)}
                        aria-describedby={error ? errId : undefined}
                    />
                    <span className="unit">mmHg</span>
                </div>
                <div className="help">{bpText.helper1}</div>
            </div>

            <div className="field">
                <label htmlFor={diaId}>{bpText.label2}</label>
                <div className="inputRow">
                    <input
                        id={diaId}
                        className="input"
                        type="text"
                        inputMode="numeric"
                        value={diastolic}
                        placeholder="e.g., 80"
                        onChange={(e) => {
                            setDiastolicEdited(true);
                            setSubmitError(null);
                            setDiastolic(e.target.value);
                        }}
                        onBlur={() => setTouched(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                void submit();
                            }
                        }}
                        aria-invalid={Boolean(error) || Boolean(submitError)}
                        aria-describedby={error ? errId : undefined}
                    />
                    <span className="unit">mmHg</span>
                </div>
                <div className="help">{bpText.helper2}</div>
            </div>

            {error && (
                <div className="error" id={errId} role="alert">
                    {error}
                </div>
            )}

            {submitError && (
                <div className="error" role="alert">
                    {submitError}
                </div>
            )}

            <NavigationActions
                clickNext={() => {
                    void submit();
                }}
                disableNext={!canContinue || isSubmitting}
                clickBack={onBack}
                language={language}
            />
        </Screen>
    );
}
