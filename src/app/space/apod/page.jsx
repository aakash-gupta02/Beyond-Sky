"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { useApod } from "@/hooks/nasa/useApod";

const ApodPage = () => {
  const { data, isLoading, isError } = useApod();
  const [showFullDesc, setShowFullDesc] = useState(false);

  if (isLoading) return <div className="text-center py-20">Loading APOD...</div>;
  if (isError || !data) return <div className="text-center py-20">Error loading APOD</div>;

  const toggleDesc = () => setShowFullDesc(!showFullDesc);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = data.hdurl || data.url;
    link.download = `${data.title.replace(/\s+/g, "_")}.jpg`;
    link.click();
  };

  return (
    <section className="py-20 mt-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
        {/* Main media */}
        <div className="flex-1 min-w-0">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                {data.media_type === "image" ? (
                    <Image
                        src={data.url}
                        alt={data.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                        priority
                    />
                ) : (
                    <iframe
                        src={data.url}
                        title={data.title}
                        className="w-full aspect-video"
                        allowFullScreen
                    />
                )}
                <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/10">
                    Astronomy Picture of the Day
                </div>
            </div>
            {/* Details */}
            <div className="mt-6">
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                {data.title}
              </h1>

              <p className={`mt-4 text-lg text-white/70 ${!showFullDesc ? "line-clamp-5" : ""}`}>
                {data.explanation}
              </p>

              {data.explanation.length > 250 && (
                <button
                  className="mt-2 text-xs text-blue-400 hover:underline"
                  onClick={toggleDesc}
                >
                  {showFullDesc ? "Show Less" : "Read More"}
                </button>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={data.hdurl || data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Full Image
                </a>

                {data.media_type === "image" && (
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApodPage;
