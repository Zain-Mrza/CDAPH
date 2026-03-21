export interface SubmitResponse {
    status: string;
}

export type MeasurementType =
    | "bp"
    | "height"
    | "weight"
    | "waist"
    | "visual_acuity"
    | "age"
    | "sex";

export async function healthCheck() {
    const res = await fetch("/api/health");
    return res.json();
}

async function readErrorMessage(response: Response, fallback: string) {
    try {
        const body = await response.json();
        if (typeof body?.error === "string") {
            return body.error;
        }
    } catch {
        // Leave the fallback message in place when the response is not JSON.
    }

    return fallback;
}

export const submitMeasurements = async (
    measurement: MeasurementType,
    value: string | number,
): Promise<SubmitResponse> => {
    const res = await fetch("/api/measurement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ measurement, value }),
    });

    if (!res.ok) {
        throw new Error(await readErrorMessage(res, "Failed to save measurement"));
    }

    return res.json();
};

export async function resetBackendState() {
    const response = await fetch("/api/reset", {
        method: "POST",
        keepalive: true,
    });

    if (!response.ok) {
        throw new Error(
            await readErrorMessage(response, "Failed to reset backend state"),
        );
    }
}

export function resetBackendStateOnPageExit() {
    if (typeof navigator.sendBeacon === "function") {
        navigator.sendBeacon("/api/reset");
        return;
    }

    void fetch("/api/reset", {
        method: "POST",
        keepalive: true,
    });
}

export interface DiabetesSurveyPayload {
    firstDegreeRelative: boolean | "unknown" | "unavailable";
    hypertension: boolean | "unknown" | "unavailable";
    physicallyActive: boolean | "unknown" | "unavailable";
}

interface DiabetesRiskResponse {
    score: number | null;
    risk: "low" | "high" | "inconclusive";
    possible: number | null;
}

export const submitDiabetesSurvey = async (
    payload: DiabetesSurveyPayload,
): Promise<DiabetesRiskResponse> => {
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

    return await response.json();
};

export const getResults = async () => {
    const res = await fetch("/api/risk", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
        throw new Error(await readErrorMessage(res, "Failed to load results"));
    }

    return res.json();
};
