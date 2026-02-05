import DualMeasurementInput from "../components/DualMeasurementInput";

type Props = {
    onNext: (age: number, sex: number) => void;
    onBack?: () => void;
};

export default function AgeSexInput({ onNext, onBack }: Props) {
    return (
        <DualMeasurementInput
            title="Personal Information"
            subtitle="Please provide your age and biological sex"
            label1="Age"
            label2="Biological Sex"
            unit1="years"
            placeholder1="25"
            min1={0}
            max1={120}
            options2={[
                { value: 1, label: "Male" },
                { value: 2, label: "Female" },
                { value: 3, label: "Intersex" },
                { value: 4, label: "Prefer not to say" },
            ]}
            onSubmit={(age, sex) => {
                onNext(age, sex);
            }}
            onBack={onBack}
        />
    );
}
