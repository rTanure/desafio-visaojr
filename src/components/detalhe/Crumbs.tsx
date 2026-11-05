import { Link } from "react-router-dom";
import styles from "./Crumbs.module.css";

type Props = {
    trail: { label: string; to: string }[]; // trilha clicável, depois do "Início"
    current: string;
    backLabel: string; // texto do "‹ voltar" no mobile
    backTo: string;
};

/** Desktop: migalhas de pão. Mobile: link "‹ voltar" (igual à canvas). */
export function Crumbs({ trail, current, backLabel, backTo }: Props) {
    return (
        <>
            <nav aria-label="Você está aqui" className={styles.crumbs}>
                <Link to="/">Início</Link>
                {trail.map((t) => (
                    <span key={t.to} className={styles.item}>
                        <span aria-hidden="true">›</span>
                        <Link to={t.to}>{t.label}</Link>
                    </span>
                ))}
                <span aria-hidden="true">›</span>
                <span aria-current="page">{current}</span>
            </nav>
            <Link to={backTo} className={styles.back}>
                <span aria-hidden="true">‹</span>
                {backLabel}
            </Link>
        </>
    );
}
