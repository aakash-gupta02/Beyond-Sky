import React from 'react'

const skeletonArray = Array.from({ length: 6 })

const NewsSkeleton = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex items-end justify-between">
                    <div>
                        <div className="h-8 w-40 bg-white/10 rounded mb-2 animate-pulse" />
                        <div className="h-4 w-72 bg-white/10 rounded animate-pulse" />
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {skeletonArray.map((_, idx) => (
                        <article
                            key={idx}
                            className="border border-white/10 rounded-3xl overflow-hidden bg-white/5 transition-colors"
                        >
                            {/* Image Skeleton */}
                            <div className="relative">
                                <div className="w-full h-48 bg-white/10 animate-pulse" />
                                <div className="absolute top-3 left-3 h-5 w-16 bg-black/30 rounded-full animate-pulse" />
                            </div>

                            {/* Content Skeleton */}
                            <div className="p-5">
                                <div className="h-5 w-3/4 bg-white/10 rounded mb-3 animate-pulse" />
                                <div className="h-4 w-full bg-white/10 rounded mb-2 animate-pulse" />
                                <div className="h-4 w-5/6 bg-white/10 rounded mb-2 animate-pulse" />
                                <div className="h-4 w-2/3 bg-white/10 rounded mb-4 animate-pulse" />
                                <div className="flex items-center justify-between mt-4 text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-white/10 rounded-full animate-pulse" />
                                        <div className="h-3 w-16 bg-white/10 rounded animate-pulse" />
                                    </div>
                                    <div className="h-3 w-12 bg-white/10 rounded animate-pulse" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsSkeleton
