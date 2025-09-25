// Internal cache object
let marsCache = {
  data: null,
  key: null, // cache key: sol or earth_date
  lastFetched: null,
};

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const sol = searchParams.get("sol"); // optional
    const earthDate = searchParams.get("earth_date"); // optional
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20"); // pagination limit

    // Build cache key
    const cacheKey = sol ? `sol-${sol}` : `earth-${earthDate || "today"}`;

    // If cached for same key, return paginated data
    if (marsCache.data && marsCache.key === cacheKey) {
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginated = marsCache.data.slice(start, end);

      return new Response(
        JSON.stringify({
          cached: true,
          success: true,
          total: marsCache.data.length,
          page,
          limit,
          data: paginated,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Build NASA API URL
    const nasaUrl = sol
      ? `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${process.env.NASA_API_KEY}`
      : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${
          earthDate || new Date().toISOString().split("T")[0]
        }&api_key=${process.env.NASA_API_KEY}`;

    // Fetch once (request all photos)
    const res = await fetch(nasaUrl);
    if (!res.ok) throw new Error("Failed to fetch from NASA API");

    const data = await res.json();
    
    const photos = data.photos || [];

    // Cache full dataset
    marsCache = {
      data: photos,
      key: cacheKey,
      lastFetched: new Date(),
    };

    // Paginate response
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = photos.slice(start, end);

    return new Response(
      JSON.stringify({
        cached: false,
        success: true,
        total: photos.length,
        page,
        limit,
        data: paginated,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
