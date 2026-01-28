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
    type: MeasurementType,
    value: string | number,
): Promise<SubmitResponse> => {
    const res = await fetch("api/measurement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, value }),
    });

    return res.json();
};
