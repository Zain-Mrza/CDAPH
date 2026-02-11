import { useEffect, useState } from "react";
import { getResults } from "../client";
import Screen from "../components/Screen";

type RiskResults = {
    bp?: string;
    bmi?: string;
    overallRisk?: string;
};

export default function Results() {
    const [results, setResults] = useState<RiskResults | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getResults()
            .then((data) => {
                setResults(data);
            })
            .catch(() => {
                setError("Failed to load results");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Screen title="Calculating Results…">Please wait</Screen>;
    }

    if (error) {
        return <Screen title="Error">{error}</Screen>;
    }

    return (
        <Screen title="Your Health Results">
            <ul>
                {results?.bp && <li>Blood Pressure: {results.bp}</li>}
                {results?.bmi && <li>BMI: {results.bmi}</li>}
            </ul>
        </Screen>
    );
}
