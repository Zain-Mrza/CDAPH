type Language = "en" | "es";

// Static imports (synchronous)
import * as en from "./en";
import * as es from "./es";

export function loadLanguage(language: Language) {
    switch (language) {
        case "es":
            return es;
        case "en":
        default:
            return en;
    }
}
