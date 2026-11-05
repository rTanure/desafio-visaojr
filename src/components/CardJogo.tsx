import { Link } from 'react-router-dom';
import './CardJogo.css';

export type Jogo = {
    id: number;
    nome: string;
    slug?: string; // slug em data/games.ts, quando o jogo existe lá
    imagem: string;
    valor: number;
    consoles: string[];
    autor: string;
};

type CardJogoProps = {
    jogo: Jogo;
};

export function CardJogo({ jogo }: CardJogoProps) {
    const content = (
        <>
            <img className="card-jogo-imagem" src={jogo.imagem} alt={jogo.nome} />
            
            <div className="card-jogo-info">
                <h3 className="card-jogo-nome">{jogo.nome}</h3>

                <div className="card-jogo-consoles">
                    {jogo.consoles.map((plataforma) => (
                        <img key={plataforma} src={`/${plataforma}.png`} alt={plataforma} />
                    ))}
                </div>

                <div className="card-jogo-autor">
                    <p>por {jogo.autor}</p>
                </div>

                <div className="card-jogo-faixa">
                    <span className="card-jogo-valor">R$ {jogo.valor.toFixed(2)}</span>
                 </div>

            </div>
        </>
    );

    if (jogo.slug) {
        return (
            <Link to={`/jogos/${jogo.slug}`} className="card-jogo card-link">
                {content}
            </Link>
        );
    }
    return <div className="card-jogo">{content}</div>;
}