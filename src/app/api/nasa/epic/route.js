// /api/nasa/epic

let epicCache = { data: null, date: null };

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0];

    if (epicCache.data && epicCache.date === today) {
      return new Response(
        JSON.stringify({ cached: true, success: true, data: epicCache.data }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Fetch today's metadata
    let response = await fetch(
      `https://api.nasa.gov/EPIC/api/natural/date/${today}?api_key=${process.env.NASA_API_KEY}`
    );

    let metadata;
    if (response.ok) {
      metadata = await response.json();
    } else {
      console.log("EPIC API upstream error:", await response.text());
      return new Response(
        JSON.stringify({ success: false, error: "Upstream NASA API error" }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // If empty → fallback to most recent images
    if (!metadata || metadata.length === 0) {
      const fallback = await fetch(
        `https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.NASA_API_KEY}`
      );
      metadata = await fallback.json();
    }

    // Format response
    const formatted = metadata.map((item) => {
      const date = item.date.split(" ")[0]; // "2025-07-15"
      const [year, month, day] = date.split("-");

      return {
        id: item.identifier,
        caption: item.caption,
        date: item.date,
        image: `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${item.image}.png?api_key=${process.env.NASA_API_KEY}`,
        thumb: `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${item.image}.jpg?api_key=${process.env.NASA_API_KEY}`,
        // coords: item.centroid_coordinates,
        // positions: {
        //   dscovr: item.dscovr_j2000_position,
        //   lunar: item.lunar_j2000_position,
        //   sun: item.sun_j2000_position,
        // },
        // attitude: item.attitude_quaternions,
      };
    });

    // Cache
    epicCache = { data: formatted, date: today };

    return new Response(
      JSON.stringify({ cached: false, success: true, data: formatted }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.log("EPIC API Error:", err);
    
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
