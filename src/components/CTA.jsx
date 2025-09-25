"use client";
import { Send, Check } from 'lucide-react';
import React, { useState } from 'react';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSubscribed(true);
        setEmail('');
        // You can add actual subscription logic here
    };

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
                    <form
                        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 placeholder-white/40 sm:col-span-1"
                            disabled={subscribed}
                        />
                        <button
                            type="submit"
                            className={`px-6 py-3 rounded-2xl transition-colors inline-flex items-center justify-center gap-2 sm:col-span-1 ${
                                subscribed
                                    ? 'bg-green-500 text-white cursor-default'
                                    : 'bg-white text-black hover:bg-white/90'
                            }`}
                            disabled={subscribed}
                        >
                            {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                            {subscribed ? 'Subscribed!' : 'Subscribe'}
                        </button>
                    </form>
                    {error && (
                        <div className="text-xs text-red-400 mt-2">{error}</div>
                    )}
                    <div className="text-xs text-white/40 mt-3">No spam. Unsubscribe anytime.</div>
                </div>
            </div>
        </section>
    );
};

export default CTA;