import "../styles/language-selector.css";

interface LanguageSelectorProps {
    currentLanguage: "en" | "es";
    onLanguageChange: (language: "en" | "es") => void;
}

export default function LanguageSelector({
    currentLanguage,
    onLanguageChange,
}: LanguageSelectorProps) {
    return (
        <div
            className="languageSelector"
            role="group"
            aria-label="Language selection"
        >
            <button
                className={`langButton ${currentLanguage === "en" ? "active" : ""}`}
                onClick={() => onLanguageChange("en")}
                aria-pressed={currentLanguage === "en"}
            >
                English
            </button>
            <button
                className={`langButton ${currentLanguage === "es" ? "active" : ""}`}
                onClick={() => onLanguageChange("es")}
                aria-pressed={currentLanguage === "es"}
            >
                Español
            </button>
        </div>
    );
}
