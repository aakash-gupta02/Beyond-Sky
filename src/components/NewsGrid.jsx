import React from 'react';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';

const news = [
    {
        category: 'Launch',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
        alt: 'Rocket launch',
        title: 'SpaceX launches 23 Starlink satellites from Cape Canaveral',
        description: 'Falcon 9 successfully delivered the payload to LEO; first stage landed on droneship “Just Read the Instructions.”',
        time: '2h ago',
        button: 'Read',
    },
    {
        category: 'Science',
        image: 'https://images.unsplash.com/photo-1473929732560-0bf3633e9995?q=80&w=1600&auto=format&fit=crop',
        alt: 'Mars landscape',
        title: 'Perseverance rover stores new sample on Mars',
        description: 'The mission team confirmed successful caching of sedimentary rock core from Jezero Crater delta.',
        time: '5h ago',
        button: 'Read',
    },
    {
        category: 'Imagery',
        image: 'https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1600&auto=format&fit=crop',
        alt: 'Nebula',
        title: 'Webb Telescope reveals intricate filaments in star-forming region',
        description: 'NIRCam captures unprecedented detail in NGC 3324, offering insights into stellar nurseries.',
        time: '1d ago',
        button: 'View',
    },
    {
        category: 'Human Spaceflight',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop',
        alt: 'ISS',
        title: 'Crew-8 conducts orbital maintenance on ISS truss',
        description: 'Astronauts completed EVA-96, replacing aging hardware and installing new experiment platforms.',
        time: '12h ago',
        button: 'Read',
    },
    {
        category: 'Operations',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop',
        alt: 'Mission control',
        title: 'ESA confirms extension of ExoMars mission support',
        description: 'Ground segment upgrades improve data downlink throughput across DSN/ESTRACK networks.',
        time: '3h ago',
        button: 'Read',
    },
    {
        category: 'Lunar',
        image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1600&auto=format&fit=crop',
        alt: 'Lunar surface',
        title: 'Artemis program selects new lunar exploration instruments',
        description: 'Payloads will characterize regolith volatiles and surface electrostatics at the south pole.',
        time: '8h ago',
        button: 'Read',
    },
];

const NewsGrid = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-light tracking-tight" style={{ letterSpacing: '-0.01em' }}>
                            Top Stories
                        </h2>
                        <p className="text-white/60 mt-2">
                            Daily coverage from NASA and international space agencies.
                        </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <button className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 text-sm transition-colors">All</button>
                        <button className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 text-sm transition-colors">Launch</button>
                        <button className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 text-sm transition-colors">Science</button>
                        <button className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 text-sm transition-colors">Human Spaceflight</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {news.map((item, idx) => (
                        <article
                            key={idx}
                            className="group border border-white/10 rounded-3xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors"
                        >
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={800}
                                    height={192}
                                    className="h-48 w-full object-cover"
                                    priority
                                />
                                <div className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-black/50 border border-white/10">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold tracking-tight group-hover:underline decoration-white/30">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm mt-2">{item.description}</p>
                                <div className="flex items-center justify-between mt-4 text-xs text-white/50">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3.5 h-3.5" />
                                        {item.time}
                                    </div>
                                    <button className="inline-flex items-center gap-1.5 text-white/70 hover:text-white">
                                        {item.button}
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsGrid;
