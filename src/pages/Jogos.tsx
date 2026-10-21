import { CardJogo } from '../components/CardJogo.tsx';
import {jogos} from '../data/jogos.ts';
import './Jogos.css';

export function Jogos() {
    return (
        <div>
            <h1 id="titulo-jogos">TODOS OS JOGOS</h1>

            <div id="container-filtro">
                <button id="botao-filtros" type="button">
                    <h2>Filtros</h2>
                </button>
                <button id="botao-ordenar" type="button">
                    <h2>Ordenar por</h2>
                    <img src="src/assets/ordenar.png" alt="seta de ordenação" />
                </button>
                <input
                    id="botao-pesquisar"
                    type="text"
                    placeholder="Pesquise um jogo"
                    aria-label="Pesquise um jogo"
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