import { Banner } from "../components/Banner/Banner";
import { Depoimentos } from "../components/depoimentos";
import { Footer } from "../components/footer";

export function Home() {
    return (
        <>
            <div>
                <Banner />
            </div>

            <Depoimentos />

            <Footer />
        </>
    )
}
