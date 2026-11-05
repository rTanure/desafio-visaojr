import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { formatPrice, promoGames } from "./homeData";
import shared from "./shared.module.css";
import styles from "./Promocoes.module.css";

export function Promocoes() {
    if (promoGames.length === 0) return null;

    return (
        <section id="ofertas" className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div className={shared.head}>
                    <div>
                        <p className={shared.eyebrow}>FASE BÔNUS</p>
                        <h2 className={shared.title}>Jogos em promoção</h2>
                    </div>
                    <Button variant="secondary" href="#jogos" className={styles.all}>
                        <span className={styles.allLong}>Ver todos os jogos</span>
                        <span className={styles.allShort}>Ver todos</span>
                    </Button>
                </div>
                <div className={styles.grid}>
                    {promoGames.map((g) => (
                        <Link key={g.game.slug} to={`/jogos/${g.game.slug}`} className={`${shared.box} ${shared.lift} ${styles.card}`}>
                            <span className={styles.off}>-{g.discount}%</span>
                            <div className={shared.cover}>
                                <img className={shared.coverImg} src={g.cover} alt="" loading="lazy" />
                            </div>
                            <div className={styles.body}>
                                <span className={styles.plat}>{g.platformLabel}</span>
                                <span className={styles.name}>{g.game.name}</span>
                                {g.oldPrice && <span className={styles.old}>{formatPrice(g.oldPrice)}</span>}
                                <span className={styles.price}>{formatPrice(g.price)}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
