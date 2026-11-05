import { useState } from "react";
import type { Console } from "../../data/consoles";
import { Button } from "../Button/Button";
import { Crumbs } from "../detalhe/Crumbs";
import { WHATSAPP_URL, formatPrice } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import base from "../detalhe/detalhe.module.css";
import styles from "./Produto.module.css";

export function Produto({ console: c }: { console: Console }) {
    const [imgFailed, setImgFailed] = useState(false);
    const tipo = c.tipo === "Mesa" ? "CONSOLE DE MESA" : `CONSOLE ${c.tipo.toUpperCase()}`;

    return (
        <section className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <Crumbs
                    trail={[{ label: "Consoles", to: "/consoles" }]}
                    current={c.nome}
                    backLabel="Consoles"
                    backTo="/consoles"
                />
                <div className={styles.grid}>
                    <div className={`${shared.box} ${styles.stage}`}>
                        {!imgFailed && (
                            <img className={styles.img} src={c.imagem} alt={c.nome} onError={() => setImgFailed(true)} />
                        )}
                    </div>

                    <div className={styles.info}>
                        <div className={base.tags}>
                            <span className={base.tag}>{tipo}</span>
                        </div>
                        <h1 className={base.h1}>{c.nome}</h1>
                        <p className={styles.maker}>
                            {c.fabricante} · {c.geracao}
                        </p>
                        <div className={`${shared.box} ${base.priceBox}`}>
                            <span className={base.priceNow}>{formatPrice(c.valor)}</span>
                        </div>
                        <div className={styles.ctas}>
                            <Button variant="primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={base.cta}>
                                Comprar agora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
