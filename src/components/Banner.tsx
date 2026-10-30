import "./Banner.css";


export function Banner() {
  return (
    <section className="banner-container">
      <div className="banner-card">
        <div className="banner-texto">
          <h2>Pronto para o próximo nível?</h2>
          <p>Visite a loja, chame no WhatsApp ou siga a gente nas redes!</p>



          <div className="banner-botoes">
            <a href="https://api.whatsapp.com/send?phone=553193327631"target="_blank"rel="noreferrer"className="botao-whatsapp">
              Chamar no WhatsApp
            </a>

            <a href="https://instagram.com/visaojrufop"target="_blank"rel="noreferrer"className="botao-instagram">
              Seguir no Instagram
            </a>

          </div>

        </div>

        <img src="/img/icons/trofeu.png" alt="Ícone Troféu" className="banner-trofeu"/>

      </div>
    </section>
  );
}