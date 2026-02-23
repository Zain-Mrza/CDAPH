import { useId, useState } from "react";
import { submitMeasurements } from "../client";
import NavigationActions from "../components/NavigationActions";
import Screen from "../components/Screen";
import { loadLanguage } from "../i18n";

/**
 * This file is a hacky solution to my inability to
 * generalize one input field. I need two fields for
 * blood pressure hence why I have to do it from the
 * bottom up in this file.
 */

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
    const sysId = useId();
    const diaId = useId();
    const errId = useId();

    const [systolic, setSystolic] = useState(
        initialSystolic ? initialSystolic.toString() : "",
    ); // Sets initial state to global if it exists (for back button)
    const [diastolic, setDiastolic] = useState(
        initialDiastolic ? initialDiastolic.toString() : "",
    ); // Same here
    const [touched, setTouched] = useState(false);

    const sys = Number(systolic);
    const dia = Number(diastolic);

    const isNum = (s: string, n: number) => s !== "" && !Number.isNaN(n);

    const t = loadLanguage(language);
    const bpText = t.measurementInput.bp;

    let error: string | null | undefined = null;
    if (touched) {
        if (!isNum(systolic, sys) || !isNum(diastolic, dia)) {
            error = bpText.error1;
        } else if (sys <= dia) {
            error = bpText.error2;
        }
    }

    const canContinue = isNum(systolic, sys) && isNum(diastolic, dia) && !error;

    function submit() {
        setTouched(true);
        if (canContinue) {
            onNext(sys, dia);
            submitMeasurements("bp", `${sys}/${dia}`);
        }
    }

    // Want to add picture with arrows pointing from systolic/diastolic number to their corresponding fields
    // Recall every bit of text will later be pulled from a dictionary with translations

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
                        onChange={(e) => setSystolic(e.target.value)}
                        onBlur={() => setTouched(true)}
                        aria-invalid={Boolean(error)}
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
                        onChange={(e) => setDiastolic(e.target.value)}
                        onBlur={() => setTouched(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") submit();
                        }}
                        aria-invalid={Boolean(error)}
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

            <NavigationActions
                clickNext={submit}
                disableNext={!canContinue}
                clickBack={onBack}
                language={language}
            />
        </Screen>
    );
}
