import './footer.css';



export function Footer(){

return(

   <footer>
        <div className='footer_content'>
             <div className='footer_contacts'>

              <div className='footer_logo'>
                  <img src='/img/icones/Logo.png' alt='Mayk Games' className='footer_logo_img' />
                      <span className='footer_logo_titulo'>
                            MAYK<br />GAMES
                       </span>
               </div>

                <p className='footer_mensagem'>
                    A loja de quem vive games: consoles, PCs e jogos com atendimento de player para player.
                </p>

              
              
                <div className='footer_socialmedia'>

                    
                    <a href="https://instagram.com/visaojrufop" target="_blank" rel="noreferrer" className="footer_link">
                       <img src="/img/icones/Instagram.png" alt="Instagram" />
                    </a>

                    <a href="https://www.facebook.com/visaojrufop/" target="_blank" rel="noreferrer" className="footer_link">
                       <img src="/img/icones/Facebook.png" alt="Facebook" />
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=553193327631" target="_blank" rel="noreferrer" className="footer_link">
                       <img src="/img/icones/WhatsApp.png" alt="Whatsapp" />
                    </a>


                    


                   </div>
              
              
              
              
              
              
              
              
              </div>
              
              <ul className='footer_list'>
                  <li>
                    <h3>NAVEGAÇÃO</h3>
                  </li>

                  <li> <a href='#' className='footer_link'>Consoles</a></li>
                   <li><a href='#' className='footer_link'>Jogos</a></li>
                   <li><a href='#' className='footer_link'>Diretores</a></li>
                   <li><a href='#' className='footer_link'>Promoções</a></li>
                   <li><a href='#' className='footer_link'>Depoimentos</a></li>
                   </ul>

              
              <ul className='footer_list'>
                  <li>
                    <h3>ATENDIMENTO</h3>
                  </li>
                    <li><p className='footer_atendimento'>WhatsApp: (31) 99332-7631</p></li>
                    <li><p className='footer_atendimento'>Seg a sáb  8:00-18:00</p></li>
                    <li><p className='footer_atendimento'>Rua Pixel - Pixelândia</p></li>
                    <li><p className='footer_atendimento'>contato@maykgames.com.br</p></li>
                   </ul>



            <div className="footer_comentario">
                  <h3>DEIXE SEU COMENTÁRIO</h3>
              <form className="footer_form">
                  <label>Seu nome</label>
                  <input type="text" className="footer_input" />

                     <label>Mensagem</label>
                     <textarea className="footer_textarea"></textarea>

                    <button type="submit" className="footer_btn">Enviar para o Mayk</button>
               </form>
            </div>
                  

                


          
          
          
          
          
          
          </div>
         
         <div className="sub-footer">
             <p>&copy;2026 Mayk Games. Todos os direitos reservados.</p>
             <p>Feito pela Equipe 1 · PS Visão Júnior 2026</p>
          </div>
    
    
    </footer>











);


}


