import React from 'react'

function BlogPostLayout({children}:{children: React.ReactNode}) {
  return (
    <div className="relative z-30 w-full min-h-screen bg-slate-100 dark:bg-gray-800 dark:text-white">
      {children}
    {/* <ContactForm /> */}
    </div>
  )
}

export default BlogPostLayout