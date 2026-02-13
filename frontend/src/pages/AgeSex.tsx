import { useId, useState } from "react";
import NavigationActions from "../components/NavigationActions";
import Screen from "../components/Screen";
import { InputInstructions } from "../i18n/measurementInput";

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

    const [age, setAge] = useState(initialAge ? initialAge.toString() : "");
    const [sex, setSex] = useState<number | null>(initialSex ?? null);
    const [touchedAge, setTouchedAge] = useState(false);
    const [touchedSex, setTouchedSex] = useState(false);

    const ageNum = Number(age);
    const isNumber = age !== "" && !Number.isNaN(ageNum);

    const text = InputInstructions["ageSex"][language];

    let error: string | null | undefined = null;
    if (touchedAge) {
        if (!isNumber) {
            error = text.error1;
        } else if (ageNum < 0) {
            error = text.error2;
        } else if (ageNum > 120) {
            error = text.error3;
        }
    }

    const canContinue = isNumber && sex !== null && !error;

    function submit() {
        setTouchedAge(true);
        setTouchedSex(true);
        if (canContinue && sex !== null) {
            onNext(ageNum, sex);
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
                        onChange={(e) => setAge(e.target.value)}
                        onBlur={() => setTouchedAge(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") submit();
                        }}
                        aria-invalid={Boolean(error)}
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

                <div className="multipleChoice">
                    <button
                        type="button"
                        className={`choiceButton ${sex === 1 ? "selected" : ""}`}
                        onClick={() => {
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
            </div>

            <NavigationActions
                clickNext={submit}
                clickBack={onBack}
                disableNext={!canContinue}
            />
        </Screen>
    );
}
