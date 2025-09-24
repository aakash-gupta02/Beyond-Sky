import React from 'react'

const HeroSkeleton = () => {
    return (
        <section className="pt-40 animate-pulse">
            <div className="max-w-7xl mx-auto px-4">
                {/* upper main content */}
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* left side */}
                    <div className="lg:col-span-7 order-1 lg:order-1">
                        <div>
                            {/* top small icon */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-6">
                                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                <span className="h-3 w-24 bg-white/20 rounded"></span>
                            </div>
                            <div className="h-16 w-3/4 bg-white/20 rounded mb-4"></div>
                            <div className="h-5 w-2/3 bg-white/10 rounded mb-6"></div>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-black border border-white/10 w-48 h-12"></div>
                                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 w-48 h-12"></div>
                            </div>
                        </div>
                    </div>
                    {/* Hero Media */}
                    <div className="lg:col-span-5 order-2 lg:order-2">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/10 h-64 lg:h-80 w-full"></div>
                        <div className="mt-3 h-4 w-32 bg-white/10 rounded"></div>
                    </div>
                </div>
                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 lg:p-6">
                            <div className="h-3 w-20 bg-white/10 rounded mb-2"></div>
                            <div className="h-7 w-24 bg-white/20 rounded mb-2"></div>
                            <div className="h-3 w-28 bg-white/10 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSkeleton