import './depoimentos.css';

//Cria a interface (molde) d etodos objetos desse tipo
interface Depoimento {
  
  nome: string;
  foto: string;
  localizacao: string;
  mensagem: string;
  
}

//Cria o array de todos os depoimentos
const lista_dep : Depoimento[] = [

    {
nome: "Michael",
foto: "/img/MichaelScott.png",
localizacao: "Scranton - PA",
mensagem: "A melhor loja de games do mundo? Talvez. Da Pensilvânia? Definitivamente. Da minha vida? Não quero criar polêmica, mas sim."

    },

   {
  nome: "Shadow",
  foto: "/img/Shadow.jpg",
  localizacao: "Westopolis",
  mensagem: "Não costumo recomendar nada. Mas o desempenho desse setup é aceitável. Considere isso um elogio.",
},



{
  nome: "Creed",
  foto: "/img/CreedBratton.jpg",
  localizacao: "Localização desconhecida",
  mensagem: "Comprei um Xbox. Paguei? Não lembro. O importante é que funciona.",
},

{
  nome: "Mario",
  foto: "/img/Mario 1.jpg",
  localizacao: "Reino dos Cogumelos",
  mensagem: "Mamma mia! Comprei meu novo setup e agora consigo salvar a Princesa Peach em 4K! Finalmente, um power-up que vale a pena!",
},

];






















