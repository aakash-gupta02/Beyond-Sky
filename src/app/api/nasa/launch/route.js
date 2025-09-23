// app/api/nasa/launch/route.js
let launchesCache = { data: null, date: null };

export async function GET(req) {
  try {
    const today = new Date().toISOString().split("T")[0];

    // Return cached data if already fetched today
    if (launchesCache.data && launchesCache.date === today) {
      return new Response(
        JSON.stringify({ cached: true, success: true, data: launchesCache.data }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Fetch upcoming launches from Launch Library 2 API
    const response = await fetch(
      "https://ll.thespacedevs.com/2.3.0/launches/upcoming/?limit=10&hide_recent_previous=True&ordering=net"
    );

    if (!response.ok) {
      console.error("Failed to fetch Launch Library data:", response);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to fetch Launch Library data" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();

    // Map only fields we need
    const launches = data.results.map((launch) => ({
      id: launch.id,
      name: launch.name,
      net: launch.net, // Launch date/time
      status: launch.status?.name,
      rocket: launch.rocket?.configuration?.full_name || null,
      mission: launch.mission?.name || null,
      orbit: launch.mission?.orbit?.name || null,
      pad: launch.pad?.name || null,
      location: launch.pad?.location?.name || null,
      provider: launch.launch_service_provider?.name || null,
      image: launch.image || null,   // ✅ direct field
      map_url: launch.pad?.map_url || null,
    }));

    // Update cache
    launchesCache = { data: launches, date: today };

    return new Response(
      JSON.stringify({ cached: false, success: true, data: launches }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error in GET /api/nasa/launch:", err);

    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
