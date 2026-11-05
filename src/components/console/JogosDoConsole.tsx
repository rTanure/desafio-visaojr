import type { Console } from "../../data/consoles";
import { GameCard } from "../detalhe/GameCard";
import { gamesOfPlatform } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import styles from "./JogosDoConsole.module.css";

export function JogosDoConsole({ console: c }: { console: Console }) {
    if (!c.plataforma) return null;
    const items = gamesOfPlatform(c.plataforma);
    if (items.length === 0) return null;

    return (
        <section id="jogos" className={`${shared.band} ${styles.section}`}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div className={shared.head}>
                    <div>
                        <p className={shared.eyebrow}>PARA JOGAR NO SEU</p>
                        <h2 className={shared.title}>Jogos para {c.nome}</h2>
                    </div>
                    <span className={styles.count}>
                        {items.length} {items.length === 1 ? "jogo" : "jogos"}
                    </span>
                </div>
                <div className={styles.grid}>
                    {items.map((it) => (
                        <GameCard key={it.game.slug} item={it} />
                    ))}
                </div>
            </div>
        </section>
    );
}
