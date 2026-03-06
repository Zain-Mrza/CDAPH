import NavigationActions from "../components/NavigationActions";
import Screen from "../components/Screen";
import type { NavigationTypes } from "../i18n/types";

type Props = {
    onNext: () => void;
    nextLabel?: keyof NavigationTypes;
    language: "en" | "es";
};

export default function Start({
    onNext,
    nextLabel = "start",
    language = "en",
}: Props) {
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

            <NavigationActions
                clickNext={onNext}
                nextLabel={nextLabel}
                language={language}
            />
        </Screen>
    );
}
