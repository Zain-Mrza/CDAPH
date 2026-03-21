import { useId, useState } from "react";
import { submitMeasurements } from "../client";
import NavigationActions from "../components/NavigationActions";
import Screen from "../components/Screen";
import { loadLanguage } from "../i18n";

type Props = {
    onNext: (age: number, sex: number) => void;
    onBack?: () => void;
    initialAge?: number;
    initialSex?: number;
    language: "en" | "es";
};

export default function AgeSexInput({
    onNext,
    onBack,
    initialAge,
    initialSex,
    language,
}: Props) {
    const ageId = useId();
    const sexId = useId();
    const errorId = useId();

    const [age, setAge] = useState(
        initialAge !== undefined ? initialAge.toString() : "",
    );
    const [sex, setSex] = useState<number | null>(initialSex ?? null);
    const [touchedAge, setTouchedAge] = useState(false);
    const [touchedSex, setTouchedSex] = useState(false);
    const [ageEdited, setAgeEdited] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const normalizedAge = age.trim();
    const isWholeNumber =
        normalizedAge !== "" && /^\d+$/.test(normalizedAge);
    const ageNum = isWholeNumber ? Number(normalizedAge) : Number.NaN;

    const t = loadLanguage(language);
    const text = t.measurementInput.ageSex;

    let validationError: string | null | undefined = null;
    if (!isWholeNumber) {
        validationError = text.error1;
    } else if (ageNum < 18) {
        validationError = text.error2;
    } else if (ageNum > 120) {
        validationError = text.error3;
    }

    const shouldShowAgeError = touchedAge || ageEdited;
    const error = shouldShowAgeError ? validationError : null;
    const canContinue = isWholeNumber && sex !== null && !validationError;

    async function submit() {
        setTouchedAge(true);
        setTouchedSex(true);

        if (!canContinue || sex === null || isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            await submitMeasurements("age", ageNum);
            await submitMeasurements("sex", sex);
            onNext(ageNum, sex);
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
        <Screen title={text.title} subtitle={text.instruction}>
            <div className="field">
                <label htmlFor={ageId}>{text.label1}</label>

                <div className="inputRow">
                    <input
                        id={ageId}
                        className="input"
                        type="text"
                        inputMode="numeric"
                        value={age}
                        placeholder="e.g., 25"
                        onChange={(e) => {
                            setAgeEdited(true);
                            setSubmitError(null);
                            setAge(e.target.value);
                        }}
                        onBlur={() => setTouchedAge(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                void submit();
                            }
                        }}
                        aria-invalid={Boolean(error) || Boolean(submitError)}
                        aria-describedby={error ? errorId : undefined}
                    />
                    <span className="unit">{text.helper5}</span>
                </div>

                {error && (
                    <div className="error" id={errorId} role="alert">
                        {error}
                    </div>
                )}
            </div>

            <div className="field">
                <label htmlFor={sexId}>{text.label2}</label>

                <div className="multipleChoice" id={sexId}>
                    <button
                        type="button"
                        className={`choiceButton ${sex === 1 ? "selected" : ""}`}
                        onClick={() => {
                            setSubmitError(null);
                            setSex(1);
                            setTouchedSex(true);
                        }}
                    >
                        {text.helper1}
                    </button>
                    <button
                        type="button"
                        className={`choiceButton ${sex === 2 ? "selected" : ""}`}
                        onClick={() => {
                            setSubmitError(null);
                            setSex(2);
                            setTouchedSex(true);
                        }}
                    >
                        {text.helper2}
                    </button>
                    <button
                        type="button"
                        className={`choiceButton ${sex === 3 ? "selected" : ""}`}
                        onClick={() => {
                            setSubmitError(null);
                            setSex(3);
                            setTouchedSex(true);
                        }}
                    >
                        {text.helper3}
                    </button>
                    <button
                        type="button"
                        className={`choiceButton ${sex === 4 ? "selected" : ""}`}
                        onClick={() => {
                            setSubmitError(null);
                            setSex(4);
                            setTouchedSex(true);
                        }}
                    >
                        {text.helper4}
                    </button>
                </div>

                {touchedSex && sex === null && (
                    <div className="error" role="alert">
                        {text.error4}
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
