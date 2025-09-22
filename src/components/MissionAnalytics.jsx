import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';

const MissionAnalytics = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                    {/* Chart Card */}
                    <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold tracking-tight">Launch Cadence (Last 12 Months)</h3>
                                <p className="text-white/60 text-sm mt-1">Aggregated across NASA, ESA, Roscosmos, CNSA, SpaceX & more</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">Live</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                                <div>
                                    <canvas id="launchChart" height="110"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Launches */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                        <div className="p-6 border-b border-white/10">
                            <h3 className="text-xl font-semibold tracking-tight">Upcoming Launches</h3>
                            <p className="text-white/60 text-sm mt-1">Tracked within the next 14 days</p>
                        </div>
                        <div className="divide-y divide-white/10">
                            <div className="p-5 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
                                    <Flame className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium tracking-tight">Falcon 9 • Starlink Group</h4>
                                        <span className="text-xs text-white/50">NET 04:32 UTC</span>
                                    </div>
                                    <p className="text-white/60 text-sm mt-1">SLC-40 • Cape Canaveral, Florida</p>
                                </div>
                            </div>
                            <div className="p-5 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
                                    <Flame className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium tracking-tight">Ariane 6 • Maiden Flight</h4>
                                        <span className="text-xs text-white/50">TBD</span>
                                    </div>
                                    <p className="text-white/60 text-sm mt-1">Guiana Space Centre • Kourou</p>
                                </div>
                            </div>
                            <div className="p-5 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
                                    <Flame className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium tracking-tight">H-IIA • SLIM Lander Support</h4>
                                        <span className="text-xs text-white/50">NET 09:10 JST</span>
                                    </div>
                                    <p className="text-white/60 text-sm mt-1">Tanegashima Space Center • Japan</p>
                                </div>
                            </div>
                            <div className="p-5 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
                                    <Flame className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium tracking-tight">Long March 7 • Cargo Mission</h4>
                                        <span className="text-xs text-white/50">NET 18:05 CST</span>
                                    </div>
                                    <p className="text-white/60 text-sm mt-1">Wenchang Satellite Launch Center • China</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-white/10">
                            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10 transition-colors text-sm">
                                Full Launch Manifest
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionAnalytics;