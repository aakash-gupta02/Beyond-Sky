"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Image as LucideImage, Download, Telescope, Moon, Radio, Sun, ChevronRight } from "lucide-react";
import { useApod } from "@/hooks/nasa/useApod";
import MediaCard from "./MediaCard";
import { useRouter } from "next/router";
import Link from "next/link";
import TitleHeader from "./TitleHeader";

const quickBites = [
  { icon: <Telescope className="w-5 h-5" />, title: "Hubble returns to normal operations", desc: "Science observations resume after safe mode" },
  { icon: <Moon className="w-5 h-5" />, title: "Lunar Gateway module completes testing", desc: "Power and propulsion readiness verified" },
  { icon: <Radio className="w-5 h-5" />, title: "Deep Space Network upgrades antennas", desc: "Improved downlink for Mars sample return" },
  { icon: <Sun className="w-5 h-5" />, title: "Solar max approaches", desc: "Aurora forecast: High-latitude visibility" },
];

const Apod = () => {
  const { data, isLoading, isError } = useApod();
  const [showFullDesc, setShowFullDesc] = useState(false);

  console.log(data);


  if (isLoading) return <div className="text-center py-20">Loading APOD...</div>;
  if (isError || !data) return <div className="text-center py-20">Error loading APOD</div>;

  const buttons = [
    <Link
      key="view"
      href="/space/apod"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-white/90 transition-colors"
    >
      <LucideImage className="w-4 h-4" />
      View Full
    </Link>,
    <button

      key="download"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10 transition-colors"
    >
      <Download className="w-4 h-4" />
      Download
    </button>,
  ];


  const toggleDesc = () => setShowFullDesc(!showFullDesc);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">

          <TitleHeader
            heading="Astronomy Picture of the Day"
            subheading="A stunning image from NASA's archives."
            cache={data.cached}

          />
        </div>





        <MediaCard
          title={data.title}
          description={data.explanation}
          mediaUrl={data.url}
          mediaType="image"
          date="APOD"
          buttons={buttons}
        />


        {/* Quick Bites */}
        {/* <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-light tracking-tight">Quick Bites</h3>
            <div className="mt-4 space-y-4">
              {quickBites.map((bite, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                    {bite.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{bite.title}</div>
                    <div className="text-xs text-white/50">{bite.desc}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </div>
              ))}
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Apod;
