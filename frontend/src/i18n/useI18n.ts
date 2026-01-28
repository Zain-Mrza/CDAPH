import { translations } from "./translations"; // Refer to translations.ts

/**
 * Creates a typed translation function for given language. A function factory.
 *
 * This function returns another function that can be used on the fly to generate text for the respesctive language.
 * Needs to be extended to also accept page name as an input so this one function can be used across all pages.
 *
 * @param lang - The language to use for translations "en" (english) or "es" (español)
 * @returns A function that takes in a translation key and returns the corresponding
 *            language's text for various React components (ex. buttons)
 *
 * @example
 * const t = useI18n("es"); // Choose Español
 * t("start"); // returns "Comenzar"
 * t("next"); // returns "Siguiente"
 */

export const useI18n = (lang: "en" | "es") => {
    return (key: keyof (typeof translations)["en"]) => translations[lang][key];
};
