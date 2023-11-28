import React from 'react'

function ServiceCardSkeleton() {
    return (
        <div className="rounded-xl shadow-lg p-5 animate-pulse">
            {/* Skeleton loader design */}
            <div className="h-10 w-10 mb-5 bg-gray-300 rounded-full"></div>
            <div className="border-l-4 border-gray-300 px-3 mb-5 font-bold text-3xl h-6 w-36"></div>
            <div className="mb-5 line-clamp-3 h-12 bg-gray-300"></div>
            <div className="flex gap-x-44 mb-5 text-blue-500 h-6 w-24 bg-gray-300"></div>
        </div>
    )
}

export default ServiceCardSkeleton