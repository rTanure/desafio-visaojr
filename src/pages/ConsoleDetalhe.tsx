import { useParams } from "react-router-dom";
import { NaoEncontrado } from "../components/detalhe/NaoEncontrado";
import { getConsole } from "../components/detalhe/dados";
import { Produto } from "../components/console/Produto";
import { Especificacoes } from "../components/console/Especificacoes";
import { JogosDoConsole } from "../components/console/JogosDoConsole";

export function ConsoleDetalhe() {
    const { slug } = useParams();
    const console = getConsole(slug);

    if (!console) return <NaoEncontrado what="Console" backTo="/consoles" backLabel="Ver todos os consoles" />;

    return (
        <>
            <Produto console={console} />
            <Especificacoes console={console} />
            <JogosDoConsole console={console} />
        </>
    );
}
