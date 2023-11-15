import ContactForm from "@/components/ContactForm"
import React from 'react'

function BlogPostLayout({children}:{children: React.ReactNode}) {
  return (
    <div className="relative z-30 w-full min-h-screen bg-gray-200 dark:bg-zinc-900 dark:text-white">
      {children}
    {/* <ContactForm /> */}
    </div>
  )
}

export default BlogPostLayout