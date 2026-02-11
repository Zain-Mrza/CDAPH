import MeasurementInput from "../components/MeasurementInput";

type Props = {
    onNext: (weightKg: number) => void;
    onBack?: () => void;
    initialWeight?: number | null;
};

export default function Weight({ onNext, onBack, initialWeight }: Props) {
    return (
        <MeasurementInput
            measurement="weight"
            title="Weight"
            subtitle="Step onto the scale and enter the value shown."
            label="Weight"
            unit="kg"
            placeholder="e.g., 72"
            min={20}
            max={300}
            onSubmit={onNext}
            onBack={onBack}
            initialValue={initialWeight}
        />
    );
}
