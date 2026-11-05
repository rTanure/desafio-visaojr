import { Hero } from "../components/home/Hero";
import { Promocoes } from "../components/home/Promocoes";
import { Beneficios } from "../components/home/Beneficios";
import { Diretores } from "../components/home/Diretores";
import { Consoles } from "../components/home/Consoles";
import { Jogos } from "../components/home/Jogos";
import { Depoimentos } from "../components/home/Depoimentos";
import { FrasesSavePoint } from "../components/home/FrasesSavePoint";
import { ChamadaFinal } from "../components/home/ChamadaFinal";

export function Home() {
    return (
        <>
            <Hero />
            <Promocoes />
            <Beneficios />
            <Diretores />
            <Consoles />
            <Jogos />
            <Depoimentos />
            <FrasesSavePoint />
            <ChamadaFinal />
        </>
    );
}
