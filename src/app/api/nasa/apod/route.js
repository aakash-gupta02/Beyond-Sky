import { NextResponse } from "next/server";

const NASA_APOD_URL = "https://api.nasa.gov/planetary/apod";

let cachedData = null;
let cachedDate = null;

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0]; // e.g. 2025-09-18

    // ✅ If we already fetched today's data → return from cache
    if (cachedData && cachedDate === today) {
      return NextResponse.json({
        cached: true,
        ...cachedData,
      });
    }

    // ❌ Else fetch fresh from NASA
    const res = await fetch(`${NASA_APOD_URL}?api_key=${process.env.NASA_API_KEY}`);

    if (!res.ok) {
      throw new Error("Failed to fetch APOD data");
    }

    const data = await res.json();

    // 🔄 Update cache
    cachedData = data;
    cachedDate = today;

    return NextResponse.json({
      cached: false,
      ...data,
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
