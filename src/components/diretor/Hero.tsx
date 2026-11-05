import { useState } from "react";
import type { Director } from "../../data/directors";
import { Button } from "../Button/Button";
import { Crumbs } from "../detalhe/Crumbs";
import { initialsOf, studioName } from "../detalhe/dados";
import shared from "../home/shared.module.css";
import base from "../detalhe/detalhe.module.css";
import styles from "./Hero.module.css";

type Props = { director: Director; gameCount: number };

export function Hero({ director, gameCount }: Props) {
    const [failed, setFailed] = useState(false);
    const studio = studioName(director);

    return (
        <section className={styles.hero}>
            <div className={`${shared.wrap} ${styles.crumbs}`}>
                <Crumbs
                    trail={[{ label: "Diretores", to: "/diretores" }]}
                    current={director.name}
                    backLabel="Voltar para diretores"
                    backTo="/diretores"
                />
            </div>
            <div className={`${shared.wrap} ${styles.grid}`}>
                <div className={`${shared.box} ${styles.portrait}`}>
                    <div className={styles.photo}>
                        {!failed ? (
                            <img className={styles.img} src={director.image} alt={director.name} onError={() => setFailed(true)} />
                        ) : (
                            <>
                                <svg viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden="true" className={styles.silhouette}>
                                    <rect x="5" y="2" width="6" height="6" fill="#12123A" />
                                    <rect x="4" y="3" width="8" height="4" fill="#12123A" />
                                    <rect x="2" y="10" width="12" height="6" fill="#12123A" />
                                    <rect x="4" y="9" width="8" height="1" fill="#12123A" />
                                    <rect x="6" y="4" width="1" height="1" fill="#F7871E" />
                                    <rect x="9" y="4" width="1" height="1" fill="#F7871E" />
                                </svg>
                                <span className={styles.initials} aria-hidden="true">
                                    {initialsOf(director.name)}
                                </span>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.info}>
                    {studio && <span className={styles.studio}>DIRETOR · {studio.toUpperCase()}</span>}
                    <h1 className={styles.name}>{director.name}</h1>
                    {gameCount > 0 && (
                        <div className={styles.stats}>
                            <div className={`${shared.box} ${styles.stat}`}>
                                <span className={styles.statN}>{gameCount}</span>
                                <span className={styles.statL}>Jogos na loja</span>
                            </div>
                        </div>
                    )}
                    <div className={styles.actions}>
                        {gameCount > 0 && (
                            <Button variant="primary" href="#jogos-diretor" className={base.cta}>
                                Ver jogos do diretor
                            </Button>
                        )}
                        <Button variant="secondary" to="/diretores" className={`${base.cta} ${styles.back}`}>
                            ‹ Voltar
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.grass} />
            <div className={styles.bricks} />
        </section>
    );
}
