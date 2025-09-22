import { Send } from 'lucide-react';
import React from 'react';

const CTA = () => {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-4">
                <div className="rounded-3xl border border-white/15 bg-white/5 p-10 md:p-14 text-center">
                    <h2
                        className="text-4xl sm:text-5xl font-light tracking-tight"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        Stay ahead of the next launch
                    </h2>
                    <p className="text-white/70 text-lg mt-3">
                        Get breaking alerts, mission briefings, and APOD delivered to your inbox.
                    </p>
                    <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 placeholder-white/40 sm:col-span-1"
                        />
                        <button className="px-6 py-3 rounded-2xl bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 sm:col-span-1">
                            <Send className="w-4 h-4" />
                            Subscribe
                        </button>
                    </form>
                    <div className="text-xs text-white/40 mt-3">No spam. Unsubscribe anytime.</div>
                </div>
            </div>
        </section>
    );
};

export default CTA;