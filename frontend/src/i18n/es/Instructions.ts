type InstructionStep =
    | "bpInstructions"
    | "heightInstructions"
    | "weightInstructions";

export interface InstructionMessages {
    thanks: string;
    instruction: string;
}

export const Instructions: Record<InstructionStep, InstructionMessages> = {
    bpInstructions: {
        thanks: "¡Gracias!",
        instruction:
            "Por favor, coloque su brazo izquierdo en el manguito de presión arterial como se muestra a continuación. Ingrese sus resultados en la siguiente página.",
    },

    heightInstructions: {
        thanks: "¡Gracias!",
        instruction:
            "Por favor, diríjase al dispositivo de medición de altura detrás de usted. Presione el botón y permita que se tome su medición como se muestra a continuación.",
    },

    weightInstructions: {
        thanks: "¡Gracias!",
        instruction:
            "Por favor, diríjase a la báscula y párese sobre ella como se muestra a continuación. Permanezca de pie hasta que se registre su peso.",
    },
};
