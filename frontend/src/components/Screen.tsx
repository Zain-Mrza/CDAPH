import { useState, type ReactNode } from "react";
import { loadLanguage } from "../i18n";
import type { language as Language } from "../i18n/types";
import SkipConfirmationModal from "./SkipConfirmationModal";

type Props = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    ariaLabel?: string;
    onSkip?: () => void;
    skipLabel?: string;
    language?: Language;
};

export default function Screen({
    title,
    subtitle,
    children,
    ariaLabel,
    onSkip,
    skipLabel = "Skip this Survey",
    language = "en",
}: Props) {
    const [isSkipModalOpen, setIsSkipModalOpen] = useState(false);
    const navigationText = loadLanguage(language).NavigationText;

    const handleSkipClick = () => {
        setIsSkipModalOpen(true);
    };

    const handleSkipCancel = () => {
        setIsSkipModalOpen(false);
    };

    const handleSkipConfirm = () => {
        setIsSkipModalOpen(false);
        onSkip?.();
    };

    return (
        <>
            <div
                className="kioskCard"
                role="region"
                aria-label={ariaLabel ?? title}
            >
                <div className="kioskHeader">
                    <div className="kioskHeaderRow">
                        <h1>{title}</h1>

                        {onSkip && (
                            <button
                                type="button"
                                className="button skip"
                                onClick={handleSkipClick}
                            >
                                {skipLabel}
                            </button>
                        )}
                    </div>

                    {subtitle && <p>{subtitle}</p>}
                </div>

                {children}
            </div>

            {onSkip && isSkipModalOpen && (
                <SkipConfirmationModal
                    title={navigationText.skipConfirmationTitle}
                    message={navigationText.skipConfirmationMessage}
                    confirmLabel={navigationText.skipConfirmationConfirm}
                    cancelLabel={navigationText.skipConfirmationCancel}
                    onConfirm={handleSkipConfirm}
                    onCancel={handleSkipCancel}
                />
            )}
        </>
    );
}
