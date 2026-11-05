import shared from "./shared.module.css";
import styles from "./FrasesSavePoint.module.css";

type Quote = { text: string; game: string; sky: string; sun: string; hill: string; hill2: string; ground: string };

// Frases e cenas fixas da canvas.
const quotes: Quote[] = [
    { text: "It’s dangerous to go alone! Take this.", game: "The Legend of Zelda (1986)", sky: "#6CB4FF", sun: "#FFC800", hill: "#2BA84A", hill2: "#1E7A36", ground: "#C84C0C" },
    { text: "War. War never changes.", game: "Fallout (1997)", sky: "#F7871E", sun: "#FFF1B8", hill: "#7A4A1E", hill2: "#5A3412", ground: "#3A2410" },
    { text: "The cake is a lie.", game: "Portal (2007)", sky: "#D8DEE9", sun: "#1F5FD6", hill: "#9AA3B5", hill2: "#6B7488", ground: "#4A5266" },
    { text: "Would you kindly?", game: "BioShock (2007)", sky: "#0E3B4A", sun: "#FFC800", hill: "#1A5C6E", hill2: "#12495A", ground: "#08222B" },
];

export function FrasesSavePoint() {
    return (
        <section className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div>
                    <p className={styles.eyebrow}>SAVE POINT</p>
                    <h2 className={styles.title}>Frases que marcaram gerações</h2>
                </div>
                <div className={styles.grid}>
                    {quotes.map((q) => (
                        <figure key={q.game} className={styles.card}>
                            <svg className={styles.scene} viewBox="0 0 32 18" shapeRendering="crispEdges" aria-hidden="true">
                                <rect x="0" y="0" width="32" height="18" fill={q.sky} />
                                <rect x="25" y="2" width="3" height="3" fill={q.sun} />
                                <rect x="4" y="9" width="8" height="3" fill={q.hill} />
                                <rect x="6" y="7" width="4" height="2" fill={q.hill} />
                                <rect x="16" y="8" width="12" height="4" fill={q.hill2} />
                                <rect x="19" y="5" width="6" height="3" fill={q.hill2} />
                                <rect x="21" y="3" width="2" height="2" fill={q.hill2} />
                                <rect x="0" y="12" width="32" height="6" fill={q.ground} />
                                <rect x="0" y="12" width="32" height="1" fill="#12123A" />
                            </svg>
                            <div className={styles.body}>
                                <blockquote className={styles.quote}>“{q.text}”</blockquote>
                                <figcaption className={styles.game}>{q.game}</figcaption>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
