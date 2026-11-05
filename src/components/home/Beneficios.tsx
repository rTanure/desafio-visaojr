import type { ReactNode } from "react";
import shared from "./shared.module.css";
import styles from "./Beneficios.module.css";

type Benefit = { title: string; text: string; short: string; icon: ReactNode; featured?: boolean };

const benefits: Benefit[] = [
    {
        title: "Parcele sem drama",
        text: "Cartão, Pix ou boleto. Você escolhe a forma de pagar.",
        short: "Cartão, Pix ou boleto.",
        featured: true,
        icon: (
            <>
                <rect x="0" y="2" width="10" height="7" fill="#12123A" />
                <rect x="1" y="3" width="8" height="5" fill="#FFFFFF" />
                <rect x="1" y="4" width="8" height="1" fill="#12123A" />
                <rect x="2" y="6" width="2" height="1" fill="#E52521" />
            </>
        ),
    },
    {
        title: "Garantia de verdade",
        text: "Produtos originais, testados antes de sair da loja.",
        short: "Originais e testados.",
        icon: (
            <>
                <path d="M1 0h8v6h-1v2h-2v1h-2v-1h-2v-2h-1z" fill="#1F5FD6" />
                <rect x="4" y="2" width="2" height="5" fill="#FFFFFF" />
                <rect x="3" y="3" width="4" height="2" fill="#FFFFFF" />
            </>
        ),
    },
    {
        title: "Suporte gamer",
        text: "Dúvida sobre console ou jogo? Fale com quem entende.",
        short: "Fale com quem entende.",
        icon: (
            <>
                <path d="M0 0h10v7h-6v1h-1v1h-1v-2h-2z" fill="#2BA84A" />
                <rect x="2" y="3" width="1" height="1" fill="#FFFFFF" />
                <rect x="4" y="3" width="1" height="1" fill="#FFFFFF" />
                <rect x="6" y="3" width="1" height="1" fill="#FFFFFF" />
            </>
        ),
    },
    {
        title: "Retire na loja",
        text: "Compre online e busque na loja física do Mayk.",
        short: "Compre e busque.",
        icon: (
            <>
                <path d="M5 0h0v1h1v1h1v1h1v1h2v1h-1v5h-8v-5h-1v-1h2v-1h1v-1h1v-1h1z" fill="#E52521" />
                <rect x="4" y="6" width="2" height="4" fill="#FFFFFF" />
            </>
        ),
    },
];

export function Beneficios() {
    return (
        <section className={styles.section} aria-label="Benefícios">
            <div className={`${shared.wrap} ${styles.grid}`}>
                {benefits.map((b) => (
                    <div key={b.title} className={`${shared.box} ${styles.card} ${b.featured ? styles.featured : ""}`}>
                        <svg className={styles.icon} width="40" height="40" viewBox="0 0 10 10" shapeRendering="crispEdges" aria-hidden="true">
                            {b.icon}
                        </svg>
                        <h3 className={styles.title}>{b.title}</h3>
                        <p className={styles.text}>
                            <span className={styles.long}>{b.text}</span>
                            <span className={styles.short}>{b.short}</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
