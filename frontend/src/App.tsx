import { useState } from "react";

import Start from "./pages/Start";
import BloodPressure from "./pages/BloodPressure";
import Height from "./pages/Height";
import Weight from "./pages/Weight";

type Step = "start" | "bp" | "height" | "weight" | "done";

export default function App() {
    const [step, setStep] = useState<Step>("start");

    const [bloodPressure, setBloodPressure] = useState<{
        systolic: number;
        diastolic: number;
    } | null>(null);

    const [heightCm, setHeightCm] = useState<number | null>(null);
    const [weightKg, setWeightKg] = useState<number | null>(null);

    return (
        <div className="kioskShell">
            {step === "start" && <Start onNext={() => setStep("bp")} />}

            {step === "bp" && (
                <BloodPressure
                    onNext={(systolic, diastolic) => {
                        setBloodPressure({ systolic, diastolic });
                        setStep("height");
                    }}
                    onBack={() => {
                        setStep("start");
                    }}
                />
            )}

            {step === "height" && (
                <Height
                    onNext={(height) => {
                        setHeightCm(height);
                        setStep("weight");
                    }}
                    onBack={() => {
                        setStep("bp");
                    }}
                />
            )}

            {step === "weight" && (
                <Weight
                    onNext={(weight) => {
                        setWeightKg(weight);
                        setStep("done");
                    }}
                    onBack={() => {
                        setStep("height");
                    }}
                />
            )}

            {step === "done" && (
                <div className="kioskCard" role="region" aria-label="Summary">
                    <div className="kioskHeader">
                        <h1>Measurements Complete</h1>
                        <p>Please review the values below.</p>
                    </div>

                    <div className="summaryList">
                        <div className="summaryRow">
                            <span className="summaryLabel">Blood Pressure</span>
                            <span className="summaryValue">
                                {bloodPressure
                                    ? `${bloodPressure.systolic} / ${bloodPressure.diastolic} mmHg`
                                    : "—"}
                            </span>
                        </div>

                        <div className="summaryRow">
                            <span className="summaryLabel">Height</span>
                            <span className="summaryValue">
                                {heightCm !== null ? `${heightCm} cm` : "—"}
                            </span>
                        </div>

                        <div className="summaryRow">
                            <span className="summaryLabel">Weight</span>
                            <span className="summaryValue">
                                {weightKg !== null ? `${weightKg} kg` : "—"}
                            </span>
                        </div>
                    </div>

                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                setBloodPressure(null);
                                setHeightCm(null);
                                setWeightKg(null);
                                setStep("start");
                            }}
                        >
                            Start Over
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
