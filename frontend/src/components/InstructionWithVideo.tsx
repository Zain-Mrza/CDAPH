import NavigationActions from "./NavigationActions";
import Screen from "./Screen";

type Props = {
    title: string;
    subtitle?: string;
    instructionText: string;
    videoSrc?: string;
    videoAlt?: string;
    onContinue: () => void;
    onBack?: () => void;
    buttonText?: string;
};

export default function InstructionWithVideo({
    title,
    subtitle,
    instructionText,
    videoSrc,
    videoAlt = "Instructional video",
    onContinue,
    onBack,
    buttonText = "Continue",
}: Props) {
    return (
        <Screen title={title} subtitle={subtitle}>
            <div className="instruction">
                <p className="instructionText">{instructionText}</p>

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
            />
        </Screen>
    );
}
