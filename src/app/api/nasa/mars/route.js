// Internal cache object
let marsCache = {};


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sol = searchParams.get("sol") || "1000";
    const page = searchParams.get("page") || "1";
    const camera = searchParams.get("camera") || "";

    const cacheKey = `sol${sol}-page${page}-camera${camera}`;

    // Check cache first
    if (marsCache[cacheKey]) {
      console.log("🚀 Returning Mars images from cache:", cacheKey);
      return new Response(JSON.stringify({ cached: true, success: true, data: marsCache[cacheKey] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch from NASA API
    const nasaUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}${
      camera ? `&camera=${camera}` : ""
    }&api_key=${process.env.NASA_API_KEY} `;

    const res = await fetch(nasaUrl);
    const data = await res.json();

    // Cache the response (you can optionally set a TTL here)
    marsCache[cacheKey] = data.photos;

    return new Response(JSON.stringify({ cached: false, success: true, data: data.photos }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
