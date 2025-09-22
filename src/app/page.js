import Apod from "@/components/Apod";
import BackgroundLayer from "@/components/BackgroundLayer";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionAnalytics from "@/components/MissionAnalytics";
import Navbar from "@/components/Navbar";
import NewsGrid from "@/components/NewsGrid";

export default function Home() {
  return (

    <div className="min-h-screen  text-white selection:bg-cyan-500/30 selection:text-white">
      <BackgroundLayer />
      <Navbar />
      <Hero />
      <NewsGrid />
      <MissionAnalytics />
      <Apod />
      <CTA />
      <Footer />
    </div>
  );
}
