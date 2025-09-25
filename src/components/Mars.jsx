"use client";
import React from "react";
import Image from "next/image";
import { Camera, Calendar, Rocket, ArrowRight } from "lucide-react";
import { useMars } from "@/hooks/nasa/useMars";
import Link from "next/link";

const MarsGrid = () => {
    const { data, isLoading, isError } = useMars(1); // First page only

    if (isLoading) return <MarsGridSkeleton />;
    if (isError) return <div>Failed to load Mars photos</div>;

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Header */}
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                            Latest from Mars
                        </h2>
                        <p className="text-white/60 mt-2">
                            Recent images captured by NASA's Mars rovers.
                        </p>
                    </div>
                </div>

                {/* Mars Photos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {data?.data?.slice(0, 6)?.map((photo) => (
                        <article
                            key={photo.id}
                            className="group border border-white/10 rounded-3xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative w-full h-56 bg-black/30 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={photo.img_src}
                                    alt={`Mars photo by ${photo.rover.name}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-black/50 border border-white/10">
                                    {photo.rover.name}
                                </div>
                                <div className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-black/50 border border-white/10 text-cyan-300">
                                    Sol {photo.sol}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold tracking-tight group-hover:underline decoration-white/30">
                                    {photo.camera.full_name}
                                </h3>
                                <p className="text-white/60 text-sm mt-2 line-clamp-2">
                                    Captured on Martian day {photo.sol} • {photo.earth_date}
                                </p>
                                <div className="flex items-center justify-between mt-4 text-xs text-white/50">
                                    <div className="flex items-center gap-2">
                                        <Camera className="w-3.5 h-3.5" />
                                        {photo.camera.name}
                                    </div>
                                    <a
                                        href={photo.img_src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-white/70 hover:text-white"
                                    >
                                        View
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <Link
                        href="/space/mars"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                    >
                        <Rocket className="w-5 h-5" />
                        Explore More Mars Photos
                    </Link>
                </div>
            </div>
        </section>
    );
};

// Skeleton Loader
const MarsGridSkeleton = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="animate-pulse">
                    {/* Header Skeleton */}
                    <div className="h-10 w-64 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 w-96 bg-white/10 rounded mb-8"></div>
                    
                    {/* Grid Skeleton */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border border-white/10 rounded-3xl overflow-hidden bg-white/5">
                                <div className="h-56 bg-white/10"></div>
                                <div className="p-5">
                                    <div className="h-5 w-3/4 bg-white/10 rounded mb-2"></div>
                                    <div className="h-4 w-full bg-white/10 rounded mb-4"></div>
                                    <div className="flex justify-between">
                                        <div className="h-4 w-20 bg-white/10 rounded"></div>
                                        <div className="h-4 w-16 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Button Skeleton */}
                    <div className="flex justify-center mt-8">
                        <div className="h-12 w-48 bg-white/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarsGrid;