import type { Game } from "../../data/games";
import { GameCard } from "../detalhe/GameCard";
import { relatedGames } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import styles from "./Relacionados.module.css";

export function Relacionados({ game }: { game: Game }) {
    const items = relatedGames(game);
    if (items.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <h2 className={styles.title}>Quem comprou também levou</h2>
            </div>
            <div className={`${shared.wrap} ${styles.gridWrap}`}>
                <div className={styles.grid}>
                    {items.map((it) => (
                        <GameCard key={it.game.slug} item={it} compact className={styles.card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
