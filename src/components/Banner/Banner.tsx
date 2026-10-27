import { Button } from "../Button/Button";
import styles from "./Banner.module.css";

export function Banner() {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <span className={styles.tag}>
                        <span className={styles.coin} aria-hidden="true" />
                        PRESS START
                    </span>

                    <h1 className={styles.title}>Sua próxima fase começa aqui</h1>

                    <p className={styles.text}>
                        Consoles, PCs gamer e jogos novos e clássicos, escolhidos a dedo por quem joga
                        desde a era 8-bit.
                    </p>

                    <div className={styles.ctas}>
                        <Button variant="primary" fullWidth>Ver ofertas</Button>
                        <Button variant="secondary" fullWidth>Falar no WhatsApp</Button>
                    </div>
                </div>

                <article className={styles.card}>
                    <span className={styles.badge}>DESTAQUE DA SEMANA</span>

                    {/* TODO: trocar pela imagem do produto quando exportar do Figma */}
                    <div className={styles.visual} aria-hidden="true">
                        <div className={styles.console}>
                            <span className={styles.led} />
                            <span className={styles.dot} />
                        </div>
                    </div>

                    <div className={styles.body}>
                        <h2 className={styles.name}>Xbox Series X</h2>
                        <p className={styles.specs}>1 TB SSD · 4K até 120 FPS · Controle incluso</p>
                        <p className={styles.prices}>
                            <span className={styles.price}>R$ 4.299,90</span>
                            <s className={styles.oldPrice}>R$ 4.799,90</s>
                        </p>
                        <div className={styles.actions}>
                            <Button variant="primary" size="sm">Comprar</Button>
                            <Button variant="info" size="sm">Ver jogos</Button>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
