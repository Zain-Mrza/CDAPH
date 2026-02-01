import Screen from "../components/Screen";
import NavigationActions from "../components/NavigationActions";

type Props = {
    onNext: () => void;
};

export default function Start({ onNext }: Props) {
    return (
        <Screen
            title="Welcome"
            subtitle="This kiosk will guide you through a few quick measurements."
        >
            <div className="infoBox">
                <div className="infoTitle">You’ll be asked for:</div>
                <ul className="infoList">
                    <li>Blood pressure</li>
                    <li>Height</li>
                    <li>Weight</li>
                </ul>
            </div>

            <NavigationActions clickNext={onNext} />
        </Screen>
    );
}
