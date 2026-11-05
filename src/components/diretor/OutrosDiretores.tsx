import { Link } from "react-router-dom";
import { directors, type Director } from "../../data/directors";
import { initialsOf, studioName } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import styles from "./OutrosDiretores.module.css";

const tones = [styles.toneRed, styles.toneBlue, styles.toneGreen, styles.toneOrange, styles.toneYellow, styles.toneSky];

export function OutrosDiretores({ currentSlug }: { currentSlug: string }) {
    const list: Director[] = Object.values(directors)
        .filter((d) => d.slug !== currentSlug)
        .slice(0, 6);
    if (list.length === 0) return null;

    return (
        <section className={`${shared.band} ${styles.section}`}>
            <div className={`${shared.wrap} ${styles.head}`}>
                <h2 className={styles.title}>Outros diretores</h2>
            </div>
            <div className={`${shared.wrap} ${styles.gridWrap}`}>
                <div className={styles.grid}>
                    {list.map((d, i) => (
                        <Link key={d.slug} to={`/diretores/${d.slug}`} className={`${shared.box} ${shared.lift} ${styles.card}`}>
                            <span className={`${styles.avatar} ${tones[i % tones.length]}`} aria-hidden="true">
                                {initialsOf(d.name)}
                            </span>
                            <span className={styles.who}>
                                <strong className={styles.name}>{d.name}</strong>
                                <span className={styles.studio}>{studioName(d)}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
