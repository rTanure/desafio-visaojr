export type Platform = {
    slug: string
    name: string
    logo: string
}

export const platforms = {
    "ps5": {
        slug: "ps5",
        name: "PlayStation 5",
        logo: "/platforms/ps5.svg"
    },
    "ps4": {
        slug: "ps4",
        name: "PlayStation 4",
        logo: "/platforms/ps4.svg"
    },
    "xbox-series": {
        slug: "xbox-series",
        name: "Xbox Series",
        logo: "/platforms/xbox-series.svg"
    },
    "xbox-one": {
        slug: "xbox-one",
        name: "Xbox One",
        logo: "/platforms/xbox-one.svg"
    },
    "switch": {
        slug: "switch",
        name: "Nintendo Switch",
        logo: "/platforms/switch.svg"
    },
    "switch-2": {
        slug: "switch-2",
        name: "Nintendo Switch 2",
        logo: "/platforms/switch.svg"
    },
    "pc": {
        slug: "pc",
        name: "PC",
        logo: "/platforms/pc.svg"
    }
} satisfies Record<string, Platform>;

export type RegisteredPlatforms = keyof typeof platforms
