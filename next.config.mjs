// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Optionally, you can specify a port or pathname for more granular control
        // port: '',
        // pathname: '/photo-**',
      },
    ],
    // Optional: Specify modern image formats for automatic conversion
    // formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;