import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import BackgroundLayer from "@/components/BackgroundLayer";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beyond Sky – NASA & Global Space Updates",
  description:
    "A modern web application that brings NASA's data to life with real-time space information, stunning imagery, and comprehensive space mission tracking.",
  openGraph: {
    title: "Beyond Sky – NASA & Global Space Updates",
    description:
      "Explore live launches, breaking space missions, and breathtaking NASA images — all in one place.",
    url: "https://beyond-sky.vercel.app",
    siteName: "Beyond Sky",
    images: [
      {
        url: "https://i.postimg.cc/XqqwDQTy/Screenshot-2025-09-25-232238.png",
        width: 1200,
        height: 630,
        alt: "Beyond Sky – NASA & Space Updates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Sky – NASA & Global Space Updates",
    description:
      "Real-time NASA data, live space launches, mission tracking, and cosmic imagery.",
    images: ["https://i.postimg.cc/XqqwDQTy/Screenshot-2025-09-25-232238.png"], 
    creator: "@AakashG99795",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen text-white selection:bg-cyan-500/30 selection:text-white">
            <BackgroundLayer />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
