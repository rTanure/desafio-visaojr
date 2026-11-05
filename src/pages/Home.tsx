import { Banner } from "../components/Banner/Banner";
import { JogosDestaque } from "../components/JogosDestaque";
import { SavePoint } from "../components/SavePoint";
import { Depoimentos } from "../components/depoimentos";
import { BannerCTA } from "../components/BannerCTA";
import { Footer } from "../components/footer";

export function Home() {
    return (
        <>
            <div>
                <Banner />
            </div>

            <JogosDestaque />

            <SavePoint />

            <Depoimentos />

            <BannerCTA />

            <Footer />
        </>
    )
}
