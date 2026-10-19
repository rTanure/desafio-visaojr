import './CardJogo.css';

export type Jogo = {
    id: number;
    nome: string;
    imagem: string;
    valor: number;
    consoles: string[];
};

type CardJogoProps = {
    jogo: Jogo;
};

export function CardJogo({ jogo }: CardJogoProps) {
    return (
        <div className="card-jogo">
            <img className="card-jogo-imagem" src={jogo.imagem} alt={jogo.nome} />
            
            <div className="card-jogo-info">
                <h3 className="card-jogo-nome">{jogo.nome}</h3>

                <div className="card-jogo-consoles">
                    {jogo.consoles.map((plataforma) => (
                        <img key={plataforma} src={`src/assets/${plataforma}.png`} alt={plataforma} />
                    ))}
                </div>

                <div className="card-jogo-faixa">
                    <span className="card-jogo-valor">R$ {jogo.valor.toFixed(2)}</span>
                 </div>

            </div>
            
        </div>  
    )
}