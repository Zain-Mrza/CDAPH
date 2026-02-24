import type { ReactNode } from "react";

type Props = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    ariaLabel?: string;
    onSkip?: () => void;
    skipLabel?: string;
    headerAction?: ReactNode;
};

export default function Screen({
    title,
    subtitle,
    children,
    ariaLabel,
    onSkip,
    skipLabel = "Skip",
}: Props) {
    return (
        <div
            className="kioskCard"
            role="region"
            aria-label={ariaLabel ?? title}
        >
            <div className="kioskHeader">
                <div className="kioskHeaderRow">
                    <h1>{title}</h1>

                    {onSkip && (
                        <button className="button skip" onClick={onSkip}>
                            {skipLabel}
                        </button>
                    )}
                </div>

                {subtitle && <p>{subtitle}</p>}
            </div>

            {children}
        </div>
    );
}
