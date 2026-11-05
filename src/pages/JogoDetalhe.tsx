import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { RegisteredPlatforms } from "../data/platforms";
import { NaoEncontrado } from "../components/detalhe/NaoEncontrado";
import { bestOffer, getGame, platformName } from "../components/detalhe/dados";
import { Produto } from "../components/jogo/Produto";
import { DescricaoDetalhes } from "../components/jogo/DescricaoDetalhes";
import { Avaliacoes } from "../components/jogo/Avaliacoes";
import { Relacionados } from "../components/jogo/Relacionados";
import { summarize, type Review } from "../components/jogo/review";

export function JogoDetalhe() {
    const { slug } = useParams();
    const game = getGame(slug);

    if (!game) return <NaoEncontrado what="Jogo" backTo="/jogos" backLabel="Ver todos os jogos" />;

    // key: reinicia plataforma e comentários ao trocar de jogo
    return <JogoConteudo key={game.slug} slug={game.slug} />;
}

function JogoConteudo({ slug }: { slug: string }) {
    const game = getGame(slug)!;
    const [platform, setPlatform] = useState<RegisteredPlatforms | undefined>(() => bestOffer(slug)?.platform);
    const [reviews, setReviews] = useState<Review[]>([]);
    const summary = useMemo(() => summarize(reviews), [reviews]);

    return (
        <>
            <Produto game={game} platform={platform} onPlatform={setPlatform} summary={summary} />
            <DescricaoDetalhes game={game} />
            <Avaliacoes
                reviews={reviews}
                summary={summary}
                platformLabel={platform ? platformName(platform) : ""}
                onPublish={(r) => setReviews((list) => [r, ...list])}
            />
            <Relacionados game={game} />
        </>
    );
}
