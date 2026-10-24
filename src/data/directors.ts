import type { RegisteredStudios } from "./studios"

export type Director = {
    slug: string
    name: string
    image: string
    studio: RegisteredStudios
}

export const directors = {
    "hidetaka-miyazaki": {
        slug: "hidetaka-miyazaki",
        name: "Hidetaka Miyazaki",
        image: "/directors/hidetaka-miyazaki.jpg",
        studio: "fromsoftware"
    },
    "shigeru-miyamoto": {
        slug: "shigeru-miyamoto",
        name: "Shigeru Miyamoto",
        image: "/directors/shigeru-miyamoto.jpg",
        studio: "nintendo-epd"
    },
    "hideo-kojima": {
        slug: "hideo-kojima",
        name: "Hideo Kojima",
        image: "/directors/hideo-kojima.jpg",
        studio: "kojima-productions"
    },
    "yuji-naka": {
        slug: "yuji-naka",
        name: "Yuji Naka",
        image: "/directors/yuji-naka.jpg",
        studio: "sonic-team"
    },
    "neil-druckmann": {
        slug: "neil-druckmann",
        name: "Neil Druckmann",
        image: "/directors/neil-druckmann.jpg",
        studio: "naughty-dog"
    },
    "cory-barlog": {
        slug: "cory-barlog",
        name: "Cory Barlog",
        image: "/directors/cory-barlog.jpg",
        studio: "santa-monica-studio"
    },
    "todd-howard": {
        slug: "todd-howard",
        name: "Todd Howard",
        image: "/directors/todd-howard.jpg",
        studio: "bethesda-game-studios"
    },
    "dan-houser": {
        slug: "dan-houser",
        name: "Dan Houser",
        image: "/directors/dan-houser.jpg",
        studio: "rockstar-games"
    },
    "hidemaro-fujibayashi": {
        slug: "hidemaro-fujibayashi",
        name: "Hidemaro Fujibayashi",
        image: "/directors/hidemaro-fujibayashi.jpg",
        studio: "nintendo-epd"
    },
    "kosuke-yabuki": {
        slug: "kosuke-yabuki",
        name: "Kosuke Yabuki",
        image: "/directors/kosuke-yabuki.jpg",
        studio: "nintendo-epd"
    },
    "kazuya-takahashi": {
        slug: "kazuya-takahashi",
        name: "Kazuya Takahashi",
        image: "/directors/kazuya-takahashi.jpg",
        studio: "nintendo-epd"
    },
    "masahiro-sakurai": {
        slug: "masahiro-sakurai",
        name: "Masahiro Sakurai",
        image: "/directors/masahiro-sakurai.jpg",
        studio: "sora-ltd"
    },
    "takashi-iizuka": {
        slug: "takashi-iizuka",
        name: "Takashi Iizuka",
        image: "/directors/takashi-iizuka.jpg",
        studio: "sonic-team"
    },
    "guillaume-broche": {
        slug: "guillaume-broche",
        name: "Guillaume Broche",
        image: "/directors/guillaume-broche.jpg",
        studio: "sandfall-interactive"
    },
    "hideaki-itsuno": {
        slug: "hideaki-itsuno",
        name: "Hideaki Itsuno",
        image: "/directors/hideaki-itsuno.jpg",
        studio: "capcom"
    },
    "yuya-tokuda": {
        slug: "yuya-tokuda",
        name: "Yuya Tokuda",
        image: "/directors/yuya-tokuda.jpg",
        studio: "capcom"
    },
    "kazunori-kadoi": {
        slug: "kazunori-kadoi",
        name: "Kazunori Kadoi",
        image: "/directors/kazunori-kadoi.jpg",
        studio: "capcom"
    },
    "koshi-nakanishi": {
        slug: "koshi-nakanishi",
        name: "Koshi Nakanishi",
        image: "/directors/koshi-nakanishi.jpg",
        studio: "capcom"
    },
    "takayuki-nakayama": {
        slug: "takayuki-nakayama",
        name: "Takayuki Nakayama",
        image: "/directors/takayuki-nakayama.jpg",
        studio: "capcom"
    },
    "yoko-taro": {
        slug: "yoko-taro",
        name: "Yoko Taro",
        image: "/directors/yoko-taro.jpg",
        studio: "platinumgames"
    },
    "swen-vincke": {
        slug: "swen-vincke",
        name: "Swen Vincke",
        image: "/directors/swen-vincke.jpg",
        studio: "larian-studios"
    },
    "katsura-hashino": {
        slug: "katsura-hashino",
        name: "Katsura Hashino",
        image: "/directors/katsura-hashino.jpg",
        studio: "atlus"
    },
    "bryan-intihar": {
        slug: "bryan-intihar",
        name: "Bryan Intihar",
        image: "/directors/bryan-intihar.jpg",
        studio: "insomniac-games"
    },
    "greg-kasavin": {
        slug: "greg-kasavin",
        name: "Greg Kasavin",
        image: "/directors/greg-kasavin.jpg",
        studio: "supergiant-games"
    },
    "kazunori-yamauchi": {
        slug: "kazunori-yamauchi",
        name: "Kazunori Yamauchi",
        image: "/directors/kazunori-yamauchi.jpg",
        studio: "polyphony-digital"
    },
    "mathijs-de-jonge": {
        slug: "mathijs-de-jonge",
        name: "Mathijs de Jonge",
        image: "/directors/mathijs-de-jonge.jpg",
        studio: "guerrilla-games"
    },
    "nate-fox": {
        slug: "nate-fox",
        name: "Nate Fox",
        image: "/directors/nate-fox.jpg",
        studio: "sucker-punch-productions"
    },
    "sam-lake": {
        slug: "sam-lake",
        name: "Sam Lake",
        image: "/directors/sam-lake.jpg",
        studio: "remedy-entertainment"
    },
    "stig-asmussen": {
        slug: "stig-asmussen",
        name: "Stig Asmussen",
        image: "/directors/stig-asmussen.jpg",
        studio: "respawn-entertainment"
    },
    "jean-guesdon": {
        slug: "jean-guesdon",
        name: "Jean Guesdon",
        image: "/directors/jean-guesdon.jpg",
        studio: "ubisoft"
    },
    "mounir-radi": {
        slug: "mounir-radi",
        name: "Mounir Radi",
        image: "/directors/mounir-radi.jpg",
        studio: "ubisoft"
    },
    "michel-ancel": {
        slug: "michel-ancel",
        name: "Michel Ancel",
        image: "/directors/michel-ancel.jpg",
        studio: "ubisoft"
    },
    "jens-bergensten": {
        slug: "jens-bergensten",
        name: "Jens Bergensten",
        image: "/directors/jens-bergensten.jpg",
        studio: "mojang-studios"
    },
    "feng-ji": {
        slug: "feng-ji",
        name: "Feng Ji",
        image: "/directors/feng-ji.jpg",
        studio: "game-science"
    },
    "sean-murray": {
        slug: "sean-murray",
        name: "Sean Murray",
        image: "/directors/sean-murray.jpg",
        studio: "hello-games"
    },
    "eric-barone": {
        slug: "eric-barone",
        name: "Eric Barone",
        image: "/directors/eric-barone.jpg",
        studio: "concernedape"
    },
    "ari-gibson": {
        slug: "ari-gibson",
        name: "Ari Gibson",
        image: "/directors/ari-gibson.jpg",
        studio: "team-cherry"
    },
    "adam-badowski": {
        slug: "adam-badowski",
        name: "Adam Badowski",
        image: "/directors/adam-badowski.jpg",
        studio: "cd-projekt-red"
    },
    "konrad-tomaszkiewicz": {
        slug: "konrad-tomaszkiewicz",
        name: "Konrad Tomaszkiewicz",
        image: "/directors/konrad-tomaszkiewicz.jpg",
        studio: "cd-projekt-red"
    },
    "naoki-hamaguchi": {
        slug: "naoki-hamaguchi",
        name: "Naoki Hamaguchi",
        image: "/directors/naoki-hamaguchi.jpg",
        studio: "square-enix"
    },
    "hiroshi-takai": {
        slug: "hiroshi-takai",
        name: "Hiroshi Takai",
        image: "/directors/hiroshi-takai.jpg",
        studio: "square-enix"
    },
    "yuji-horii": {
        slug: "yuji-horii",
        name: "Yuji Horii",
        image: "/directors/yuji-horii.jpg",
        studio: "square-enix"
    },
    "fumito-ueda": {
        slug: "fumito-ueda",
        name: "Fumito Ueda",
        image: "/directors/fumito-ueda.jpg",
        studio: "gendesign"
    },
    "mike-brown": {
        slug: "mike-brown",
        name: "Mike Brown",
        image: "/directors/mike-brown.jpg",
        studio: "playground-games"
    }
} satisfies Record<string, Director>;

export type RegisteredDirectors = keyof typeof directors
