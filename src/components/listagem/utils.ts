/** Normaliza para busca sem acento e sem diferença de caixa. */
export function normalizar(texto: string): string {
    return texto
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim();
}

export function collator(a: string, b: string): number {
    return a.localeCompare(b, "pt-BR");
}

export function plural(n: number, um: string, varios: string): string {
    return `${n} ${n === 1 ? um : varios}`;
}
