import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
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
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { to?: undefined; href?: undefined };

type ButtonAsLink = CommonProps & { to: string; href?: undefined };

// Link externo ou âncora (mailto:, #secao, https://...)
type ButtonAsAnchor = CommonProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string; to?: undefined };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

/**
 * primary   → vermelho  (.b-red: carrinho, Ver ofertas, Comprar)
 * secondary → superfície (.b-ghost: Falar no WhatsApp, menu, filtros)
 * accent    → amarelo   (.b-yel: tema, Enviar para o Mayk)
 * info      → azul      (.b-blue: Ver jogos)
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
        const { to, ...linkProps } = rest;
        return (
            <Link to={to} className={classes} {...linkProps}>
                {children}
            </Link>
        );
    }

    if ("href" in rest && rest.href !== undefined) {
        return (
            <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}
