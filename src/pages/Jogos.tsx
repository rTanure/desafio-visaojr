import { useState } from "react";
import { CardJogo } from "../components/CardJogo";
import { jogos } from "../data/jogos";
import "./Jogos.css";

const opcoesFiltro = [
  { valor: "playstation", texto: "PlayStation" },
  { valor: "xbox", texto: "Xbox" },
  { valor: "switch", texto: "Switch" },
  { valor: "pc", texto: "PC" },
];

const opcoesOrdenacao = [
  { valor: "nome-az", texto: "Nome (A-Z)" },
  { valor: "nome-za", texto: "Nome (Z-A)" },
  { valor: "preco-menor", texto: "Menor preço" },
  { valor: "preco-maior", texto: "Maior preço" },
];

export function Jogos() {
  const [ordenarAberto, setOrdenarAberto] = useState(false);
  const [filtrosAberto, setFiltrosAberto] = useState(false);
  const [filtrosSelecionados, setFiltrosSelecionados] = useState<string[]>([]);
  const [ordenacao, setOrdenacao] = useState<string>("");

  function alternarOrdenar() {
    setOrdenarAberto(!ordenarAberto);
    setFiltrosAberto(false);
  }

  function alternarFiltros() {
    setFiltrosAberto(!filtrosAberto);
    setOrdenarAberto(false);
  }

  function alternarConsole(valor: string) {
    if (filtrosSelecionados.includes(valor)) {
      setFiltrosSelecionados(
        filtrosSelecionados.filter((item) => item !== valor),
      );
    } else {
      setFiltrosSelecionados([...filtrosSelecionados, valor]);
    }
  }

  const jogosFiltrados = jogos.filter((jogo) => {
    if (filtrosSelecionados.length === 0) {
      return true;
    }
    return jogo.consoles.some((console) =>
      filtrosSelecionados.includes(console),
    );
  });

  const jogosOrdenados = [...jogosFiltrados].sort((a, b) => {
    switch (ordenacao) {
      case "nome-az":
        return a.nome.localeCompare(b.nome);

      case "nome-za":
        return b.nome.localeCompare(a.nome);

      case "preco-menor":
        return a.valor - b.valor;

      case "preco-maior":
        return b.valor - a.valor;

      default:
        return 0;
    }
  });

  return (
    <div>
      <h1 id="titulo-jogos">JOGOS À VENDA</h1>

      <div id="container-filtro">
        <button id="botao-filtros" type="button" onClick={alternarFiltros}>
          <span className="texto-botao">Filtros</span>
        </button>
        <button id="botao-ordenar" type="button" onClick={alternarOrdenar}>
          <span className="texto-botao">Ordenar por</span>
          <img src="/ordenar.png" alt="seta de ordenação" />
        </button>
        <input
          id="botao-pesquisar"
          type="text"
          placeholder="Pesquise um jogo"
        />

        {filtrosAberto && (
          <div id="lista-filtros">
            {opcoesFiltro.map((opcao) => (
              <button
                key={opcao.valor}
                type="button"
                className={
                  filtrosSelecionados.includes(opcao.valor)
                    ? "opcao-ordenar opcao-ativa"
                    : "opcao-ordenar"
                }
                onClick={() => alternarConsole(opcao.valor)}
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        )}

        {ordenarAberto && (
          <div id="lista-ordenar">
            {opcoesOrdenacao.map((opcao) => (
              <button
                key={opcao.valor}
                type="button"
                className={
                  ordenacao === opcao.valor
                    ? "opcao-ordenar opcao-ativa"
                    : "opcao-ordenar"
                }
                onClick={() =>
                  setOrdenacao(
                    ordenacao === opcao.valor ? "nome-az" : opcao.valor,
                  )
                }
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        )}
      </div>

      <div id="container-jogos">
        {jogosOrdenados.map((jogo) => (
          <CardJogo key={jogo.id} jogo={jogo} />
        ))}
      </div>

      {jogosOrdenados.length === 0 && (
        <p id="sem-resultados">Nenhum jogo encontrado</p>
      )}
    </div>
  );
}
