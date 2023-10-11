import React from 'react'
import BlogListLoader from "./loading"

function BlogList({ params }: { params: { list: string } }) {
    return (
        <BlogListLoader />
    )
}

export default BlogList