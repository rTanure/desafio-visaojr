import type { ReactNode } from "react";
import { Button } from "../Button/Button";
import shared from "../home/shared.module.css";
import styles from "./listagem.module.css";

type PaginaProps = { eyebrow: string; title: string; count: string; children: ReactNode };

/** Casca das listagens: cabeçalho de seção (eyebrow + título + contador) e conteúdo. */
export function Pagina({ eyebrow, title, count, children }: PaginaProps) {
    return (
        <section className={styles.section}>
            <div className={`${shared.wrap} ${styles.inner}`}>
                <div className={shared.head}>
                    <div>
                        <p className={shared.eyebrow}>{eyebrow}</p>
                        <h1 className={shared.title}>{title}</h1>
                    </div>
                    <span className={styles.count} aria-live="polite">
                        {count}
                    </span>
                </div>
                {children}
            </div>
        </section>
    );
}

export type Opcao = { value: string; label: string };

type ToolbarProps = {
    search: string;
    onSearch: (v: string) => void;
    placeholder: string;
    sort?: { value: string; options: Opcao[]; onChange: (v: string) => void };
    select?: { label: string; value: string; options: Opcao[]; onChange: (v: string) => void };
};

export function Toolbar({ search, onSearch, placeholder, sort, select }: ToolbarProps) {
    return (
        <div className={styles.toolbar}>
            <input
                type="search"
                className={`${styles.field} ${styles.search}`}
                placeholder={placeholder}
                aria-label={placeholder}
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
            {select && (
                <label className={styles.selectWrap}>
                    <span className={styles.selectLabel}>{select.label}</span>
                    <select className={styles.field} value={select.value} onChange={(e) => select.onChange(e.target.value)}>
                        {select.options.map((o) => (
                            <option key={o.value} value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                </label>
            )}
            {sort && (
                <label className={styles.selectWrap}>
                    <span className={styles.selectLabel}>Ordenar por</span>
                    <select className={styles.field} value={sort.value} onChange={(e) => sort.onChange(e.target.value)}>
                        {sort.options.map((o) => (
                            <option key={o.value} value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                </label>
            )}
        </div>
    );
}

type ChipsProps = { label: string; value: string; options: Opcao[]; onChange: (v: string) => void };

export function Chips({ label, value, options, onChange }: ChipsProps) {
    return (
        <div role="group" aria-label={label} className={styles.chips}>
            {options.map((o) => (
                <Button
                    key={o.value}
                    variant={o.value === value ? "accent" : "secondary"}
                    aria-pressed={o.value === value}
                    onClick={() => onChange(o.value)}
                    className={styles.chip}
                >
                    {o.label}
                </Button>
            ))}
        </div>
    );
}

export function Vazio({ children, onClear }: { children: ReactNode; onClear: () => void }) {
    return (
        <div className={`${shared.box} ${styles.empty}`} role="status">
            <p className={styles.emptyText}>{children}</p>
            <Button variant="secondary" onClick={onClear}>
                Limpar filtros
            </Button>
        </div>
    );
}
