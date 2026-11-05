import { directors, type Director } from "../../data/directors";
import { games, type Game } from "../../data/games";
import { offers, type Offer } from "../../data/offers";
import { platforms, type RegisteredPlatforms } from "../../data/platforms";
import { studios, type RegisteredStudios } from "../../data/studios";
import { consoles } from "../../data/consoles";

export type PlatformFilter = "all" | "xbox" | "playstation" | "switch" | "pc";

export const platformFilters: { id: PlatformFilter; label: string }[] = [
    { id: "all", label: "Todos" },
    { id: "xbox", label: "Xbox" },
    { id: "playstation", label: "PlayStation" },
    { id: "switch", label: "Switch" },
    { id: "pc", label: "PC" },
];

const familyOf: Record<RegisteredPlatforms, Exclude<PlatformFilter, "all">> = {
    "ps5": "playstation",
    "ps4": "playstation",
    "xbox-series": "xbox",
    "xbox-one": "xbox",
    "switch": "switch",
    "switch-2": "switch",
    "pc": "pc",
};

export function formatPrice(value: number): string {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export type PricedGame = {
    game: Game;
    cover: string;
    platformLabel: string;
    families: Set<string>;
    price: number; // melhor preço final em reais
    oldPrice: number | null;
    discount: number;
};

function finalPrice(offer: Offer): number {
    return (offer.base_price * (100 - offer.discount)) / 10000;
}

/** Um item por jogo que tenha oferta, com a oferta de menor preço final. */
export const pricedGames: PricedGame[] = Object.values(games)
    .map((game): PricedGame | null => {
        const own = offers.filter((o) => o.game === game.slug);
        if (own.length === 0) return null;
        const best = own.reduce((a, b) => (finalPrice(b) < finalPrice(a) ? b : a));
        return {
            game,
            cover: `/games/${game.slug}/banner.jpg`,
            platformLabel: game.platforms.map((p) => platforms[p].name).join(" · "),
            families: new Set(game.platforms.map((p) => familyOf[p])),
            price: finalPrice(best),
            oldPrice: best.discount > 0 ? best.base_price / 100 : null,
            discount: best.discount,
        };
    })
    .filter((g): g is PricedGame => g !== null);

export function bestOfferOf(slug: string): PricedGame | undefined {
    return pricedGames.find((g) => g.game.slug === slug);
}

/** Jogos em promoção: maiores descontos primeiro. */
export const promoGames: PricedGame[] = pricedGames
    .filter((g) => g.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 4);

export type DirectorCard = { director: Director; studio: string; initials: string };

export const directorCards: DirectorCard[] = Object.values(directors)
    .slice(0, 12)
    .map((director) => ({
        director,
        studio: studios[director.studio as RegisteredStudios].name,
        initials: director.name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0])
            .join("")
            .toUpperCase(),
    }));

export const homeConsoles = consoles.slice(0, 5);

export function consoleByName(name: string) {
    return consoles.find((c) => c.nome === name);
}
