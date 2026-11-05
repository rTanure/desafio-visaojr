import { Link } from "react-router-dom";
import { Button } from "./Button/Button";
import "./footer.css";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=553193327631";
const EMAIL = "contato@maykgames.com.br";

function InstagramIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function WhatsAppIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M4 20l1.4-4.2A8 8 0 1 1 8.5 19z" />
            <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5" />
        </svg>
    );
}

export function Footer() {
    return (
        <footer id="contato" className="footer">
            <div className="footer-bricks" />
            <div className="footer-wrap footer-grid">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/img/icons/Logo.png" alt="" />
                        <span>MAYK<br />GAMES</span>
                    </div>
                    <p className="footer-desc">
                        A loja de quem vive games: consoles, PCs e jogos com atendimento de player para player.
                    </p>
                    <div className="footer-social">
                        <a href="https://instagram.com/visaojrufop" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-red">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.facebook.com/visaojrufop/" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-blue">
                            <FacebookIcon />
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="footer-social-green">
                            <WhatsAppIcon />
                        </a>
                    </div>
                </div>

                <div className="footer-cols">
                    <nav aria-label="Rodapé" className="footer-col">
                        <h3>NAVEGAÇÃO</h3>
                        <Link to="/#consoles">Consoles</Link>
                        <Link to="/#jogos">Jogos</Link>
                        <Link to="/diretores">Diretores</Link>
                        <Link to="/#ofertas">Promoções</Link>
                        <Link to="/#depoimentos">Depoimentos</Link>
                    </nav>

                    <div className="footer-col">
                        <h3>ATENDIMENTO</h3>
                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp: (31) 99332-7631</a>
                        <span>Seg a sáb 8:00-18:00</span>
                        <span>Rua Pixel - Pixelândia</span>
                        <a href={`mailto:${EMAIL}`}>
                            <span className="footer-desktop">{EMAIL}</span>
                            <span className="footer-mobile">Enviar e-mail</span>
                        </a>
                    </div>
                </div>

                <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
                    <h3>DEIXE SEU COMENTÁRIO</h3>
                    <label>
                        Seu nome
                        <input className="footer-field" type="text" />
                    </label>
                    <label>
                        Mensagem
                        <textarea className="footer-field footer-textarea" rows={3} />
                    </label>
                    <Button
                        variant="accent"
                        href={`mailto:${EMAIL}?subject=Coment%C3%A1rio%20pelo%20site`}
                        className="footer-send"
                    >
                        Enviar para o Mayk
                    </Button>
                </form>
            </div>

            <div className="footer-legal">
                <div className="footer-wrap">
                    <span>© 2026 Mayk Games. Todos os direitos reservados.</span>
                    <span>Feito pela Equipe 1 · PS Visão Júnior 2026</span>
                </div>
            </div>
        </footer>
    );
}
