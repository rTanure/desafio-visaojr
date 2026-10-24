import type { RegisteredDirectors } from "./directors"
import type { RegisteredPlatforms } from "./platforms"
import type { RegisteredPublishers } from "./publishers"

export type Game = {
    slug: string
    name: string
    publisher: RegisteredPublishers
    director: RegisteredDirectors
    platforms: RegisteredPlatforms[]
    description: string
    media: string[] // trailer do youtube primeiro, depois imagens em /public/games/<slug>/
}

export const games = {
    "elden-ring": {
        slug: "elden-ring",
        name: "Elden Ring",
        publisher: "bandai-namco",
        director: "hidetaka-miyazaki",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Explore as Terras Intermédias, um mundo aberto enorme cheio de castelos, cavernas e chefes inesquecíveis. Crie seu personagem, escolha seu estilo de luta e decida por onde começar a jornada.",
        media: [
            "https://www.youtube.com/watch?v=qqiC88f9ogU",
            "/games/elden-ring/banner.jpg",
            "/games/elden-ring/screenshot-1.jpg",
            "/games/elden-ring/screenshot-2.jpg",
            "/games/elden-ring/screenshot-3.jpg"
        ]
    },
    "bloodborne": {
        slug: "bloodborne",
        name: "Bloodborne",
        publisher: "sony-interactive-entertainment",
        director: "hidetaka-miyazaki",
        platforms: ["ps4"],
        description: "Combate agressivo em uma cidade gótica assombrada. Cada caçada exige coragem e reflexo.",
        media: [
            "https://www.youtube.com/watch?v=iTDvYvlyPaE",
            "/games/bloodborne/banner.jpg",
            "/games/bloodborne/screenshot-1.jpg",
            "/games/bloodborne/screenshot-2.jpg",
            "/games/bloodborne/screenshot-3.jpg"
        ]
    },
    "demons-souls": {
        slug: "demons-souls",
        name: "Demon's Souls",
        publisher: "sony-interactive-entertainment",
        director: "hidetaka-miyazaki",
        platforms: ["ps5"],
        description: "O ponto de partida da fórmula Souls, refeito do zero para o PlayStation 5.",
        media: [
            "https://www.youtube.com/watch?v=2TMs2E6cms4",
            "/games/demons-souls/banner.jpg",
            "/games/demons-souls/screenshot-1.jpg",
            "/games/demons-souls/screenshot-2.jpg"
        ]
    },
    "dark-souls-remastered": {
        slug: "dark-souls-remastered",
        name: "Dark Souls Remastered",
        publisher: "bandai-namco",
        director: "hidetaka-miyazaki",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Volte a Lordran, com seus atalhos lendários e chefes que ensinam na base da paciência.",
        media: [
            "https://www.youtube.com/watch?v=KfjG9ZLGBHE",
            "/games/dark-souls-remastered/banner.jpg",
            "/games/dark-souls-remastered/screenshot-1.jpg",
            "/games/dark-souls-remastered/screenshot-2.jpg",
            "/games/dark-souls-remastered/screenshot-3.jpg"
        ]
    },
    "dark-souls-iii": {
        slug: "dark-souls-iii",
        name: "Dark Souls III",
        publisher: "bandai-namco",
        director: "hidetaka-miyazaki",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "O capítulo final da trilogia, com combate mais rápido e um reino em ruínas para atravessar.",
        media: [
            "https://www.youtube.com/watch?v=cWBwFhUv1-8",
            "/games/dark-souls-iii/banner.jpg",
            "/games/dark-souls-iii/screenshot-1.jpg",
            "/games/dark-souls-iii/screenshot-2.jpg",
            "/games/dark-souls-iii/screenshot-3.jpg"
        ]
    },
    "sekiro": {
        slug: "sekiro",
        name: "Sekiro: Shadows Die Twice",
        publisher: "activision",
        director: "hidetaka-miyazaki",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "Duelos de espada no Japão feudal, onde postura e tempo de reação decidem cada luta.",
        media: [
            "https://www.youtube.com/watch?v=rXMX4YJ7Lks",
            "/games/sekiro/banner.jpg",
            "/games/sekiro/screenshot-1.jpg",
            "/games/sekiro/screenshot-2.jpg",
            "/games/sekiro/screenshot-3.jpg"
        ]
    },
    "super-mario-odyssey": {
        slug: "super-mario-odyssey",
        name: "Super Mario Odyssey",
        publisher: "nintendo",
        director: "shigeru-miyamoto",
        platforms: ["switch", "switch-2"],
        description: "Viaje por reinos de todo o mundo com Mario e o chapéu Cappy, em busca de Bowser.",
        media: [
            "https://www.youtube.com/watch?v=wGQHQc_3ycE",
            "/games/super-mario-odyssey/banner.jpg",
            "/games/super-mario-odyssey/screenshot-1.jpg",
            "/games/super-mario-odyssey/screenshot-2.jpg",
            "/games/super-mario-odyssey/screenshot-3.jpg"
        ]
    },
    "pikmin-4": {
        slug: "pikmin-4",
        name: "Pikmin 4",
        publisher: "nintendo",
        director: "shigeru-miyamoto",
        platforms: ["switch"],
        description: "Lidere os pequenos Pikmin em uma missão de resgate num planeta cheio de criaturas e tesouros.",
        media: [
            "https://www.youtube.com/watch?v=RPiT-s4i0rw",
            "/games/pikmin-4/banner.jpg",
            "/games/pikmin-4/screenshot-1.jpg",
            "/games/pikmin-4/screenshot-2.jpg",
            "/games/pikmin-4/screenshot-3.jpg"
        ]
    },
    "super-mario-bros-wonder": {
        slug: "super-mario-bros-wonder",
        name: "Super Mario Bros. Wonder",
        publisher: "nintendo",
        director: "shigeru-miyamoto",
        platforms: ["switch"],
        description: "Plataforma 2D cheia de surpresas, com Flores Maravilha que viram o cenário do avesso.",
        media: [
            "https://www.youtube.com/watch?v=XvQNlGKNC6o",
            "/games/super-mario-bros-wonder/banner.jpg",
            "/games/super-mario-bros-wonder/screenshot-1.jpg",
            "/games/super-mario-bros-wonder/screenshot-2.jpg",
            "/games/super-mario-bros-wonder/screenshot-3.jpg"
        ]
    },
    "zelda-breath-of-the-wild": {
        slug: "zelda-breath-of-the-wild",
        name: "The Legend of Zelda: Breath of the Wild",
        publisher: "nintendo",
        director: "hidemaro-fujibayashi",
        platforms: ["switch", "switch-2"],
        description: "Acorde em um Hyrule aberto e livre para explorar do seu jeito, sem caminho certo.",
        media: [
            "https://www.youtube.com/watch?v=RfEGOLOGYgw",
            "/games/zelda-breath-of-the-wild/banner.jpg",
            "/games/zelda-breath-of-the-wild/screenshot-1.jpg",
            "/games/zelda-breath-of-the-wild/screenshot-2.jpg",
            "/games/zelda-breath-of-the-wild/screenshot-3.jpg"
        ]
    },
    "zelda-tears-of-the-kingdom": {
        slug: "zelda-tears-of-the-kingdom",
        name: "The Legend of Zelda: Tears of the Kingdom",
        publisher: "nintendo",
        director: "hidemaro-fujibayashi",
        platforms: ["switch", "switch-2"],
        description: "Hyrule, o céu e as profundezas: construa engenhocas e explore camadas inteiras do mundo.",
        media: [
            "https://www.youtube.com/watch?v=2SNF4M_v7wc",
            "/games/zelda-tears-of-the-kingdom/banner.jpg",
            "/games/zelda-tears-of-the-kingdom/screenshot-1.jpg",
            "/games/zelda-tears-of-the-kingdom/screenshot-2.jpg",
            "/games/zelda-tears-of-the-kingdom/screenshot-3.jpg"
        ]
    },
    "mario-kart-8-deluxe": {
        slug: "mario-kart-8-deluxe",
        name: "Mario Kart 8 Deluxe",
        publisher: "nintendo",
        director: "kosuke-yabuki",
        platforms: ["switch"],
        description: "Corridas com gravidade zero, itens clássicos e pistas de todos os tipos para jogar com os amigos.",
        media: [
            "https://www.youtube.com/watch?v=tKlRN2YpxRE",
            "/games/mario-kart-8-deluxe/banner.jpg",
            "/games/mario-kart-8-deluxe/screenshot-1.jpg",
            "/games/mario-kart-8-deluxe/screenshot-2.jpg",
            "/games/mario-kart-8-deluxe/screenshot-3.jpg"
        ]
    },
    "mario-kart-world": {
        slug: "mario-kart-world",
        name: "Mario Kart World",
        publisher: "nintendo",
        director: "kosuke-yabuki",
        platforms: ["switch-2"],
        description: "Um mundo aberto conectado por pistas, feito para o Nintendo Switch 2.",
        media: [
            "https://www.youtube.com/watch?v=3pE23YTYEZM",
            "/games/mario-kart-world/banner.jpg",
            "/games/mario-kart-world/screenshot-1.jpg",
            "/games/mario-kart-world/screenshot-2.jpg",
            "/games/mario-kart-world/screenshot-3.jpg"
        ]
    },
    "donkey-kong-bananza": {
        slug: "donkey-kong-bananza",
        name: "Donkey Kong Bananza",
        publisher: "nintendo",
        director: "kazuya-takahashi",
        platforms: ["switch-2"],
        description: "Quebre o cenário inteiro com a força do Donkey Kong em uma aventura de plataforma destrutiva.",
        media: [
            "https://www.youtube.com/watch?v=tdsRPs6rX4w",
            "/games/donkey-kong-bananza/banner.jpg",
            "/games/donkey-kong-bananza/screenshot-1.jpg",
            "/games/donkey-kong-bananza/screenshot-2.jpg",
            "/games/donkey-kong-bananza/screenshot-3.jpg"
        ]
    },
    "super-smash-bros-ultimate": {
        slug: "super-smash-bros-ultimate",
        name: "Super Smash Bros. Ultimate",
        publisher: "nintendo",
        director: "masahiro-sakurai",
        platforms: ["switch"],
        description: "Todos os lutadores de uma vez, com um elenco gigante de personagens de vários jogos.",
        media: [
            "https://www.youtube.com/watch?v=EXnbMp1yr1k",
            "/games/super-smash-bros-ultimate/banner.jpg",
            "/games/super-smash-bros-ultimate/screenshot-1.jpg",
            "/games/super-smash-bros-ultimate/screenshot-2.jpg",
            "/games/super-smash-bros-ultimate/screenshot-3.jpg"
        ]
    },
    "kirby-air-riders": {
        slug: "kirby-air-riders",
        name: "Kirby Air Riders",
        publisher: "nintendo",
        director: "masahiro-sakurai",
        platforms: ["switch-2"],
        description: "Corridas aéreas rápidas e caóticas com Kirby e companhia.",
        media: [
            "https://www.youtube.com/watch?v=z3puFLFDfxE",
            "/games/kirby-air-riders/banner.jpg",
            "/games/kirby-air-riders/screenshot-1.jpg",
            "/games/kirby-air-riders/screenshot-2.jpg",
            "/games/kirby-air-riders/screenshot-3.jpg"
        ]
    },
    "death-stranding": {
        slug: "death-stranding",
        name: "Death Stranding",
        publisher: "sony-interactive-entertainment",
        director: "hideo-kojima",
        platforms: ["ps5", "ps4", "pc"],
        description: "Reconecte uma América devastada entregando cargas a pé em uma aventura sobre laços e isolamento.",
        media: [
            "https://www.youtube.com/watch?v=H2Hy96sOnq8",
            "/games/death-stranding/banner.jpg",
            "/games/death-stranding/screenshot-1.jpg",
            "/games/death-stranding/screenshot-2.jpg",
            "/games/death-stranding/screenshot-3.jpg"
        ]
    },
    "death-stranding-2": {
        slug: "death-stranding-2",
        name: "Death Stranding 2: On the Beach",
        publisher: "sony-interactive-entertainment",
        director: "hideo-kojima",
        platforms: ["ps5"],
        description: "Sam volta a atravessar mundos para reconectar a humanidade, em uma sequência ainda mais ousada.",
        media: [
            "https://www.youtube.com/watch?v=EQdOSTt7YpY",
            "/games/death-stranding-2/banner.jpg",
            "/games/death-stranding-2/screenshot-1.jpg",
            "/games/death-stranding-2/screenshot-2.jpg",
            "/games/death-stranding-2/screenshot-3.jpg"
        ]
    },
    "metal-gear-solid-v": {
        slug: "metal-gear-solid-v",
        name: "Metal Gear Solid V: The Phantom Pain",
        publisher: "konami",
        director: "hideo-kojima",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "Espionagem tática em mundo aberto, com infiltração livre e uma base para comandar.",
        media: [
            "https://www.youtube.com/watch?v=C19ap2M7DDE",
            "/games/metal-gear-solid-v/banner.jpg",
            "/games/metal-gear-solid-v/screenshot-1.jpg",
            "/games/metal-gear-solid-v/screenshot-2.jpg",
            "/games/metal-gear-solid-v/screenshot-3.jpg"
        ]
    },
    "sonic-origins": {
        slug: "sonic-origins",
        name: "Sonic Origins",
        publisher: "sega",
        director: "yuji-naka",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Os clássicos Sonic 1, 2, 3 & Knuckles e CD reunidos e remasterizados.",
        media: [
            "https://www.youtube.com/watch?v=AtLWtVKrcDY",
            "/games/sonic-origins/banner.jpg",
            "/games/sonic-origins/screenshot-1.jpg",
            "/games/sonic-origins/screenshot-2.jpg",
            "/games/sonic-origins/screenshot-3.jpg"
        ]
    },
    "sonic-x-shadow-generations": {
        slug: "sonic-x-shadow-generations",
        name: "Sonic X Shadow Generations",
        publisher: "sega",
        director: "takashi-iizuka",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Celebre os 30 anos do Sonic em um remaster de Generations, mais uma campanha inédita do Shadow.",
        media: [
            "https://www.youtube.com/watch?v=yzK7gQWDnRk",
            "/games/sonic-x-shadow-generations/banner.jpg",
            "/games/sonic-x-shadow-generations/screenshot-1.jpg",
            "/games/sonic-x-shadow-generations/screenshot-2.jpg",
            "/games/sonic-x-shadow-generations/screenshot-3.jpg"
        ]
    },
    "sonic-frontiers": {
        slug: "sonic-frontiers",
        name: "Sonic Frontiers",
        publisher: "sega",
        director: "takashi-iizuka",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Sonic em ilhas abertas para explorar em alta velocidade.",
        media: [
            "https://www.youtube.com/watch?v=hv_zibBXjlg",
            "/games/sonic-frontiers/banner.jpg",
            "/games/sonic-frontiers/screenshot-1.jpg",
            "/games/sonic-frontiers/screenshot-2.jpg",
            "/games/sonic-frontiers/screenshot-3.jpg"
        ]
    },
    "sonic-colors-ultimate": {
        slug: "sonic-colors-ultimate",
        name: "Sonic Colors: Ultimate",
        publisher: "sega",
        director: "takashi-iizuka",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Aventura colorida pelo parque de diversões do Dr. Eggman, com os Wisps e suas habilidades.",
        media: [
            "https://www.youtube.com/watch?v=Z3MCqTdsVKc",
            "/games/sonic-colors-ultimate/banner.jpg",
            "/games/sonic-colors-ultimate/screenshot-1.jpg",
            "/games/sonic-colors-ultimate/screenshot-2.jpg",
            "/games/sonic-colors-ultimate/screenshot-3.jpg"
        ]
    },
    "the-last-of-us-part-i": {
        slug: "the-last-of-us-part-i",
        name: "The Last of Us Part I",
        publisher: "sony-interactive-entertainment",
        director: "neil-druckmann",
        platforms: ["ps5", "pc"],
        description: "A jornada de Joel e Ellie pelos Estados Unidos pós-apocalípticos, reconstruída do zero.",
        media: [
            "https://www.youtube.com/watch?v=R2Ebc_OFeug",
            "/games/the-last-of-us-part-i/banner.jpg",
            "/games/the-last-of-us-part-i/screenshot-1.jpg",
            "/games/the-last-of-us-part-i/screenshot-2.jpg",
            "/games/the-last-of-us-part-i/screenshot-3.jpg"
        ]
    },
    "the-last-of-us-part-ii": {
        slug: "the-last-of-us-part-ii",
        name: "The Last of Us Part II",
        publisher: "sony-interactive-entertainment",
        director: "neil-druckmann",
        platforms: ["ps5", "ps4", "pc"],
        description: "Uma história intensa de vingança e consequências em um mundo pós-apocalíptico.",
        media: [
            "https://www.youtube.com/watch?v=vhII1qlcZ4E",
            "/games/the-last-of-us-part-ii/banner.jpg",
            "/games/the-last-of-us-part-ii/screenshot-1.jpg",
            "/games/the-last-of-us-part-ii/screenshot-2.jpg",
            "/games/the-last-of-us-part-ii/screenshot-3.jpg"
        ]
    },
    "uncharted-4": {
        slug: "uncharted-4",
        name: "Uncharted 4: A Thief's End",
        publisher: "sony-interactive-entertainment",
        director: "neil-druckmann",
        platforms: ["ps4"],
        description: "A última grande aventura de Nathan Drake, com ação, humor e cenários de tirar o fôlego.",
        media: [
            "https://www.youtube.com/watch?v=hh5HV4iic1Y",
            "/games/uncharted-4/banner.jpg",
            "/games/uncharted-4/screenshot-1.jpg",
            "/games/uncharted-4/screenshot-2.jpg",
            "/games/uncharted-4/screenshot-3.jpg"
        ]
    },
    "uncharted-legacy-of-thieves": {
        slug: "uncharted-legacy-of-thieves",
        name: "Uncharted: Coleção Legado dos Ladrões",
        publisher: "sony-interactive-entertainment",
        director: "neil-druckmann",
        platforms: ["ps5", "pc"],
        description: "Uncharted 4 e Lost Legacy juntos, com visual remasterizado.",
        media: [
            "https://www.youtube.com/watch?v=lFfVZ13ohKs",
            "/games/uncharted-legacy-of-thieves/banner.jpg",
            "/games/uncharted-legacy-of-thieves/screenshot-1.jpg",
            "/games/uncharted-legacy-of-thieves/screenshot-2.jpg",
            "/games/uncharted-legacy-of-thieves/screenshot-3.jpg"
        ]
    },
    "god-of-war-2018": {
        slug: "god-of-war-2018",
        name: "God of War (2018)",
        publisher: "sony-interactive-entertainment",
        director: "cory-barlog",
        platforms: ["ps5", "ps4", "pc"],
        description: "Kratos e seu filho Atreus enfrentam deuses e criaturas da mitologia nórdica.",
        media: [
            "https://www.youtube.com/watch?v=K0u_kAWLJOA",
            "/games/god-of-war-2018/banner.jpg",
            "/games/god-of-war-2018/screenshot-1.jpg",
            "/games/god-of-war-2018/screenshot-2.jpg",
            "/games/god-of-war-2018/screenshot-3.jpg"
        ]
    },
    "god-of-war-ragnarok": {
        slug: "god-of-war-ragnarok",
        name: "God of War Ragnarök",
        publisher: "sony-interactive-entertainment",
        director: "cory-barlog",
        platforms: ["ps5", "ps4", "pc"],
        description: "Kratos e Atreus encaram o Ragnarök e a fúria dos nove reinos.",
        media: [
            "https://www.youtube.com/watch?v=hfJ4Km46A-0",
            "/games/god-of-war-ragnarok/banner.jpg",
            "/games/god-of-war-ragnarok/screenshot-1.jpg",
            "/games/god-of-war-ragnarok/screenshot-2.jpg",
            "/games/god-of-war-ragnarok/screenshot-3.jpg"
        ]
    },
    "starfield": {
        slug: "starfield",
        name: "Starfield",
        publisher: "xbox-game-studios",
        director: "todd-howard",
        platforms: ["xbox-series", "pc"],
        description: "RPG espacial com centenas de planetas para explorar e uma nave para chamar de sua.",
        media: [
            "https://www.youtube.com/watch?v=kfYEiTdsyas",
            "/games/starfield/banner.jpg",
            "/games/starfield/screenshot-1.jpg",
            "/games/starfield/screenshot-2.jpg",
            "/games/starfield/screenshot-3.jpg"
        ]
    },
    "skyrim": {
        slug: "skyrim",
        name: "The Elder Scrolls V: Skyrim",
        publisher: "bethesda-softworks",
        director: "todd-howard",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Torne-se o Dovahkiin e explore as montanhas geladas de Skyrim, enfrentando dragões.",
        media: [
            "https://www.youtube.com/watch?v=JSRtYpNRoN0",
            "/games/skyrim/banner.jpg",
            "/games/skyrim/screenshot-1.jpg",
            "/games/skyrim/screenshot-2.jpg",
            "/games/skyrim/screenshot-3.jpg"
        ]
    },
    "fallout-4": {
        slug: "fallout-4",
        name: "Fallout 4",
        publisher: "bethesda-softworks",
        director: "todd-howard",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Reconstrua a vida em um mundo pós-nuclear, com assentamentos e armaduras para customizar.",
        media: [
            "https://www.youtube.com/watch?v=ivStn8l6_9w",
            "/games/fallout-4/banner.jpg",
            "/games/fallout-4/screenshot-1.jpg",
            "/games/fallout-4/screenshot-2.jpg",
            "/games/fallout-4/screenshot-3.jpg"
        ]
    },
    "fallout-76": {
        slug: "fallout-76",
        name: "Fallout 76",
        publisher: "bethesda-softworks",
        director: "todd-howard",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "A Virgínia Ocidental pós-apocalíptica, para explorar sozinho ou com amigos online.",
        media: [
            "https://www.youtube.com/watch?v=vQ3YhoY70pc",
            "/games/fallout-76/banner.jpg",
            "/games/fallout-76/screenshot-1.jpg",
            "/games/fallout-76/screenshot-2.jpg",
            "/games/fallout-76/screenshot-3.jpg"
        ]
    },
    "oblivion-remastered": {
        slug: "oblivion-remastered",
        name: "The Elder Scrolls IV: Oblivion Remastered",
        publisher: "bethesda-softworks",
        director: "todd-howard",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "Cyrodiil de volta com visual atualizado e a mesma liberdade de sempre.",
        media: [
            "https://www.youtube.com/watch?v=wFJ3PZuAjK4",
            "/games/oblivion-remastered/banner.jpg",
            "/games/oblivion-remastered/screenshot-1.jpg",
            "/games/oblivion-remastered/screenshot-2.jpg",
            "/games/oblivion-remastered/screenshot-3.jpg"
        ]
    },
    "red-dead-redemption-2": {
        slug: "red-dead-redemption-2",
        name: "Red Dead Redemption 2",
        publisher: "rockstar-games",
        director: "dan-houser",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "Acompanhe Arthur Morgan e a gangue Van der Linde no fim do Velho Oeste.",
        media: [
            "https://www.youtube.com/watch?v=eaW0tYpxyp0",
            "/games/red-dead-redemption-2/banner.jpg",
            "/games/red-dead-redemption-2/screenshot-1.jpg",
            "/games/red-dead-redemption-2/screenshot-2.jpg",
            "/games/red-dead-redemption-2/screenshot-3.jpg"
        ]
    },
    "grand-theft-auto-v": {
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        publisher: "rockstar-games",
        director: "dan-houser",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Três criminosos, uma cidade enorme e assaltos que mudam o rumo de Los Santos.",
        media: [
            "https://www.youtube.com/watch?v=hvoD7ehZPcM",
            "/games/grand-theft-auto-v/banner.jpg",
            "/games/grand-theft-auto-v/screenshot-1.jpg",
            "/games/grand-theft-auto-v/screenshot-2.jpg",
            "/games/grand-theft-auto-v/screenshot-3.jpg"
        ]
    },
    "red-dead-redemption": {
        slug: "red-dead-redemption",
        name: "Red Dead Redemption",
        publisher: "rockstar-games",
        director: "dan-houser",
        platforms: ["ps4", "switch"],
        description: "A história de John Marston no Velho Oeste, em busca de sua família e de acertar velhas contas.",
        media: [
            "https://www.youtube.com/watch?v=PD24MkbHQrc",
            "/games/red-dead-redemption/banner.jpg",
            "/games/red-dead-redemption/screenshot-1.jpg",
            "/games/red-dead-redemption/screenshot-2.jpg",
            "/games/red-dead-redemption/screenshot-3.jpg"
        ]
    },
    "gta-trilogy-definitive": {
        slug: "gta-trilogy-definitive",
        name: "Grand Theft Auto: The Trilogy – Definitive Edition",
        publisher: "rockstar-games",
        director: "dan-houser",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "GTA III, Vice City e San Andreas remasterizados em um só pacote.",
        media: [
            "https://www.youtube.com/watch?v=7x7zr1onxfU",
            "/games/gta-trilogy-definitive/banner.jpg",
            "/games/gta-trilogy-definitive/screenshot-1.jpg",
            "/games/gta-trilogy-definitive/screenshot-2.jpg",
            "/games/gta-trilogy-definitive/screenshot-3.jpg"
        ]
    },
    "clair-obscur-expedition-33": {
        slug: "clair-obscur-expedition-33",
        name: "Clair Obscur: Expedition 33",
        publisher: "kepler-interactive",
        director: "guillaume-broche",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "RPG de turnos inspirado na Belle Époque, em que uma expedição tenta destruir a Paintress antes que ela apague mais uma geração.",
        media: [
            "https://www.youtube.com/watch?v=2VaLOc1FpSo",
            "/games/clair-obscur-expedition-33/banner.jpg",
            "/games/clair-obscur-expedition-33/screenshot-1.jpg",
            "/games/clair-obscur-expedition-33/screenshot-2.jpg",
            "/games/clair-obscur-expedition-33/screenshot-3.jpg"
        ]
    },
    "devil-may-cry-5": {
        slug: "devil-may-cry-5",
        name: "Devil May Cry 5",
        publisher: "capcom",
        director: "hideaki-itsuno",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Combos estilosos e demônios gigantes com Nero, Dante e V.",
        media: [
            "https://www.youtube.com/watch?v=dG6_CAdiLPM",
            "/games/devil-may-cry-5/banner.jpg",
            "/games/devil-may-cry-5/screenshot-1.jpg",
            "/games/devil-may-cry-5/screenshot-2.jpg",
            "/games/devil-may-cry-5/screenshot-3.jpg"
        ]
    },
    "dragons-dogma-2": {
        slug: "dragons-dogma-2",
        name: "Dragon's Dogma 2",
        publisher: "capcom",
        director: "hideaki-itsuno",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "RPG de ação em mundo aberto, com peões que lutam ao seu lado e monstros colossais.",
        media: [
            "https://www.youtube.com/watch?v=cT0rIgaiPWA",
            "/games/dragons-dogma-2/banner.jpg",
            "/games/dragons-dogma-2/screenshot-1.jpg",
            "/games/dragons-dogma-2/screenshot-2.jpg",
            "/games/dragons-dogma-2/screenshot-3.jpg"
        ]
    },
    "dragons-dogma-dark-arisen": {
        slug: "dragons-dogma-dark-arisen",
        name: "Dragon's Dogma: Dark Arisen",
        publisher: "capcom",
        director: "hideaki-itsuno",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "O clássico RPG de ação em que você caça monstros enormes com a ajuda de peões.",
        media: [
            "https://www.youtube.com/watch?v=XmKyRay8hGc",
            "/games/dragons-dogma-dark-arisen/banner.jpg",
            "/games/dragons-dogma-dark-arisen/screenshot-1.jpg",
            "/games/dragons-dogma-dark-arisen/screenshot-2.jpg",
            "/games/dragons-dogma-dark-arisen/screenshot-3.jpg"
        ]
    },
    "monster-hunter-world": {
        slug: "monster-hunter-world",
        name: "Monster Hunter: World",
        publisher: "capcom",
        director: "yuya-tokuda",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "Cace feras gigantes em ecossistemas vivos e forje equipamentos com o que conquistar.",
        media: [
            "https://www.youtube.com/watch?v=OotQrKEqe94",
            "/games/monster-hunter-world/banner.jpg",
            "/games/monster-hunter-world/screenshot-1.jpg",
            "/games/monster-hunter-world/screenshot-2.jpg",
            "/games/monster-hunter-world/screenshot-3.jpg"
        ]
    },
    "monster-hunter-wilds": {
        slug: "monster-hunter-wilds",
        name: "Monster Hunter Wilds",
        publisher: "capcom",
        director: "yuya-tokuda",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "Caçadas em terras extremas, onde o clima e o ecossistema mudam a todo momento.",
        media: [
            "https://www.youtube.com/watch?v=a_wNFT4j6qI",
            "/games/monster-hunter-wilds/banner.jpg",
            "/games/monster-hunter-wilds/screenshot-1.jpg",
            "/games/monster-hunter-wilds/screenshot-2.jpg",
            "/games/monster-hunter-wilds/screenshot-3.jpg"
        ]
    },
    "resident-evil-2-remake": {
        slug: "resident-evil-2-remake",
        name: "Resident Evil 2",
        publisher: "capcom",
        director: "kazunori-kadoi",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "O clássico de terror de Raccoon City, reconstruído com câmera sobre o ombro.",
        media: [
            "https://www.youtube.com/watch?v=u3wS-Q2KBpk",
            "/games/resident-evil-2-remake/banner.jpg",
            "/games/resident-evil-2-remake/screenshot-1.jpg",
            "/games/resident-evil-2-remake/screenshot-2.jpg",
            "/games/resident-evil-2-remake/screenshot-3.jpg"
        ]
    },
    "resident-evil-7": {
        slug: "resident-evil-7",
        name: "Resident Evil 7: Biohazard",
        publisher: "capcom",
        director: "koshi-nakanishi",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Terror em primeira pessoa em uma fazenda isolada da Louisiana.",
        media: [
            "https://www.youtube.com/watch?v=RgYqQsbKn6w",
            "/games/resident-evil-7/banner.jpg",
            "/games/resident-evil-7/screenshot-1.jpg",
            "/games/resident-evil-7/screenshot-2.jpg",
            "/games/resident-evil-7/screenshot-3.jpg"
        ]
    },
    "street-fighter-6": {
        slug: "street-fighter-6",
        name: "Street Fighter 6",
        publisher: "capcom",
        director: "takayuki-nakayama",
        platforms: ["ps5", "ps4", "xbox-series", "switch-2", "pc"],
        description: "Luta clássica reinventada, com Modo Mundo e o sistema Drive.",
        media: [
            "https://www.youtube.com/watch?v=1INU3FOJsTw",
            "/games/street-fighter-6/banner.jpg",
            "/games/street-fighter-6/screenshot-1.jpg",
            "/games/street-fighter-6/screenshot-2.jpg",
            "/games/street-fighter-6/screenshot-3.jpg"
        ]
    },
    "nier-automata": {
        slug: "nier-automata",
        name: "NieR: Automata",
        publisher: "square-enix",
        director: "yoko-taro",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Androides lutam por um futuro numa Terra deserta, em uma história que muda a cada final.",
        media: [
            "https://www.youtube.com/watch?v=iRAHnXbPIQo",
            "/games/nier-automata/banner.jpg",
            "/games/nier-automata/screenshot-1.jpg",
            "/games/nier-automata/screenshot-2.jpg",
            "/games/nier-automata/screenshot-3.jpg"
        ]
    },
    "nier-replicant": {
        slug: "nier-replicant",
        name: "NieR Replicant ver.1.22474487139...",
        publisher: "square-enix",
        director: "yoko-taro",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "A história original de NieR, com visual e combate renovados.",
        media: [
            "https://www.youtube.com/watch?v=sPcf4pfTqfY",
            "/games/nier-replicant/banner.jpg",
            "/games/nier-replicant/screenshot-1.jpg",
            "/games/nier-replicant/screenshot-2.jpg",
            "/games/nier-replicant/screenshot-3.jpg"
        ]
    },
    "baldurs-gate-3": {
        slug: "baldurs-gate-3",
        name: "Baldur's Gate 3",
        publisher: "larian-studios",
        director: "swen-vincke",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "RPG em turnos de Dungeons & Dragons, com escolhas que mudam o mundo e a campanha.",
        media: [
            "https://www.youtube.com/watch?v=1T22wNvoNiU",
            "/games/baldurs-gate-3/banner.jpg",
            "/games/baldurs-gate-3/screenshot-1.jpg",
            "/games/baldurs-gate-3/screenshot-2.jpg",
            "/games/baldurs-gate-3/screenshot-3.jpg"
        ]
    },
    "divinity-original-sin-2": {
        slug: "divinity-original-sin-2",
        name: "Divinity: Original Sin 2",
        publisher: "larian-studios",
        director: "swen-vincke",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "RPG tático em que cada herói tem sua própria história e suas habilidades.",
        media: [
            "https://www.youtube.com/watch?v=bTWTFX8qzPI",
            "/games/divinity-original-sin-2/banner.jpg",
            "/games/divinity-original-sin-2/screenshot-1.jpg",
            "/games/divinity-original-sin-2/screenshot-2.jpg",
            "/games/divinity-original-sin-2/screenshot-3.jpg"
        ]
    },
    "divinity-original-sin": {
        slug: "divinity-original-sin",
        name: "Divinity: Original Sin",
        publisher: "larian-studios",
        director: "swen-vincke",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Dois Caçadores de Fontes investigam um assassinato num RPG cheio de liberdade.",
        media: [
            "https://www.youtube.com/watch?v=rxnApC7Uxik",
            "/games/divinity-original-sin/banner.jpg",
            "/games/divinity-original-sin/screenshot-1.jpg",
            "/games/divinity-original-sin/screenshot-2.jpg",
            "/games/divinity-original-sin/screenshot-3.jpg"
        ]
    },
    "persona-5-royal": {
        slug: "persona-5-royal",
        name: "Persona 5 Royal",
        publisher: "sega",
        director: "katsura-hashino",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Ladrões Fantasma roubam corações por Tóquio, entre aulas, amizades e masmorras.",
        media: [
            "https://www.youtube.com/watch?v=LFzh6T7bQ_M",
            "/games/persona-5-royal/banner.jpg",
            "/games/persona-5-royal/screenshot-1.jpg",
            "/games/persona-5-royal/screenshot-2.jpg",
            "/games/persona-5-royal/screenshot-3.jpg"
        ]
    },
    "persona-3-reload": {
        slug: "persona-3-reload",
        name: "Persona 3 Reload",
        publisher: "sega",
        director: "katsura-hashino",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Um remake do clássico, com a Hora Sombria e a Torre de Tártaro.",
        media: [
            "https://www.youtube.com/watch?v=QIIPXA2A6cM",
            "/games/persona-3-reload/banner.jpg",
            "/games/persona-3-reload/screenshot-1.jpg",
            "/games/persona-3-reload/screenshot-2.jpg",
            "/games/persona-3-reload/screenshot-3.jpg"
        ]
    },
    "persona-4-golden": {
        slug: "persona-4-golden",
        name: "Persona 4 Golden",
        publisher: "sega",
        director: "katsura-hashino",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Uma investigação numa cidadezinha do interior, entre amizades e o Mundo da TV.",
        media: [
            "https://www.youtube.com/watch?v=jWO_Nlfgek0",
            "/games/persona-4-golden/banner.jpg",
            "/games/persona-4-golden/screenshot-1.jpg",
            "/games/persona-4-golden/screenshot-2.jpg",
            "/games/persona-4-golden/screenshot-3.jpg"
        ]
    },
    "metaphor-refantazio": {
        slug: "metaphor-refantazio",
        name: "Metaphor: ReFantazio",
        publisher: "sega",
        director: "katsura-hashino",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Um RPG de fantasia sobre eleger um novo rei num reino em crise.",
        media: [
            "https://www.youtube.com/watch?v=yQPk4cVrU_w",
            "/games/metaphor-refantazio/banner.jpg",
            "/games/metaphor-refantazio/screenshot-1.jpg",
            "/games/metaphor-refantazio/screenshot-2.jpg",
            "/games/metaphor-refantazio/screenshot-3.jpg"
        ]
    },
    "marvels-spider-man": {
        slug: "marvels-spider-man",
        name: "Marvel's Spider-Man",
        publisher: "sony-interactive-entertainment",
        director: "bryan-intihar",
        platforms: ["ps5", "ps4", "pc"],
        description: "Peter Parker balança por uma Nova York cheia de vilões clássicos.",
        media: [
            "https://www.youtube.com/watch?v=q4GdJVvdxss",
            "/games/marvels-spider-man/banner.jpg",
            "/games/marvels-spider-man/screenshot-1.jpg",
            "/games/marvels-spider-man/screenshot-2.jpg",
            "/games/marvels-spider-man/screenshot-3.jpg"
        ]
    },
    "spider-man-miles-morales": {
        slug: "spider-man-miles-morales",
        name: "Marvel's Spider-Man: Miles Morales",
        publisher: "sony-interactive-entertainment",
        director: "bryan-intihar",
        platforms: ["ps5", "ps4", "pc"],
        description: "Miles Morales assume o manto de Spider-Man em uma Nova York no inverno.",
        media: [
            "https://www.youtube.com/watch?v=3wHL2VIaFcs",
            "/games/spider-man-miles-morales/banner.jpg",
            "/games/spider-man-miles-morales/screenshot-1.jpg",
            "/games/spider-man-miles-morales/screenshot-2.jpg",
            "/games/spider-man-miles-morales/screenshot-3.jpg"
        ]
    },
    "marvels-spider-man-2": {
        slug: "marvels-spider-man-2",
        name: "Marvel's Spider-Man 2",
        publisher: "sony-interactive-entertainment",
        director: "bryan-intihar",
        platforms: ["ps5", "pc"],
        description: "Peter e Miles encaram Venom e Kraven numa cidade maior e mais rápida.",
        media: [
            "https://www.youtube.com/watch?v=9fVYKsEmuRo",
            "/games/marvels-spider-man-2/banner.jpg",
            "/games/marvels-spider-man-2/screenshot-1.jpg",
            "/games/marvels-spider-man-2/screenshot-2.jpg",
            "/games/marvels-spider-man-2/screenshot-3.jpg"
        ]
    },
    "hades": {
        slug: "hades",
        name: "Hades",
        publisher: "supergiant-games",
        director: "greg-kasavin",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Fuja do Submundo em um roguelike com combate fluido e uma história que avança a cada tentativa.",
        media: [
            "https://www.youtube.com/watch?v=91t0ha9x0AE",
            "/games/hades/banner.jpg",
            "/games/hades/screenshot-1.jpg",
            "/games/hades/screenshot-2.jpg",
            "/games/hades/screenshot-3.jpg"
        ]
    },
    "hades-ii": {
        slug: "hades-ii",
        name: "Hades II",
        publisher: "supergiant-games",
        director: "greg-kasavin",
        platforms: ["switch", "switch-2", "pc"],
        description: "Melinoë, filha de Hades, enfrenta o Titã do Tempo em outro roguelike do Supergiant.",
        media: [
            "https://www.youtube.com/watch?v=U8lJRcUeEMs",
            "/games/hades-ii/banner.jpg",
            "/games/hades-ii/screenshot-1.jpg",
            "/games/hades-ii/screenshot-2.jpg",
            "/games/hades-ii/screenshot-3.jpg"
        ]
    },
    "transistor": {
        slug: "transistor",
        name: "Transistor",
        publisher: "supergiant-games",
        director: "greg-kasavin",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Ação com planejamento em tempo real numa cidade futurista, narrada por uma espada falante.",
        media: [
            "https://www.youtube.com/watch?v=GTik6sYT_BE",
            "/games/transistor/banner.jpg",
            "/games/transistor/screenshot-1.jpg",
            "/games/transistor/screenshot-2.jpg",
            "/games/transistor/screenshot-3.jpg"
        ]
    },
    "bastion": {
        slug: "bastion",
        name: "Bastion",
        publisher: "supergiant-games",
        director: "greg-kasavin",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "RPG de ação com narração dinâmica num mundo que se constrói à medida que você avança.",
        media: [
            "https://www.youtube.com/watch?v=TptJHeWngJs",
            "/games/bastion/banner.jpg",
            "/games/bastion/screenshot-1.jpg",
            "/games/bastion/screenshot-2.jpg",
            "/games/bastion/screenshot-3.jpg"
        ]
    },
    "gran-turismo-7": {
        slug: "gran-turismo-7",
        name: "Gran Turismo 7",
        publisher: "sony-interactive-entertainment",
        director: "kazunori-yamauchi",
        platforms: ["ps5", "ps4"],
        description: "O simulador clássico, com centenas de carros e pistas de todo o mundo.",
        media: [
            "https://www.youtube.com/watch?v=oz-O74SmTSQ",
            "/games/gran-turismo-7/banner.jpg",
            "/games/gran-turismo-7/screenshot-1.jpg",
            "/games/gran-turismo-7/screenshot-2.jpg",
            "/games/gran-turismo-7/screenshot-3.jpg"
        ]
    },
    "gran-turismo-sport": {
        slug: "gran-turismo-sport",
        name: "Gran Turismo Sport",
        publisher: "sony-interactive-entertainment",
        director: "kazunori-yamauchi",
        platforms: ["ps4"],
        description: "Competições online e carros de corrida em um simulador focado em eSports.",
        media: [
            "https://www.youtube.com/watch?v=moDdHXpxWrw",
            "/games/gran-turismo-sport/banner.jpg",
            "/games/gran-turismo-sport/screenshot-1.jpg",
            "/games/gran-turismo-sport/screenshot-2.jpg"
        ]
    },
    "horizon-zero-dawn": {
        slug: "horizon-zero-dawn",
        name: "Horizon Zero Dawn",
        publisher: "sony-interactive-entertainment",
        director: "mathijs-de-jonge",
        platforms: ["ps4", "ps5", "pc"],
        description: "Aloy caça máquinas gigantes em um mundo pós-apocalíptico.",
        media: [
            "https://www.youtube.com/watch?v=wzx96gYA8ek",
            "/games/horizon-zero-dawn/banner.jpg",
            "/games/horizon-zero-dawn/screenshot-1.jpg",
            "/games/horizon-zero-dawn/screenshot-2.jpg",
            "/games/horizon-zero-dawn/screenshot-3.jpg"
        ]
    },
    "horizon-forbidden-west": {
        slug: "horizon-forbidden-west",
        name: "Horizon Forbidden West",
        publisher: "sony-interactive-entertainment",
        director: "mathijs-de-jonge",
        platforms: ["ps5", "ps4", "pc"],
        description: "Aloy atravessa o Oeste Proibido, onde novas ameaças e máquinas a esperam.",
        media: [
            "https://www.youtube.com/watch?v=UxDWGW7Z67I",
            "/games/horizon-forbidden-west/banner.jpg",
            "/games/horizon-forbidden-west/screenshot-1.jpg",
            "/games/horizon-forbidden-west/screenshot-2.jpg",
            "/games/horizon-forbidden-west/screenshot-3.jpg"
        ]
    },
    "ghost-of-tsushima": {
        slug: "ghost-of-tsushima",
        name: "Ghost of Tsushima",
        publisher: "sony-interactive-entertainment",
        director: "nate-fox",
        platforms: ["ps4", "ps5", "pc"],
        description: "Jin Sakai defende a ilha de Tsushima da invasão mongol, entre honra e furtividade.",
        media: [
            "https://www.youtube.com/watch?v=RcWk08PBe7k",
            "/games/ghost-of-tsushima/banner.jpg",
            "/games/ghost-of-tsushima/screenshot-1.jpg",
            "/games/ghost-of-tsushima/screenshot-2.jpg",
            "/games/ghost-of-tsushima/screenshot-3.jpg"
        ]
    },
    "ghost-of-yotei": {
        slug: "ghost-of-yotei",
        name: "Ghost of Yōtei",
        publisher: "sony-interactive-entertainment",
        director: "nate-fox",
        platforms: ["ps5"],
        description: "Uma nova lenda do Japão feudal, em busca de vingança.",
        media: [
            "https://www.youtube.com/watch?v=sLcksHR30UA",
            "/games/ghost-of-yotei/banner.jpg",
            "/games/ghost-of-yotei/screenshot-1.jpg",
            "/games/ghost-of-yotei/screenshot-2.jpg"
        ]
    },
    "alan-wake-2": {
        slug: "alan-wake-2",
        name: "Alan Wake 2",
        publisher: "epic-games-publishing",
        director: "sam-lake",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "Terror psicológico em dois protagonistas e duas realidades.",
        media: [
            "https://www.youtube.com/watch?v=dlQ3FeNu5Yw",
            "/games/alan-wake-2/banner.jpg",
            "/games/alan-wake-2/screenshot-1.jpg",
            "/games/alan-wake-2/screenshot-2.jpg",
            "/games/alan-wake-2/screenshot-3.jpg"
        ]
    },
    "control": {
        slug: "control",
        name: "Control",
        publisher: "epic-games-publishing",
        director: "sam-lake",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Jesse Faden explora o Antigo Lar, um prédio que muda de forma, com poderes telecinéticos.",
        media: [
            "https://www.youtube.com/watch?v=PT5yMfC9LQM",
            "/games/control/banner.jpg",
            "/games/control/screenshot-1.jpg",
            "/games/control/screenshot-2.jpg",
            "/games/control/screenshot-3.jpg"
        ]
    },
    "alan-wake-remastered": {
        slug: "alan-wake-remastered",
        name: "Alan Wake Remastered",
        publisher: "epic-games-publishing",
        director: "sam-lake",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "O thriller que deu início à saga, com visual remasterizado.",
        media: [
            "https://www.youtube.com/watch?v=V7_LKrMheAU",
            "/games/alan-wake-remastered/banner.jpg",
            "/games/alan-wake-remastered/screenshot-1.jpg",
            "/games/alan-wake-remastered/screenshot-2.jpg",
            "/games/alan-wake-remastered/screenshot-3.jpg"
        ]
    },
    "jedi-fallen-order": {
        slug: "jedi-fallen-order",
        name: "Star Wars Jedi: Fallen Order",
        publisher: "electronic-arts",
        director: "stig-asmussen",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "pc"],
        description: "Cal Kestis, um jovem Padawan sobrevivente, tenta reconstruir a Ordem Jedi.",
        media: [
            "https://www.youtube.com/watch?v=xIl2z5wwjdA",
            "/games/jedi-fallen-order/banner.jpg",
            "/games/jedi-fallen-order/screenshot-1.jpg",
            "/games/jedi-fallen-order/screenshot-2.jpg",
            "/games/jedi-fallen-order/screenshot-3.jpg"
        ]
    },
    "jedi-survivor": {
        slug: "jedi-survivor",
        name: "Star Wars Jedi: Survivor",
        publisher: "electronic-arts",
        director: "stig-asmussen",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "Cal Kestis volta a enfrentar o Império em uma aventura maior e mais ousada.",
        media: [
            "https://www.youtube.com/watch?v=bmj3ty-Wt48",
            "/games/jedi-survivor/banner.jpg",
            "/games/jedi-survivor/screenshot-1.jpg",
            "/games/jedi-survivor/screenshot-2.jpg",
            "/games/jedi-survivor/screenshot-3.jpg"
        ]
    },
    "assassins-creed-black-flag": {
        slug: "assassins-creed-black-flag",
        name: "Assassin's Creed IV: Black Flag",
        publisher: "ubisoft",
        director: "jean-guesdon",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "Piratas, batalhas navais e o Caribe no auge da Era de Ouro.",
        media: [
            "https://www.youtube.com/watch?v=ZjkU1p18uIc",
            "/games/assassins-creed-black-flag/banner.jpg",
            "/games/assassins-creed-black-flag/screenshot-1.jpg",
            "/games/assassins-creed-black-flag/screenshot-2.jpg",
            "/games/assassins-creed-black-flag/screenshot-3.jpg"
        ]
    },
    "assassins-creed-origins": {
        slug: "assassins-creed-origins",
        name: "Assassin's Creed Origins",
        publisher: "ubisoft",
        director: "jean-guesdon",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "A origem da Irmandade, no Egito antigo.",
        media: [
            "https://www.youtube.com/watch?v=-1gZLmI9e5w",
            "/games/assassins-creed-origins/banner.jpg",
            "/games/assassins-creed-origins/screenshot-1.jpg",
            "/games/assassins-creed-origins/screenshot-2.jpg",
            "/games/assassins-creed-origins/screenshot-3.jpg"
        ]
    },
    "assassins-creed-odyssey": {
        slug: "assassins-creed-odyssey",
        name: "Assassin's Creed Odyssey",
        publisher: "ubisoft",
        director: "jean-guesdon",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Uma jornada épica pela Grécia antiga, com escolhas que mudam o rumo da guerra.",
        media: [
            "https://www.youtube.com/watch?v=so2SeY_UaeM",
            "/games/assassins-creed-odyssey/banner.jpg",
            "/games/assassins-creed-odyssey/screenshot-1.jpg",
            "/games/assassins-creed-odyssey/screenshot-2.jpg",
            "/games/assassins-creed-odyssey/screenshot-3.jpg"
        ]
    },
    "prince-of-persia-lost-crown": {
        slug: "prince-of-persia-lost-crown",
        name: "Prince of Persia: The Lost Crown",
        publisher: "ubisoft",
        director: "mounir-radi",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Metroidvania de ação com Sargon, tempo em espiral e acrobacias.",
        media: [
            "https://www.youtube.com/watch?v=n4vaxKwZ5rQ",
            "/games/prince-of-persia-lost-crown/banner.jpg",
            "/games/prince-of-persia-lost-crown/screenshot-1.jpg",
            "/games/prince-of-persia-lost-crown/screenshot-2.jpg",
            "/games/prince-of-persia-lost-crown/screenshot-3.jpg"
        ]
    },
    "rayman-legends": {
        slug: "rayman-legends",
        name: "Rayman Legends",
        publisher: "ubisoft",
        director: "michel-ancel",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Plataforma 2D colorida e musical, cheia de fases para jogar em dupla.",
        media: [
            "https://www.youtube.com/watch?v=yMIKs1PKrEM",
            "/games/rayman-legends/banner.jpg",
            "/games/rayman-legends/screenshot-1.jpg",
            "/games/rayman-legends/screenshot-2.jpg",
            "/games/rayman-legends/screenshot-3.jpg"
        ]
    },
    "beyond-good-and-evil-20th": {
        slug: "beyond-good-and-evil-20th",
        name: "Beyond Good & Evil – Edição 20º Aniversário",
        publisher: "ubisoft",
        director: "michel-ancel",
        platforms: ["ps4", "xbox-one", "pc"],
        description: "A jornalista Jade investiga uma conspiração alienígena, 20 anos depois.",
        media: [
            "https://www.youtube.com/watch?v=CaU4tMuvvdc",
            "/games/beyond-good-and-evil-20th/banner.jpg",
            "/games/beyond-good-and-evil-20th/screenshot-1.jpg",
            "/games/beyond-good-and-evil-20th/screenshot-2.jpg",
            "/games/beyond-good-and-evil-20th/screenshot-3.jpg"
        ]
    },
    "minecraft": {
        slug: "minecraft",
        name: "Minecraft",
        publisher: "xbox-game-studios",
        director: "jens-bergensten",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        description: "Explore, construa e sobreviva em mundos infinitos feitos de blocos.",
        media: [
            "https://www.youtube.com/watch?v=MmB9b5njVbA",
            "/games/minecraft/banner.jpg",
            "/games/minecraft/screenshot-1.jpg",
            "/games/minecraft/screenshot-2.jpg",
            "/games/minecraft/screenshot-3.jpg"
        ]
    },
    "black-myth-wukong": {
        slug: "black-myth-wukong",
        name: "Black Myth: Wukong",
        publisher: "game-science",
        director: "feng-ji",
        platforms: ["ps5", "xbox-series", "pc"],
        description: "Aventura de ação baseada em Jornada ao Oeste, com a lenda do Rei Macaco.",
        media: [
            "https://www.youtube.com/watch?v=pnSsgRJmsCc",
            "/games/black-myth-wukong/banner.jpg",
            "/games/black-myth-wukong/screenshot-1.jpg",
            "/games/black-myth-wukong/screenshot-2.jpg",
            "/games/black-myth-wukong/screenshot-3.jpg"
        ]
    },
    "no-mans-sky": {
        slug: "no-mans-sky",
        name: "No Man's Sky",
        publisher: "hello-games",
        director: "sean-murray",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        description: "Explore uma galáxia inteira gerada proceduralmente, a pé ou de nave.",
        media: [
            "https://www.youtube.com/watch?v=aozqa_7PLhE",
            "/games/no-mans-sky/banner.jpg",
            "/games/no-mans-sky/screenshot-1.jpg",
            "/games/no-mans-sky/screenshot-2.jpg",
            "/games/no-mans-sky/screenshot-3.jpg"
        ]
    },
    "stardew-valley": {
        slug: "stardew-valley",
        name: "Stardew Valley",
        publisher: "concernedape",
        director: "eric-barone",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Largue a vida na cidade e recupere a fazenda do seu avô, entre plantações, minas e amizades.",
        media: [
            "https://www.youtube.com/watch?v=ot7uXNQskhs",
            "/games/stardew-valley/banner.jpg",
            "/games/stardew-valley/screenshot-1.jpg",
            "/games/stardew-valley/screenshot-2.jpg",
            "/games/stardew-valley/screenshot-3.jpg"
        ]
    },
    "hollow-knight": {
        slug: "hollow-knight",
        name: "Hollow Knight",
        publisher: "team-cherry",
        director: "ari-gibson",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Metroidvania desenhada à mão, num reino de insetos subterrâneo.",
        media: [
            "https://www.youtube.com/watch?v=UAO2urG23S4",
            "/games/hollow-knight/banner.jpg",
            "/games/hollow-knight/screenshot-1.jpg",
            "/games/hollow-knight/screenshot-2.jpg",
            "/games/hollow-knight/screenshot-3.jpg"
        ]
    },
    "hollow-knight-silksong": {
        slug: "hollow-knight-silksong",
        name: "Hollow Knight: Silksong",
        publisher: "team-cherry",
        director: "ari-gibson",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "switch-2", "pc"],
        description: "Hornet atravessa o reino de Pharloom em uma nova aventura de ação e plataforma.",
        media: [
            "https://www.youtube.com/watch?v=6XGeJwsUP9c",
            "/games/hollow-knight-silksong/banner.jpg",
            "/games/hollow-knight-silksong/screenshot-1.jpg",
            "/games/hollow-knight-silksong/screenshot-2.jpg",
            "/games/hollow-knight-silksong/screenshot-3.jpg"
        ]
    },
    "cyberpunk-2077": {
        slug: "cyberpunk-2077",
        name: "Cyberpunk 2077",
        publisher: "cd-projekt",
        director: "adam-badowski",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch-2", "pc"],
        description: "RPG em primeira pessoa na Night City do futuro, em que V busca um implante que vale a vida.",
        media: [
            "https://www.youtube.com/watch?v=UnA7tepsc7s",
            "/games/cyberpunk-2077/banner.jpg",
            "/games/cyberpunk-2077/screenshot-1.jpg",
            "/games/cyberpunk-2077/screenshot-2.jpg",
            "/games/cyberpunk-2077/screenshot-3.jpg"
        ]
    },
    "the-witcher-3": {
        slug: "the-witcher-3",
        name: "The Witcher 3: Wild Hunt",
        publisher: "cd-projekt",
        director: "konrad-tomaszkiewicz",
        platforms: ["ps5", "ps4", "xbox-series", "xbox-one", "switch", "pc"],
        description: "Geralt de Rivia atravessa um mundo aberto atrás de Ciri e da Caçada Selvagem.",
        media: [
            "https://www.youtube.com/watch?v=1-l29HlKkXU",
            "/games/the-witcher-3/banner.jpg",
            "/games/the-witcher-3/screenshot-1.jpg",
            "/games/the-witcher-3/screenshot-2.jpg",
            "/games/the-witcher-3/screenshot-3.jpg"
        ]
    },
    "final-fantasy-vii-remake-intergrade": {
        slug: "final-fantasy-vii-remake-intergrade",
        name: "Final Fantasy VII Remake Intergrade",
        publisher: "square-enix",
        director: "naoki-hamaguchi",
        platforms: ["ps5", "ps4", "pc"],
        description: "A Midgar de Cloud e do Avalanche, refeita com combate em tempo real e história expandida.",
        media: [
            "https://www.youtube.com/watch?v=Ge73iBqc7o8",
            "/games/final-fantasy-vii-remake-intergrade/banner.jpg",
            "/games/final-fantasy-vii-remake-intergrade/screenshot-1.jpg",
            "/games/final-fantasy-vii-remake-intergrade/screenshot-2.jpg",
            "/games/final-fantasy-vii-remake-intergrade/screenshot-3.jpg"
        ]
    },
    "final-fantasy-vii-rebirth": {
        slug: "final-fantasy-vii-rebirth",
        name: "Final Fantasy VII Rebirth",
        publisher: "square-enix",
        director: "naoki-hamaguchi",
        platforms: ["ps5", "pc"],
        description: "Cloud e companhia saem de Midgar e atravessam o mundo, em busca de Sephiroth.",
        media: [
            "https://www.youtube.com/watch?v=Q56cRDseTGQ",
            "/games/final-fantasy-vii-rebirth/banner.jpg",
            "/games/final-fantasy-vii-rebirth/screenshot-1.jpg",
            "/games/final-fantasy-vii-rebirth/screenshot-2.jpg",
            "/games/final-fantasy-vii-rebirth/screenshot-3.jpg"
        ]
    },
    "final-fantasy-xvi": {
        slug: "final-fantasy-xvi",
        name: "Final Fantasy XVI",
        publisher: "square-enix",
        director: "hiroshi-takai",
        platforms: ["ps5", "pc"],
        description: "Fantasia sombria de Valisthea, onde Eikons e guerras decidem o destino dos reinos.",
        media: [
            "https://www.youtube.com/watch?v=iaJ4VVFGIa8",
            "/games/final-fantasy-xvi/banner.jpg",
            "/games/final-fantasy-xvi/screenshot-1.jpg",
            "/games/final-fantasy-xvi/screenshot-2.jpg",
            "/games/final-fantasy-xvi/screenshot-3.jpg"
        ]
    },
    "dragon-quest-xi-s": {
        slug: "dragon-quest-xi-s",
        name: "Dragon Quest XI S: Edição Definitiva",
        publisher: "square-enix",
        director: "yuji-horii",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Um RPG clássico, com mundo colorido e uma jornada de herói que vai das vilas ao fim do mundo.",
        media: [
            "https://www.youtube.com/watch?v=9OnuPM4XDLQ",
            "/games/dragon-quest-xi-s/banner.jpg",
            "/games/dragon-quest-xi-s/screenshot-1.jpg",
            "/games/dragon-quest-xi-s/screenshot-2.jpg",
            "/games/dragon-quest-xi-s/screenshot-3.jpg"
        ]
    },
    "dragon-quest-builders-2": {
        slug: "dragon-quest-builders-2",
        name: "Dragon Quest Builders 2",
        publisher: "square-enix",
        director: "yuji-horii",
        platforms: ["ps4", "xbox-one", "switch", "pc"],
        description: "Construa, cultive e lute em um mundo de blocos ao estilo Dragon Quest.",
        media: [
            "https://www.youtube.com/watch?v=0q65qT-X8RA",
            "/games/dragon-quest-builders-2/banner.jpg",
            "/games/dragon-quest-builders-2/screenshot-1.jpg",
            "/games/dragon-quest-builders-2/screenshot-2.jpg",
            "/games/dragon-quest-builders-2/screenshot-3.jpg"
        ]
    },
    "the-last-guardian": {
        slug: "the-last-guardian",
        name: "The Last Guardian",
        publisher: "sony-interactive-entertainment",
        director: "fumito-ueda",
        platforms: ["ps4"],
        description: "Um menino e uma criatura gigante precisam um do outro para escapar de ruínas misteriosas.",
        media: [
            "https://www.youtube.com/watch?v=4cDuKShhQOA",
            "/games/the-last-guardian/banner.jpg",
            "/games/the-last-guardian/screenshot-1.jpg",
            "/games/the-last-guardian/screenshot-2.jpg",
            "/games/the-last-guardian/screenshot-3.jpg"
        ]
    },
    "shadow-of-the-colossus": {
        slug: "shadow-of-the-colossus",
        name: "Shadow of the Colossus",
        publisher: "sony-interactive-entertainment",
        director: "fumito-ueda",
        platforms: ["ps4"],
        description: "Derrube colossos gigantes em uma terra solitária, para trazer alguém de volta.",
        media: [
            "https://www.youtube.com/watch?v=OYmUgbVLs4k",
            "/games/shadow-of-the-colossus/banner.jpg",
            "/games/shadow-of-the-colossus/screenshot-1.jpg",
            "/games/shadow-of-the-colossus/screenshot-2.jpg",
            "/games/shadow-of-the-colossus/screenshot-3.jpg"
        ]
    },
    "forza-horizon-5": {
        slug: "forza-horizon-5",
        name: "Forza Horizon 5",
        publisher: "xbox-game-studios",
        director: "mike-brown",
        platforms: ["xbox-series", "xbox-one", "pc", "ps5"],
        description: "Corridas livres pelo México, em um mundo aberto cheio de festivais.",
        media: [
            "https://www.youtube.com/watch?v=Rv7xLt5yNsM",
            "/games/forza-horizon-5/banner.jpg",
            "/games/forza-horizon-5/screenshot-1.jpg",
            "/games/forza-horizon-5/screenshot-2.jpg",
            "/games/forza-horizon-5/screenshot-3.jpg"
        ]
    },
    "forza-horizon-4": {
        slug: "forza-horizon-4",
        name: "Forza Horizon 4",
        publisher: "xbox-game-studios",
        director: "mike-brown",
        platforms: ["xbox-one", "pc"],
        description: "Corridas pelas estações do ano no Reino Unido, em um mundo aberto compartilhado.",
        media: [
            "https://www.youtube.com/watch?v=ipbxICJ3RT4",
            "/games/forza-horizon-4/banner.jpg",
            "/games/forza-horizon-4/screenshot-1.jpg",
            "/games/forza-horizon-4/screenshot-2.jpg",
            "/games/forza-horizon-4/screenshot-3.jpg"
        ]
    }
} satisfies Record<string, Game>;

export type RegisteredGames = keyof typeof games
