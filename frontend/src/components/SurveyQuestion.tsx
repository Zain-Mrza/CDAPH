import type { ReactNode } from "react";

type Props = {
    question: string;
    questionNumber: number;
    maxQuestionNumber: number;
    subtitle?: string;
    children: ReactNode;
    ariaLabel?: string;
    onSkip?: () => void;
    skipLabel?: string;
    headerAction?: ReactNode;
};

export default function SurveyQuestion({
    question,
    questionNumber,
    maxQuestionNumber,
    subtitle,
    children,
    ariaLabel,
    onSkip,
    skipLabel = "Skip this Survey",
}: Props) {
    return (
        <div
            className="kioskCard"
            role="region"
            aria-label={ariaLabel ?? question}
        >
            <div className="actions-header">
                {onSkip && (
                    <button className="button skip" onClick={onSkip}>
                        {skipLabel}
                    </button>
                )}
            </div>
            <div className="surveyHeader">
                <div>
                    <h1 className="surveyHeaderQuestion">
                        Question {questionNumber} of {maxQuestionNumber}
                    </h1>
                </div>
                <div className="kioskHeaderRow">
                    <h1>{question}</h1>
                </div>

                {subtitle && <p>{subtitle}</p>}
            </div>

            {children}
        </div>
    );
}
