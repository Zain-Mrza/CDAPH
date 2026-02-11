import { useId, useState } from "react";
import NavigationActions from "../components/NavigationActions";
import Screen from "../components/Screen";

type Props = {
    onNext: (age: number, sex: number) => void;
    onBack?: () => void;
    initialAge?: number;
    initialSex?: number;
};

export default function AgeSexInput({
    onNext,
    onBack,
    initialAge,
    initialSex,
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

    let error: string | null = null;
    if (touchedAge) {
        if (!isNumber) {
            error = "Please enter a number.";
        } else if (ageNum < 0) {
            error = "Age must be at least 0.";
        } else if (ageNum > 120) {
            error = "Age must be at most 120.";
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
        <Screen
            title="Personal Information"
            subtitle="Please provide your age and biological sex"
        >
            <div className="field">
                <label htmlFor={ageId}>Age</label>

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
                    <span className="unit">years</span>
                </div>

                {error && (
                    <div className="error" id={errorId} role="alert">
                        {error}
                    </div>
                )}
            </div>

            <div className="field">
                <label htmlFor={sexId}>Biological Sex</label>

                <div className="multipleChoice">
                    <button
                        type="button"
                        className={`choiceButton ${sex === 1 ? "selected" : ""}`}
                        onClick={() => {
                            setSex(1);
                            setTouchedSex(true);
                        }}
                    >
                        Male
                    </button>
                    <button
                        type="button"
                        className={`choiceButton ${sex === 2 ? "selected" : ""}`}
                        onClick={() => {
                            setSex(2);
                            setTouchedSex(true);
                        }}
                    >
                        Female
                    </button>
                    <button
                        type="button"
                        className={`choiceButton ${sex === 3 ? "selected" : ""}`}
                        onClick={() => {
                            setSex(3);
                            setTouchedSex(true);
                        }}
                    >
                        Intersex
                    </button>
                    <button
                        type="button"
                        className={`choiceButton ${sex === 4 ? "selected" : ""}`}
                        onClick={() => {
                            setSex(4);
                            setTouchedSex(true);
                        }}
                    >
                        Prefer not to say
                    </button>
                </div>

                {touchedSex && sex === null && (
                    <div className="error" role="alert">
                        Please select an option.
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
