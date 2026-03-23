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
    const inputName = `mini-eat-question-${questionIndex + 1}`;

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
        >
            <div className="miniEatQuestionLayout">
                <div className="miniEatQuestionDetails">
                    <section className="miniEatQuestionSection">
                        <h2>{text.examplesLabel}</h2>

                        <ul>
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

                <fieldset className="surveyFieldset miniEatFieldset">
                    <legend className="srOnly">{question.prompt}</legend>

                    <div
                        className="miniEatOptions"
                        role="radiogroup"
                        aria-label={question.prompt}
                    >
                        {text.options.map((option, index) => (
                            <label
                                key={option}
                                className={`surveyButton miniEatOptionButton ${
                                    answer === index ? "selected" : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name={inputName}
                                    value={index}
                                    checked={answer === index}
                                    onChange={() => setAnswer(index)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
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
