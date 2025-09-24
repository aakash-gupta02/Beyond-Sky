"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Rocket, Rss } from "lucide-react";
import { useLaunch } from "@/hooks/nasa/useLaunch";
import Countdown from "@/components/launch/Countdown";

const LaunchPage = () => {
  const { data: launches, isLoading, isError } = useLaunch();
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  // Set initial selected launch after data loads
  useEffect(() => {
    if (launches?.data && launches.data.length > 0 && !selectedLaunch) {
      setSelectedLaunch(launches.data[0]);
    }
  }, [launches, selectedLaunch]);

  if (isLoading) return <div>Loading Launches...</div>;
  if (isError) return <div>Failed to load launches</div>;

  // Render only after selectedLaunch exists
  if (!selectedLaunch) return null;
  
  
return (
    <section className="my-30">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Main launch detail */}
                <div className="flex-1 min-w-0">

                    {/* image*/}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                            src={
                                selectedLaunch.image?.image_url ||
                                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"
                            }
                            alt={selectedLaunch.image?.name || "Launch image"}
                            width={1600}
                            height={900}
                            className="w-full h-64 lg:h-[420px] object-cover"
                            priority
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <div className="flex items-center gap-2 text-xs text-white/80">
                                <span className="font-bold">{selectedLaunch.rocket}</span>
                                &bull;
                                <span>{selectedLaunch.status}</span>
                            </div>
                        </div>
                    </div>

                    {/* Launch details */}
                    <div className="mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-4">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-xs font-medium">
                                {selectedLaunch.provider} Launch Update
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-light tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            {selectedLaunch.name}
                        </h1>

                        <p className="mt-4 text-lg text-white/70">
                            {selectedLaunch.mission || "No mission details available."}
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href={selectedLaunch.map_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 border border-white/10 transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                View Launch Location
                            </a>
                            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
                                <Rss className="w-5 h-5" />
                                View Full Launch
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                                <div className="text-xs text-white/50">Next Launch</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">
                                    <Countdown net={selectedLaunch.net} small={true} />
                                </div>
                                <div className="mt-1 text-xs text-white/50">
                                    Mission: {selectedLaunch.mission || "N/A"}
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                                <div className="text-xs text-white/50">Rocket</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">
                                    {selectedLaunch.rocket}
                                </div>
                                <div className="mt-1 text-xs text-white/50">
                                    {selectedLaunch.orbit !== "Unknown"
                                        ? selectedLaunch.orbit
                                        : "Orbit Info N/A"}
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                                <div className="text-xs text-white/50">Pad</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">
                                    {selectedLaunch.pad}
                                </div>
                                <div className="mt-1 text-xs text-white/50">
                                    {selectedLaunch.location}
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                                <div className="text-xs text-white/50">Provider</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">
                                    {selectedLaunch.provider}
                                </div>
                                <div className="mt-1 text-xs text-white/50">
                                    {selectedLaunch.image?.credit
                                        ? `Credit: ${selectedLaunch.image.credit}`
                                        : "Image Credit: N/A"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar: other launches (YouTube-like) */}
                <aside className="w-full lg:w-[380px] flex-shrink-0">
                    <div className="flex flex-col gap-4">
                        {launches?.data
                            ?.filter((l) => l.id !== selectedLaunch.id)
                            .map((launch) => (
                                <div
                                    key={launch.id}
                                    onClick={() => setSelectedLaunch(launch)}
                                    className="flex cursor-pointer rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition-all"
                                >
                                    <div className="relative w-40 h-24 flex-shrink-0">
                                        <Image
                                            src={
                                                launch.image?.thumbnail_url ||
                                                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"
                                            }
                                            alt={launch.image?.name || "Launch thumbnail"}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-3 flex flex-col justify-center min-w-0">
                                        <div className="text-sm font-medium truncate">{launch.name}</div>
                                        <div className="text-xs text-white/50 truncate">
                                            {launch.status} • {launch.rocket}
                                        </div>
                                        <div className="text-xs text-white/40 truncate">
                                            {launch.provider}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </aside>
            </div>
        </div>
    </section>
);
};

export default LaunchPage;
