import { loadLanguage } from "../i18n";
import type { NavigationTypes } from "../i18n/types";

type Props = {
    clickBack?: () => void;
    clickNext?: () => void;
    disableNext?: boolean;
    language?: "en" | "es";
    nextLabel?: keyof NavigationTypes;
};

export default function NavigationActions({
    clickBack,
    clickNext,
    disableNext,
    language = "en",
    nextLabel = "next",
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
                    {text[nextLabel]}
                </button>
            )}
        </div>
    );
}
