import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
//   <!-- Header -->
  <header className="fixed top-4 left-4 right-4 z-50">
    <div className="max-w-7xl mx-auto">
      <div className="h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-between px-3 backdrop-blur-xl">
        <div className="flex items-center gap-3 pl-1">
          {/* <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 grid place-items-center">
            <span className="text-xs font-semibold tracking-tight">ON</span>
          </div> */}
          {/* <span className="text-lg font-medium tracking-tight">Beyond Sky!!</span> */}
          <Logo />
          <span className="hidden md:inline-flex text-xs px-2 py-1 rounded-full border border-cyan-400/25 text-cyan-300/90 bg-cyan-400/10">Live Feeds</span>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          <a href="#" className="text-white/70 hover:text-white transition-colors">News</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Missions</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Launches</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Images</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Videos</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Resources</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">Sign In</button>
          <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all">Subscribe</button>
        </div>

        <button id="mobileMenuBtn" className="md:hidden p-2 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
          <i data-lucide="menu" className="w-5 h-5"></i>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div id="mobileMenu" className="md:hidden mt-2 hidden">
        <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-xl">
          <div className="grid gap-2 text-sm">
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10">News</a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10">Missions</a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10">Launches</a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10">Images</a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10">Videos</a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10">Resources</a>
          </div>
          <div className="flex gap-2 pt-3 mt-3 border-t border-white/10">
            <button className="w-full px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all">Subscribe</button>
            <button className="w-full px-4 py-2 text-sm rounded-full border border-white/15 hover:bg-white/10">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  </header>  )
}

export default Navbar