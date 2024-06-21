<<<<<<< HEAD
import { getAll as allBlogs } from "@/crud/blog";
import { getAll as allServices } from "@/crud/service";
import prisma from "@/lib/prisma";
import { seoUrl } from "@/lib/utils";
import { url } from "inspector";
import { MetadataRoute } from "next";

export const dynamic = 'force-dynamic'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await allBlogs(0, 0, prisma)
  const services = await allServices(0, 0, prisma)
  const baseUrl = "https://www.cybershoptech.com"
  return [
    {
      url: "https://www.cybershoptech.com",
      lastModified: new Date(),
    },
    ...blogs.records.map(blog => ({
      url: `${baseUrl}/blogs/post/${seoUrl(blog.title, blog.id)}`,
      lastModified: new Date(),

    })),
    ...services.records.map(service => ({
      url: `${baseUrl}/services/${seoUrl(service.title, service.id)}`,
      lastModified: new Date(),

    }))
=======
import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://precedent.dev",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://precedent.dev/${user.id}`,
      lastModified: new Date(),
    })),
>>>>>>> upstream/main
  ];
}
