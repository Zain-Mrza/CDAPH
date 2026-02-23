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
        thanks: "Thank You!",
        instruction:
            "Please place your left arm in the blood pressure cuff as shown below. Enter your results on the next page.",
    },

    heightInstructions: {
        thanks: "Thank You!",
        instruction:
            "Please move to the height measuring device behind you. Press the button and allow your measurement to be taken as shown below.",
    },

    weightInstructions: {
        thanks: "Thank You!",
        instruction:
            "Please place your left arm in the blood pressure cuff as shown below. Enter your results on the next page.",
    },
};
