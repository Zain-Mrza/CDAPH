/**
 * DEMO FOR TRANSLATION STORAGE
 * Needs to be extended to every page we plan to add
 * Call it via
 * TODO: Find some way to neatly organize translation files
 */

export const translations = {
    en: {
        start: "Start",
        next: "Next",
        back: "Back",
        bloodPressure: "Blood Pressure",
        instructionsBP: "Place your arm inside the cuff and remain still.",
    },

    es: {
        start: "Comenzar",
        next: "Siguiente",
        back: "Atrás",
        bloodPressure: "Presión arterial",
        instructionsBP:
            "Coloque su brazo dentro del brazalete y permanezca quieto.",
    },
} as const; // Literal typing, guarantees values exist for keys
