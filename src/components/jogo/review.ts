export type Review = {
    name: string;
    stars: number;
    meta: string;
    text: string;
};

export function summarize(reviews: Review[]) {
    const count = reviews.length;
    const avg = count ? reviews.reduce((a, r) => a + r.stars, 0) / count : 0;
    const dist = [5, 4, 3, 2, 1].map((n) => {
        const c = reviews.filter((r) => r.stars === n).length;
        return { n, count: c, pct: count ? Math.round((c / count) * 100) : 0 };
    });
    return {
        count,
        avg,
        avgLabel: avg.toFixed(1).replace(".", ","),
        countLabel: `${count} ${count === 1 ? "avaliação" : "avaliações"}`,
        dist,
    };
}
