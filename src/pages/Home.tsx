import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button><Link to="/sobre">Ir para tela Sobre</Link></button>
      
      
      <Banner />
    </div>
  );
}