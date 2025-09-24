import React from 'react'

// Skeleton loader component
const NeoSkeleton = () => {
  return (
    <section id="data" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <div className="h-8 w-64 bg-white/10 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-48 bg-white/10 rounded animate-pulse"></div>
          </div>
          <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {/* Chart skeleton */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white/10 rounded-lg animate-pulse"></div>
                <div>
                  <div className="h-6 w-40 bg-white/10 rounded animate-pulse mb-1"></div>
                  <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="h-4 w-16 bg-white/10 rounded animate-pulse"></div>
            </div>
            <div className="mt-6 h-64 bg-white/5 rounded-lg animate-pulse"></div>
          </div>

          {/* List skeleton */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white/10 rounded-lg animate-pulse"></div>
              <div>
                <div className="h-6 w-40 bg-white/10 rounded animate-pulse mb-1"></div>
                <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="h-8 w-8 bg-white/10 rounded-md animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse mb-1"></div>
                      <div className="h-3 w-1/2 bg-white/10 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-4 w-16 bg-white/10 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeoSkeleton