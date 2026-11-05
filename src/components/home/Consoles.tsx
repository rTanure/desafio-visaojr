import { Button } from "../Button/Button";
import { formatPrice, homeConsoles } from "./homeData";
import shared from "./shared.module.css";
import styles from "./Consoles.module.css";

export function Consoles() {
    if (homeConsoles.length === 0) return null;

    return (
        <section id="consoles" className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div>
                    <p className={shared.eyebrow}>ESCOLHA SEU PLAYER 1</p>
                    <h2 className={shared.title}>Consoles à venda</h2>
                </div>
                <div className={styles.grid}>
                    {homeConsoles.map((c) => (
                        <article key={c.id} className={`${shared.box} ${styles.card}`}>
                            <div className={styles.cover}>
                                <img className={shared.coverImg} src={c.imagem} alt={c.nome} loading="lazy" />
                            </div>
                            <div className={styles.body}>
                                <h3 className={styles.name}>{c.nome}</h3>
                                <span className={styles.desc}>
                                    {c.tipo} · {c.geracao}
                                </span>
                                <span className={styles.price}>{formatPrice(c.valor)}</span>
                                <div className={styles.actions}>
                                    <Button variant="primary" to={`/consoles/${c.slug}`} className={styles.buy}>
                                        Comprar
                                    </Button>
                                    <Button variant="secondary" to={`/consoles/${c.slug}#jogos`} className={styles.see}>
                                        Ver jogos<span className={styles.caret}> ▸</span>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
