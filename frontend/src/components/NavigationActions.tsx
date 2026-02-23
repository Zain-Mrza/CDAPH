import { loadLanguage } from "../i18n";

type Props = {
    clickBack?: () => void;
    clickNext?: () => void;
    clickSkip?: () => void;
    disableNext?: boolean;
    nextLabel?: string;
    language: "en" | "es";
};
export default function NavigationActions({
    clickBack,
    clickNext,
    clickSkip,
    disableNext,
    language = "en",
}: Props) {
    const t = loadLanguage(language);
    const text = t.NavigationText;

    return (
        <div className="actions">
            {clickBack ? (
                <button className="button secondary" onClick={clickBack}>
                    {text.back}
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
                    {text.next}
                </button>
            )}

            {clickSkip && (
                <button className="button secondary" onClick={clickSkip}>
                    {text.skipSurvey}
                </button>
            )}
        </div>
    );
}
