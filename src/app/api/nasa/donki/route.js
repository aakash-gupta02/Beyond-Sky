// Internal cache object
let donkiCache = { data: null, date: null };

export async function GET(req) {
  try {
    const today = new Date().toISOString().split("T")[0];

    // Serve from cache if available for today
    if (donkiCache.data && donkiCache.date === today) {
      return new Response(
        JSON.stringify({ cached: true, success: true, data: donkiCache.data }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Fetch fresh data from NASA DONKI FLR API
    const response = await fetch(
      `https://api.nasa.gov/DONKI/FLR?startDate=${today}&endDate=${today}&api_key=${process.env.NASA_API_KEY}`
    );

    if (!response.ok) {
      console.log("Failed to fetch DONKI data:", response);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to fetch DONKI data" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();

    // Update internal cache
    donkiCache = { data, date: today };

    return new Response(
      JSON.stringify({ cached: false, success: true, data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
