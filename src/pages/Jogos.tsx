import { useState } from "react";
import { GameCard } from "../components/detalhe/GameCard";
import { platformFilters, pricedGames, type PlatformFilter } from "../components/home/homeData";
import { Chips, Pagina, Toolbar, Vazio, type Opcao } from "../components/listagem/blocos";
import { collator, normalizar, plural } from "../components/listagem/utils";
import styles from "../components/listagem/listagem.module.css";

type Ordem = "padrao" | "nome-az" | "nome-za" | "preco-menor" | "preco-maior";

const ordens: (Opcao & { value: Ordem })[] = [
    { value: "padrao", label: "Padrão" },
    { value: "nome-az", label: "Nome (A-Z)" },
    { value: "nome-za", label: "Nome (Z-A)" },
    { value: "preco-menor", label: "Menor preço" },
    { value: "preco-maior", label: "Maior preço" },
];

const chipOptions: Opcao[] = platformFilters.map((f) => ({ value: f.id, label: f.label }));

export function Jogos() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<PlatformFilter>("all");
    const [ordem, setOrdem] = useState<Ordem>("padrao");

    const termo = normalizar(search);
    const lista = pricedGames
        .filter((g) => (filter === "all" || g.families.has(filter)) && normalizar(g.game.name).includes(termo))
        .sort((a, b) => {
            switch (ordem) {
                case "nome-az":
                    return collator(a.game.name, b.game.name);
                case "nome-za":
                    return collator(b.game.name, a.game.name);
                case "preco-menor":
                    return a.price - b.price;
                case "preco-maior":
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

    const limpar = () => {
        setSearch("");
        setFilter("all");
        setOrdem("padrao");
    };

    if (pricedGames.length === 0) return null;

    return (
        <Pagina eyebrow="SELECT YOUR GAME" title="Jogos à venda" count={plural(lista.length, "jogo", "jogos")}>
            <Toolbar
                search={search}
                onSearch={setSearch}
                placeholder="Pesquise um jogo"
                sort={{ value: ordem, options: ordens, onChange: (v) => setOrdem(v as Ordem) }}
            />
            <Chips label="Filtrar por plataforma" value={filter} options={chipOptions} onChange={(v) => setFilter(v as PlatformFilter)} />
            {lista.length > 0 ? (
                <div className={styles.grid}>
                    {lista.map((item) => (
                        <GameCard key={item.game.slug} item={item} showPlatforms compact />
                    ))}
                </div>
            ) : (
                <Vazio onClear={limpar}>Nenhum jogo encontrado</Vazio>
            )}
        </Pagina>
    );
}
