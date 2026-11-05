import shared from "./shared.module.css";
import styles from "./Depoimentos.module.css";

type Depoimento = { nome: string; foto: string; compra: string; mensagem: string };

// Depoimentos do projeto (reaproveitados do componente antigo), no layout da canvas.
const depoimentos: Depoimento[] = [
    {
        nome: "Shadow",
        foto: "/img/fotos/Shadow.jpg",
        compra: "Comprou Computador",
        mensagem: "Não costumo recomendar nada. Mas o desempenho desse setup é aceitável. Considere isso um elogio.",
    },
    {
        nome: "Mario",
        foto: "/img/fotos/Mario 1.jpg",
        compra: "Comprou Monitor 4k",
        mensagem: "Mamma mia! Comprei meu novo monitor e agora consigo salvar a Princesa Peach em 4K! Finalmente, um power-up que vale a pena!",
    },
    {
        nome: "Sonic",
        foto: "/img/fotos/Sonic.jpg",
        compra: "Comprou SSD NVMe",
        mensagem: "Sempre achei que eu era a coisa mais rápida, mas esse SSD NVMe quase me deixou pra trás. Entrega relâmpago!",
    },
    {
        nome: "Luigi",
        foto: "/img/fotos/Luigi.jpg",
        compra: "Comprou Fone Gamer Sem Fio",
        mensagem: "Comprei pra ver se não ouço os fantasmas da mansão. Abafa o som que é uma beleza!",
    },
    {
        nome: "Michael",
        foto: "/img/fotos/MichaelScott.png",
        compra: "Comprou SSD Nvme",
        mensagem: "Agora que os arquivos abrem instantaneamente, consigo terminar meu trabalho em 5 minutos e passar o resto do dia ignorando o Toby.",
    },
    {
        nome: "Creed",
        foto: "/img/fotos/CreedBratton.jpg",
        compra: "Comprou Xbox Series X",
        mensagem: "Comprei um Xbox. Paguei? Não lembro. O importante é que funciona.",
    },
];

function Star() {
    return (
        <svg width="22" height="22" viewBox="0 0 9 9" shapeRendering="crispEdges" aria-hidden="true">
            <path d="M4 0h1v2h1v1h3v1h-1v1h-1v1h1v3h-1v-1h-2v-1h-1v1h-2v1h-1v-3h1v-1h-1v-1h-1v-1h3v-1h1z" fill="#F7871E" />
        </svg>
    );
}

export function Depoimentos() {
    return (
        <section id="depoimentos" className={`${shared.band} ${styles.section}`}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div className={styles.head}>
                    <p className={shared.eyebrow}>HIGH SCORE</p>
                    <h2 className={shared.title}>Quem jogou, aprovou</h2>
                </div>
            </div>
            <div className={`${shared.wrap} ${styles.listWrap}`}>
                <div className={styles.list}>
                    {depoimentos.map((d) => (
                        <figure key={d.nome} className={`${shared.box} ${styles.card}`}>
                            <div className={styles.stars} role="img" aria-label="5 de 5 estrelas">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <Star key={i} />
                                ))}
                            </div>
                            <blockquote className={styles.quote}>“{d.mensagem}”</blockquote>
                            <figcaption className={styles.who}>
                                <img className={styles.photo} src={d.foto} alt="" loading="lazy" />
                                <span className={styles.meta}>
                                    <strong>{d.nome}</strong>
                                    <span className={styles.bought}>{d.compra}</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
