import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function HeaderLayout() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: "var(--header-height)" }}>
                <Outlet />
            </main>
        </>
    );
}
