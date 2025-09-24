"use client";
import React from 'react'
import Image from 'next/image';
import { Rocket, Rss } from 'lucide-react';
import { useLaunch } from '@/hooks/nasa/useLaunch';
import Countdown from './launch/Countdown';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import HeroSkeleton from './skeletons/HeroSkeleton';

const Hero = () => {
    const { data, isLoading, isError } = useLaunch();


    if (isLoading) return <HeroSkeleton />;

    if (isError || !data) return <div>Failed to load launches</div>;

    const launch = data.data[0];

    return (
        <section className="pt-40">
            <div className="max-w-7xl mx-auto px-4">
                {/* upper main content */}
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* left side */}
                    <div className="lg:col-span-7 order-1 lg:order-1  ">

                        {/* Content below stats */}
                        <div className=""> {/* Added margin top */}
                            {/* top small icon */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-6">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                <span className="text-xs font-medium">{launch.provider} Launch Update</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
                                Explore the cosmos. In real time.
                            </h1>
                            <p className="mt-6 text-lg text-white/70 max-w-2xl">
                                Breaking missions, live launches, deep-space imagery, and insights that bring the universe closer. Curated from NASA, ESA, JAXA, and more.
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
                                <Link
                                href={"/space/launch"}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">

                                    <Rss className="w-5 h-5" />
                                    View Full Launch
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Hero Media - Moved to right side and top */}
                    <div className="lg:col-span-5 order-2 lg:order-2  ">
                        {/* Hero Image */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                            <Image
                                src={launch.image?.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                alt={launch.image?.name || "Launch image"}
                                width={1600}
                                height={900}
                                className="w-full h-64 lg:h-80 object-cover"
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

                        {/* source */}
                        <div className="mt-3 text-xs text-white/50">
                            Source: {launch.image?.credit || launch.provider}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6"> {/* Increased padding on large screens */}
                        <div className="text-xs text-white/50">Next Launch</div>
                        <div className="mt-2 text-2xl font-light tracking-tight">
                            <Countdown net={launch.net} small={true} />
                        </div>
                        <div className="mt-1 text-xs text-white/50">Mission: {launch.mission}</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                        <div className="text-xs text-white/50">Rocket</div>
                        <div className="mt-2 text-2xl font-light tracking-tight">{launch.rocket}</div>
                        <div className="mt-1 text-xs text-white/50">{launch.orbit !== "Unknown" ? launch.orbit : "Orbit Info N/A"}</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                        <div className="text-xs text-white/50">Pad</div>
                        <div className="mt-2 text-2xl font-light tracking-tight">{launch.pad}</div>
                        <div className="mt-1 text-xs text-white/50">{launch.location}</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                        <div className="text-xs text-white/50">Provider</div>
                        <div className="mt-2 text-2xl font-light tracking-tight">{launch.provider}</div>
                        <div className="mt-1 text-xs text-white/50">{launch.image?.credit ? `Credit: ${launch.image.credit}` : "Image Credit: N/A"}</div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;