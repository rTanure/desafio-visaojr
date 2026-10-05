import { Link } from "react-router-dom";

export function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <button><Link to={"/"}>Ir para tela Home</Link></button>
        </div>
    )
}