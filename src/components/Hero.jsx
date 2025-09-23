"use client";
import React from 'react'
import Image from 'next/image';
import { Rocket, Rss } from 'lucide-react';
import { useLaunch } from '@/hooks/nasa/useLaunch';
import Countdown from './launch/Countdown';

const Hero = () => {
    const { data, isLoading, isError } = useLaunch();

    if (isLoading) return <div>Loading Launches...</div>;
    console.log(isError);
    console.log(data);
    if (isError || !data) return <div>Failed to load launches</div>;


    const launch = data.data[0];
    console.log("launch", launch);


    return (
        <section className="pt-40">
            <Countdown net={launch.net} />
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-xs font-medium">{launch.provider} Launch Update</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
                            {launch.name}
                        </h1>
                        <p className="mt-6 text-lg text-white/70 max-w-2xl">
                            {launch.mission ? launch.mission : "No mission details available."}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href={launch.map_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 border border-white/10 transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                View Launch Location
                            </a>
                            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
                                <Rss className="w-5 h-5" />
                                Latest Headlines
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Next Launch</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">{launch.status}</div>
                                <div className="mt-1 text-xs text-white/50">Mission: {launch.mission}</div>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Rocket</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">{launch.rocket}</div>
                                <div className="mt-1 text-xs text-white/50">{launch.orbit !== "Unknown" ? launch.orbit : "Orbit Info N/A"}</div>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Pad</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">{launch.pad}</div>
                                <div className="mt-1 text-xs text-white/50">{launch.location}</div>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Provider</div>
                                <div className="mt-2 text-2xl font-light tracking-tight">{launch.provider}</div>
                                <div className="mt-1 text-xs text-white/50">{launch.image?.credit ? `Credit: ${launch.image.credit}` : "Image Credit: N/A"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Media */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                            <Image
                                src={launch.image?.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                alt={launch.image?.name || "Launch image"}
                                width={1600}
                                height={380}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                <div className="flex items-center gap-2 text-xs text-white/80">
                                    <span className="font-bold">{launch.rocket}</span>
                                    &bull;
                                    <span>{launch.status}</span>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <a
                                        href={launch.map_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black text-xs hover:bg-white/90 transition-all"
                                    >
                                        <Rocket className="w-3.5 h-3.5" />
                                        Map
                                    </a>
                                    {launch.image?.image_url && (
                                        <a
                                            href={launch.image.image_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-xs hover:bg-white/10"
                                        >
                                            Image
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-xs text-white/50">
                            Source: {launch.image?.credit || launch.provider}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;