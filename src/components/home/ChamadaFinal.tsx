import { Button } from "../Button/Button";
import shared from "./shared.module.css";
import styles from "./ChamadaFinal.module.css";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=553193327631";
const INSTAGRAM_URL = "https://instagram.com/visaojrufop";

export function ChamadaFinal() {
    return (
        <section className={styles.section}>
            <div className={shared.wrap}>
                <div className={`${shared.box} ${styles.card}`}>
                    <div className={styles.copy}>
                        <h2 className={styles.title}>Pronto para o próximo nível?</h2>
                        <p className={styles.text}>
                            <span className={styles.long}>Visite a loja, chame no WhatsApp ou siga a gente nas redes. O Mayk ajuda você a montar o setup dos sonhos.</span>
                            <span className={styles.short}>Visite a loja, chame no WhatsApp ou siga a gente nas redes.</span>
                        </p>
                        <div className={styles.buttons}>
                            <Button variant="primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.btn}>
                                Chamar no WhatsApp
                            </Button>
                            <Button variant="info" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={styles.btn}>
                                Seguir no Instagram
                            </Button>
                        </div>
                    </div>
                    <svg className={styles.trophy} width="200" height="200" viewBox="0 0 12 12" shapeRendering="crispEdges" role="img" aria-label="Troféu pixel">
                        <rect x="2" y="1" width="8" height="1" fill="#12123A" />
                        <rect x="2" y="2" width="8" height="4" fill="#F7871E" />
                        <rect x="0" y="2" width="2" height="1" fill="#12123A" />
                        <rect x="0" y="3" width="1" height="2" fill="#12123A" />
                        <rect x="10" y="2" width="2" height="1" fill="#12123A" />
                        <rect x="11" y="3" width="1" height="2" fill="#12123A" />
                        <rect x="3" y="6" width="6" height="1" fill="#F7871E" />
                        <rect x="5" y="7" width="2" height="2" fill="#12123A" />
                        <rect x="3" y="9" width="6" height="2" fill="#E52521" />
                        <rect x="3" y="2" width="1" height="3" fill="#FFFFFF" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
