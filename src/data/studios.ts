import type { RegisteredPlatforms } from "./platforms"

export type Studio = {
    slug: string
    name: string
    logo: string
    platforms: RegisteredPlatforms[]
}

export const studios = {
    "fromsoftware": {
        slug: "fromsoftware",
        name: "FromSoftware",
        logo: "/studios/fromsoftware.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "nintendo-epd": {
        slug: "nintendo-epd",
        name: "Nintendo EPD",
        logo: "/studios/nintendo-epd.svg",
        platforms: ["switch", "switch-2"]
    },
    "kojima-productions": {
        slug: "kojima-productions",
        name: "Kojima Productions",
        logo: "/studios/kojima-productions.svg",
        platforms: ["ps5", "ps4", "xbox-one", "pc"]
    },
    "sonic-team": {
        slug: "sonic-team",
        name: "Sonic Team",
        logo: "/studios/sonic-team.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "naughty-dog": {
        slug: "naughty-dog",
        name: "Naughty Dog",
        logo: "/studios/naughty-dog.svg",
        platforms: ["ps5", "ps4", "pc"]
    },
    "santa-monica-studio": {
        slug: "santa-monica-studio",
        name: "Santa Monica Studio",
        logo: "/studios/santa-monica-studio.svg",
        platforms: ["ps5", "ps4", "pc"]
    },
    "bethesda-game-studios": {
        slug: "bethesda-game-studios",
        name: "Bethesda Game Studios",
        logo: "/studios/bethesda-game-studios.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "rockstar-games": {
        slug: "rockstar-games",
        name: "Rockstar Games",
        logo: "/studios/rockstar-games.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "cd-projekt-red": {
        slug: "cd-projekt-red",
        name: "CD Projekt Red",
        logo: "/studios/cd-projekt-red.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"]
    },
    "playground-games": {
        slug: "playground-games",
        name: "Playground Games",
        logo: "/studios/playground-games.svg",
        platforms: ["ps5", "xbox-series", "xbox-one", "pc"]
    },
    "sandfall-interactive": {
        slug: "sandfall-interactive",
        name: "Sandfall Interactive",
        logo: "/studios/sandfall-interactive.svg",
        platforms: ["ps5", "xbox-series", "pc"]
    },
    "capcom": {
        slug: "capcom",
        name: "Capcom",
        logo: "/studios/capcom.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"]
    },
    "square-enix": {
        slug: "square-enix",
        name: "Square Enix",
        logo: "/studios/square-enix.svg",
        platforms: ["ps5", "ps4", "xbox-one", "switch", "pc"]
    },
    "ubisoft": {
        slug: "ubisoft",
        name: "Ubisoft",
        logo: "/studios/ubisoft.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "team-cherry": {
        slug: "team-cherry",
        name: "Team Cherry",
        logo: "/studios/team-cherry.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"]
    },
    "larian-studios": {
        slug: "larian-studios",
        name: "Larian Studios",
        logo: "/studios/larian-studios.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "atlus": {
        slug: "atlus",
        name: "Atlus",
        logo: "/studios/atlus.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "insomniac-games": {
        slug: "insomniac-games",
        name: "Insomniac Games",
        logo: "/studios/insomniac-games.svg",
        platforms: ["ps5", "ps4", "pc"]
    },
    "supergiant-games": {
        slug: "supergiant-games",
        name: "Supergiant Games",
        logo: "/studios/supergiant-games.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"]
    },
    "sora-ltd": {
        slug: "sora-ltd",
        name: "Sora Ltd.",
        logo: "/studios/sora-ltd.svg",
        platforms: ["switch", "switch-2"]
    },
    "mojang-studios": {
        slug: "mojang-studios",
        name: "Mojang Studios",
        logo: "/studios/mojang-studios.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"]
    },
    "polyphony-digital": {
        slug: "polyphony-digital",
        name: "Polyphony Digital",
        logo: "/studios/polyphony-digital.svg",
        platforms: ["ps5", "ps4"]
    },
    "guerrilla-games": {
        slug: "guerrilla-games",
        name: "Guerrilla Games",
        logo: "/studios/guerrilla-games.svg",
        platforms: ["ps5", "ps4", "pc"]
    },
    "sucker-punch-productions": {
        slug: "sucker-punch-productions",
        name: "Sucker Punch Productions",
        logo: "/studios/sucker-punch-productions.svg",
        platforms: ["ps5", "ps4", "pc"]
    },
    "remedy-entertainment": {
        slug: "remedy-entertainment",
        name: "Remedy Entertainment",
        logo: "/studios/remedy-entertainment.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"]
    },
    "platinumgames": {
        slug: "platinumgames",
        name: "PlatinumGames",
        logo: "/studios/platinumgames.svg",
        platforms: ["ps4", "xbox-one", "switch", "pc"]
    },
    "game-science": {
        slug: "game-science",
        name: "Game Science",
        logo: "/studios/game-science.svg",
        platforms: ["ps5", "xbox-series", "pc"]
    },
    "hello-games": {
        slug: "hello-games",
        name: "Hello Games",
        logo: "/studios/hello-games.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"]
    },
    "concernedape": {
        slug: "concernedape",
        name: "ConcernedApe",
        logo: "/studios/concernedape.svg",
        platforms: ["ps4", "xbox-one", "switch", "pc"]
    },
    "respawn-entertainment": {
        slug: "respawn-entertainment",
        name: "Respawn Entertainment",
        logo: "/studios/respawn-entertainment.svg",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"]
    },
    "gendesign": {
        slug: "gendesign",
        name: "genDESIGN",
        logo: "/studios/gendesign.svg",
        platforms: ["ps4"]
    }
} satisfies Record<string, Studio>;

export type RegisteredStudios = keyof typeof studios
