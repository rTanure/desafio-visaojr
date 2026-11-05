import type { Console } from "../../data/consoles";
import shared from "../home/shared.module.css";
import base from "../detalhe/detalhe.module.css";
import styles from "./Especificacoes.module.css";

export function Especificacoes({ console: c }: { console: Console }) {
    const rows = [
        { label: "Fabricante", value: c.fabricante },
        { label: "Tipo", value: c.tipo },
        { label: "Geração", value: c.geracao },
    ].filter((r) => r.value);

    if (rows.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={shared.wrap}>
                <div className={`${shared.box} ${styles.box}`}>
                    <h2 className={base.panelTitle}>Especificações</h2>
                    <dl>
                        {rows.map((r) => (
                            <div key={r.label} className={base.spec}>
                                <dt>{r.label}</dt>
                                <dd>{r.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
