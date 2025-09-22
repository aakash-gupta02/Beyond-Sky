import React from 'react';
import Image from 'next/image';
import { Image as LucideImage, Download, Telescope, Moon, Radio, Sun, ChevronRight } from 'lucide-react';

const quickBites = [
    {
        icon: <Telescope className="w-5 h-5" />,
        title: 'Hubble returns to normal operations',
        desc: 'Science observations resume after safe mode',
    },
    {
        icon: <Moon className="w-5 h-5" />,
        title: 'Lunar Gateway module completes testing',
        desc: 'Power and propulsion readiness verified',
    },
    {
        icon: <Radio className="w-5 h-5" />,
        title: 'Deep Space Network upgrades antennas',
        desc: 'Improved downlink for Mars sample return',
    },
    {
        icon: <Sun className="w-5 h-5" />,
        title: 'Solar max approaches',
        desc: 'Aurora forecast: High-latitude visibility',
    },
];

const Apod = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                        <div className="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=1600&auto=format&fit=crop"
                                className="w-full h-[380px] object-cover"
                                alt="APOD"
                                width={1600}
                                height={380}
                                priority
                            />
                            <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/10">
                                APOD
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-light tracking-tight">Astronomy Picture of the Day</h3>
                            <p className="text-white/60 mt-2">
                                “Pillars of Creation” in the Eagle Nebula, captured with stunning infrared detail.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-white/90 transition-colors">
                                    <LucideImage className="w-4 h-4" />
                                    View Full
                                </button>
                                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10 transition-colors">
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Bites */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-2xl font-light tracking-tight">Quick Bites</h3>
                        <div className="mt-4 space-y-4">
                            {quickBites.map((bite, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                                        {bite.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium">{bite.title}</div>
                                        <div className="text-xs text-white/50">{bite.desc}</div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-white/40" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apod;