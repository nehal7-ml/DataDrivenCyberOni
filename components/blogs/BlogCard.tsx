import React from 'react'

function BlogCard({ category, title }: { category: string, title: string }) {
    return (
        <div className="dark:bg-slate-900 rounded-lg shadow-lg p-4">
            <div className="text-indigo-500 text-sm font-semibold mb-2">{category}</div>

            <h2 className="text-xl font-semibold mb-4">{title}</h2>

        </div>

    )
}

export default BlogCard