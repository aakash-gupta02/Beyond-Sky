"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Camera, Calendar, Rocket, Earth, Clock, ArrowRight } from "lucide-react";
import { useMars } from "@/hooks/nasa/useMars";
import Link from "next/link";

const Mars = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError } = useMars(currentPage);

    if (isLoading) return <MarsSkeleton />;
    if (isError) return <div>Failed to load Mars photos</div>;

    return (
        <section className="py-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                            Mars Rover Photos
                        </h2>
                        <p className="text-white/60 mt-2">
                            Latest images from NASA's Mars rovers exploring the Red Planet.
                        </p>
                    </div>
                </div>

                {/* Rover Stats */}
                {data?.data?.length > 0 && (
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                            <div className="text-2xl font-bold text-white">
                                {data.data[0].rover.name}
                            </div>
                            <div className="text-white/60 text-sm">Rover</div>
                        </div>
                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                            <div className="text-2xl font-bold text-cyan-400">
                                {data.data[0].sol}
                            </div>
                            <div className="text-white/60 text-sm">Martian Day</div>
                        </div>
                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                            <div className="text-2xl font-bold text-green-400">
                                {new Date(data.data[0].earth_date).getFullYear()}
                            </div>
                            <div className="text-white/60 text-sm">Earth Date</div>
                        </div>
                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                            <div className="text-2xl font-bold text-purple-400">
                                {data.data[0].rover.status}
                            </div>
                            <div className="text-white/60 text-sm">Status</div>
                        </div>
                    </div>
                )}

                {/* Mars Photos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.data?.map((photo) => (
                        <article
                            key={photo.id}
                            className="group border border-white/10 rounded-3xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:transform hover:scale-[1.02]"
                        >
                            {/* Image */}
                            <div className="relative w-full h-64 bg-black/30 overflow-hidden">
                                <Image
                                    src={photo.img_src}
                                    alt={`Mars photo taken by ${photo.rover.name} rover`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-3 left-3">
                                    <div className="text-xs px-2 py-1 rounded-full bg-black/70 border border-white/10 text-white">
                                        {photo.camera.full_name}
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <div className="text-xs px-2 py-1 rounded-full bg-black/70 border border-white/10 text-cyan-300">
                                        Sol {photo.sol}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Rocket className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-medium text-orange-400">
                                        {photo.rover.name}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                    {photo.camera.full_name} Image
                                </h3>
                                
                                <div className="space-y-2 text-sm text-white/60">
                                    <div className="flex items-center gap-2">
                                        <Camera className="w-4 h-4" />
                                        <span>{photo.camera.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{photo.earth_date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Earth className="w-4 h-4" />
                                        <span>Landing: {photo.rover.landing_date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                                            photo.rover.status === 'active' 
                                                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                                : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                                        }`}>
                                            {photo.rover.status}
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href={photo.img_src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm transition-all"
                                >
                                    View Full Image
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
                    >
                        Previous
                    </button>
                    
                    <span className="flex items-center px-6 py-3 text-white/60">
                        Page {currentPage}
                    </span>
                    
                    <button
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                    >
                        Next
                    </button>
                </div>

                {/* Rover Info Footer */}
                {data?.data?.length > 0 && (
                    <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-4">About {data.data[0].rover.name}</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-white/60">
                            <div>
                                <p><strong>Launch Date:</strong> {data.data[0].rover.launch_date}</p>
                                <p><strong>Landing Date:</strong> {data.data[0].rover.landing_date}</p>
                                <p><strong>Status:</strong> <span className="text-green-400">{data.data[0].rover.status}</span></p>
                            </div>
                            <div>
                                <p><strong>Mission:</strong> Explore Mars' geology and climate</p>
                                <p><strong>Duration:</strong> {new Date().getFullYear() - new Date(data.data[0].rover.landing_date).getFullYear()} years</p>
                                <p><strong>Latest Photos:</strong> Sol {data.data[0].sol}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

// Skeleton Loader
const MarsSkeleton = () => {
    return (
        <section className="py-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="animate-pulse">
                    <div className="h-10 w-96 bg-white/10 rounded mb-4"></div>
                    <div className="h-4 w-64 bg-white/10 rounded mb-8"></div>
                    
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-24 bg-white/5 rounded-2xl"></div>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-80 bg-white/5 rounded-3xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mars;