import type { RouteObject } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Jogos } from "./pages/Jogos";
import { Consoles } from "./pages/Consoles"

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <Sobre />
    },
    {
        path: "/jogos",
        element: <Jogos />
    },
    {
        path: "/consoles",
        element: <Consoles />
    }

]