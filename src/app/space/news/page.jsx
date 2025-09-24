"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, ArrowRight, Rss, Download, ImageIcon } from "lucide-react";
import { useNews } from "@/hooks/nasa/useNews";
import { proxyImage } from "@/utilis/proxyImage";
import NewsSkeleton from "@/components/skeletons/NewsSkeleton";

const NewsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError } = useNews(currentPage, 10);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        if (data?.results?.length && !selectedNews) {
            setSelectedNews(data.results[0]);
        }
    }, [data, selectedNews]);

    if (isLoading) return <NewsSkeleton />;
    if (isError) return <div className="text-center py-20">Failed to load news</div>;

    const handleNextPage = () => setCurrentPage((prev) => prev + 1);
    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <section className="pt-20 pb-20 mt-10 ">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10">
                {/* Main news content */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {selectedNews && (
                        <>
                            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex flex-col items-center">
                                <img
                                    src={selectedNews.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                    alt={selectedNews.title}
                                    className="object-contain max-h-[70vh] w-auto mx-auto"
                                    style={{ maxWidth: "100%" }}
                                />

                            </div>
                            <div className="flex flex-col gap-3">

                                <div className="flex justify-between gap-3">

                                    <div className="flex items-center gap-3 text-xs text-white/50">
                                        <Clock className="w-4 h-4" />
                                        <span>{new Date(selectedNews.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                                        <span>• {selectedNews.news_site}</span>
                                    </div>

                                    {/* <div className="flex gap-3 mt-3text-xs text-white/50 ">
                                        <a
                                            href={selectedNews.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Show Full Image
                                        </a>
                                        <a
                                            href={selectedNews.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                            download
                                        >
                                            Download Image
                                        </a>
                                    </div> */}
                                </div>

                                <h1 className="text-4xl font-light tracking-tight">{selectedNews.title}</h1>
                                <p className="text-white/70">{selectedNews.summary}</p>
                                <div className="flex flex-col items-center  sm:flex-row sm:items-center sm:justify-between">

                                    <a
                                        href={selectedNews.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 border border-white/10 transition-all mt-4 w-max"
                                    >
                                        Read Full Article
                                        <ArrowRight className="w-4 h-4" />
                                    </a>

                                    <div className="flex gap-3 mt-3">
                                        <a
                                            href={selectedNews.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 border border-white/10 transition-all mt-4 w-max"
                                        >
                                            Show Full Image
                                            <ImageIcon className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={selectedNews.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                            download
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 border border-white/10 transition-all mt-4 w-max"
                                        >
                                            Download Image
                                            <Download className="w-4 h-4" />
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </>
                    )}

                    {/* Pagination */}
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <h2 className="text-2xl font-light tracking-tight">Other News</h2>
                    {data?.results
                        ?.filter((news) => news.id !== selectedNews?.id)
                        ?.map((item) => (
                            <div
                                key={item.id}
                                className="group flex gap-3 cursor-pointer border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all"
                                onClick={() => setSelectedNews(item)}
                            >
                                <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden">
                                    <img
                                        src={item.image_url || "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-3">
                                    <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                                    <span className="text-xs text-white/50">{new Date(item.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default NewsPage;
