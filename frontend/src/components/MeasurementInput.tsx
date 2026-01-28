import { useId, useState } from "react";
import Screen from "./Screen";
import Actions from "./Actions";

type Props = {
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
};

export default function MeasurementInput({
  title,
  subtitle,
  label,
  unit,
  placeholder,
  helpText,
  min,
  max,
  onSubmit,
  buttonText = "Continue",
}: Props) {
  const inputId = useId();
  const errorId = useId();

  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const n = Number(value);
  const isNumber = value !== "" && !Number.isNaN(n);

  let error: string | null = null;
  if (touched) {
    if (!isNumber) error = "Please enter a number.";
    else if (min !== undefined && n < min) error = `Value must be at least ${min}.`;
    else if (max !== undefined && n > max) error = `Value must be at most ${max}.`;
  }

  const canContinue = isNumber && !error;

  function submit() {
    setTouched(true);
    if (canContinue) onSubmit(n);
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

      <Actions>
        <button className="button" onClick={submit} disabled={!canContinue}>
          {buttonText}
        </button>
      </Actions>
    </Screen>
  );
}
