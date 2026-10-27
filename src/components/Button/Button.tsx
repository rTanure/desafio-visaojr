import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "accent" | "info";
export type ButtonSize = "sm" | "md";

type CommonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    className?: string;
    children: ReactNode;
};

type ButtonAsButton = CommonProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { to?: undefined };

type ButtonAsLink = CommonProps & { to: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * primary   → vermelho  (Ver ofertas, Comprar, Comprar agora)
 * secondary → branco    (Falar no WhatsApp, filtros)
 * accent    → amarelo   (Adicionar ao carrinho, Enviar para o Mayk)
 * info      → azul      (Ver jogos)
 */
export function Button({
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    children,
    ...rest
}: ButtonProps) {
    const classes = [styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, className]
        .filter(Boolean)
        .join(" ");

    if ("to" in rest && rest.to !== undefined) {
        return (
            <Link to={rest.to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}
