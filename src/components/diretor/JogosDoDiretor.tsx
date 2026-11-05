import { GameCard } from "../detalhe/GameCard";
import type { GameListItem } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import styles from "./JogosDoDiretor.module.css";

export function JogosDoDiretor({ items }: { items: GameListItem[] }) {
    if (items.length === 0) return null;

    return (
        <section id="jogos-diretor" className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div>
                    <p className={shared.eyebrow}>LEVEL SELECT</p>
                    <h2 className={shared.title}>Principais jogos</h2>
                </div>
                <div className={styles.grid}>
                    {items.map((it) => (
                        <GameCard key={it.game.slug} item={it} showBlurb showPlatforms />
                    ))}
                </div>
            </div>
        </section>
    );
}
