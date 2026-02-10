import NavigationActions from "../components/NavigationActions";
import Screen from "../components/Screen";

type Props = {
    onNext: () => void;
};

export default function Start({ onNext }: Props) {
    return (
        <Screen
            title="Welcome to the Chronic Disease Assessment and Prevention Hub!"
            subtitle="This kiosk will guide you through a few quick measurements and provide you with health advice at the end."
        >
            <div className="infoBox">
                <div className="infoTitle">You’ll be asked for:</div>
                <ul className="infoList">
                    <li>Age</li>
                    <li>Biological Sex</li>
                    <li>Blood pressure</li>
                    <li>Height</li>
                    <li>Weight</li>
                </ul>
            </div>

            <NavigationActions clickNext={onNext} nextLabel="Start" />
        </Screen>
    );
}
