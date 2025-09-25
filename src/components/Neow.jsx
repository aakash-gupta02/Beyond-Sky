"use client";
import React from "react";

import NeoStats from "./pageCompo/NeoStats";
import { useNeow } from "@/hooks/nasa/useNeow";
import { Activity } from "lucide-react";
import TitleHeader from "./TitleHeader";

const NeoSection = () => {
    const { data, isLoading, isError } = useNeow();
    
    return (
        <section id="data" className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                {/* <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                            Near-Earth Objects Today
                        </h2>
                        <p className="text-sm text-white/60 mt-1">
                            Live snapshot from NASA's NEO feed.
                        </p>
                    </div>
                    <div className="text-xs text-white/60 inline-flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Updated hourly
                    </div>
                </div> */}
                <TitleHeader heading="Near-Earth Objects Today" subheading="Live snapshot from NASA's NEO feed." cache={data?.cached} />
                <NeoStats data={data} isLoading={isLoading} isError={isError} />
            </div>
        </section>
    );
};



export default NeoSection;