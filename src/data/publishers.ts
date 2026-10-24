import type { RegisteredPlatforms } from "./platforms"
import type { RegisteredStudios } from "./studios"

export type Publisher = {
    slug: string
    name: string
    logo: string
    platforms: RegisteredPlatforms[]
    studios: RegisteredStudios[]
}

export const publishers = {
    "bandai-namco": {
        slug: "bandai-namco",
        name: "Bandai Namco",
        logo: "/publishers/bandai-namco.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        studios: ["fromsoftware"]
    },
    "sony-interactive-entertainment": {
        slug: "sony-interactive-entertainment",
        name: "Sony Interactive Entertainment",
        logo: "/publishers/sony-interactive-entertainment.svg",
        platforms: ["ps5", "ps4", "pc"],
        studios: ["fromsoftware", "kojima-productions", "naughty-dog", "santa-monica-studio", "insomniac-games", "polyphony-digital", "guerrilla-games", "sucker-punch-productions", "gendesign"]
    },
    "nintendo": {
        slug: "nintendo",
        name: "Nintendo",
        logo: "/publishers/nintendo.svg",
        platforms: ["switch", "switch-2"],
        studios: ["nintendo-epd", "sora-ltd"]
    },
    "sega": {
        slug: "sega",
        name: "Sega",
        logo: "/publishers/sega.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        studios: ["sonic-team", "atlus"]
    },
    "xbox-game-studios": {
        slug: "xbox-game-studios",
        name: "Xbox Game Studios",
        logo: "/publishers/xbox-game-studios.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        studios: ["bethesda-game-studios", "mojang-studios", "playground-games"]
    },
    "bethesda-softworks": {
        slug: "bethesda-softworks",
        name: "Bethesda Softworks",
        logo: "/publishers/bethesda-softworks.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        studios: ["bethesda-game-studios"]
    },
    "rockstar-games": {
        slug: "rockstar-games",
        name: "Rockstar Games",
        logo: "/publishers/rockstar-games.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        studios: ["rockstar-games"]
    },
    "cd-projekt": {
        slug: "cd-projekt",
        name: "CD Projekt",
        logo: "/publishers/cd-projekt.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        studios: ["cd-projekt-red"]
    },
    "kepler-interactive": {
        slug: "kepler-interactive",
        name: "Kepler Interactive",
        logo: "/publishers/kepler-interactive.svg",
        platforms: ["ps5", "xbox-series", "pc"],
        studios: ["sandfall-interactive"]
    },
    "capcom": {
        slug: "capcom",
        name: "Capcom",
        logo: "/publishers/capcom.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        studios: ["capcom"]
    },
    "square-enix": {
        slug: "square-enix",
        name: "Square Enix",
        logo: "/publishers/square-enix.svg",
        platforms: ["ps5", "ps4", "xbox-one", "switch", "pc"],
        studios: ["platinumgames", "square-enix"]
    },
    "ubisoft": {
        slug: "ubisoft",
        name: "Ubisoft",
        logo: "/publishers/ubisoft.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        studios: ["ubisoft"]
    },
    "activision": {
        slug: "activision",
        name: "Activision",
        logo: "/publishers/activision.svg",
        platforms: ["ps4", "xbox-one", "pc"],
        studios: ["fromsoftware"]
    },
    "electronic-arts": {
        slug: "electronic-arts",
        name: "Electronic Arts",
        logo: "/publishers/electronic-arts.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        studios: ["respawn-entertainment"]
    },
    "konami": {
        slug: "konami",
        name: "Konami",
        logo: "/publishers/konami.svg",
        platforms: ["ps4", "xbox-one", "pc"],
        studios: ["kojima-productions"]
    },
    "epic-games-publishing": {
        slug: "epic-games-publishing",
        name: "Epic Games Publishing",
        logo: "/publishers/epic-games-publishing.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        studios: ["remedy-entertainment"]
    },
    "supergiant-games": {
        slug: "supergiant-games",
        name: "Supergiant Games",
        logo: "/publishers/supergiant-games.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        studios: ["supergiant-games"]
    },
    "team-cherry": {
        slug: "team-cherry",
        name: "Team Cherry",
        logo: "/publishers/team-cherry.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        studios: ["team-cherry"]
    },
    "larian-studios": {
        slug: "larian-studios",
        name: "Larian Studios",
        logo: "/publishers/larian-studios.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        studios: ["larian-studios"]
    },
    "hello-games": {
        slug: "hello-games",
        name: "Hello Games",
        logo: "/publishers/hello-games.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        studios: ["hello-games"]
    },
    "concernedape": {
        slug: "concernedape",
        name: "ConcernedApe",
        logo: "/publishers/concernedape.svg",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        studios: ["concernedape"]
    },
    "game-science": {
        slug: "game-science",
        name: "Game Science",
        logo: "/publishers/game-science.svg",
        platforms: ["ps5", "xbox-series", "pc"],
        studios: ["game-science"]
    }
} satisfies Record<string, Publisher>;

export type RegisteredPublishers = keyof typeof publishers
