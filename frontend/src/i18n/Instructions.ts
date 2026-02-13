export type LanguageCode = "en" | "es";

export interface InstructionMessages {
    thanks: string;
    instruction: string;
}

type InstructionStep =
    | "bpInstructions"
    | "heightInstructions"
    | "weightInstructions";

export const Instructions: Record<
    InstructionStep,
    Record<LanguageCode, InstructionMessages>
> = {
    bpInstructions: {
        en: {
            thanks: "Thank You!",
            instruction:
                "Please place your left arm in the blood pressure cuff as shown below. Enter your results on the next page.",
        },
        es: {
            thanks: "¡Gracias!",
            instruction:
                "Por favor, coloque su brazo izquierdo en el manguito de presión arterial como se muestra a continuación. Ingrese sus resultados en la siguiente página.",
        },
    },

    heightInstructions: {
        en: {
            thanks: "Thank You!",
            instruction:
                "Please move to the height measuring device behind you. Press the button and allow your measurement to be taken as shown below.",
        },
        es: {
            thanks: "¡Gracias!",
            instruction:
                "Por favor, diríjase al dispositivo de medición de altura detrás de usted. Presione el botón y permita que se tome su medición como se muestra a continuación.",
        },
    },

    weightInstructions: {
        en: {
            thanks: "Thank You!",
            instruction:
                "Please place your left arm in the blood pressure cuff as shown below. Enter your results on the next page.",
        },
        es: {
            thanks: "¡Gracias!",
            instruction:
                "Por favor, diríjase a la báscula y párese sobre ella como se muestra a continuación. Permanezca de pie hasta que se registre su peso.",
        },
    },
};
