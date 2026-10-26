import { Link } from "react-router-dom";
import { Footer } from '../components/footer';

export function Home() {
  return (
    <>
      <main>
        <h1>Home</h1>
        <button><Link to="/sobre">Ir para tela Sobre</Link></button>
      </main>

      <Footer />
    </>
  );
}