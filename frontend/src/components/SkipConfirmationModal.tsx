import type { MouseEvent } from "react";

type Props = {
    title: string;
    message: string;
    confirmLabel: string;
    cancelLabel: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function SkipConfirmationModal({
    title,
    message,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel,
}: Props) {
    const handleDialogClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div
            className="modalOverlay"
            role="presentation"
            onClick={onCancel}
        >
            <div
                className="modalCard"
                role="dialog"
                aria-modal="true"
                aria-labelledby="skip-confirmation-title"
                aria-describedby="skip-confirmation-message"
                onClick={handleDialogClick}
            >
                <h2 id="skip-confirmation-title" className="modalTitle">
                    {title}
                </h2>
                <p id="skip-confirmation-message" className="modalMessage">
                    {message}
                </p>

                <div className="modalActions">
                    <button
                        type="button"
                        className="button secondary"
                        onClick={onCancel}
                    >
                        {cancelLabel}
                    </button>
                    <button
                        type="button"
                        className="button primary"
                        onClick={onConfirm}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
