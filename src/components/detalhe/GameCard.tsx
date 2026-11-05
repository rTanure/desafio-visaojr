import { Link } from "react-router-dom";
import shared from "../home/shared.module.css";
import { formatPrice, type GameListItem } from "./dados";
import styles from "./GameCard.module.css";

type Props = {
    item: GameListItem;
    showBlurb?: boolean; // descrição curta (tela do diretor)
    showPlatforms?: boolean;
    compact?: boolean; // sem o selo "VER JOGO" (lista de relacionados)
    className?: string;
};

export function GameCard({ item, showBlurb = false, showPlatforms = false, compact = false, className }: Props) {
    const { game } = item;
    return (
        <Link
            to={`/jogos/${game.slug}`}
            className={[shared.box, shared.lift, styles.card, showBlurb && styles.row, className].filter(Boolean).join(" ")}
        >
            {item.discount > 0 && <span className={styles.off}>-{item.discount}%</span>}
            <div className={`${shared.cover} ${styles.cover}`}>
                <img className={shared.coverImg} src={item.cover} alt="" loading="lazy" />
            </div>
            <div className={styles.body}>
                <span className={styles.name}>{game.name}</span>
                {showPlatforms && <span className={styles.plat}>{item.platformLabel}</span>}
                {showBlurb && <p className={styles.blurb}>{game.description}</p>}
                <div className={styles.foot}>
                    <span className={styles.price}>
                        {item.oldPrice !== null && <span className={styles.old}>{formatPrice(item.oldPrice)}</span>}
                        {formatPrice(item.price)}
                    </span>
                    {!compact && <span className={styles.go}>VER JOGO ▸</span>}
                </div>
            </div>
        </Link>
    );
}
