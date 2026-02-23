import NavigationActions from "./NavigationActions";
import Screen from "./Screen";
import { loadLanguage } from "../i18n";

type InstructionStep =
    | "bpInstructions"
    | "weightInstructions"
    | "heightInstructions";

type Props = {
    subtitle?: string;
    videoSrc?: string;
    videoAlt?: string;
    onContinue: () => void;
    onBack?: () => void;
    buttonText?: string;
    language: "en" | "es";
    instructionType: InstructionStep;
};

export default function InstructionWithVideo({
    subtitle,
    videoSrc,
    videoAlt = "Instructional video",
    onContinue,
    onBack,
    buttonText = "Continue",
    language,
    instructionType,
}: Props) {
    const t = loadLanguage(language);
    const text = t.Instructions[instructionType];

    return (
        <Screen title={text.thanks} subtitle={subtitle}>
            <div className="instruction">
                <p className="instructionText">{text.instruction}</p>

                {videoSrc ? (
                    <div className="videoContainer">
                        <video
                            className="instructionVideo"
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label={videoAlt}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : (
                    <div />
                )}
            </div>

            <NavigationActions
                clickNext={onContinue}
                clickBack={onBack}
                nextLabel={buttonText}
                language={language}
            />
        </Screen>
    );
}
