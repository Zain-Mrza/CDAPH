import { useState } from "react";
import NavigationActions from "../../components/NavigationActions";
import SurveyQuestion from "../../components/SurveyQuestion";
import { loadLanguage } from "../../i18n";

type Props = {
    questionIndex: number;
    initialValue?: number | null;
    onNext?: (value: number) => void;
    onBack?: () => void;
    onSkip?: () => void;
    language: "en" | "es";
};

export default function MiniEatQuestion({
    questionIndex,
    initialValue = null,
    onNext,
    onBack,
    onSkip,
    language,
}: Props) {
    const [answer, setAnswer] = useState<number | null>(initialValue);
    const t = loadLanguage(language);
    const text = t.miniEatSurvey.questions;
    const question = text.items[questionIndex];
    const totalQuestions = text.items.length;
    const isLastQuestion = questionIndex === totalQuestions - 1;
    const selectId = `mini-eat-question-${questionIndex + 1}`;
    const instructionId = `${selectId}-instruction`;

    return (
        <SurveyQuestion
            question={question.prompt}
            questionNumber={questionIndex + 1}
            maxQuestionNumber={totalQuestions}
            onSkip={onSkip}
            skipLabel={text.skipLabel}
            questionCounterLabel={text.questionCounter(
                questionIndex + 1,
                totalQuestions,
            )}
            language={language}
        >
            <div className="miniEatQuestionLayout">
                {/* Begin left-hand instructions*/}
                <div className="miniEatQuestionDetails">
                    <section className="miniEatQuestionSection">
                        <h2>{text.examplesLabel}</h2>

                        <ul>
                            {/*Bullet points*/}
                            {question.examples.map((example) => (
                                <li key={example}>{example}</li>
                            ))}
                        </ul>
                    </section>

                    {question.notes.length > 0 && (
                        <section className="miniEatQuestionSection">
                            {question.notes.map((note) => (
                                <p key={note}>{note}</p>
                            ))}
                        </section>
                    )}

                    <section className="miniEatQuestionSection">
                        <h2>{text.servingSizeLabel}</h2>
                        <p>{question.servingSize}</p>
                    </section>
                </div>
                {/* End left-hand instructions*/}

                {/* Begin question-answering section*/}
                <fieldset className="surveyFieldset miniEatFieldset">
                    <legend className="srOnly">{question.prompt}</legend>

                    <div className="miniEatAnswerCard">
                        <div className="miniEatAnswerHeader">
                            <h2>{text.answerSectionLabel}</h2>
                            <p
                                id={instructionId}
                                className="miniEatAnswerInstruction"
                            >
                                {text.answerInstruction}
                            </p>
                        </div>

                        <div className="miniEatSelectWrapper">
                            <select
                                id={selectId}
                                className={`miniEatSelect ${
                                    answer !== null ? "miniEatSelectFilled" : ""
                                }`}
                                value={answer === null ? "" : String(answer)}
                                aria-describedby={instructionId}
                                onChange={(event) => {
                                    const selectedValue = event.target.value;
                                    setAnswer(
                                        selectedValue === ""
                                            ? null
                                            : Number(selectedValue),
                                    );
                                }}
                            >
                                <option value="" disabled>
                                    {text.answerPlaceholder}
                                </option>

                                {text.options.map((option, index) => (
                                    <option key={option} value={index}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <span
                                className="miniEatSelectIcon"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </fieldset>
                {/* End question-answering section*/}
            </div>

            <NavigationActions
                clickNext={() => {
                    if (answer !== null) {
                        onNext?.(answer);
                    }
                }}
                clickBack={onBack}
                language={language}
                disableNext={answer === null}
                nextLabel={isLastQuestion ? "completeSurvey" : "nextQuestion"}
            />
        </SurveyQuestion>
    );
}
