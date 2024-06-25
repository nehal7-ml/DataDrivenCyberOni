import { NextResponse } from "next/server";
import jsdom from "jsdom";
import { getRecent } from "@/crud/blog";
const { JSDOM } = jsdom;

export const dynamic = "auto";
export const revalidate = 1800;

import prisma from "@/lib/prisma";
import { seoUrl } from "@/lib/utils";
let window = new JSDOM().window;

export async function GET() {
  const baseUrl = process.env.NEXTAUTH_URL;
  if (!baseUrl) {
    throw new Error("NEXTAUTH_URL is not defined in environment variables");
  }

  const encodeUrl = (url: string) =>
    encodeURIComponent(url).replace(/'/g, "%27");

  const encodedBaseUrl = encodeUrl(baseUrl);

  const xmlContent = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">        
        <channel>
            <title>Latest Cyberoni Blogs</title>
            <link>${encodedBaseUrl}/blogs/recent</link>
            <description>Latest Cyberoni Blogs related to web development and AI</description>
        </channel>   
  </rss>`;

  const blogs = await getRecent(1, prisma);

  let parser = new window.DOMParser();
  let xmlDoc = parser.parseFromString(xmlContent, "text/xml");
  let channel = xmlDoc.getElementsByTagName("channel")[0];
  blogs.recent.forEach((blog) => {
    const item = xmlDoc.createElement("item");
    const title = xmlDoc.createElement("title");
    const link = xmlDoc.createElement("link");
    const description = xmlDoc.createElement("description");
    const blogUrl = `${baseUrl}/blogs/post/${seoUrl(blog.title, blog.id)}`;

    title.innerHTML = blog.title;
    link.innerHTML = encodeUrl(blogUrl);
    description.innerHTML = blog.description;

    item.appendChild(title);
    item.appendChild(link);
    item.appendChild(description);
    channel.appendChild(item);
  });

  return new NextResponse(
    new window.XMLSerializer().serializeToString(xmlDoc.documentElement),
    { headers: { "Content-Type": "text/xml" } },
  );
}
