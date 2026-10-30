
import './CardConsoles.css';

export type Console = {
    id: number;
    nome: string;
    imagem: string;
    valor: number;
    fabricante: string;
    tipo: string;
    geracao: string;
};

type CardConsoleProps = {
    console: Console;
};

export function CardConsole({ console: videogame }: CardConsoleProps) {
    return (
        <div className="card-console">
            <img
                className="card-console-imagem"
                src={videogame.imagem}
                alt={videogame.nome}
            />

            <div className="card-console-info">
                <h3 className="card-console-nome">
                    {videogame.nome}
                </h3>

                <p className="card-console-fabricante">
                    {videogame.fabricante}
                </p>

                <div className="card-console-detalhes">
                    <span>{videogame.tipo}</span>
                    <span>{videogame.geracao}</span>
                </div>

                <div className="card-console-faixa">
                    <span className="card-console-valor">
                        R$ {videogame.valor.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
