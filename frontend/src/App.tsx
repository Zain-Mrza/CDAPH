import { useState } from "react";
import stockVideo from "./assets/stock.mp4";
import { submitDiabetesSurvey, submitMiniEatSurvey } from "./client";
import InstructionWithVideo from "./components/InstructionWithVideo";
import LanguageSelector from "./components/LanguageSelector";
import ProgressBar from "./components/ProgressBar";
import { useNavigation } from "./navigation/useNavigation";
import AgeSexInput from "./pages/AgeSex";
import BloodPressure from "./pages/BloodPressure";
import DiabetesResults from "./pages/diabetes_survey/diabetesResult";
import DiabetesSurveyReview from "./pages/diabetes_survey/diabetesSummary";
import DiabetesSurveyIntro from "./pages/diabetes_survey/DiabetesSurveyIntro";
import HypertensionQuestion from "./pages/diabetes_survey/HistoryOfHypertension";
import PhysicallyActiveQuestion from "./pages/diabetes_survey/PhysicallyActive";
import RelativeQuestion from "./pages/diabetes_survey/Relative";
import Height from "./pages/Height";
import MiniEatIntro from "./pages/mini_eat/MiniEatIntro";
import MiniEatQuestion from "./pages/mini_eat/MiniEatQuestion";
import MiniEatResult from "./pages/mini_eat/MiniEatResult";
import MiniEatSummary from "./pages/mini_eat/MiniEatSummary";
import Start from "./pages/Start";
import SummaryStep from "./pages/Summary";
import Weight from "./pages/Weight";
import SnellenChart from "./pages/snellen_chart/chart";

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
        boolean | "unknown" | "unavailable"
    >("unavailable");
    const [hypertensionHistory, setHypertensionHistory] = useState<
        boolean | "unknown" | "unavailable"
    >("unavailable");
    const [physicallyActive, setPhysicallyActive] = useState<
        boolean | "unknown" | "unavailable"
    >("unavailable");
    const [diabetesRiskScore, setDiabetesRiskScore] = useState<number | null>(
        null,
    );
    const [diabetesRisk, setDiabetesRisk] = useState<string | null>(null);
    const [diabetesRiskPossible, setDiabetesRiskPossible] = useState<
        number | null
    >(null);
    const [diabetesSurveySkipped, setDiabetesSurveySkipped] = useState(false);
    const [miniEatAnswers, setMiniEatAnswers] = useState<Array<number | null>>(
        Array.from({ length: 9 }, () => null),
    );
    const [miniEatScore, setMiniEatScore] = useState<number | null>(null);
    const [miniEatClassification, setMiniEatClassification] = useState<
        "unhealthy" | "intermediate" | "healthy" | null
    >(null);
    const [miniEatMaxScore, setMiniEatMaxScore] = useState<number>(90);

    const {
        step,
        goNext,
        goBack,
        showProgress,
        currentStepNumber,
        totalSteps,
        goSkip,
    } = useNavigation();

    const resetDiabetesResults = () => {
        setDiabetesRiskScore(null);
        setDiabetesRisk(null);
        setDiabetesRiskPossible(null);
    };

    const clearDiabetesSkippedState = () => {
        setDiabetesSurveySkipped(false);
    };

    const isDiabetesSurveyUnanswered =
        relativeWithDiabetes === "unavailable" &&
        hypertensionHistory === "unavailable" &&
        physicallyActive === "unavailable";

    const handleDiabetesSkip = () => {
        setDiabetesSurveySkipped(true);
        resetDiabetesResults();
        goSkip();
    };

    const handleDiabetesCalculation = async () => {
        clearDiabetesSkippedState();

        try {
            const { score, risk, possible } = await submitDiabetesSurvey({
                firstDegreeRelative: relativeWithDiabetes,
                hypertension: hypertensionHistory,
                physicallyActive: physicallyActive,
            });

            setDiabetesRiskScore(score);
            setDiabetesRisk(risk);
            setDiabetesRiskPossible(possible);
        } catch {
            resetDiabetesResults();
        }
    };

    const updateMiniEatAnswer = (questionIndex: number, answer: number) => {
        setMiniEatAnswers((currentAnswers) =>
            currentAnswers.map((currentAnswer, index) =>
                index === questionIndex ? answer : currentAnswer,
            ),
        );
    };

    const handleMiniEatCalculation = async () => {
        if (miniEatAnswers.some((answer) => answer === null)) {
            return;
        }

        const { score, classification, maxScore } = await submitMiniEatSurvey({
            answers: miniEatAnswers as number[],
        });

        setMiniEatScore(score);
        setMiniEatClassification(classification);
        setMiniEatMaxScore(maxScore);
    };

    const miniEatStepMatch = step.match(/^miniEatQuestion(\d)$/);

    if (miniEatStepMatch) {
        const questionIndex = Number(miniEatStepMatch[1]) - 1;

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
                            currentStepId={step}
                            language={language}
                        />
                    )}

                    <MiniEatQuestion
                        key={questionIndex}
                        questionIndex={questionIndex}
                        initialValue={miniEatAnswers[questionIndex]}
                        onNext={(answer) => {
                            updateMiniEatAnswer(questionIndex, answer);
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                </div>
            </div>
        );
    }

    const stepContent = (() => {
        switch (step) {
            case "start":
                return <Start onNext={goNext} language={language} />;
            case "ageSex":
                return (
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
                );
            case "bpInstructions":
                return (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to place your arm in the blood pressure cuff"
                        onContinue={goNext}
                        onBack={goBack}
                        language={language}
                        instructionType="bpInstructions"
                    />
                );
            case "bp":
                return (
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
                );
            case "heightInstructions":
                return (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to use the stadiometer"
                        onContinue={goNext}
                        onBack={goBack}
                        language={language}
                        instructionType="heightInstructions"
                    />
                );
            case "height":
                return (
                    <Height
                        initialHeight={heightCm}
                        onNext={(height) => {
                            setHeightCm(height);
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                );
            case "weightInstructions":
                return (
                    <InstructionWithVideo
                        videoSrc={stockVideo}
                        videoAlt="How to use the weight scale"
                        onContinue={goNext}
                        onBack={goBack}
                        language={language}
                        instructionType="weightInstructions"
                    />
                );
            case "weight":
                return (
                    <Weight
                        initialWeight={weightKg}
                        onNext={(weight) => {
                            setWeightKg(weight);
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                );
            case "summary":
                return (
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
                );
            case "diabetesIntro":
                return (
                    <DiabetesSurveyIntro
                        onNext={goNext}
                        onBack={goBack}
                        onSkip={handleDiabetesSkip}
                        language={language}
                    />
                );
            case "diabetesFirst":
                return (
                    <RelativeQuestion
                        onNext={(hasRelative) => {
                            clearDiabetesSkippedState();
                            setRelativeWithDiabetes(hasRelative);
                            goNext();
                        }}
                        onBack={goBack}
                        onSkip={handleDiabetesSkip}
                        language={language}
                        initialValue={relativeWithDiabetes}
                    />
                );
            case "diabetesSecond":
                return (
                    <HypertensionQuestion
                        onNext={(answer) => {
                            clearDiabetesSkippedState();
                            setHypertensionHistory(answer);
                            goNext();
                        }}
                        onBack={goBack}
                        onSkip={handleDiabetesSkip}
                        language={language}
                        initialValue={hypertensionHistory}
                    />
                );
            case "diabetesThird":
                return (
                    <PhysicallyActiveQuestion
                        onNext={(answer) => {
                            clearDiabetesSkippedState();
                            setPhysicallyActive(answer);
                            goNext();
                        }}
                        onBack={goBack}
                        onSkip={handleDiabetesSkip}
                        language={language}
                        initialValue={physicallyActive}
                    />
                );
            case "diabetesSummary":
                return (
                    <DiabetesSurveyReview
                        relativeWithDiabetes={relativeWithDiabetes}
                        hypertensionHistory={hypertensionHistory}
                        physicallyActive={physicallyActive}
                        onNext={async () => {
                            if (isDiabetesSurveyUnanswered) {
                                setDiabetesSurveySkipped(true);
                                resetDiabetesResults();
                                goNext();
                                return;
                            }

                            clearDiabetesSkippedState();
                            await handleDiabetesCalculation();
                            goNext();
                        }}
                        onBack={goBack}
                        onSkip={handleDiabetesSkip}
                        language={language}
                    />
                );
            case "diabetesResults":
                return (
                    <DiabetesResults
                        language={language}
                        score={diabetesRiskScore}
                        risk={diabetesRisk}
                        possible={diabetesRiskPossible}
                        wasSkipped={diabetesSurveySkipped}
                        onBack={goBack}
                        onNext={goNext}
                    />
                );
            case "miniEatIntro":
                return (
                    <MiniEatIntro
                        onNext={goNext}
                        onBack={goBack}
                        language={language}
                    />
                );
            case "miniEatSummary":
                return (
                    <MiniEatSummary
                        answers={miniEatAnswers}
                        onNext={() => {
                            void handleMiniEatCalculation();
                            goNext();
                        }}
                        onBack={goBack}
                        language={language}
                    />
                );
            case "miniEatResults":
                return (
                    <MiniEatResult
                        score={miniEatScore}
                        classification={miniEatClassification}
                        maxScore={miniEatMaxScore}
                        language={language}
                        onBack={goBack}
                        onNext={() => {
                            goNext();
                        }}
                    />
                );
            case "snellenChart":
                return <SnellenChart />;
            default:
                return null;
        }
    })();

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
                        currentStepId={step}
                        language={language}
                    />
                )}
                {stepContent}
            </div>
        </div>
    );
}
