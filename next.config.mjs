/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // NASA APOD
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
      },
      // NASA EPIC
      {
        protocol: "https",
        hostname: "epic.gsfc.nasa.gov",
      },
      // NASA Mars Rover
      {
        protocol: "http",
        hostname: "mars.jpl.nasa.gov",
      },
      // NASA Mars Rover
      {
        protocol: "https",
        hostname: "mars.nasa.gov",
      },
      // Space Devs Launch Library
      {
        protocol: "https",
        hostname: "thespacedevs-prod.nyc3.digitaloceanspaces.com",
      },
      // Any other NASA archives
      {
        protocol: "https",
        hostname: "api.nasa.gov",
      },
      // Proxy service
      {
        protocol: "https",
        hostname: "wsrv.nl",
      },

    ],
  },
};

export default nextConfig;
