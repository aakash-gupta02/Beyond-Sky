"use client"
import Apod from "@/components/Apod";
import BackgroundLayer from "@/components/BackgroundLayer";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Countdown from "@/components/launch/Countdown";
import Mars from "@/components/Mars";
import MissionAnalytics from "@/components/MissionAnalytics";
import Navbar from "@/components/Navbar";
import NeoWidget from "@/components/Neow";
import NewsGrid from "@/components/NewsGrid";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const newsRef = useRef(null);
  const neoRef = useRef(null);
  const marsRef = useRef(null);
  const apodRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onNavClick={{
          hero: () => scrollTo(heroRef),
          news: () => scrollTo(newsRef),
          neo: () => scrollTo(neoRef),
          mars: () => scrollTo(marsRef),
          apod: () => scrollTo(apodRef),
          cta: () => scrollTo(ctaRef),
        }}
      />
      
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={newsRef}>
        <NewsGrid />
      </div>
      <div ref={neoRef}>
        <NeoWidget />
      </div>
      {/* <MissionAnalytics /> */}
      <div ref={marsRef}>
        <Mars />
      </div>
      <div ref={apodRef}>
        <Apod />
      </div>
      <div ref={ctaRef}>
        <CTA />
      </div>
    </>
  );
}
