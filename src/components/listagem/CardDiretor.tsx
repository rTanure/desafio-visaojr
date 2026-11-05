import { useState } from "react";
import { Link } from "react-router-dom";
import type { Director } from "../../data/directors";
import { initialsOf, studioName } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import styles from "./CardDiretor.module.css";

const tones = [styles.toneOrange, styles.toneRed, styles.toneBlue, styles.toneGreen, styles.toneYellow, styles.toneSky];

type Props = { director: Director; gameCount: number; tone: number };

export function CardDiretor({ director, gameCount, tone }: Props) {
    const [failed, setFailed] = useState(false);
    const studio = studioName(director);
    return (
        <Link to={`/diretores/${director.slug}`} className={`${shared.box} ${shared.lift} ${styles.card}`}>
            <span className={`${styles.avatar} ${tones[tone % tones.length]}`}>
                {!failed && <img className={styles.photo} src={director.image} alt="" loading="lazy" onError={() => setFailed(true)} />}
                {failed && <span aria-hidden="true">{initialsOf(director.name)}</span>}
            </span>
            <span className={styles.who}>
                <strong className={styles.name}>{director.name}</strong>
                {studio && <span className={styles.studio}>{studio}</span>}
                {gameCount > 0 && <span className={styles.games}>{gameCount} {gameCount === 1 ? "JOGO" : "JOGOS"} ▸</span>}
            </span>
        </Link>
    );
}
