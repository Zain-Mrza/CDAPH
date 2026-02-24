import { loadLanguage } from "../i18n";

type Props = {
    clickBack?: () => void;
    clickNext?: () => void;
    disableNext?: boolean;
    nextLabel?: string;
    language: "en" | "es";
};

export default function NavigationActions({
    clickBack,
    clickNext,
    disableNext,
    language = "en",
}: Props) {
    const t = loadLanguage(language);
    const text = t.NavigationText;

    return (
        <div className="actions-footer">
            {clickBack ? (
                <button className="button secondary" onClick={clickBack}>
                    {text.back}
                </button>
            ) : (
                <div />
            )}

            {clickNext && (
                <button
                    className="button primary"
                    onClick={clickNext}
                    disabled={disableNext}
                >
                    {text.next}
                </button>
            )}
        </div>
    );
}
