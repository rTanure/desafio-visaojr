import { Link } from "react-router-dom";
import type { Console } from "../../data/consoles";
import { formatPrice } from "../home/homeData";
import shared from "../home/shared.module.css";
import styles from "./CardConsole.module.css";

export function CardConsole({ item }: { item: Console }) {
    return (
        <Link to={`/consoles/${item.slug}`} className={`${shared.box} ${shared.lift} ${styles.card}`}>
            <div className={styles.cover}>
                <img className={shared.coverImg} src={item.imagem} alt={item.nome} loading="lazy" />
            </div>
            <div className={styles.body}>
                <span className={styles.name}>{item.nome}</span>
                <span className={styles.desc}>
                    {item.fabricante} · {item.tipo} · {item.geracao}
                </span>
                <div className={styles.foot}>
                    <span className={styles.price}>{formatPrice(item.valor)}</span>
                    <span className={styles.go}>VER CONSOLE ▸</span>
                </div>
            </div>
        </Link>
    );
}
