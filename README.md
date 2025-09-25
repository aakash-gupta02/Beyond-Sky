# 🚀Beyond Sky!! - NASA Space Explorer


A modern web application that brings NASA's data to life with real-time space information, stunning imagery, and comprehensive space mission tracking.

## 📸 Screenshots

### Main Dashboard
[![beyond-sky-vercel-app-2.png](https://i.postimg.cc/J4gQSC77/beyond-sky-vercel-app-2.png)](https://postimg.cc/Yh6gmVmT)


### Mars Rover Photos
[![Screenshot-2025-09-25-232205.png](https://i.postimg.cc/j21zVyb3/Screenshot-2025-09-25-232205.png)](https://postimg.cc/8fhFMJsL)

### Near-Earth Objects Tracking
[![Screenshot-2025-09-25-232110.png](https://i.postimg.cc/qv3GTDgs/Screenshot-2025-09-25-232110.png)](https://postimg.cc/RWvt1R7h)

### Space News Feed
[![Screenshot-2025-09-25-232205.png](https://i.postimg.cc/j21zVyb3/Screenshot-2025-09-25-232205.png)](https://postimg.cc/8fhFMJsL)

### Astronomy Picture of the Day - APOD
[![Screenshot-2025-09-25-232033.png](https://i.postimg.cc/LskBqqth/Screenshot-2025-09-25-232033.png)](https://postimg.cc/7C6TdZQy)

## ✨ Features

### 🌟 Core Features
- **Real-time Launch Tracking** - Live countdowns and mission details
- **Astronomy Picture of the Day** - Daily stunning space imagery with detailed explanations
- **Mars Rover Photos** - Latest images from NASA's Mars exploration missions
- **Near-Earth Objects Monitoring** - Track potentially hazardous asteroids and comets
- **Space News Feed** - Curated space news and mission updates

### 🛠 Technical Features
- **Modern React Architecture** - Built with Next.js 15 and React 19
- **Real-time Data** - Powered by NASA's official APIs
- **Responsive Design** - Optimized for all devices and screen sizes
- **Fast Performance** - Server-side rendering and optimized caching
- **Data Persistence** - Smart caching with React Query for smooth UX

## 🏗 Built With

- **[Next.js 14](https://nextjs.org/)** - React framework for production
- **[React 18](https://reactjs.org/)** - UI library
- **[TanStack Query](https://tanstack.com/query/latest)** - Data fetching and caching
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[NASA APIs](https://api.nasa.gov/)** - Official NASA data sources

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── nasa/         # NASA API endpoints
│   └── space/            # Space-related pages
├── components/            # Reusable UI components
│   ├── launch/           # Launch-specific components
│   ├── pageCompo/        # Page-specific components
│   └── skeletons/        # Loading skeletons
├── hooks/                # Custom React hooks
│   └── nasa/            # NASA API hooks
└── utils/               # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- NASA API key (free from [api.nasa.gov](https://api.nasa.gov/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nasa-space-explorer.git
   cd nasa-space-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your NASA API key to `.env.local`:
   ```
   NASA_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🛡 API Integration

The app integrates with multiple NASA APIs:

- **APOD API** - Astronomy Picture of the Day
- **Mars Rover Photos API** - Images from Mars rovers
- **NeoWs API** - Near Earth Object Web Service
- **Launch API** - Upcoming space launches
- **News API** - Space-related news

## 🎨 Custom Hooks

### NASA Data Hooks
- `useApod()` - Fetch astronomy picture of the day
- `useLaunch()` - Get upcoming space launches
- `useMars(page)` - Fetch Mars rover photos with pagination
- `useNeow()` - Track near-Earth objects
- `useNews(page, pageSize)` - Get paginated space news

## 🎯 Key Components

- **Hero Component** - Main landing section with live launch countdown
- **APOD Component** - Daily astronomy picture showcase
- **Mars Grid** - Interactive Mars rover photo gallery
- **NEO Tracker** - Real-time asteroid monitoring dashboard
- **News Grid** - Paginated space news feed

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥 Large screens (1440px+)

## ⚡ Performance Features

- **Server-Side Rendering** - Fast initial page loads
- **Image Optimization** - Automatic image compression and lazy loading
- **Data Caching** - Smart caching with 1-hour stale time
- **Code Splitting** - Optimized bundle sizes
- **Progressive Enhancement** - Works without JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **NASA** for providing amazing APIs and data
- **Next.js team** for the incredible framework
- **TanStack** for the excellent Query library
- **Tailwind CSS** for the utility-first CSS framework

## 🐛 Known Issues

- Some Mars rover images may load slowly due to NASA's CDN
- NEO data updates hourly, not in real-time
- Mobile landscape orientation may need scroll adjustments

## 📞 Support

If you have any questions or run into issues:
- Create an [issue](https://github.com/yourusername/nasa-space-explorer/issues)
- Check the [NASA API documentation](https://api.nasa.gov/)
- Review the [Next.js documentation](https://nextjs.org/docs)

---

**Made with ❤️ and curiosity about the cosmos**

*Explore the universe from your browser* 🌌