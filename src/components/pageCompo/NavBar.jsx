"use client"
import Logo from '@/components/Logo'
import { Menu, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <header className="fixed top-4 left-4 right-4 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-between px-3 backdrop-blur-xl">
                    <div className="flex items-center gap-3 pl-1">
                        <Logo />
                    </div>


                    <nav className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => router.back()}
                            className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back</span>
                        </button>
                        <button
                            onClick={() => router.push('/')}
                            className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </button>
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default Navbar
