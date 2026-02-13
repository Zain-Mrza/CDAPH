type InputStep = "ageSex" | "bp" | "height" | "weight";

export type LanguageCode = "en" | "es";

export interface InputMessages {
    title: string;
    instruction: string;
    label1: string;
    label2?: string;
    helper1?: string;
    helper2?: string;
    helper3?: string;
    helper4?: string;
    helper5?: string;
    error1?: string;
    error2?: string;
    error3?: string;
    error4?: string;
}

export const InputInstructions: Record<
    InputStep,
    Record<LanguageCode, InputMessages>
> = {
    ageSex: {
        en: {
            title: "Personal Information",
            instruction: "Please provide your age and biological sex.",
            label1: "Age",
            label2: "Biological Sex",
            helper1: "Male",
            helper2: "Female",
            helper3: "Intersex",
            helper4: "Prefer not to say",
            helper5: "years",
            error1: "Please enter a number.",
            error2: "Age must be at least 0.",
            error3: "Age must be at most 120.",
            error4: "Please select an option.",
        },

        es: {
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
    },

    bp: {
        en: {
            title: "Blood Pressure",
            instruction:
                "Insert your upper arm in the cuff as shown in the previous video. Enter the values shown on the attatched monitor.",
            label1: "Systolic",
            label2: "Diastolic",
            helper1: "Top number",
            helper2: "Bottom number",
            error1: "Please enter both numbers.",
            error2: "Systolic must be higher than diastolic.",
        },
        es: {
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
    },
    height: {
        en: {
            title: "Height",
            instruction: "Enter your height as shown on the stadiometer.",
            label1: "Height",
        },
        es: {
            title: "Altura",
            instruction:
                "Ingrese su altura como se muestra en el estadiómetro.",
            label1: "Altura",
        },
    },

    weight: {
        en: {
            title: "Weight",
            instruction: "Step onto the scale and enter the value shown.",
            label1: "Weight",
        },
        es: {
            title: "Peso",
            instruction: "Suba a la báscula e ingrese el valor que se muestra.",
            label1: "Peso",
        },
    },
};
