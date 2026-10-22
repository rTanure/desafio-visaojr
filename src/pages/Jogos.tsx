import { CardJogo } from '../components/CardJogo';
import {jogos} from '../data/jogos';
import './Jogos.css';

export function Jogos() {
    return (
        <div>
            <h1 id="titulo-jogos">TODOS OS JOGOS</h1>

            <div id="container-filtro">
                <button id="botao-filtros" type="button">
                    <span className="texto-botao">Filtros</span>
                </button>
                <button id="botao-ordenar" type="button">
                    <span className="texto-botao">Ordenar por</span>
                    <img src="/ordenar.png" alt="seta de ordenação" />
                </button>
                <input
                    id="botao-pesquisar"
                    type="text"
                    placeholder="Pesquise um jogo"
                />
            </div>
            
            <div id="container-jogos">
                {jogos.map((jogo) => (
                    <CardJogo key={jogo.id} jogo={jogo} />
                ))}
            </div>
        </div>
    )
}