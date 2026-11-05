import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

type HeaderProps = {
    cartCount?: number;
};

type NavItem = { label: string; to: string; end?: boolean };

// Home: âncoras das seções. Telas internas: rotas, com "Início" na frente.
const homeLinks: NavItem[] = [
    { label: "Consoles", to: "/#consoles" },
    { label: "Jogos", to: "/#jogos" },
    { label: "Diretores", to: "/diretores" },
    { label: "Depoimentos", to: "/#depoimentos" },
    { label: "Contato", to: "#contato" },
];

const innerLinks: NavItem[] = [
    { label: "Início", to: "/", end: true },
    { label: "Consoles", to: "/consoles" },
    { label: "Jogos", to: "/jogos" },
    { label: "Diretores", to: "/diretores" },
    { label: "Contato", to: "#contato" },
];

function PixelIcon({ children }: { children: React.ReactNode }) {
    return (
        <svg width="20" height="20" viewBox="0 0 10 10" shapeRendering="crispEdges" aria-hidden="true">
            {children}
        </svg>
    );
}

function SunIcon() {
    return (
        <PixelIcon>
            <rect x="3" y="3" width="4" height="4" fill="#12123A" />
            <rect x="4" y="0" width="2" height="2" fill="#12123A" />
            <rect x="4" y="8" width="2" height="2" fill="#12123A" />
            <rect x="0" y="4" width="2" height="2" fill="#12123A" />
            <rect x="8" y="4" width="2" height="2" fill="#12123A" />
        </PixelIcon>
    );
}

function MoonIcon() {
    return (
        <PixelIcon>
            <path d="M3 0h4v1h-2v1h-1v6h1v1h4v1h-6v-1h-2v-2h-1v-4h1v-2h2z" fill="#12123A" />
        </PixelIcon>
    );
}

function CartIcon() {
    return (
        <PixelIcon>
            <path d="M0 1h2v1h1v4h6v-4h-6v-1h7v6h-8v-5h-2z" fill="#FFFFFF" />
            <rect x="3" y="8" width="2" height="2" fill="#FFFFFF" />
            <rect x="7" y="8" width="2" height="2" fill="#FFFFFF" />
        </PixelIcon>
    );
}

function MenuIcon({ open }: { open: boolean }) {
    return (
        <PixelIcon>
            {open ? (
                <path d="M0 0h2v1h1v1h1v1h2v-1h1v-1h1v-1h2v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-2v1h-1v1h-1v1h-2v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1z" fill="currentColor" />
            ) : (
                <>
                    <rect x="0" y="1" width="10" height="2" fill="currentColor" />
                    <rect x="0" y="4" width="10" height="2" fill="currentColor" />
                    <rect x="0" y="7" width="10" height="2" fill="currentColor" />
                </>
            )}
        </PixelIcon>
    );
}

// Links com hash (âncoras) não usam NavLink: ele marcaria todos como ativos na Home.
function MenuLink({ item, className, onClick, children }: { item: NavItem; className: string; onClick?: () => void; children: React.ReactNode }) {
    if (item.to.includes("#")) {
        return <Link to={item.to} className={className} onClick={onClick}>{children}</Link>;
    }
    return <NavLink to={item.to} end={item.end} className={className} onClick={onClick}>{children}</NavLink>;
}

function SearchField() {
    return (
        <label style={{ display: "flex" }}>
            <span className="sr-only">Buscar na loja</span>
            <input className={styles.field} type="search" placeholder="Buscar jogos, consoles..." />
        </label>
    );
}

export function Header({ cartCount = 0 }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
    const { isDark, toggleTheme } = useTheme();
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const links = isHome ? homeLinks : innerLinks;
    const themeLabel = isDark ? "Ativar modo claro" : "Ativar modo escuro";

    return (
        <>
            <header className={styles.header}>
                <div className={styles.wrap}>
                    <Link to="/" className={styles.logo} onClick={closeMenu}>
                        <img className={styles.logoImg} src="/img/icons/Logo.png" alt="" />
                        <span className={styles.logoText}>MAYK<br />GAMES</span>
                    </Link>

                    <nav aria-label="Principal" className={`${styles.nav} ${styles.desktopOnly}`}>
                        {links.map((item) => (
                            <MenuLink key={item.label} item={item} className={styles.navlink}>
                                {item.label}
                            </MenuLink>
                        ))}
                    </nav>

                    <div className={styles.actions}>
                        <div className={styles.desktopOnly}>
                            <SearchField />
                        </div>
                        <Button
                            variant="accent"
                            className={styles.iconBtn}
                            aria-label={themeLabel}
                            onClick={toggleTheme}
                        >
                            {isDark ? <SunIcon /> : <MoonIcon />}
                        </Button>
                        <Button variant="primary" className={styles.cart} aria-label={`Carrinho, ${cartCount} itens`}>
                            <CartIcon />
                            <span>{cartCount}</span>
                        </Button>
                        <div className={styles.mobileOnly}>
                            <Button
                                variant="secondary"
                                className={styles.iconBtn}
                                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                                aria-expanded={menuOpen}
                                aria-controls="menu-principal"
                                onClick={() => setMenuOpen((open) => !open)}
                            >
                                <MenuIcon open={menuOpen} />
                            </Button>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <nav id="menu-principal" aria-label="Principal" className={`${styles.menuPanel} ${styles.mobileOnly}`}>
                        <div className={styles.menuSearch}>
                            <SearchField />
                        </div>
                        {links.map((item) => (
                            <MenuLink key={item.label} item={item} className={styles.mlink} onClick={closeMenu}>
                                {item.label}
                                <span aria-hidden="true">▸</span>
                            </MenuLink>
                        ))}
                    </nav>
                )}
            </header>

            {isHome && (
                <div className={`${styles.band} ${styles.mobileOnly}`}>
                    <SearchField />
                </div>
            )}
        </>
    );
}
