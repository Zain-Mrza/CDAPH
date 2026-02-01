import type { ReactNode } from "react";

type Props = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    ariaLabel?: string;
};

export default function Screen({
    title,
    subtitle,
    children,
    ariaLabel,
}: Props) {
    return (
        <div
            className="kioskCard"
            role="region"
            aria-label={ariaLabel ?? title}
        >
            <div className="kioskHeader">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
            {children}
        </div>
    );
}
