"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowRight, Rss } from "lucide-react";
import { useNews } from "@/hooks/nasa/useNews";
import { proxyImage } from "@/utilis/proxyImage";
import NewsSkeleton from "./skeletons/NewsSkeleton";
import Link from "next/link";
import TitleHeader from "./TitleHeader";

const NewsGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError } = useNews(currentPage, 10);
    console.log(data);


    if (isLoading) return <NewsSkeleton />;
    if (isError) return <div>Failed to load news</div>;

    return (
        <section className="py-20 flex items-center justify-center min-h-screen">
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Header */}
                <div className="*:mb-8">
        
                    <TitleHeader heading={"Top Stories"} subheading={"Daily coverage from NASA and international space agencies."} cache={data?.fromCache} />
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {data?.results?.slice(0, 6)?.map((item) => (
                        <article
                            key={item.id}
                            className="group border border-white/10 rounded-3xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative w-full h-56 bg-black/30 flex items-center justify-center overflow-hidden">
                                <img
                                    className="object-cover w-full h-full"
                                    src={item.image_url}
                                    alt={item.title}
                                />
                                <div className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-black/50 border border-white/10">
                                    {item.news_site}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold tracking-tight group-hover:underline decoration-white/30"></h3>
                                <h3 className="text-lg font-semibold tracking-tight group-hover:underline decoration-white/30">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm mt-2 line-clamp-3">
                                    {item.summary}
                                </p>
                                <div className="flex items-center justify-between mt-4 text-xs text-white/50">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3.5 h-3.5" />
                                        {new Date(item.published_at).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </div>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-white/70 hover:text-white"
                                    >
                                        Read
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <Link
                        href={"/space/news"}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
                        <Rss className="w-5 h-5" />
                        View Full News
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsGrid;
