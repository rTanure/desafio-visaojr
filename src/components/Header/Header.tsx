import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

type HeaderProps = {
    cartCount?: number;
};

function MoonIcon() {
    return (
        <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M6 1h4v2H8v2H6v6h2v2h2v2H6v-2H4v-2H2V5h2V3h2z" />
        </svg>
    );
}

function CartIcon() {
    return (
        <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M0 1h3l1 3h12l-2 7H5L3 3H0zM5 13h2v2H5zm6 0h2v2h-2z" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M1 3h14v2H1zm0 4h14v2H1zm0 4h14v2H1z" />
        </svg>
    );
}

export function Header({ cartCount = 0 }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.top}>
                {/* TODO: trocar pelo logo exportado do Figma */}
                <Link to="/" className={styles.logo} onClick={closeMenu}>
                    <span className={styles.mark} aria-hidden="true">V</span>
                    <span>MAYK<br />GAMES</span>
                </Link>

                <div className={styles.actions}>
                    <button type="button" className={`${styles.iconBtn} ${styles.moon}`} aria-label="Alternar tema">
                        <MoonIcon />
                    </button>
                    <button
                        type="button"
                        className={`${styles.iconBtn} ${styles.cart}`}
                        aria-label={`Carrinho com ${cartCount} itens`}
                    >
                        <CartIcon />
                        {cartCount > 0 && <span className={styles.count}>{cartCount}</span>}
                    </button>
                    <button
                        type="button"
                        className={styles.iconBtn}
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        aria-controls="menu-principal"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav id="menu-principal" className={styles.menu}>
                    <NavLink to="/" end onClick={closeMenu}>Início</NavLink>
                    <NavLink to="/sobre" onClick={closeMenu}>Sobre</NavLink>
                </nav>
            )}

            <div className={styles.search}>
                <input type="search" placeholder="Buscar jogos, consoles..." aria-label="Buscar jogos e consoles" />
            </div>
        </header>
    );
}
