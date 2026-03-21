import type { MeasurementInputTypes } from "../types";

export const InputInstructions: MeasurementInputTypes = {
    ageSex: {
        title: "Informacion Personal",
        instruction: "Por favor, proporcione su edad y sexo biologico.",
        label1: "Edad",
        label2: "Sexo biologico",
        helper1: "Masculino",
        helper2: "Femenino",
        helper3: "Intersexual",
        helper4: "Prefiero no responder",
        helper5: "anos",
        error1: "Por favor, ingrese un numero entero.",
        error2: "Debes tener 18 anos o mas.",
        error3: "La edad debe ser como maximo 120.",
        error4: "Por favor, seleccione una opcion valida.",
        saveError: "No pudimos guardar esta medicion. Intentelo de nuevo.",
    },

    bp: {
        title: "Presion Arterial",
        instruction:
            "Inserte la parte superior de su brazo en el manguito como se mostro en el video anterior. Ingrese los valores que aparecen en el monitor adjunto.",
        label1: "Sistolica",
        label2: "Diastolica",
        helper1: "Numero superior",
        helper2: "Numero inferior",
        error1: "Por favor, introduzca numeros enteros para ambos valores.",
        error2: "La presion sistolica debe ser mayor que la presion diastolica.",
        error3: "La sistolica debe estar entre 70 y 250.",
        error4: "La diastolica debe estar entre 40 y 150.",
        saveError: "No pudimos guardar esta medicion. Intentelo de nuevo.",
    },

    height: {
        title: "Altura",
        instruction: "Ingrese su altura como se muestra en el estadiometro.",
        label1: "Altura",
    },

    weight: {
        title: "Peso",
        instruction: "Suba a la bascula e ingrese el valor que se muestra.",
        label1: "Peso",
    },
};
