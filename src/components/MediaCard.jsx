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
            {mediaUrl && (
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                    {mediaType === "image" ? (
                        <Image
                            src={mediaUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            )}
            <div className="p-6">
                <h3 className="text-2xl font-light tracking-tight">{title}</h3>
                {description && (
                    <>
                        <p className={`text-sm text-gray-300 mt-2 ${!showFullDesc ? "line-clamp-4" : ""}`}>
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
                    </>
                )}
                {buttons.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">{buttons}</div>
                )}
            </div>
        </div>
    );
};

export default MediaCard;
