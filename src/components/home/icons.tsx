export function ArrowLeft() {
    return (
        <svg width="18" height="18" viewBox="0 0 6 6" shapeRendering="crispEdges" aria-hidden="true">
            <path d="M4 0h1v6h-1v-1h-1v-1h-1v-2h1v-1h1z" fill="currentColor" />
        </svg>
    );
}

export function ArrowRight() {
    return (
        <svg width="18" height="18" viewBox="0 0 6 6" shapeRendering="crispEdges" aria-hidden="true">
            <path d="M1 0h1v1h1v1h1v2h-1v1h-1v1h-1z" fill="currentColor" />
        </svg>
    );
}

export type ConsoleKind = "tower" | "small" | "slim" | "hand" | "pc";

/** Ilustrações pixel da canvas (consoles/PC). */
export function ConsoleArt({ kind, size, label }: { kind: ConsoleKind; size: number; label?: string }) {
    const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true as const };
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" {...a11y}>
            {kind === "tower" && (
                <>
                    <rect x="4" y="0" width="8" height="16" fill="#12123A" />
                    <rect x="5" y="1" width="6" height="14" fill="#2A2A2A" />
                    <rect x="6" y="1" width="4" height="2" fill="#2BA84A" />
                    <rect x="6" y="4" width="4" height="1" fill="#3A3A3A" />
                    <rect x="5" y="13" width="1" height="1" fill="#FFFFFF" />
                </>
            )}
            {kind === "small" && (
                <>
                    <rect x="3" y="3" width="10" height="12" fill="#12123A" />
                    <rect x="4" y="4" width="8" height="10" fill="#F4F5FF" />
                    <rect x="6" y="6" width="4" height="4" fill="#12123A" />
                    <rect x="5" y="12" width="1" height="1" fill="#2BA84A" />
                </>
            )}
            {kind === "slim" && (
                <>
                    <rect x="5" y="0" width="6" height="16" fill="#12123A" />
                    <rect x="6" y="1" width="4" height="14" fill="#F4F5FF" />
                    <rect x="7" y="1" width="2" height="14" fill="#1F5FD6" />
                </>
            )}
            {kind === "hand" && (
                <>
                    <rect x="0" y="4" width="16" height="9" fill="#12123A" />
                    <rect x="1" y="5" width="3" height="7" fill="#1F5FD6" />
                    <rect x="12" y="5" width="3" height="7" fill="#E52521" />
                    <rect x="5" y="5" width="6" height="7" fill="#6CB4FF" />
                    <rect x="2" y="6" width="1" height="1" fill="#FFFFFF" />
                    <rect x="13" y="9" width="1" height="1" fill="#FFFFFF" />
                </>
            )}
            {kind === "pc" && (
                <>
                    <rect x="3" y="0" width="10" height="16" fill="#12123A" />
                    <rect x="4" y="1" width="8" height="14" fill="#2A2D5C" />
                    <rect x="5" y="2" width="6" height="2" fill="#E52521" />
                    <rect x="5" y="5" width="6" height="2" fill="#FFC800" />
                    <rect x="5" y="8" width="6" height="2" fill="#1F5FD6" />
                    <rect x="5" y="12" width="2" height="1" fill="#2BA84A" />
                </>
            )}
        </svg>
    );
}
