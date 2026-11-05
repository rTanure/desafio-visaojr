import { Banner } from "../components/Banner/Banner";
import { SavePoint } from "../components/SavePoint";
import { Depoimentos } from "../components/depoimentos";
import { Footer } from "../components/footer";

export function Home() {
    return (
        <>
            <div>
                <Banner />
            </div>

            <SavePoint />

            <Depoimentos />

            <Footer />
        </>
    )
}
