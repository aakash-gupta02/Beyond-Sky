// components/MediaCard.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LucideImage } from "lucide-react";

const MediaCard = ({
    title,
    description,
    mediaUrl,
    mediaType = "image",
    date,
    buttons = [],
    className = "",
}) => {


    const [showFullDesc, setShowFullDesc] = useState(false);
    const toggleDesc = () => setShowFullDesc(!showFullDesc);


    return (
        <div
            className={`rounded-3xl overflow-hidden border border-white/10 bg-white/5 ${className}`}
        >
            <div className="flex flex-col lg:flex-row lg:min-h-96">
                {/* Media Section - Left */}
                {mediaUrl && (
                    <div className="lg:w-2/5 xl:w-2/5 relative flex-shrink-0">
                        <div className="relative w-full h-64 sm:h-72 lg:h-full">
                            {mediaType === "image" ? (
                                <Image
                                    src={mediaUrl}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            ) : (
                                <video
                                    src={mediaUrl}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            )}
                            {date && (
                                <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/10">
                                    {date}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Content Section - Right */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-4 lg:mb-6">
                            {title}
                        </h3>

                        {description && (
                            <div className="mb-4 lg:mb-6">
                                <p className={`text-sm lg:text-base text-gray-300 leading-relaxed ${!showFullDesc ? "line-clamp-6" : ""
                                    }`}>
                                    {description}
                                </p>
                                {description.length > 250 && (
                                    <button
                                        className="mt-2 text-xs text-blue-400 hover:underline"
                                        onClick={toggleDesc}
                                    >
                                        {showFullDesc ? "Show Less" : "Read More"}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {buttons.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/10">
                            {buttons}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
