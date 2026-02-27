import type { MeasurementInputTypes } from "../types";

export const InputInstructions: MeasurementInputTypes = {
    ageSex: {
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
        error2: "You must be 18 years old or older.",
        error3: "Age must be at most 120.",
        error4: "Please select an option.",
    },

    bp: {
        title: "Blood Pressure",
        instruction:
            "Insert your upper arm in the cuff as shown in the previous video. Enter the values shown on the attached monitor.",
        label1: "Systolic",
        label2: "Diastolic",
        helper1: "Top number",
        helper2: "Bottom number",
        error1: "Please enter both numbers.",
        error2: "Systolic must be higher than diastolic.",
    },

    height: {
        title: "Height",
        instruction: "Enter your height as shown on the stadiometer.",
        label1: "Height",
    },

    weight: {
        title: "Weight",
        instruction: "Step onto the scale and enter the value shown.",
        label1: "Weight",
    },
};
