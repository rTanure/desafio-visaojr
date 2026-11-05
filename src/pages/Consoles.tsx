import { useState } from "react";
import { consoles } from "../data/consoles";
import { CardConsole } from "../components/listagem/CardConsole";
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

const fabricantes: Opcao[] = [
    { value: "all", label: "Todos" },
    ...[...new Set(consoles.map((c) => c.fabricante))].map((f) => ({ value: f, label: f })),
];

export function Consoles() {
    const [search, setSearch] = useState("");
    const [fabricante, setFabricante] = useState("all");
    const [ordem, setOrdem] = useState<Ordem>("padrao");

    const termo = normalizar(search);
    const lista = consoles
        .filter((c) => !!c.slug && (fabricante === "all" || c.fabricante === fabricante) && normalizar(c.nome).includes(termo))
        .sort((a, b) => {
            switch (ordem) {
                case "nome-az":
                    return collator(a.nome, b.nome);
                case "nome-za":
                    return collator(b.nome, a.nome);
                case "preco-menor":
                    return a.valor - b.valor;
                case "preco-maior":
                    return b.valor - a.valor;
                default:
                    return 0;
            }
        });

    const limpar = () => {
        setSearch("");
        setFabricante("all");
        setOrdem("padrao");
    };

    if (consoles.length === 0) return null;

    return (
        <Pagina eyebrow="ESCOLHA SEU PLAYER 1" title="Consoles à venda" count={plural(lista.length, "console", "consoles")}>
            <Toolbar
                search={search}
                onSearch={setSearch}
                placeholder="Pesquise um console"
                sort={{ value: ordem, options: ordens, onChange: (v) => setOrdem(v as Ordem) }}
            />
            <Chips label="Filtrar por fabricante" value={fabricante} options={fabricantes} onChange={setFabricante} />
            {lista.length > 0 ? (
                <div className={styles.grid}>
                    {lista.map((c) => (
                        <CardConsole key={c.id} item={c} />
                    ))}
                </div>
            ) : (
                <Vazio onClear={limpar}>Nenhum console encontrado</Vazio>
            )}
        </Pagina>
    );
}
