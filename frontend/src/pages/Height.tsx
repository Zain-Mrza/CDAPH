import MeasurementInput from "../components/MeasurementInput";

type Props = {
    onNext: (heightCm: number) => void;
};

export default function Height({ onNext }: Props) {
    return (
        <MeasurementInput
            measurement="height" // The name we send to the backend request
            title="Height"
            subtitle="Enter your height as shown on the stadiometer."
            label="Height"
            unit="cm"
            placeholder="e.g., 170"
            min={50}
            max={250}
            onSubmit={onNext}
            buttonText="Continue"
        />
    );
}
