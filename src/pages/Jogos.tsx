import { CardJogo } from '../components/CardJogo.tsx';
import {jogos} from '../data/jogos.ts';

export function Jogos() {
    return (
        <div>
            <h1>TODOS OS JOGOS</h1>

            <div id="container-filtro">
                <div id="botao-filtros">
                    <h2>Filtros</h2>
                </div>
                <div id="botao-ordenar">
                    <h2>Ordenar por</h2>
                    <img src="" alt="seta de ordenação" />
                </div>
                <div id="botao-pesquisar">
                    <h2>Pesquisar</h2>
                    <img src="" alt="lupa" />
                </div>
            </div>
            
            <div id="container-jogos">
                {jogos.map((jogo) => (
                    <CardJogo key={jogo.id} jogo={jogo} />
                ))}
            </div>
        </div>
    )
}