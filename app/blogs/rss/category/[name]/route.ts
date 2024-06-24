import { NextRequest, NextResponse } from "next/server"
import jsdom from 'jsdom'
import { getBlogsByCategory, getRecent } from "@/crud/blog"
const { JSDOM } = jsdom
export const dynamic = 'auto'
export const revalidate = 1800
import prisma from "@/lib/prisma"
import { seoUrl } from "@/lib/utils"
let window = new JSDOM().window
export async function GET(req: NextRequest, { params }: { params: { name: string } }) {
    const name = params.name.split("-").slice(0, -1).join(" ");
    const id = params.name.split("-").slice(-1)[0];
    const xmlContent = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">        
        <channel>
            <title>Latest ${name} Blogs</title>
            <link>${process.env.NEXTAUTH_URL}/blogs/recent</link>
            <description>Latest ${name} By Cyberoni </description>
        </channel>   
  </rss>`;
    const blogs = await getBlogsByCategory(id,1, prisma)

    let parser = new window.DOMParser();
    let xmlDoc = parser.parseFromString(xmlContent, "text/xml");
    let channel = xmlDoc.getElementsByTagName("channel")[0];
    blogs.list.forEach(blog => {
        const item  = xmlDoc.createElement("item");
        const title = xmlDoc.createElement("title");
        const link = xmlDoc.createElement("link");
        const description = xmlDoc.createElement("description");
        title.innerHTML = blog.title
        link.innerHTML = `${process.env.NEXTAUTH_URL}/blogs/post/${seoUrl(blog.title, blog.id)}`
        description.innerHTML = blog.description
        item.appendChild(title)
        item.appendChild(link)
        item.appendChild(description)
        channel.appendChild(item)
        
    });
    return new NextResponse(new window.XMLSerializer().serializeToString(xmlDoc.documentElement), { headers: { "Content-Type": "text/xml" } });
}

