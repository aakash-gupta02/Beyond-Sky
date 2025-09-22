import React from 'react';
import { Twitter, Github, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-14">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="md:col-span-2">
                        <Logo />
                        {/* <div className="flex items-center gap-1">
                            <span className="text-xl font-semibold tracking-tight">Beyond Sky!!</span>
                        </div> */}
                        <p className="text-white/60 mt-4 max-w-md">
                            Independent coverage of NASA and the global space sector. We synthesize verified updates, mission data, and imagery into a clear daily briefing.
                        </p>
                        <div className="flex gap-2 mt-5">
                            <button className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors" aria-label="X / Twitter">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors" aria-label="GitHub">
                                <Github className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors" aria-label="YouTube">
                                <Youtube className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 tracking-tight">Sections</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><a href="#" className="hover:text-white">News</a></li>
                            <li><a href="#" className="hover:text-white">Launches</a></li>
                            <li><a href="#" className="hover:text-white">Missions</a></li>
                            <li><a href="#" className="hover:text-white">Imagery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 tracking-tight">Resources</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><a href="#" className="hover:text-white">NASA TV</a></li>
                            <li><a href="#" className="hover:text-white">ISS Live</a></li>
                            <li><a href="#" className="hover:text-white">Launch Schedule</a></li>
                            <li><a href="#" className="hover:text-white">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 tracking-tight">Company</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">Sponsorships</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
                    <div>© 2025 Beyond Sky!!. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;