"use client";

import Link from "next/link";

interface BlogCTAProps {
  title?: string;
  subTitle?: string;
  button?: string;
  link?: string;
}
function BlogCTA({ title, subTitle, link, button }: BlogCTAProps) {
  return (
    <div className="mx-auto flex items-center justify-center gap-2 rounded-lg bg-violet-500 p-5 py-8 text-white lg:mx-10">
      <div className="container text-ellipsis">
        <h1 className="line-clamp-1 p-1">
          {title ? title : "Join Us grow Your Business"}
        </h1>
        <p className="line-clamp-2 p-2">
          {subTitle
            ? subTitle
            : "Let's Explore Opportunities, Tailor Strategies, and Chart a Course to Success Together"}
        </p>
      </div>

      <Link
        href={link ? link : "/contact"}
        className="line-clamp-1 min-w-16 max-w-56 text-ellipsis rounded-full bg-white p-3 text-center  text-sm font-semibold text-black hover:bg-gray-300"
      >
        {button ? button : "Get Started"}
      </Link>
    </div>
  );
}

export default BlogCTA;
