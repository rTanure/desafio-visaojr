import { Banner } from "../components/Banner/Banner";
import { JogosDestaque } from "../components/JogosDestaque";
import { SavePoint } from "../components/SavePoint";
import { Depoimentos } from "../components/depoimentos";
import { BannerCTA } from "../components/BannerCTA";

export function Home() {
    return (
        <>
            <div>
                <Banner />
            </div>

            <div id="jogos">
                <JogosDestaque />
            </div>

            <SavePoint />

            <div id="depoimentos">
                <Depoimentos />
            </div>

            <BannerCTA />
        </>
    )
}
