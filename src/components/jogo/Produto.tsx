import { useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../../data/games";
import type { RegisteredPlatforms } from "../../data/platforms";
import { Button } from "../Button/Button";
import { Crumbs } from "../detalhe/Crumbs";
import {
    WHATSAPP_URL,
    bestOffer,
    finalPrice,
    formatPrice,
    getDirector,
    imagesOf,
    platformName,
    publisherName,
    storeName,
    studioName,
    offersOfGame,
} from "../detalhe/dados";
import shared from "../home/shared.module.css";
import base from "../detalhe/detalhe.module.css";
import { Stars } from "./Stars";
import type { summarize } from "./review";
import styles from "./Produto.module.css";

type Props = {
    game: Game;
    platform: RegisteredPlatforms | undefined;
    onPlatform: (p: RegisteredPlatforms) => void;
    summary: ReturnType<typeof summarize>;
};

export function Produto({ game, platform, onPlatform, summary }: Props) {
    const images = imagesOf(game);
    const [shot, setShot] = useState(0);
    const director = getDirector(game.director);
    const studio = director ? studioName(director) : undefined;
    const publisher = publisherName(game);

    const available = game.platforms.filter((p) => offersOfGame(game.slug).some((o) => o.platform === p));
    const offer = platform ? bestOffer(game.slug, platform) : undefined;
    const store = offer ? storeName(offer.store) : undefined;

    const byline = [studio, publisher].filter(Boolean).join(" · ");

    return (
        <section className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <Crumbs
                    trail={[{ label: "Jogos", to: "/jogos" }]}
                    current={game.name}
                    backLabel="Jogos"
                    backTo="/jogos"
                />
                <div className={styles.grid}>
                    {images.length > 0 && (
                        <div className={styles.gallery}>
                            <div className={`${shared.box} ${styles.stage}`}>
                                <img className={styles.stageImg} src={images[shot]} alt={`${game.name}, captura ${shot + 1}`} />
                                <span className={styles.caption}>
                                    <span className={styles.captionLong}>[CAPTURA DE TELA]</span>
                                    <span className={styles.captionShort}>
                                        {shot + 1}/{images.length}
                                    </span>
                                </span>
                            </div>
                            {images.length > 1 && (
                                <div role="group" aria-label="Fotos do jogo" className={styles.thumbs}>
                                    {images.map((src, i) => (
                                        <button
                                            key={src}
                                            type="button"
                                            aria-label={`Captura ${i + 1}`}
                                            aria-pressed={i === shot}
                                            onClick={() => setShot(i)}
                                            className={`${styles.thumb} ${i === shot ? styles.thumbOn : ""}`}
                                        >
                                            <img src={src} alt="" loading="lazy" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className={styles.buy}>
                        {offer && offer.discount > 0 && (
                            <div className={base.tags}>
                                <span className={`${base.tag} ${base.tagRed}`}>-{offer.discount}%</span>
                            </div>
                        )}
                        <h1 className={base.h1}>{game.name}</h1>
                        {(byline || director) && (
                            <p className={styles.byline}>
                                {byline}
                                {director && (
                                    <>
                                        {byline && " · "}dirigido por <Link to={`/diretores/${director.slug}`}>{director.name}</Link>
                                    </>
                                )}
                            </p>
                        )}
                        {summary.count > 0 && (
                            <a href="#avaliacoes" className={styles.rating}>
                                <span className={styles.stars}>
                                    <Stars filled={Math.round(summary.avg)} size={20} />
                                </span>
                                <strong>{summary.avgLabel}</strong>
                                <span className={base.muted}>({summary.countLabel})</span>
                            </a>
                        )}

                        {available.length > 0 && (
                            <fieldset className={base.fieldset}>
                                <legend className={base.legend}>PLATAFORMA</legend>
                                <div className={styles.platforms}>
                                    {available.map((p) => (
                                        <Button
                                            key={p}
                                            variant={p === platform ? "accent" : "secondary"}
                                            aria-pressed={p === platform}
                                            onClick={() => onPlatform(p)}
                                            className={`${base.option} ${styles.platBtn}`}
                                        >
                                            {platformName(p)}
                                        </Button>
                                    ))}
                                </div>
                            </fieldset>
                        )}

                        {offer && (
                            <div className={`${shared.box} ${base.priceBox}`}>
                                {offer.discount > 0 && <span className={base.old}>{formatPrice(offer.base_price / 100)}</span>}
                                <span className={base.priceNow}>{formatPrice(finalPrice(offer))}</span>
                                <span className={base.muted}>
                                    {[store, platform && platformName(platform)].filter(Boolean).join(" · ")}
                                </span>
                            </div>
                        )}

                        {offer && (
                            <div className={styles.ctas}>
                                <Button variant="primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={base.cta}>
                                    Comprar agora
                                </Button>
                            </div>
                        )}
                        <Button
                            variant="secondary"
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.whats}
                        >
                            <span className={styles.whatsLong}>Tirar dúvida no WhatsApp</span>
                            <span className={styles.whatsShort}>Dúvida? Chame no WhatsApp</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
