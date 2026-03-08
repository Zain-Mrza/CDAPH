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
import RelativeQuestion from "./pages/diabetes_survey/Relative";
import { useNavigation } from "./navigation/useNavigation";
import "./styles/progress-bar.module.css";
import HypertensionQuestion from "./pages/diabetes_survey/HistoryOfHypertension";
import PhysicallyActiveQuestion from "./pages/diabetes_survey/PhysicallyActive";
import { submitDiabetesSurvey } from "./client";
import DiabetesSurveyReview from "./pages/diabetes_survey/diabetesSummary";
import DiabetesResults from "./pages/diabetes_survey/diabetesResult";

export default function App() {
    /* Language state */
    const [language, setLanguage] = useState<"en" | "es">("en");

    /* Measurement input states */
    const [age, setAge] = useState<number | null>(null);
    const [sex, setSex] = useState<number | null>(null);
    const [bloodPressure, setBloodPressure] = useState<{
        systolic: number;
        diastolic: number;
    } | null>(null);
    const [heightCm, setHeightCm] = useState<number | null>(null);
    const [weightKg, setWeightKg] = useState<number | null>(null);

    /* Diabetes survey states */
    const [relativeWithDiabetes, setRelativeWithDiabetes] = useState<
        boolean | null | undefined
    >(undefined);
    const [hypertensionHistory, setHypertensionHistory] = useState<
        boolean | null | undefined
    >(undefined);
    const [physicallyActive, setPhysicallyActive] = useState<
        boolean | null | undefined
    >(undefined);
    const [diabetesRiskScore, setDiabetesRiskScore] = useState<number | null>(
        null,
    );

    const {
        step,
        goNext,
        goBack,
        goSkip,
        showProgress,
        currentStepNumber,
        totalSteps,
    } = useNavigation({
        age,
        sex,
        bloodPressure,
        heightCm,
        weightKg,
        relativeWithDiabetes,
    });

    const handleDiabetesCalculation = async () => {
        const { score, risk } = await submitDiabetesSurvey({
            age,
            gender: sex,
            firstDegreeRelative: relativeWithDiabetes,
            hypertension: hypertensionHistory,
            physicallyActive: physicallyActive,
            weight: weightKg,
            height: heightCm,
        });

        setDiabetesRiskScore(risk);
    };

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

                {step === "start" && (
                    <Start onNext={goNext} language={language} />
                )}

                {step === "ageSex" && (
                    <AgeSexInput
                        initialAge={age ?? undefined}
                        initialSex={sex ?? undefined}
                        onNext={(age, sex) => {
                            setAge(age);
                            setSex(sex);
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                )}

                {step === "bpInstructions" && (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to place your arm in the blood pressure cuff"
                        onContinue={goNext}
                        onBack={goBack}
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
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                )}

                {step === "heightInstructions" && (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to use the stadiometer"
                        onContinue={goNext}
                        onBack={goBack}
                        language={language}
                        instructionType="heightInstructions"
                    />
                )}

                {step === "height" && (
                    <Height
                        initialHeight={heightCm}
                        onNext={(height) => {
                            setHeightCm(height);
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                )}

                {step === "weightInstructions" && (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to use the weight scale"
                        onContinue={goNext}
                        onBack={goBack}
                        language={language}
                        instructionType="weightInstructions"
                    />
                )}

                {step === "weight" && (
                    <Weight
                        initialWeight={weightKg}
                        onNext={(weight) => {
                            setWeightKg(weight);
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                )}

                {step === "summary" && (
                    <SummaryStep
                        age={age}
                        sex={sex}
                        bloodPressure={bloodPressure}
                        heightCm={heightCm}
                        weightKg={weightKg}
                        onNext={goNext}
                        onBack={goBack}
                        language={language}
                    />
                )}

                {step === "diabetesIntro" && (
                    <DiabetesSurveyIntro
                        onNext={goNext}
                        onBack={goBack}
                        onSkip={goSkip}
                        language={language}
                    />
                )}

                {step === "diabetesFirst" && (
                    <RelativeQuestion
                        onNext={(hasRelative) => {
                            setRelativeWithDiabetes(hasRelative);
                            goNext();
                        }}
                        onBack={goBack}
                        onSkip={goSkip}
                        language={language}
                        initialValue={relativeWithDiabetes}
                    />
                )}

                {step === "diabetesSecond" && (
                    <HypertensionQuestion
                        onNext={(answer) => {
                            setHypertensionHistory(answer);
                            goNext();
                        }}
                        onBack={goBack}
                        onSkip={goSkip}
                        language={language}
                        initialValue={hypertensionHistory}
                    />
                )}
                {step === "diabetesThird" && (
                    <PhysicallyActiveQuestion
                        onNext={(answer) => {
                            setPhysicallyActive(answer);
                            goNext();
                        }}
                        onBack={goBack}
                        onSkip={goSkip}
                        language={language}
                        initialValue={physicallyActive}
                    />
                )}

                {step === "diabetesSummary" && (
                    <DiabetesSurveyReview
                        relativeWithDiabetes={relativeWithDiabetes}
                        hypertensionHistory={hypertensionHistory}
                        physicallyActive={physicallyActive}
                        onNext={() => {
                            handleDiabetesCalculation();
                            goNext();
                            console.log(diabetesRiskScore);
                        }}
                        onBack={goBack}
                        onSkip={goSkip}
                        language={language}
                    />
                )}

                {step === "diabetesResults" && (
                    <DiabetesResults
                        language={language}
                        score={diabetesRiskScore}
                        onBack={goBack}
                        onNext={goNext}
                    />
                )}
            </div>
        </div>
    );
}
