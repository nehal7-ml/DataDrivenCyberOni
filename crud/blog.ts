import { Blog, PrismaClient, Tag, User, Image } from "@prisma/client";
import { connectOrCreateObject as connectTags, createTagDTO } from "./tags";
import { connectOrCreateObject as connectImages, createImageDTO } from "./images";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


export type CreateBlogDTO = {
    title: string;
    subTitle: string;
    description: string;
    featured: boolean;
    date: Date;
    content: string;
    template: string;
    author: { id: string },
    images: createImageDTO[],
    tags: createTagDTO[]
}

export type DisplayBlogDTO = {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    featured: boolean;
    date: Date;
    content: string;
    template: string;
    author: User & {

        image: Image
    };
    tags: Tag[]
    images: Image[]
}

async function create(blog: CreateBlogDTO, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;
    let createdblog = await blogs.create({
        data: {
            ...blog,
            images: { create: blog.images },
            tags: { connectOrCreate: connectTags(blog.tags) },
            author: { connect: { id: blog.author.id } }
        }
    });
    return createdblog


}

async function update(blogId: string, blog: CreateBlogDTO, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;
    const updatedBlog = await blogs.update({
        where: { id: blogId },
        data: {
            ...blog,
            images: { connectOrCreate: connectImages(blog.images) },
            tags: { connectOrCreate: connectTags(blog.tags) },
            author: { connect: { id: blog.author.id } }
        }
    })
    return updatedBlog

}


async function remove(blogId: string, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;
    const existingblog = await blogs.findUnique({ where: { id: blogId } })
    if (existingblog) {
        await blogs.delete({ where: { id: blogId } })
    }
}
async function read(blogId: string, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;
    const existingblog = await blogs.findUnique({
        where: { id: blogId },
        select: {
            userId: false,
            content: true,
            date: true,
            description: true,
            featured: true,
            id: true,
            title: true,
            subTitle: true,
            template: true,
            author: {
                include: {
                    image: true,
                }
            },
            tags: true,
            images: true
        }
    })
    if (existingblog) return existingblog as DisplayBlogDTO;

}

async function getAll(page: number, pageSize: number, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;

    if (pageSize !== 10 && pageSize != 30 && pageSize !== 50) throw new Error('page size must be 10, 30 or 50')

    let allBlogs = await blogs.findMany({
        skip: (page - 1) * pageSize, take: pageSize,
        where: {
        },
        include: {
            // reviews: true,
            tags: true,
            author: true
        }
    })

    const totalCount = await blogs.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    return { records: allBlogs, currentPage: page, totalPages, pageSize }

}

export function getFeatured(prisma: PrismaClient) {
    const featured = prisma.blog.findFirst({
        where: { featured: true },
        include: {
            tags: true,
            author: {
                include: {
                    image: true,
                }
            },
            images: true
        }
    });
    return featured;

}

export function getRecent(prisma: PrismaClient) {
    const recentDate = new Date(Date.now() - 90 * (24 * 60 * 60 * 1000)) // 90 days
    const recent = prisma.blog.findMany({
        where: { date: { gte: recentDate } },
        include: {
            tags: true,
            author: {

                include: {
                    image: true,
                }
            }, images: true
        }
    });
    return recent;
}

export function getPopular(prisma: PrismaClient) {
    const popular = prisma.blog.findMany({
        skip: 0, take: 10,
        where: {

        },
        include: {
            // reviews: true,
            tags: true,
            author: {

                include: {
                    image: true,
                }
            }, images: true


        }
    })
    return popular
}

export function getEssential(prisma: PrismaClient) {

    const essential = prisma.blog.findMany({
        skip: 0, take: 10,
        where: {
        },
        include: {
            // reviews: true,
            tags: true,
            author: {
                include: {
                    image: true
                }
            },
            images: true



        }
    })
    return essential
}

async function getAuthor(id: string, page: number, prisma: PrismaClient) {
    const users = prisma.user;

    const author = await users.findUnique({
        where: { id }, include: {

            image: true,
            blogs: {
                take: 10,
                skip: (page - 1) * 10,
                include: {
                    images:true
                }
            }
        }
    })

    return author

}



export { create, update, remove, read, getAll, getAuthor }