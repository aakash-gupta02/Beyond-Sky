"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import { Github, Menu, X } from 'lucide-react'

const Navbar = ({ onNavClick }) => {
  const [menuOpen, setmenuOpen] = useState(false)
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    //   <!-- Header -->
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-between px-3 backdrop-blur-xl">
          <div className="flex items-center gap-3 pl-1">

            <Logo />
            <span className="inline-flex items-center text-sm sm:text-sm px-2 py-1 sm:px-2 sm:py-1 rounded-full border border-cyan-400/25 text-cyan-300/90 bg-cyan-400/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse mr-1.5"></span>
              Live Feeds
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            <button
              onClick={onNavClick.hero}

              className="text-white/70 hover:text-white transition-colors">Launch</button>
            <button
              onClick={onNavClick.news}

              className="text-white/70 hover:text-white transition-colors">News</button>
            <button
              onClick={onNavClick.neo}

              className="text-white/70 hover:text-white transition-colors">NEOW</button>
            <button
              onClick={onNavClick.mars}

              className="text-white/70 hover:text-white transition-colors">Mars</button>
            <button
              onClick={onNavClick.apod}

              className="text-white/70 hover:text-white transition-colors">APOD</button>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {/* <button className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">Sign In</button> */}
            <button
            onClick={() => window.open('https://github.com/aakash-gupta02/Beyond-Sky')}
              className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all">
                <Github className="w-4 h-4 inline-block mr-2" />
              Github</button>
          </div>

          <button

            onClick={() => setmenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}

        {menuOpen &&
          <div id="mobileMenu" className="md:hidden mt-2 ">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-xl">


              <div className="grid gap-2 text-sm">
              
                <button onClick={onNavClick.hero} className="px-3 py-2 rounded-lg hover:bg-white/10">Launches</button>


                <button onClick={onNavClick.news} className="px-3 py-2 rounded-lg hover:bg-white/10">News</button>

                <button onClick={onNavClick.neo} className="px-3 py-2 rounded-lg hover:bg-white/10">NEOW</button>
                <button onClick={onNavClick.mars} className="px-3 py-2 rounded-lg hover:bg-white/10">Mars</button>
                <button onClick={onNavClick.apod} className="px-3 py-2 rounded-lg hover:bg-white/10">APOD</button>
             
              </div>
              <div className="flex gap-2 pt-3 mt-3 border-t border-white/10">
                <button
                  onClick={() => window.open('https://github.com/aakash-gupta02/Beyond-Sky')}
                  className="w-full px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all">
                    <Github className="w-4 h-4 inline-block mr-2" />
                    Github</button>
                {/* <button className="w-full px-4 py-2 text-sm rounded-full border border-white/15 hover:bg-white/10">Sign In</button> */}
              </div>
            </div>
          </div>
        }


      </div>
    </header>)
}

export default Navbar