import { useId, useState } from "react";
import Screen from "../components/Screen";
import Actions from "../components/Actions";

type Props = {
  onNext: (systolic: number, diastolic: number) => void;
};

export default function BloodPressure({ onNext }: Props) {
  const sysId = useId();
  const diaId = useId();
  const errId = useId();

  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [touched, setTouched] = useState(false);

  const sys = Number(systolic);
  const dia = Number(diastolic);

  const isNum = (s: string, n: number) => s !== "" && !Number.isNaN(n);

  let error: string | null = null;
  if (touched) {
    if (!isNum(systolic, sys) || !isNum(diastolic, dia)) {
      error = "Please enter both numbers.";
    } else if (sys <= dia) {
      error = "Systolic must be higher than diastolic.";
    }
  }

  const canContinue = isNum(systolic, sys) && isNum(diastolic, dia) && !error;

  function submit() {
    setTouched(true);
    if (canContinue) onNext(sys, dia);
  }

// Want to add picture with arrows pointing from systolic/diastolic number to their corresponding fields
// Recall every bit of text will later be pulled from a dictionary with translations

  return (
    <Screen
      title="Blood Pressure"
      subtitle="Insert your upper arm in the cuff as shown in the previous video.
                Enter the values shown on the attatched monitor."
    >
      <div className="field">
        <label htmlFor={sysId}>Systolic</label>
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
        <div className="help">Top number</div>
      </div>

      <div className="field">
        <label htmlFor={diaId}>Diastolic</label>
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
        <div className="help">Bottom number</div>
      </div>

      {error && (
        <div className="error" id={errId} role="alert">
          {error}
        </div>
      )}

      <Actions>
        <button className="button" onClick={submit} disabled={!canContinue}>
          Continue
        </button>
      </Actions>
    </Screen>
  );
}
