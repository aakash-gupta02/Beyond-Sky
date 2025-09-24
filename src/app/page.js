import Apod from "@/components/Apod";
import BackgroundLayer from "@/components/BackgroundLayer";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Countdown from "@/components/launch/Countdown";
import MissionAnalytics from "@/components/MissionAnalytics";
import Navbar from "@/components/Navbar";
import NeoWidget from "@/components/Neow";
import NewsGrid from "@/components/NewsGrid";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <NewsGrid />
      <NeoWidget/>
      <MissionAnalytics />
      <Apod />
      <CTA />
    </>
  );
}
