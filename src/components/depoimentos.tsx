import './depoimentos.css';
import { Carousel } from "./Carousel.tsx";

interface Depoimento {
  
  nome: string;
  foto: string;
  compra: string;
  mensagem: string;
  
}


const lista_dep : Depoimento[] = [

   

   {
  nome: "Shadow",
  foto: "/img/fotos/Shadow.jpg",
  compra: "Comprou Computador",
  mensagem: "Não costumo recomendar nada. Mas o desempenho desse setup é aceitável. Considere isso um elogio.",
  
},



{
  nome: "Mario",
  foto: "/img/fotos/Mario 1.jpg",
  compra: "Comprou Monitor 4k",
  mensagem: "Mamma mia! Comprei meu novo monitor e agora consigo salvar a Princesa Peach em 4K! Finalmente, um power-up que vale a pena!",
},

   { nome: "Sonic",
    foto: "/img/fotos/Sonic.jpg",
    compra: "Comprou SSD NVMe",
    mensagem: "Sempre achei que eu era a coisa mais rápida, mas esse SSD NVMe quase me deixou pra trás. Entrega relâmpago!",
},


{
  nome: "Luigi",
  foto: "/img/fotos/Luigi.jpg",
  compra: "Comprou Fone Gamer Sem Fio",
  mensagem: "Comprei pra ver se não ouço os fantasmas da mansão. Abafa o som que é uma beleza!",
},


 {
nome: "Michael",
foto: "/img/fotos/MichaelScott.png",
compra: "Comprou SSD Nvme",
mensagem: "Agora que os arquivos abrem instantaneamente, consigo terminar meu trabalho em 5 minutos e passar o resto do dia ignorando o Toby.",

    },

{
  nome: "Creed",
  foto: "/img/fotos/CreedBratton.jpg",
  compra: "Comprou Xbox Series X",
  mensagem: "Comprei um Xbox. Paguei? Não lembro. O importante é que funciona.",
},


];























export function Depoimentos() {
  return (
    <section className="secao-depoimentos">
      <span className="subtitulo-depoimentos">HIGH SCORE</span>
      <h2 className="titulo-depoimentos">Quem jogou, aprovou</h2>

      <Carousel numberOfChildren={3} >
        {lista_dep.map((item) => (
          <div key={item.nome} className="card-depoimento">
            
            <div className="estrelas">★★★★★</div>

            <p className="mensagem-depoimento">"{item.mensagem}"</p>

            <div className="card-footer">
              <img 
                src={item.foto} 
                alt={item.nome} 
                className="foto-depoimento" 
              />
              <div className="nome-compra">
                <h3 className="nome-depoimento">{item.nome}</h3>
                <span className="compra-depoimento">{item.compra}</span>
              </div>
            </div>

          </div>
        ))}
        
      </Carousel>
    </section>
  );
}





  















