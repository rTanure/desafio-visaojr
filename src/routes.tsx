import type { RouteObject } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Jogos } from "./pages/Jogos";

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
    }
]