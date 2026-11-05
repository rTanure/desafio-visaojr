import type { RouteObject } from "react-router-dom";
import { HeaderLayout } from "./layouts/HeaderLayout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Jogos } from "./pages/Jogos";

export const routes: RouteObject[] = [
    {
        element: <HeaderLayout />,
        children: [
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
    }
];
