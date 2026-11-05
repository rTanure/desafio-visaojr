import { useState } from "react";
import { Stars } from "./Stars";
import { summarize, type Review } from "./review";
import shared from "../home/shared.module.css";
import base from "../detalhe/detalhe.module.css";
import styles from "./Avaliacoes.module.css";

const avatarTones = [styles.toneRed, styles.toneBlue, styles.toneGreen, styles.toneOrange, styles.toneNavy];

type Props = {
    reviews: Review[];
    summary: ReturnType<typeof summarize>;
    platformLabel: string;
    onPublish: (r: Review) => void;
};

export function Avaliacoes({ reviews, summary, platformLabel, onPublish }: Props) {
    const [rating, setRating] = useState(5);
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const clean = text.trim();
        if (!clean) return;
        onPublish({
            name: name.trim() || "Visitante",
            stars: rating,
            meta: [platformLabel, new Date().toLocaleDateString("pt-BR")].filter(Boolean).join(" · "),
            text: clean,
        });
        setName("");
        setText("");
        setRating(5);
    };

    return (
        <section id="avaliacoes" className={`${shared.band} ${styles.section}`}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div>
                    <p className={shared.eyebrow}>PLAYER REVIEWS</p>
                    <h2 className={shared.title}>Comentários de quem jogou</h2>
                </div>
                <div className={styles.cols}>
                    <div className={styles.side}>
                        {summary.count > 0 && (
                            <div className={`${shared.box} ${styles.summary}`}>
                                <div className={styles.avgBlock}>
                                    <span className={styles.avg}>{summary.avgLabel}</span>
                                    <span className={styles.avgSub}>
                                        <span className={styles.deDe}>de 5 · </span>
                                        {summary.countLabel}
                                    </span>
                                </div>
                                <div className={styles.dist}>
                                    {summary.dist.map((d) => (
                                        <div key={d.n} className={styles.distRow}>
                                            <span className={styles.distN}>{d.n}★</span>
                                            <span className={styles.bar}>
                                                <span className={styles.fill} style={{ width: `${d.pct}%` }} />
                                            </span>
                                            <span className={styles.distCount}>{d.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <form className={`${shared.box} ${styles.form}`} onSubmit={submit}>
                            <h3 className={styles.formTitle}>Deixe seu comentário</h3>
                            <fieldset className={base.fieldset}>
                                <legend className={styles.formLegend}>Sua nota</legend>
                                <div className={styles.picker}>
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <button
                                            key={n}
                                            type="button"
                                            aria-label={`${n} ${n === 1 ? "estrela" : "estrelas"}`}
                                            aria-pressed={n === rating}
                                            onClick={() => setRating(n)}
                                            className={styles.pick}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 9 9" shapeRendering="crispEdges" aria-hidden="true">
                                                <path
                                                    d="M4 0h1v2h1v1h3v1h-1v1h-1v1h1v3h-1v-1h-2v-1h-1v1h-2v1h-1v-3h1v-1h-1v-1h-1v-1h3v-1h1z"
                                                    fill={n <= rating ? "var(--orange)" : "var(--surface2)"}
                                                />
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </fieldset>
                            <label className={styles.label}>
                                Seu nome
                                <input className={styles.field} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                            <label className={styles.label}>
                                Comentário
                                <textarea
                                    className={`${styles.field} ${styles.area}`}
                                    rows={4}
                                    value={text}
                                    required
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </label>
                            <button type="submit" className={styles.submit}>
                                Publicar comentário
                            </button>
                        </form>
                    </div>

                    {reviews.length > 0 && (
                        <ul className={styles.list} aria-label="Comentários">
                            {reviews.map((r, i) => (
                                <li key={`${r.meta}-${i}`} className={`${shared.box} ${styles.card}`}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.person}>
                                        <span className={`${styles.avatar} ${avatarTones[(reviews.length - 1 - i) % avatarTones.length]}`}>
                                            {r.name.trim().charAt(0).toUpperCase() || "?"}
                                        </span>
                                        <span className={styles.who}>
                                            <strong>{r.name}</strong>
                                            <span className={styles.meta}>{r.meta}</span>
                                        </span>
                                        </div>
                                        <span className={styles.cardStars} role="img" aria-label={`${r.stars} de 5 estrelas`}>
                                            <Stars filled={r.stars} />
                                        </span>
                                    </div>
                                    <p className={styles.body}>{r.text}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
