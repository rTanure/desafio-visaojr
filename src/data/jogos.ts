import type {Jogo} from '../components/CardJogo';

export const jogos: Jogo[] = [
    {
        id: 1,
        nome: "Clar Obscure: Expedition 33",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1903340/library_600x900.jpg",
        valor: 130,
        consoles: ["playstation", "xbox", "switch"]
    },
    {
        id: 2,
        nome: "Zelda: Breath of the Wild",
        imagem: "https://en.wikipedia.org/wiki/Special:FilePath/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        valor: 299.99,
        consoles: ["switch","pc"]
    },
    {
        id: 3,
        nome: "God of War",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900.jpg",
        valor: 199.99,
        consoles: ["playstation"]
    },
    {
        id: 4,
        nome: "Pokémon Scarlet",
        imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5sfi.jpg",
        valor: 210,
        consoles: ["switch"]
    },
    {
        id: 5,
        nome: "Escape from Tarkov",
        imagem: "https://cdn.displate.com/artwork/857x1200/2025-11-22/5db08072-e402-4a86-b2a0-dcca67d8b36c.jpg",
        valor: 250,
        consoles: ["pc"]
    }
];