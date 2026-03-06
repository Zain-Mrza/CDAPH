export interface SubmitResponse {
    // defines what shape SubmitResponse should be
    status: string;
}

export type MeasurementType =
    | "bp"
    | "height"
    | "weight"
    | "waist"
    | "visual_acuity";

export async function healthCheck() {
    const res = await fetch("/api/health");
    return res.json();
}

/**
 * Function to submit all measurements to api/measurement endpoint (backend)
 *
 * @param type - MeasurementType. Must be strings as seen above.
 * @param value - Value sent to backend. For example, you send 55 for weight in kg.
 * @returns - JSON response confirming status that the "type" measurement was stored for confirmation.
 */

export const submitMeasurements = async (
    measurement: MeasurementType,
    value: string | number,
): Promise<SubmitResponse> => {
    const res = await fetch("api/measurement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ measurement, value }),
    });

    return res.json();
};

/* Submit diabetes survey data */
export interface DiabetesSurveyPayload {
    age: number | null;
    gender: number | null;
    firstDegreeRelative: boolean | null;
    hypertension: boolean | null;
    physicallyActive: boolean | null;
    weight: number | null;
    height: number | null;
}

export const submitDiabetesSurvey = async (payload: DiabetesSurveyPayload) => {
    const response = await fetch("/api/diabetes-risk", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error("Failed to calculate diabetes risk");
    }

    return response.json();
};

/* Getting results */ // Idk I need to delete this eventually
export const getResults = async () => {
    const res = await fetch("/api/risk", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    return res.json();
};
