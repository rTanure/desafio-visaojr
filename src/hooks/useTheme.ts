import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
    // O script inline do index.html já definiu data-theme antes da primeira pintura.
    const applied = document.documentElement.getAttribute("data-theme");
    if (applied === "dark" || applied === "light") return applied;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // localStorage indisponível (modo privado): o tema vale só para esta sessão.
        }
    }, [theme]);

    return { theme, isDark: theme === "dark", toggleTheme };
}
