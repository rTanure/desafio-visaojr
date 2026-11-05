import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { formatPrice, platformFilters, pricedGames, type PlatformFilter } from "./homeData";
import shared from "./shared.module.css";
import styles from "./Jogos.module.css";

const MAX_CARDS = 12;

export function Jogos() {
    const [filter, setFilter] = useState<PlatformFilter>("all");

    const filtered = pricedGames.filter((g) => filter === "all" || g.families.has(filter));
    const visible = filtered.slice(0, MAX_CARDS);

    if (pricedGames.length === 0) return null;

    return (
        <section id="jogos" className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div className={shared.head}>
                    <div>
                        <p className={shared.eyebrow}>SELECT YOUR GAME</p>
                        <h2 className={shared.title}>Jogos à venda</h2>
                    </div>
                    <span className={styles.count} aria-live="polite">
                        {visible.length} de {filtered.length} {filtered.length === 1 ? "jogo" : "jogos"}
                    </span>
                </div>

                <div role="group" aria-label="Filtrar por plataforma" className={styles.chips}>
                    {platformFilters.map((f) => (
                        <Button
                            key={f.id}
                            variant={f.id === filter ? "accent" : "secondary"}
                            aria-pressed={f.id === filter}
                            onClick={() => setFilter(f.id)}
                            className={styles.chip}
                        >
                            {f.label}
                        </Button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {visible.map((g) => (
                        <Link key={g.game.slug} to={`/jogos/${g.game.slug}`} className={`${shared.box} ${shared.lift} ${styles.card}`}>
                            <div className={shared.cover}>
                                <img className={shared.coverImg} src={g.cover} alt="" loading="lazy" />
                            </div>
                            <div className={styles.body}>
                                <span className={styles.name}>{g.game.name}</span>
                                <span className={styles.plat}>{g.platformLabel}</span>
                                <div className={styles.foot}>
                                    <span className={styles.price}>{formatPrice(g.price)}</span>
                                    <span className={styles.cart}>+ CARRINHO</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
