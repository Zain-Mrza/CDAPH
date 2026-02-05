import { useId, useState } from "react";
import NavigationActions from "./NavigationActions";
import Screen from "./Screen";

type Props = {
    title: string;
    subtitle?: string;
    label1: string;
    label2: string;
    unit1?: string;
    placeholder1?: string;
    helpText?: string;
    min1?: number;
    max1?: number;
    options2: { value: number; label: string }[];
    onSubmit: (value1: number, value2: number) => void;
    onBack?: () => void;
};

export default function DualMeasurementInput({
    title,
    subtitle,
    label1,
    label2,
    unit1,
    placeholder1,
    helpText,
    min1,
    max1,
    options2,
    onSubmit,
    onBack,
}: Props) {
    const input1Id = useId();
    const input2Id = useId();
    const error1Id = useId();

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState<number | null>(null);
    const [touched1, setTouched1] = useState(false);
    const [touched2, setTouched2] = useState(false);

    const n1 = Number(value1);
    const isNumber1 = value1 !== "" && !Number.isNaN(n1);

    let error1: string | null = null;
    if (touched1) {
        if (!isNumber1) error1 = "Please enter a number.";
        else if (min1 !== undefined && n1 < min1)
            error1 = `Value must be at least ${min1}.`;
        else if (max1 !== undefined && n1 > max1)
            error1 = `Value must be at most ${max1}.`;
    }

    const canContinue = isNumber1 && value2 !== null && !error1;

    function submit() {
        setTouched1(true);
        setTouched2(true);
        if (canContinue && value2 !== null) {
            onSubmit(n1, value2);
        }
    }

    return (
        <Screen title={title} subtitle={subtitle}>
            <div className="field">
                <label htmlFor={input1Id}>{label1}</label>

                <div className="inputRow">
                    <input
                        id={input1Id}
                        className="input"
                        type="text"
                        inputMode="numeric"
                        value={value1}
                        placeholder={placeholder1}
                        onChange={(e) => setValue1(e.target.value)}
                        onBlur={() => setTouched1(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") submit();
                        }}
                        aria-invalid={Boolean(error1)}
                        aria-describedby={error1 ? error1Id : undefined}
                    />
                    {unit1 && <span className="unit">{unit1}</span>}
                </div>

                {error1 && (
                    <div className="error" id={error1Id} role="alert">
                        {error1}
                    </div>
                )}
            </div>

            <div className="field">
                <label htmlFor={input2Id}>{label2}</label>

                <div className="multipleChoice">
                    {options2.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            className={`choiceButton ${value2 === option.value ? "selected" : ""}`}
                            onClick={() => {
                                setValue2(option.value);
                                setTouched2(true);
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                {touched2 && value2 === null && (
                    <div className="error" role="alert">
                        Please select an option.
                    </div>
                )}
            </div>

            {helpText && <div className="help">{helpText}</div>}

            <NavigationActions
                clickNext={submit}
                clickBack={onBack}
                disableNext={!canContinue}
            />
        </Screen>
    );
}
