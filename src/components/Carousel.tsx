import { Children, useEffect, useMemo, useRef, useState, type ReactNode, } from "react";

interface CarouselProps {
    children: ReactNode;
    numberOfChildren?: number;
    controlPosition?: "inside" | "outside" | "no-control";
    autoPlay?: number
}

export function Carousel({
    children,
    numberOfChildren = 1,
    controlPosition = "inside",
    autoPlay
}: CarouselProps) {
    // Mantem a largura do carrossel sempre atualizada
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const observer = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width);
        });

        observer.observe(carousel);

        return () => observer.disconnect();
    }, []);

    // lógica do carrosel

    const [atual, setAtual] = useState(0);
    const slides = useMemo( () => Children.toArray(children), [children] );

    const totalPosicoes = Math.max( 1, slides.length - numberOfChildren + 1 );

    const slideWidth = width / Math.max(1, numberOfChildren);


    const navegarPara = (index: number) => {
        const novoIndice =
            (index + totalPosicoes) % totalPosicoes;

        const container = carouselRef.current
            ?.querySelector<HTMLDivElement>(".carousel-container");

        if (!container) return;

        container.scrollTo({
            left: novoIndice * slideWidth,
            behavior: "smooth",
        });
    };

    const anterior = () => {
        navegarPara(atual - 1);
    };

    const proximo = () => {
        navegarPara(atual + 1);
    };

    const mostrarControles = controlPosition !== "no-control" && totalPosicoes > 1 ;

    useEffect(() => {
        if(!autoPlay) return

        const timer = setInterval(() => {
            setAtual((prev) => {
                const next = (prev + 1) % totalPosicoes;

                carouselRef.current
                    ?.querySelector<HTMLDivElement>(".carousel-container")
                    ?.scrollTo({
                        left: next * slideWidth,
                        behavior: "smooth",
                    });

                return next;
            });
        }, autoPlay);

        return () => clearInterval(timer);
    }, [slideWidth, totalPosicoes, autoPlay]);

    if (slides.length === 0) return null;

    return (
        <div
            className={`carousel ${controlPosition}`}
            ref={carouselRef}
        >
            <div
                className="carousel-container"
                onScroll={(event) => {
                    if (slideWidth <= 0) return;

                    const novoIndice = Math.min(
                        totalPosicoes - 1,
                        Math.round(event.currentTarget.scrollLeft / slideWidth)
                    );

                    setAtual((prev) => prev === novoIndice ? prev : novoIndice);
                }}
            >
                <div className="carousel-list">
                    {slides.map((slide, index) => (
                        <div
                            className="carousel-slide"
                            key={index}
                            style={{
                                width: `${slideWidth}px`,
                            }}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            {mostrarControles && (
                <>
                    <div className="minimap">
                        {Array.from({ length: totalPosicoes }, (_, i) => (
                            <button
                                key={i}
                                className={`minimap-item ${atual === i ? "atual" : ""}`}
                                onClick={() => navegarPara(i)}
                            />
                        ))}
                    </div>

                    {slides.length > 1 && (
                        <>
                            <button
                                type="button"
                                className="controll left"
                                onClick={anterior}
                            >
                                {"<"}
                            </button>

                            <button
                                type="button"
                                className="controll right"
                                onClick={proximo}
                            >
                                {">"}
                            </button>
                        </>
                    )}
                </>
            )}
        </div>
    );
}