import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { ArrowLeft, ArrowRight } from "./icons";
import { directorCards, type DirectorCard } from "./homeData";
import shared from "./shared.module.css";
import styles from "./Diretores.module.css";

const tones = [styles.toneOrange, styles.toneRed, styles.toneBlue, styles.toneGreen, styles.toneYellow, styles.toneSky];

function Portrait({ card, tone }: { card: DirectorCard; tone: string }) {
    const [failed, setFailed] = useState(false);
    return (
        <div className={`${styles.cover} ${tone}`}>
            {!failed ? (
                <img className={shared.coverImg} src={card.director.image} alt="" loading="lazy" onError={() => setFailed(true)} />
            ) : (
                <svg width="160" height="160" viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden="true" className={styles.silhouette}>
                    <rect x="5" y="2" width="6" height="6" fill="#12123A" />
                    <rect x="4" y="3" width="8" height="4" fill="#12123A" />
                    <rect x="2" y="10" width="12" height="6" fill="#12123A" />
                    <rect x="4" y="9" width="8" height="1" fill="#12123A" />
                </svg>
            )}
            <span className={styles.initials}>{card.initials}</span>
        </div>
    );
}

export function Diretores() {
    const scroller = useRef<HTMLDivElement>(null);
    const [positions, setPositions] = useState(1);
    const [current, setCurrent] = useState(0);

    const step = useCallback(() => {
        const first = scroller.current?.firstElementChild as HTMLElement | null;
        if (!first) return 1;
        const gap = parseFloat(getComputedStyle(scroller.current as HTMLElement).columnGap) || 0;
        return first.offsetWidth + gap;
    }, []);

    const measure = useCallback(() => {
        const el = scroller.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setPositions(Math.max(1, Math.ceil(max / step() - 0.05) + 1));
    }, [step]);

    useEffect(() => {
        const el = scroller.current;
        if (!el) return;
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, [measure]);

    const goTo = (i: number) => {
        const el = scroller.current;
        if (!el) return;
        const target = (i + positions) % positions;
        el.scrollTo({ left: target * step(), behavior: "smooth" });
    };

    const onScroll = () => {
        const el = scroller.current;
        if (!el) return;
        const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
        setCurrent(atEnd ? positions - 1 : Math.min(positions - 1, Math.round(el.scrollLeft / step())));
    };

    if (directorCards.length === 0) return null;

    return (
        <section id="diretores" className={`${shared.band} ${styles.section}`}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div className={shared.head}>
                    <div>
                        <p className={shared.eyebrow}>MESTRES DO JOGO</p>
                        <h2 className={`${shared.title} ${styles.titleGap}`}>Grandes diretores</h2>
                        <p className={styles.lead}>
                            <span className={styles.leadLong}>Conheça as mentes por trás dos jogos mais marcantes e explore os títulos de cada um.</span>
                            <span className={styles.leadShort}>Deslize para conhecer as mentes por trás dos jogos.</span>
                        </p>
                    </div>
                    <div className={`${shared.row} ${styles.arrows}`}>
                        <Button variant="secondary" aria-label="Diretores anteriores" onClick={() => goTo(current - 1)} className={shared.arrowBtn}>
                            <ArrowLeft />
                        </Button>
                        <Button variant="accent" aria-label="Próximos diretores" onClick={() => goTo(current + 1)} className={shared.arrowBtn}>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>

            <div className={`${shared.wrap} ${styles.viewportWrap}`}>
                <div
                    ref={scroller}
                    className={styles.scroller}
                    onScroll={onScroll}
                    role="group"
                    aria-roledescription="carrossel"
                    aria-label="Grandes diretores"
                >
                    {directorCards.map((card, i) => (
                        <Link key={card.director.slug} to={`/diretores/${card.director.slug}`} className={`${shared.box} ${shared.lift} ${styles.card}`}>
                            <Portrait card={card} tone={tones[i % tones.length]} />
                            <div className={styles.info}>
                                <span className={styles.name}>{card.director.name}</span>
                                <span className={styles.studio}>{card.studio}</span>
                                <span className={styles.more}>VER JOGOS ▸</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={styles.dots}>
                {Array.from({ length: positions }, (_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Ir para ${directorCards[Math.min(i, directorCards.length - 1)].director.name}`}
                        aria-current={i === current}
                        onClick={() => goTo(i)}
                        className={`${styles.dot} ${i === current ? styles.dotOn : ""}`}
                    />
                ))}
            </div>
        </section>
    );
}
