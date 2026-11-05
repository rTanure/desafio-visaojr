import { useState } from "react";
import { directors } from "../data/directors";
import { games } from "../data/games";
import { studios } from "../data/studios";
import { studioName } from "../components/detalhe/dados";
import { CardDiretor } from "../components/listagem/CardDiretor";
import { Pagina, Toolbar, Vazio, type Opcao } from "../components/listagem/blocos";
import { collator, normalizar, plural } from "../components/listagem/utils";
import styles from "../components/listagem/listagem.module.css";

type Ordem = "padrao" | "nome-az" | "nome-za" | "mais-jogos";

const ordens: (Opcao & { value: Ordem })[] = [
    { value: "padrao", label: "Padrão" },
    { value: "nome-az", label: "Nome (A-Z)" },
    { value: "nome-za", label: "Nome (Z-A)" },
    { value: "mais-jogos", label: "Mais jogos" },
];

const todos = Object.values(directors).map((director, i) => ({
    director,
    tone: i,
    studio: studioName(director) ?? "",
    gameCount: Object.values(games).filter((g) => g.director === director.slug).length,
}));

const estudios: Opcao[] = [
    { value: "all", label: "Todos os estúdios" },
    ...[...new Set(todos.map((d) => d.director.studio))]
        .map((slug) => ({ value: slug, label: studios[slug].name }))
        .sort((a, b) => collator(a.label, b.label)),
];

export function Diretores() {
    const [search, setSearch] = useState("");
    const [estudio, setEstudio] = useState("all");
    const [ordem, setOrdem] = useState<Ordem>("padrao");

    const termo = normalizar(search);
    const lista = todos
        .filter(
            (d) =>
                (estudio === "all" || d.director.studio === estudio) &&
                (normalizar(d.director.name).includes(termo) || normalizar(d.studio).includes(termo)),
        )
        .sort((a, b) => {
            switch (ordem) {
                case "nome-az":
                    return collator(a.director.name, b.director.name);
                case "nome-za":
                    return collator(b.director.name, a.director.name);
                case "mais-jogos":
                    return b.gameCount - a.gameCount;
                default:
                    return 0;
            }
        });

    const limpar = () => {
        setSearch("");
        setEstudio("all");
        setOrdem("padrao");
    };

    if (todos.length === 0) return null;

    return (
        <Pagina eyebrow="MESTRES DO JOGO" title="Grandes diretores" count={plural(lista.length, "diretor", "diretores")}>
            <Toolbar
                search={search}
                onSearch={setSearch}
                placeholder="Busque por diretor ou estúdio"
                select={{ label: "Estúdio", value: estudio, options: estudios, onChange: setEstudio }}
                sort={{ value: ordem, options: ordens, onChange: (v) => setOrdem(v as Ordem) }}
            />
            {lista.length > 0 ? (
                <div className={`${styles.grid} ${styles.gridWide}`}>
                    {lista.map((d) => (
                        <CardDiretor key={d.director.slug} director={d.director} gameCount={d.gameCount} tone={d.tone} />
                    ))}
                </div>
            ) : (
                <Vazio onClear={limpar}>Nenhum diretor encontrado</Vazio>
            )}
        </Pagina>
    );
}
