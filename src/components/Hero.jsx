import React from 'react'
import Image from 'next/image';
import { Rocket, Rss } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-40">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-xs font-medium">NASA & Global Space Updates</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
                            Explore the cosmos. In real time.
                        </h1>
                        <p className="mt-6 text-lg text-white/70 max-w-2xl">
                            Breaking missions, live launches, deep-space imagery, and insights that bring the universe closer. Curated from NASA, ESA, JAXA, and more.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 border border-white/10 transition-all">
                                <Rocket className="w-5 h-5" />
                                Watch Live Launch
                            </button>
                            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
                                <Rss className="w-5 h-5" />
                                Latest Headlines
                            </button>
                        </div>

                        {/* <!-- Stats --> */}
                        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Next Launch</div>
                                <div id="countdown" className="mt-2 text-2xl font-light tracking-tight">T–00:00:00</div>
                                <div className="mt-1 text-xs text-white/50">Mission: Starlink Group</div>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Active Missions</div>
                                <div className="mt-2 text-2xl font-light tracking-tight"><span className="counter" data-target="128">0</span></div>
                                <div className="mt-1 text-xs text-white/50">Low Earth Orbit & Beyond</div>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Articles</div>
                                <div className="mt-2 text-2xl font-light tracking-tight"><span className="counter" data-target="4821">0</span></div>
                                <div className="mt-1 text-xs text-white/50">Curated Reports</div>
                            </div>
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                <div className="text-xs text-white/50">Images</div>
                                <div className="mt-2 text-2xl font-light tracking-tight"><span className="counter" data-target="10234">0</span></div>
                                <div className="mt-1 text-xs text-white/50">Deep-Space Gallery</div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Hero Media --> */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                            <Image
                                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"
                                alt="Earth from space"
                                width={1600}
                                height={380}
                                className="w-full h-[380px] object-cover"
                                priority
                            />
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                <div className="flex items-center gap-2 text-xs text-white/80">
                                    <i data-lucide="satellite" className="w-4 h-4"></i>
                                    Live: Earth Observation Stream
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black text-xs hover:bg-white/90 transition-all">
                                        <i data-lucide="play" className="w-3.5 h-3.5"></i>
                                        Watch
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-xs hover:bg-white/10">
                                        <i data-lucide="external-link" className="w-3.5 h-3.5"></i>
                                        Open NASA TV
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-xs text-white/50">
                            Source: NASA/NOAA Suomi NPP VIIRS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero