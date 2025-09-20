
// Internal cache object
let neoCache = { data: null, date: null };

export async function GET(req, res) {
  try {
    const today = new Date().toISOString().split("T")[0];

    // Return cached data if available and for today
    if (neoCache.data && neoCache.date === today) {
      return new Response(JSON.stringify({ cached: true, success: true, data: neoCache.data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch fresh data from NASA NeoWs API
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${process.env.NASA_API_KEY}`
    );

    if (!response.ok) {
        console.log("Failed to fetch NeoWs data:", response);
        
      return new Response(
        JSON.stringify({ success: false, error: "Failed to fetch NeoWs data" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();

    // Update internal cache
    neoCache = { data, date: today };

    return new Response(JSON.stringify({ cached: false, success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
