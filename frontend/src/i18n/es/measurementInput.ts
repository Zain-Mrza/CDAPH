import type { MeasurementInputTypes } from "../types";

export const InputInstructions: MeasurementInputTypes = {
    ageSex: {
        title: "Información Personal",
        instruction: "Por favor, proporcione su edad y sexo biológico.",
        label1: "Edad",
        label2: "Sexo biológico",
        helper1: "Masculino",
        helper2: "Femenino",
        helper3: "Intersexual",
        helper4: "Prefiero no responder",
        helper5: "años",
        error1: "Por favor, ingrese un número.",
        error2: "La edad debe ser al menos 0.",
        error3: "La edad debe ser como máximo 120.",
        error4: "Por favor, seleccione una opción válida.",
    },

    bp: {
        title: "Presión Arterial",
        instruction:
            "Inserte la parte superior de su brazo en el manguito como se mostró en el video anterior. Ingrese los valores que aparecen en el monitor adjunto.",
        label1: "Sistólica",
        label2: "Diastólica",
        helper1: "Número superior",
        helper2: "Número inferior",
        error1: "Por favor, introduzca ambos valores.",
        error2: "La presión sistólica debe ser mayor que la presión diastólica.",
    },

    height: {
        title: "Altura",
        instruction: "Ingrese su altura como se muestra en el estadiómetro.",
        label1: "Altura",
    },

    weight: {
        title: "Peso",
        instruction: "Suba a la báscula e ingrese el valor que se muestra.",
        label1: "Peso",
    },
};
