import { Button } from "../Button/Button";
import shared from "../home/shared.module.css";
import styles from "./NaoEncontrado.module.css";

type Props = {
    what: string; // ex.: "Jogo"
    backTo: string;
    backLabel: string;
};

export function NaoEncontrado({ what, backTo, backLabel }: Props) {
    return (
        <section className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <p className={shared.eyebrow}>GAME OVER</p>
                <h1 className={shared.title}>{what} não encontrado</h1>
                <p className={styles.text}>Não achamos nada com esse endereço. Confira o link ou volte para a lista.</p>
                <Button variant="primary" to={backTo} className={styles.btn}>
                    {backLabel}
                </Button>
            </div>
        </section>
    );
}
