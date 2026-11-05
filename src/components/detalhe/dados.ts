import { directors, type Director } from "../../data/directors";
import { games, type Game } from "../../data/games";
import { offers, type Offer } from "../../data/offers";
import { platforms, type RegisteredPlatforms } from "../../data/platforms";
import { publishers } from "../../data/publishers";
import { stores } from "../../data/stores";
import { studios } from "../../data/studios";
import { consoles, type Console } from "../../data/consoles";

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=553193327631";

export function formatPrice(value: number): string {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/** Preço final em reais (base_price vem em centavos). */
export function finalPrice(offer: Offer): number {
    return (offer.base_price * (100 - offer.discount)) / 10000;
}

export function bestOf(list: Offer[]): Offer | undefined {
    if (list.length === 0) return undefined;
    return list.reduce((a, b) => (finalPrice(b) < finalPrice(a) ? b : a));
}

export function offersOfGame(slug: string): Offer[] {
    return offers.filter((o) => o.game === slug);
}

/** Melhor oferta do jogo na plataforma (ou em qualquer plataforma, se omitida). */
export function bestOffer(slug: string, platform?: RegisteredPlatforms): Offer | undefined {
    return bestOf(offersOfGame(slug).filter((o) => !platform || o.platform === platform));
}

function allGames(): Game[] {
    return Object.values(games);
}

export function getGame(slug: string | undefined): Game | undefined {
    return slug && Object.prototype.hasOwnProperty.call(games, slug) ? (games as Record<string, Game>)[slug] : undefined;
}

export function getDirector(slug: string | undefined): Director | undefined {
    return slug && Object.prototype.hasOwnProperty.call(directors, slug) ? (directors as Record<string, Director>)[slug] : undefined;
}

export function getConsole(slug: string | undefined): Console | undefined {
    return consoles.find((c) => c.slug === slug);
}

export function studioName(director: Director): string | undefined {
    return (studios as Record<string, { name: string }>)[director.studio]?.name;
}

export function publisherName(game: Game): string | undefined {
    return (publishers as Record<string, { name: string }>)[game.publisher]?.name;
}

export function storeName(slug: string): string | undefined {
    return (stores as Record<string, { name: string }>)[slug]?.name;
}

export function platformName(slug: RegisteredPlatforms): string {
    return platforms[slug].name;
}

export function coverOf(game: Game): string {
    return `/games/${game.slug}/banner.jpg`;
}

/** Imagens da galeria: ignora o trailer (URL externa do YouTube) e mantém os arquivos locais. */
export function imagesOf(game: Game): string[] {
    return game.media.filter((m) => m.startsWith("/"));
}

export function initialsOf(name: string): string {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0])
        .join("")
        .toUpperCase();
}

export type GameListItem = {
    game: Game;
    cover: string;
    platformLabel: string;
    price: number;
    oldPrice: number | null;
    discount: number;
};

/** Item de lista para um jogo; só existe se houver oferta (na plataforma, quando informada). */
export function listItem(game: Game, platform?: RegisteredPlatforms): GameListItem | undefined {
    const best = bestOffer(game.slug, platform);
    if (!best) return undefined;
    return {
        game,
        cover: coverOf(game),
        platformLabel: game.platforms.map((p) => platforms[p].name).join(" · "),
        price: finalPrice(best),
        oldPrice: best.discount > 0 ? best.base_price / 100 : null,
        discount: best.discount,
    };
}

export function gamesOfDirector(slug: string): GameListItem[] {
    return allGames()
        .filter((g) => g.director === slug)
        .map((g) => listItem(g))
        .filter((g): g is GameListItem => g !== undefined);
}

export function gamesOfPlatform(platform: RegisteredPlatforms): GameListItem[] {
    return allGames()
        .filter((g) => g.platforms.includes(platform))
        .map((g) => listItem(g, platform))
        .filter((g): g is GameListItem => g !== undefined);
}

/** "Quem comprou também levou": mesmo diretor primeiro, depois mesma plataforma. */
export function relatedGames(game: Game, max = 4): GameListItem[] {
    const others = allGames().filter((g) => g.slug !== game.slug);
    const score = (g: Game) =>
        (g.director === game.director ? 2 : 0) + (g.platforms.some((p) => game.platforms.includes(p)) ? 1 : 0);
    return others
        .filter((g) => score(g) > 0)
        .sort((a, b) => score(b) - score(a))
        .map((g) => listItem(g))
        .filter((g): g is GameListItem => g !== undefined)
        .slice(0, max);
}
