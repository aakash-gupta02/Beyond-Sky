import React from 'react'

// Skeleton Loader
const MarsGridSkeleton = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="animate-pulse">
                    {/* Header Skeleton */}
                    <div className="h-10 w-64 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 w-96 bg-white/10 rounded mb-8"></div>

                    {/* Grid Skeleton */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border border-white/10 rounded-3xl overflow-hidden bg-white/5">
                                <div className="h-56 bg-white/10"></div>
                                <div className="p-5">
                                    <div className="h-5 w-3/4 bg-white/10 rounded mb-2"></div>
                                    <div className="h-4 w-full bg-white/10 rounded mb-4"></div>
                                    <div className="flex justify-between">
                                        <div className="h-4 w-20 bg-white/10 rounded"></div>
                                        <div className="h-4 w-16 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button Skeleton */}
                    <div className="flex justify-center mt-8">
                        <div className="h-12 w-48 bg-white/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarsGridSkeleton;