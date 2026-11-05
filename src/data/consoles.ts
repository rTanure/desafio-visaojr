
import type { RegisteredPlatforms } from './platforms';

export type Console = {
    id: number;
    nome: string;
    slug?: string;
    plataforma?: RegisteredPlatforms; // plataforma de jogos que o console roda
    imagem: string;
    valor: number;
    fabricante: string;
    tipo: string;
    geracao: string;
};

export const consoles: Console[] = [
    {
        id: 1,
        nome: "PlayStation 5",
        slug: "playstation-5",
        plataforma: "ps5",
        fabricante: "Sony",
        imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600",
        valor: 3499.90,
        tipo: "Mesa",
        geracao: "9ª geração"
    },
    {
        id: 2,
        nome: "Xbox Series X",
        slug: "xbox-series-x",
        plataforma: "xbox-series",
        fabricante: "Microsoft",
        imagem: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600",
        valor: 3999.90,
        tipo: "Mesa",
        geracao: "9ª geração"
    },
    {
        id: 3,
        nome: "Nintendo Switch OLED",
        slug: "nintendo-switch-oled",
        plataforma: "switch",
        fabricante: "Nintendo",
        imagem: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600",
        valor: 1999.90,
        tipo: "Híbrido",
        geracao: "9ª geração"
    },
    {
        id: 4,
        nome: "PlayStation 4",
        slug: "playstation-4",
        plataforma: "ps4",
        fabricante: "Sony",
        imagem: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600",
        valor: 1799.90,
        tipo: "Mesa",
        geracao: "8ª geração"
    },
    {
        id: 5,
        nome: "Xbox Series S",
        slug: "xbox-series-s",
        plataforma: "xbox-series",
        fabricante: "Microsoft",
        imagem: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600",
        valor: 2499.90,
        tipo: "Mesa",
        geracao: "9ª geração"
    },
    {
        id: 6,
        nome: "Nintendo Switch Lite",
        slug: "nintendo-switch-lite",
        plataforma: "switch",
        fabricante: "Nintendo",
        imagem: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600",
        valor: 1299.90,
        tipo: "Portátil",
        geracao: "9ª geração"
    },
    {
        id: 7,
        nome: "Xbox One",
        slug: "xbox-one",
        plataforma: "xbox-one",
        fabricante: "Microsoft",
        imagem: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600",
        valor: 1299.90,
        tipo: "Mesa",
        geracao: "8ª geração"
    },
    {
        id: 8,
        nome: "PlayStation 5 Digital Edition",
        slug: "playstation-5-digital-edition",
        plataforma: "ps5",
        fabricante: "Sony",
        imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600",
        valor: 3299.90,
        tipo: "Mesa",
        geracao: "9ª geração"
    },
    {
        id: 9,
        nome: "Nintendo Switch",
        slug: "nintendo-switch",
        plataforma: "switch",
        fabricante: "Nintendo",
        imagem: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600",
        valor: 1799.90,
        tipo: "Híbrido",
        geracao: "9ª geração"
    },
    {
        id: 10,
        nome: "Steam Deck",
        slug: "steam-deck",
        plataforma: "pc",
        fabricante: "Valve",
        imagem: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600",
        valor: 3499.90,
        tipo: "Portátil",
        geracao: "PC portátil"
    }
];
