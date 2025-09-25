import { Activity } from 'lucide-react'
import React from 'react'

const TitleHeader = ({ heading, subheading, cache }) => {

    return (
        <div>
            {/* Header */}
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                        {heading}
                    </h2>
                    <p className="text-sm text-white/60 mt-1">
                        {subheading}
                    </p>
                </div>
                <div className="text-xs text-white/60 inline-flex items-center gap-2">
                    <Activity
                        className={`w-4 h-4 ${cache ? "text-green-500" : "text-blue-500 animate-pulse"}`}
                    />
                    <span>{cache ? "Cached Data" : "Fetching Live"}</span>
                </div>


            </div>
        </div>
    )
}

export default TitleHeader