type Props = {
    clickBack?: () => void;
    clickNext?: () => void;
    clickSkip?: () => void;
    disableNext?: boolean;
    nextLabel?: string;
};
export default function NavigationActions({
    clickBack,
    clickNext,
    clickSkip,
    disableNext,
    nextLabel = "Continue",
}: Props) {
    return (
        <div className="actions">
            {clickBack ? (
                <button className="button secondary" onClick={clickBack}>
                    Back
                </button>
            ) : (
                <div />
            )}

            {clickNext && (
                <button
                    className="button"
                    onClick={clickNext}
                    disabled={disableNext}
                >
                    {nextLabel}
                </button>
            )}

            {clickSkip && (
                <button className="button secondary" onClick={clickSkip}>
                    Skip Survey
                </button>
            )}
        </div>
    );
}
