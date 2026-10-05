import type { RouteObject } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <Sobre />
    }
]