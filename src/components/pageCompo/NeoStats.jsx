"use client";
import React from "react";
import {
    Activity, Radar, List
    , AlertOctagon,
    Asterisk,
    Flame,
    Sparkles, ArrowRight
} from "lucide-react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import NeoSkeleton from "../skeletons/NeoSkeleton";
import Link from "next/link";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const NeoStats = ({ data, isLoading, isError }) => {

    if (isLoading) {
        return <NeoSkeleton />;
    }

    if (isError || !data?.success) {
        return (
            <section id="data" className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
                        <AlertOctagon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Failed to load NEO data
                        </h3>
                        <p className="text-white/60">
                            Unable to fetch near-Earth objects information at this time.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    const neoData = data.data;
    const today = new Date().toISOString().split("T")[0];
    const todayNeos = neoData.near_earth_objects[today] || [];

    // Calculate statistics
    const totalCount = todayNeos.length;
    const hazardousCount = todayNeos.filter(neo => neo.is_potentially_hazardous_asteroid).length;
    const nonHazardousCount = totalCount - hazardousCount;

    // Calculate average velocity and get top 5 fastest
    const neosWithVelocity = todayNeos.map(neo => {
        const approachData = neo.close_approach_data?.[0];
        const velocity = approachData ? parseFloat(approachData.relative_velocity.kilometers_per_second) : 0;
        const missDistance = approachData ? parseFloat(approachData.miss_distance.kilometers) : 0;

        return {
            id: neo.id,
            name: neo.name,
            velocity,
            missDistance,
            isHazardous: neo.is_potentially_hazardous_asteroid,
            url: neo.nasa_jpl_url,
            estimatedDiameter: neo.estimated_diameter?.meters?.estimated_diameter_max || 0
        };
    });

    const averageVelocity = neosWithVelocity.reduce((sum, neo) => sum + neo.velocity, 0) / Math.max(1, totalCount);
    const fastestNeos = [...neosWithVelocity].sort((a, b) => b.velocity - a.velocity).slice(0, 5);

    // Chart data
    const chartData = {
        labels: ['Non-Hazardous', 'Potentially Hazardous'],
        datasets: [
            {
                data: [nonHazardousCount, hazardousCount],
                backgroundColor: ['rgba(56, 189, 248, 0.35)', 'rgba(248, 113, 113, 0.45)'],
                borderColor: ['rgba(56, 189, 248, 0.7)', 'rgba(248, 113, 113, 0.8)'],
                borderWidth: 1.25,
                hoverOffset: 6,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#cbd5e1',
                    font: {
                        family: 'Inter',
                        size: 12,
                        weight: '500',
                    },
                    usePointStyle: true,
                    padding: 16,
                },
                position: 'bottom',
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                borderWidth: 1,
                titleColor: '#e2e8f0',
                bodyColor: '#cbd5e1',
                callbacks: {
                    label: (context) => `${context.label}: ${context.raw}`
                },
            },
        },
        cutout: '62%',
    };

    return (
        <div className="mt-8 grid gap-6 lg:grid-cols-2 w-full max-w-full overflow-x-auto px-2 sm:px-4">
            {/* Chart Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 min-w-[320px]">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-300/20 flex items-center justify-center">
                            <Radar className="w-5 h-5 text-indigo-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold tracking-tight text-white">
                                Hazard vs Non-Hazard
                            </h3>
                            <p className="text-xs text-white/60">NEO classification counts</p>
                        </div>
                    </div>
                    <div className="text-xs text-white/60">Today</div>
                </div>

                <div className="mt-6">
                    <div className="relative h-64">
                        <div className="bg-white/5 rounded-lg h-full w-full border border-white/10 p-4">
                            <Doughnut data={chartData} options={chartOptions} />
                        </div>
                    </div>

                    {/* Stats below chart */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{totalCount}</div>
                            <div className="text-xs text-white/60">Total NEOs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-red-400">{hazardousCount}</div>
                            <div className="text-xs text-white/60">Hazardous</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">
                                {averageVelocity.toFixed(2)}
                            </div>
                            <div className="text-xs text-white/60">Avg km/s</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fastest Approaches List */}
            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden min-w-[320px]">
                <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-semibold tracking-tight text-white">Fastest Approaches</h3>
                    <p className="text-white/60 text-sm mt-1">Top 5 by relative velocity</p>
                </div>

                <div className="divide-y divide-white/10">
                    {fastestNeos.map((neo, index) => (
                        <a
                            key={neo.id}
                            href={neo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-5 flex items-start gap-3 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center flex-shrink-0">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium tracking-tight text-white truncate">
                                        {neo.name}
                                    </h4>
                                    <span className="text-xs text-cyan-200 font-semibold tabular-nums ml-2 flex-shrink-0">
                                        {neo.velocity.toFixed(2)} km/s
                                    </span>
                                </div>

                                <p className="text-white/60 text-sm mt-1">
                                    Miss: {neo.missDistance.toLocaleString(undefined, { maximumFractionDigits: 0 })} km
                                    {neo.isHazardous && (
                                        <span className="ml-2 px-1.5 py-0.5 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                                            Hazardous
                                        </span>
                                    )}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="p-5 border-t border-white/10">
                    <Link
                        href="/space/neow"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10 transition-colors text-sm text-white"
                    >
                        View Full NEO List
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default NeoStats;