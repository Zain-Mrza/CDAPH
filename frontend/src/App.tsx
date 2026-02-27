import { useState } from "react";
import stockVideo from "./assets/stock.mp4";
import InstructionWithVideo from "./components/InstructionWithVideo";
import LanguageSelector from "./components/LanguageSelector";
import ProgressBar from "./components/ProgressBar";
import AgeSexInput from "./pages/AgeSex";
import BloodPressure from "./pages/BloodPressure";
import DiabetesSurveyIntro from "./pages/diabetes_survey/DiabetesSurveyIntro";
import Height from "./pages/Height";
import Start from "./pages/Start";
import SummaryStep from "./pages/Summary";
import Weight from "./pages/Weight";
import RelativeWithDiabetes from "./pages/diabetes_survey/Relative";
import "./styles/progress-bar.module.css";

type Step =
    | "start"
    | "ageSex"
    | "bpInstructions"
    | "bp"
    | "heightInstructions"
    | "height"
    | "weightInstructions"
    | "weight"
    | "summary"
    | "diabetesIntro"
    | "diabetesFirst";

// Helper function to get step number
function getStepNumber(step: Step): number {
    const stepMap: Record<Step, number> = {
        start: 0,
        ageSex: 1,
        bpInstructions: 2,
        bp: 2,
        heightInstructions: 3,
        height: 3,
        weightInstructions: 4,
        weight: 4,
        summary: 5,
        diabetesIntro: 6,
        diabetesFirst: 7,
    };
    return stepMap[step];
}

export default function App() {
    const [language, setLanguage] = useState<"en" | "es">("en");
    const [step, setStep] = useState<Step>("start");

    const [age, setAge] = useState<number | null>(null);
    const [sex, setSex] = useState<number | null>(null);

    const [bloodPressure, setBloodPressure] = useState<{
        systolic: number;
        diastolic: number;
    } | null>(null);

    const [heightCm, setHeightCm] = useState<number | null>(null);
    const [weightKg, setWeightKg] = useState<number | null>(null);

    const currentStepNumber = getStepNumber(step);
    const totalSteps = 7;
    const showProgress = step !== "start";

    return (
        <div className="kioskShell">
            <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
            />

            <div className="kioskContent">
                {showProgress && (
                    <ProgressBar
                        currentStep={currentStepNumber}
                        totalSteps={totalSteps}
                    />
                )}
                {step === "start" && <Start onNext={() => setStep("ageSex")} />}
                {step === "ageSex" && (
                    <AgeSexInput
                        initialAge={age ?? undefined}
                        initialSex={sex ?? undefined}
                        onNext={(age, sex) => {
                            setAge(age);
                            setSex(sex);
                            setStep("bpInstructions");
                        }}
                        onBack={() => {
                            setStep("start");
                        }}
                        language={language}
                    />
                )}
                {step === "bpInstructions" && (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to place your arm in the blood pressure cuff"
                        onContinue={() => setStep("bp")}
                        onBack={() => setStep("ageSex")}
                        language={language}
                        instructionType="bpInstructions"
                    />
                )}
                {step === "bp" && (
                    <BloodPressure
                        initialSystolic={bloodPressure?.systolic}
                        initialDiastolic={bloodPressure?.diastolic}
                        onNext={(systolic, diastolic) => {
                            setBloodPressure({ systolic, diastolic });
                            setStep("heightInstructions");
                        }}
                        onBack={() => {
                            setStep("bpInstructions");
                        }}
                        language={language}
                    />
                )}
                {step === "heightInstructions" && (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to use the stadiometer"
                        onContinue={() => setStep("height")}
                        onBack={() => setStep("bp")}
                        language={language}
                        instructionType="heightInstructions"
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
                        language={language}
                        initialHeight={heightCm}
                    />
                )}
                {step === "weightInstructions" && (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to use the weight scale"
                        onContinue={() => setStep("weight")}
                        onBack={() => setStep("height")}
                        language={language}
                        instructionType="weightInstructions"
                    />
                )}
                {step === "weight" && (
                    <Weight
                        onNext={(weight) => {
                            setWeightKg(weight);
                            setStep("summary");
                        }}
                        onBack={() => {
                            setStep("weightInstructions");
                        }}
                        language={language}
                        initialWeight={weightKg}
                    />
                )}
                {step === "summary" && (
                    <SummaryStep
                        age={age}
                        sex={sex}
                        bloodPressure={bloodPressure}
                        heightCm={heightCm}
                        weightKg={weightKg}
                        onNext={() => setStep("diabetesIntro")}
                        onBack={() => setStep("weight")}
                        language={language}
                    />
                )}
                {step === "diabetesIntro" && (
                    <DiabetesSurveyIntro
                        onBack={() => setStep("summary")}
                        onNext={() => setStep("diabetesFirst")}
                        onSkip={() => setStep("summary")}
                        language={language}
                    />
                )}
                {step === "diabetesFirst" && (
                    <RelativeWithDiabetes
                        onBack={() => setStep("diabetesIntro")}
                        onNext={() => setStep("summary")}
                        onSkip={() => setStep("summary")}
                        language={language}
                    />
                )}
            </div>
        </div>
    );
}
