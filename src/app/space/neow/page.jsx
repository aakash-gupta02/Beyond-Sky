"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useNeow } from "@/hooks/nasa/useNeow";
import { 
    Activity, ArrowLeft, Sparkles, AlertTriangle, 
    Globe, Gauge, Ruler, Calendar, ChevronLeft, ChevronRight 
} from "lucide-react";
import NeoStats from "@/components/pageCompo/NeoStats";

const NeoPage = () => {
    const { data, isLoading, isError } = useNeow();
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    if (isLoading) return <NeoPageSkeleton />;
    if (isError) return <NeoErrorState />;

    const neoData = data?.data;
    const availableDates = Object.keys(neoData?.near_earth_objects || {});
    const currentNeos = neoData?.near_earth_objects[selectedDate] || [];
    
    // Sort by velocity and hazardous status
    const sortedNeos = [...currentNeos].sort((a, b) => {
        const aVel = parseFloat(a.close_approach_data?.[0]?.relative_velocity.kilometers_per_second || "0");
        const bVel = parseFloat(b.close_approach_data?.[0]?.relative_velocity.kilometers_per_second || "0");
        return bVel - aVel;
    });

    return (
        <div className="min-h-screen py-8 mt-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Near-Earth Objects</h1>
                        <p className="text-white/60 mt-2">Track asteroids and comets that approach Earth</p>
                    </div>
                    <div className="text-sm text-white/60 inline-flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Updated hourly
                    </div>
                </div>

                {/* Date Selector */}
                {/* <div className="mb-8">
                    <label className="text-sm font-medium text-white mb-3 block">Select Date:</label>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {availableDates.map(date => (
                            <button
                                key={date}
                                onClick={() => setSelectedDate(date)}
                                className={`px-4 py-2 rounded-lg border transition-all whitespace-nowrap ${
                                    selectedDate === date 
                                        ? 'bg-cyan-500 border-cyan-500 text-white' 
                                        : 'border-white/20 text-white/60 hover:bg-white/10'
                                }`}
                            >
                                {new Date(date).toLocaleDateString()}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* Summary Stats */}
                {/* <div className="mb-8">
                <NeoStats data={data} isLoading={isLoading} isError={isError} />
                </div> */}

                {/* Stats Overview */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                        <div className="text-3xl font-bold text-white">{currentNeos.length}</div>
                        <div className="text-white/60 text-sm mt-1">Total Objects</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                        <div className="text-3xl font-bold text-red-400">
                            {currentNeos.filter(neo => neo.is_potentially_hazardous_asteroid).length}
                        </div>
                        <div className="text-white/60 text-sm mt-1">Potentially Hazardous</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                        <div className="text-3xl font-bold text-cyan-400">
                            {Math.max(...currentNeos.map(neo => 
                                parseFloat(neo.close_approach_data?.[0]?.relative_velocity.kilometers_per_second || "0")
                            )).toFixed(2)}
                        </div>
                        <div className="text-white/60 text-sm mt-1">Fastest (km/s)</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                        <div className="text-3xl font-bold text-green-400">
                            {Math.max(...currentNeos.map(neo => 
                                parseFloat(neo.estimated_diameter?.meters?.estimated_diameter_max || "0")
                            )).toFixed(0)}m
                        </div>
                        <div className="text-white/60 text-sm mt-1">Largest Diameter</div>
                    </div>
                </div>

                {/* NEO List */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                            <div className="p-6 border-b border-white/10">
                                <h2 className="text-xl font-semibold text-white">
                                    Objects for {new Date(selectedDate).toLocaleDateString()}
                                </h2>
                                <p className="text-white/60 text-sm mt-1">
                                    {sortedNeos.length} near-Earth objects detected
                                </p>
                            </div>
                            
                            <div className="divide-y divide-white/10">
                                {sortedNeos.map((neo) => (
                                    <NeoCard key={neo.id} neo={neo} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Hazardous Objects */}
                    <div className="lg:col-span-1">
                        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 overflow-hidden">
                            <div className="p-6 border-b border-red-500/20">
                                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                    Potentially Hazardous
                                </h3>
                                <p className="text-white/60 text-sm mt-1">
                                    Objects requiring close monitoring
                                </p>
                            </div>
                            
                            <div className="divide-y divide-red-500/20">
                                {sortedNeos
                                    .filter(neo => neo.is_potentially_hazardous_asteroid)
                                    .slice(0, 5)
                                    .map((neo) => (
                                        <a
                                            key={neo.id}
                                            href={neo.nasa_jpl_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 hover:bg-red-500/10 transition-colors block"
                                        >
                                            <div className="text-sm font-medium text-white truncate">
                                                {neo.name}
                                            </div>
                                            <div className="text-xs text-red-300 mt-1">
                                                Diameter: {neo.estimated_diameter?.meters?.estimated_diameter_max.toFixed(0)}m
                                            </div>
                                            <div className="text-xs text-white/60 mt-1">
                                                Velocity: {parseFloat(neo.close_approach_data?.[0]?.relative_velocity.kilometers_per_second).toFixed(2)} km/s
                                            </div>
                                        </a>
                                    ))}
                                
                                {sortedNeos.filter(neo => neo.is_potentially_hazardous_asteroid).length === 0 && (
                                    <div className="p-6 text-center text-white/60">
                                        No potentially hazardous objects detected
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

// NEO Card Component
const NeoCard = ({ neo }) => {
    const approachData = neo.close_approach_data?.[0];
    const velocity = approachData ? parseFloat(approachData.relative_velocity.kilometers_per_second) : 0;
    const missDistance = approachData ? parseFloat(approachData.miss_distance.kilometers) : 0;
    const diameter = neo.estimated_diameter?.meters?.estimated_diameter_max || 0;

    return (
        <a
            href={neo.nasa_jpl_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 flex items-start gap-4 hover:bg-white/10 transition-colors group"
        >
            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${
                neo.is_potentially_hazardous_asteroid 
                    ? 'bg-red-500/10 border-red-500/20' 
                    : 'bg-white/5 border-white/10'
            }`}>
                <Sparkles className={`w-5 h-5 ${
                    neo.is_potentially_hazardous_asteroid ? 'text-red-400' : 'text-cyan-400'
                }`} />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white truncate">
                        {neo.name}
                    </h4>
                    <span className="text-sm font-semibold text-cyan-200 tabular-nums ml-2">
                        {velocity.toFixed(2)} km/s
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                        <Ruler className="w-4 h-4" />
                        Diameter: {diameter.toFixed(0)}m
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                        <Gauge className="w-4 h-4" />
                        Miss: {(missDistance / 1000000).toFixed(1)}M km
                    </div>
                </div>

                {approachData && (
                    <div className="flex items-center gap-2 text-white/60 text-sm mt-2">
                        <Calendar className="w-4 h-4" />
                        Approach: {new Date(approachData.close_approach_date_full).toLocaleString()}
                    </div>
                )}

                {neo.is_potentially_hazardous_asteroid && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30 mt-2">
                        <AlertTriangle className="w-3 h-3" />
                        Potentially Hazardous
                    </div>
                )}
            </div>
        </a>
    );
};

// Skeleton Loader
const NeoPageSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-pulse">
                    <div className="h-8 w-64 bg-white/10 rounded mb-4"></div>
                    <div className="h-4 w-96 bg-white/10 rounded mb-8"></div>
                    
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-24 bg-white/5 rounded-2xl"></div>
                        ))}
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 h-96 bg-white/5 rounded-3xl"></div>
                        <div className="h-64 bg-white/5 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Error State
const NeoErrorState = () => {
    return (
        <div className="min-h-screen bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Failed to Load NEO Data</h2>
                <p className="text-white/60 mb-6">Unable to fetch near-Earth objects information.</p>
                <Link 
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default NeoPage;