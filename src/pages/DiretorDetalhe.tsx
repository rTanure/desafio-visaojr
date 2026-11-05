import { useParams } from "react-router-dom";
import { NaoEncontrado } from "../components/detalhe/NaoEncontrado";
import { gamesOfDirector, getDirector } from "../components/detalhe/dados";
import { Hero } from "../components/diretor/Hero";
import { JogosDoDiretor } from "../components/diretor/JogosDoDiretor";
import { OutrosDiretores } from "../components/diretor/OutrosDiretores";

export function DiretorDetalhe() {
    const { slug } = useParams();
    const director = getDirector(slug);

    if (!director) return <NaoEncontrado what="Diretor" backTo="/diretores" backLabel="Ver todos os diretores" />;

    const items = gamesOfDirector(director.slug);

    return (
        <>
            <Hero director={director} gameCount={items.length} />
            <JogosDoDiretor items={items} />
            <OutrosDiretores currentSlug={director.slug} />
        </>
    );
}
