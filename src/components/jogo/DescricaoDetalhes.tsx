import { useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../../data/games";
import { getDirector, publisherName, studioName } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import base from "../detalhe/detalhe.module.css";
import styles from "./DescricaoDetalhes.module.css";

export function DescricaoDetalhes({ game }: { game: Game }) {
    const [open, setOpen] = useState(false);
    const director = getDirector(game.director);
    const studio = director ? studioName(director) : undefined;
    const publisher = publisherName(game);

    const rows: { label: string; value: React.ReactNode }[] = [];
    if (studio) rows.push({ label: "Desenvolvedora", value: studio });
    if (publisher) rows.push({ label: "Distribuidora", value: publisher });
    if (director) rows.push({ label: "Diretor", value: <Link to={`/diretores/${director.slug}`}>{director.name}</Link> });

    if (!game.description && rows.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                {game.description && (
                    <div className={`${shared.box} ${styles.desc}`}>
                        <h2 className={base.panelTitle}>Descrição</h2>
                        <p className={`${styles.text} ${open ? "" : styles.clamp}`} id="descricao-texto">
                            {game.description}
                        </p>
                        <button
                            type="button"
                            className={styles.more}
                            aria-expanded={open}
                            aria-controls="descricao-texto"
                            onClick={() => setOpen((o) => !o)}
                        >
                            {open ? "Ler menos" : "Ler mais"}
                        </button>
                    </div>
                )}
                {rows.length > 0 && (
                    <div className={`${shared.box} ${styles.details}`}>
                        <h2 className={base.panelTitle}>Detalhes</h2>
                        <dl>
                            {rows.map((r) => (
                                <div key={r.label} className={base.spec}>
                                    <dt>{r.label}</dt>
                                    <dd>{r.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                )}
            </div>
        </section>
    );
}
