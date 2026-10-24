import type { RegisteredPlatforms } from "./platforms"

export type Store = {
    slug: string
    name: string
    logo: string
    platforms: RegisteredPlatforms[]
}

export const stores = {
    "playstation-store": {
        slug: "playstation-store",
        name: "PlayStation Store",
        logo: "/stores/playstation-store.svg",
        platforms: ["ps5", "ps4"]
    },
    "microsoft-store": {
        slug: "microsoft-store",
        name: "Microsoft Store",
        logo: "/stores/microsoft-store.svg",
        platforms: ["xbox-series", "xbox-one", "pc"]
    },
    "nintendo-eshop": {
        slug: "nintendo-eshop",
        name: "Nintendo eShop",
        logo: "/stores/nintendo-eshop.svg",
        platforms: ["switch", "switch-2"]
    },
    "steam": {
        slug: "steam",
        name: "Steam",
        logo: "/stores/steam.svg",
        platforms: ["pc"]
    },
    "epic-games-store": {
        slug: "epic-games-store",
        name: "Epic Games Store",
        logo: "/stores/epic-games-store.svg",
        platforms: ["pc"]
    },
    "gog": {
        slug: "gog",
        name: "GOG",
        logo: "/stores/gog.svg",
        platforms: ["pc"]
    },
    "ea-app": {
        slug: "ea-app",
        name: "EA app",
        logo: "/stores/ea-app.svg",
        platforms: ["pc"]
    },
    "ubisoft-store": {
        slug: "ubisoft-store",
        name: "Ubisoft Store",
        logo: "/stores/ubisoft-store.svg",
        platforms: ["pc"]
    }
} satisfies Record<string, Store>;

export type RegisteredStores = keyof typeof stores
