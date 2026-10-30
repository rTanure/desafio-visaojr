
import { useState } from "react";
import { CardConsole } from "../components/CardConsoles";
import { consoles } from "../data/consoles";
import "./Consoles.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
const opcoesFiltro = [
  { valor: "Sony", texto: "Sony" },
  { valor: "Microsoft", texto: "Microsoft" },
  { valor: "Nintendo", texto: "Nintendo" },
  { valor: "Valve", texto: "Valve" },
];

const opcoesTipo = [
  { valor: "Mesa", texto: "Mesa" },
  { valor: "Portátil", texto: "Portátil" },
  { valor: "Híbrido", texto: "Híbrido" },
];

const opcoesOrdenacao = [
  { valor: "nome-az", texto: "Nome (A-Z)" },
  { valor: "nome-za", texto: "Nome (Z-A)" },
  { valor: "preco-menor", texto: "Menor preço" },
  { valor: "preco-maior", texto: "Maior preço" },
];

export function Consoles() {
  const [ordenarAberto, setOrdenarAberto] = useState(false);
  const [filtrosAberto, setFiltrosAberto] = useState(false);
  const [filtrosSelecionados, setFiltrosSelecionados] = useState<string[]>([]);
  const [tiposSelecionados, setTiposSelecionados] = useState<string[]>([]);
  const [ordenacao, setOrdenacao] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  function alternarOrdenar() {
    setOrdenarAberto(!ordenarAberto);
    setFiltrosAberto(false);
  }

  function alternarFiltros() {
    setFiltrosAberto(!filtrosAberto);
    setOrdenarAberto(false);
  }

  function alternarSelecao(
    valor: string,
    selecionados: string[],
    setSelecionados: (valores: string[]) => void
  ) {
    if (selecionados.includes(valor)) {
      setSelecionados(selecionados.filter((item) => item !== valor));
    } else {
      setSelecionados([...selecionados, valor]);
    }
  }

  const consolesFiltrados = consoles.filter((videogame) => {
    const correspondePesquisa = videogame.nome
      .toLowerCase()
      .includes(pesquisa.trim().toLowerCase());

    const correspondeFabricante =
      filtrosSelecionados.length === 0 ||
      filtrosSelecionados.includes(videogame.fabricante);

    const correspondeTipo =
      tiposSelecionados.length === 0 ||
      tiposSelecionados.includes(videogame.tipo);

    return (
      correspondePesquisa &&
      correspondeFabricante &&
      correspondeTipo
    );
  });

  const consolesOrdenados = [...consolesFiltrados].sort((a, b) => {
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
    <>
       <Header />

      <main>
        <h1 id="titulo-consoles">CONSOLES À VENDA</h1>

        <div id="container-filtro-consoles">
          <button
            id="botao-filtros-consoles"
            type="button"
            onClick={alternarFiltros}
          >
            <span className="texto-botao">Filtros</span>
          </button>

          <button
            id="botao-ordenar-consoles"
            type="button"
            onClick={alternarOrdenar}
          >
            <span className="texto-botao">Ordenar por</span>
            <img src="/ordenar.png" alt="seta de ordenação" />
          </button>

          <input
            id="botao-pesquisar-consoles"
            type="text"
            placeholder="Pesquise um console"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />

          {filtrosAberto && (
            <div id="lista-filtros-consoles">
              <p>Fabricante</p>

              {opcoesFiltro.map((opcao) => (
                <button
                  key={opcao.valor}
                  type="button"
                  className={
                    filtrosSelecionados.includes(opcao.valor)
                      ? "opcao-ordenar opcao-ativa"
                      : "opcao-ordenar"
                  }
                  onClick={() =>
                    alternarSelecao(
                      opcao.valor,
                      filtrosSelecionados,
                      setFiltrosSelecionados
                    )
                  }
                >
                  {opcao.texto}
                </button>
              ))}

              <p>Tipo</p>

              {opcoesTipo.map((opcao) => (
                <button
                  key={opcao.valor}
                  type="button"
                  className={
                    tiposSelecionados.includes(opcao.valor)
                      ? "opcao-ordenar opcao-ativa"
                      : "opcao-ordenar"
                  }
                  onClick={() =>
                    alternarSelecao(
                      opcao.valor,
                      tiposSelecionados,
                      setTiposSelecionados
                    )
                  }
                >
                  {opcao.texto}
                </button>
              ))}
            </div>
          )}

          {ordenarAberto && (
            <div id="lista-ordenar-consoles">
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
                      ordenacao === opcao.valor ? "" : opcao.valor
                    )
                  }
                >
                  {opcao.texto}
                </button>
              ))}
            </div>
          )}
        </div>

        <div id="container-consoles">
          {consolesOrdenados.map((videogame) => (
            <CardConsole
              key={videogame.id}
              console={videogame}
            />
          ))}
        </div>

        {consolesOrdenados.length === 0 && (
          <p id="sem-resultados-consoles">
            Nenhum console encontrado
          </p>
        )}
      </main>
         <Footer />
        
    </>
  );
}

export default Consoles;
