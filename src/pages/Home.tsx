import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <button><Link to={"/sobre"}>Ir para tela Sobre</Link></button>
        </div>
    )
}