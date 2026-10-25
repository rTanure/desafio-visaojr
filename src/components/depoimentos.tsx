import './depoimentos.css';
//Falta importar o componente carrosel da tarefa #3


interface Depoimento {
  
  nome: string;
  identificador: number
  foto: string;
  compra: string;
  mensagem: string;
  
}

//Cria o array de todos os depoimentos
const lista_dep : Depoimento[] = [

    {
nome: "Michael",
identificador: 1,
foto: "/img/MichaelScott.png",
compra: "Comprou Elder Ring",
mensagem: "A melhor loja de games do mundo? Talvez. Da Pensilvânia? Definitivamente. Da minha vida? Não quero criar polêmica, mas sim.",

    },

   {
  nome: "Shadow",
  identificador: 2,
  foto: "/img/Shadow.jpg",
  compra: "Comprou PC Game Pixel",
  mensagem: "Não costumo recomendar nada. Mas o desempenho desse setup é aceitável. Considere isso um elogio.",
  
},



{
  nome: "Creed",
  identificador: 3,
  foto: "/img/CreedBratton.jpg",
  compra: "Comprou Xbox Series X",
  mensagem: "Comprei um Xbox. Paguei? Não lembro. O importante é que funciona.",
},

{
  nome: "Mario",
  identificador: 4,
  foto: "/img/Mario 1.jpg",
  compra: "Comprou Monitor 4k",
  mensagem: "Mamma mia! Comprei meu novo setup e agora consigo salvar a Princesa Peach em 4K! Finalmente, um power-up que vale a pena!",
},

];




export function Depoimentos() {

  function criaCard(item : Depoimento) {
    return(
      <div key={item.identificador} className="card-depoimento">
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
    );
  }

  
  return (
    <section className="secao-depoimentos">
      <span className="subtitulo-depoimentos">HIGH SCORE</span>
      <h2 className="titulo-depoimentos">Quem jogou, aprovou</h2>

      <div className="container-depoimentos">
        {lista_dep.map(criaCard)}
      </div>
    </section>
  );
}



  















