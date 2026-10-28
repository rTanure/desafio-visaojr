import { Link } from "react-router-dom";
import "./JogosDestaque.css";
import { Button } from "./Button/Button";
import { jogos } from "../data/jogos";




export function JogosDestaque() {


  const jogosEmDestaque = jogos.slice(0, 4);

  const descontos = [40, 30, 50, 20];

  const beneficios = [
    
    {
      id: 1,
      icone: "/img/icons/iconCartao.png",
      titulo: "Parcele sem drama",
      descricao: "Cartão, Pix ou boleto. Você escolhe a forma de pagar.",
      destaque: true,
    },

    {
      id: 2,
      icone: "/img/icons/iconCruz.png",
      titulo: "Garantia de verdade",
      descricao: "Produtos originais, testados antes de sair da loja.",
    },

    {
      id: 3,
      icone: "/img/icons/iconMensagem.png",
      titulo: "Suporte gamer",
      descricao: "Dúvida sobre console ou jogo? Fale com quem entende.",
    },

    {
      id: 4,
      icone: "/img/icons/iconCasa.png",
      titulo: "Retire na loja",
      descricao: "Compre online e busque na loja física do Mayk.",
    },

  ];




  return (



    <>
      
      <div className="barra-divisao"></div>

      <section className="jogos-destaque-container">
        

         <div className="jogos-destaque-header">
             <div>
                <span className="fase-bonus">FASE BÔNUS</span>
                <h2>Jogos em promoção</h2>
          </div>

          <Button to="/jogos" variant="info">
            Ver todos os jogos
          </Button>
        </div>


        <div className="jogos-grid">
             {jogosEmDestaque.map((jogo, index) => {

               const plataformas = jogo.consoles.join(" · ");

               const desconto = descontos[index % descontos.length];

               const precoNovo = jogo.valor * (1 - desconto / 100);

            return (
              <Link to={`/jogos/${jogo.id}`}key={jogo.id}className="card-retro">
                <div className="card-banner">
                  <span className="badge-desconto">-{desconto}%</span>

                  <img src={jogo.imagem} alt={jogo.nome}className="card-banner-img"/>

                </div>

                <div className="card-corpo">
                     <span className="plataformas">{plataformas}</span>
                     <h4 className="titulo-jogo">{jogo.nome}</h4>


                  <del className="preco-antigo">
                    R$ {jogo.valor.toFixed(2).replace(".", ",")}
                  </del>


                  <div className="preco-atual">
                    R$ {precoNovo.toFixed(2).replace(".", ",")}
                  </div>
                </div>

              </Link>
            );

          })}

        </div>

        

        <div className="beneficios-grid">
          {beneficios.map((item) => (
            <div key={item.id} className={`card-beneficio ${item.destaque ? "destaque-amarelo" : ""}`}>

              <div className="beneficio-icone-wrapper">
                   <img src={item.icone} alt={item.titulo}className="beneficio-icone"/>

              </div>
              <h3 className="beneficio-titulo">{item.titulo}</h3>
              <p className="beneficio-descricao">{item.descricao}</p>
            </div>

          ))}

        </div>
      </section>

    </>
  );
}