import { useState } from "react";

import stockVideo from "./assets/stock.mp4";
import InstructionWithVideo from "./components/InstructionWithVideo";
import AgeSexInput from "./pages/AgeSex";
import BloodPressure from "./pages/BloodPressure";
import Height from "./pages/Height";
import Start from "./pages/Start";
import Weight from "./pages/Weight";

type Step =
    | "start"
    | "ageSex"
    | "bpInstructions"
    | "bp"
    | "heightInstructions"
    | "height"
    | "weightInstructions"
    | "weight"
    | "done";

export default function App() {
    const [step, setStep] = useState<Step>("start");

    const [age, setAge] = useState<number | null>(null);
    const [sex, setSex] = useState<number | null>(null);

    const [bloodPressure, setBloodPressure] = useState<{
        systolic: number;
        diastolic: number;
    } | null>(null);

    const [heightCm, setHeightCm] = useState<number | null>(null);
    const [weightKg, setWeightKg] = useState<number | null>(null);

    return (
        <div className="kioskShell">
            {step === "start" && <Start onNext={() => setStep("ageSex")} />}

            {step === "ageSex" && (
                <AgeSexInput
                    onNext={(age, sex) => {
                        setAge(age);
                        setSex(sex);
                        setStep("bpInstructions");
                    }}
                    onBack={() => {
                        setStep("start");
                    }}
                />
            )}

            {step === "bpInstructions" && (
                <InstructionWithVideo
                    title="Thank You!"
                    instructionText="Please place your left arm in the blood pressure cuff as shown below. Enter your results in the next page"
                    videoSrc={stockVideo}
                    videoAlt="How to place your arm in the blood pressure cuff"
                    onContinue={() => setStep("bp")}
                    onBack={() => setStep("ageSex")}
                />
            )}

            {step === "bp" && (
                <BloodPressure
                    onNext={(systolic, diastolic) => {
                        setBloodPressure({ systolic, diastolic });
                        setStep("heightInstructions");
                    }}
                    onBack={() => {
                        setStep("bpInstructions");
                    }}
                />
            )}

            {step === "heightInstructions" && (
                <InstructionWithVideo
                    title="Thank You!"
                    instructionText="Please move to the height measuring device behind you. Press the button and allow your measurement to be taken."
                    videoSrc={stockVideo}
                    videoAlt="How to use the stadiometer"
                    onContinue={() => setStep("height")}
                    onBack={() => setStep("bp")}
                />
            )}

            {step === "height" && (
                <Height
                    onNext={(height) => {
                        setHeightCm(height);
                        setStep("weightInstructions");
                    }}
                    onBack={() => {
                        setStep("heightInstructions");
                    }}
                />
            )}

            {step === "weightInstructions" && (
                <InstructionWithVideo
                    title="Thank You!"
                    instructionText="Please move to the weight scale and stand on it. Continue standing until your weight is acquired"
                    videoSrc={stockVideo}
                    videoAlt="How to use the weight scale"
                    onContinue={() => setStep("weight")}
                    onBack={() => setStep("height")}
                />
            )}

            {step === "weight" && (
                <Weight
                    onNext={(weight) => {
                        setWeightKg(weight);
                        setStep("done");
                    }}
                    onBack={() => {
                        setStep("weightInstructions");
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
                            <span className="summaryLabel">Age</span>
                            <span className="summaryValue">
                                {age !== null ? `${age} years` : "—"}
                            </span>
                        </div>

                        <div className="summaryRow">
                            <span className="summaryLabel">Biological Sex</span>
                            <span className="summaryValue">
                                {sex !== null
                                    ? sex === 1
                                        ? "Male"
                                        : "Female"
                                    : "—"}
                            </span>
                        </div>

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
                                setAge(null);
                                setSex(null);
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
