let cachedNews = [];
let lastFetch = 0;

export async function GET(req) {
    const now = Date.now();
    let fromCache = true;

    // Refresh cache every 30 mins
    if (!cachedNews.length || now - lastFetch > 30 * 60 * 1000) {
        const res = await fetch(
            "https://api.spaceflightnewsapi.net/v4/articles/?limit=100"
        );
        const data = await res.json();
        cachedNews = data.results;
        lastFetch = now;
        fromCache = false;
    }

    // Pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return Response.json({
        total: cachedNews.length,
        page,
        pageSize,
        fromCache,
        results: cachedNews.slice(start, end),
    });
}
