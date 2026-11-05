type Props = { filled: number; size?: number };

/** Estrelas em pixel art (decorativas: o texto ao redor traz a nota). */
export function Stars({ filled, size = 18 }: Props) {
    return (
        <>
            {[1, 2, 3, 4, 5].map((n) => (
                <svg key={n} width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" aria-hidden="true">
                    <path
                        d="M4 0h1v2h1v1h3v1h-1v1h-1v1h1v3h-1v-1h-2v-1h-1v1h-2v1h-1v-3h1v-1h-1v-1h-1v-1h3v-1h1z"
                        fill={n <= filled ? "var(--orange)" : "var(--surface2)"}
                        stroke={n <= filled ? "none" : "var(--muted)"}
                        strokeWidth={0.25}
                    />
                </svg>
            ))}
        </>
    );
}
