import "server-only"
import { PrismaClient } from "@prisma/client";
import { connectOrCreateObject as connectTags } from "./tags";
import { connectOrCreateObject as connectImages } from "./images";
import { cleanHtmlString, getRandomFromArray } from "@/lib/utils";
import { CommentDTO, CreateBlogDTO, DisplayBlogDTO } from "./DTOs";
import { getUserByEmail } from "./user";
import { View } from "lucide-react";
import { DefaultArgs } from "@prisma/client/runtime/library";

async function create(blog: CreateBlogDTO, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;
    let createdblog = await blogs.create({
        data: {
            ...blog,
            images: await connectImages(blog.images, []),
            tags: connectTags(blog.tags, []),
            author: { connect: { email: blog.author.email } },
        },
    });
    return createdblog;
}

async function update(
    blogId: string,
    blog: CreateBlogDTO,
    prismaClient: PrismaClient,
) {
    const blogs = prismaClient.blog;
    const oldBlog = await blogs.findUnique({
        where: { id: blogId },
        include: { images: true, tags: true },
    });
    const updatedBlog = await blogs.update({
        where: { id: blogId },
        data: {
            ...blog,
            images: await connectImages(blog.images, oldBlog!.images),
            tags: connectTags(blog.tags, oldBlog!.tags),
            author: { connect: { email: blog.author.email } },
        },
    });
    return updatedBlog;
}

async function remove(blogId: string, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;
    const existingblog = await blogs.findUnique({ where: { id: blogId } });
    if (existingblog) {
        await blogs.delete({ where: { id: blogId } });
    }
}
async function read(blogId: string, prismaClient: PrismaClient) {
    const blogs = prismaClient.blog;
    const existingblog = await blogs.findUnique({
        where: {
            id: blogId,

            publishDate: {
                lte: new Date(),
            },
        },
        select: {
            userId: false,
            content: true,
            date: true,
            description: true,
            featured: true,
            id: true,
            title: true,
            subTitle: true,
            publishDate: true,
            ctaProps: true,
            author: {
                select: {
                    id: true,
                    email: true,
                },
            },
            tags: true,
            images: true,
            Comments: true,
            category: true,
        },
    });
    if (existingblog) return existingblog;
}

async function getAll(
    page: number,
    pageSize: number,
    prismaClient: PrismaClient,
) {
    const blogs = prismaClient.blog;

    if (pageSize !== 10 && pageSize != 30 && pageSize !== 50 && pageSize !== 0)
        throw new Error("page size must be 10, 30 or 50");

    let allBlogs = await blogs.findMany({
        skip: page === 0 ? 0 : (page - 1) * pageSize,
        take: page === 0 ? 9999 : pageSize,
        where: {
            publishDate: {
                lte: new Date(),
            },
        },
        include: {
            // reviews: true,
            tags: true,
            author: true,
            category: true,
        },
    });

    const totalCount = await blogs.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    return { records: allBlogs, currentPage: page, totalPages, pageSize };
}

export async function getFeatured(prisma: PrismaClient) {
    const featured = await prisma.blog.findMany({
        take: 10,
        where: {
            featured: true,
            publishDate: {
                lte: new Date(),
            },
        },
        orderBy: {
            publishDate: "desc",
        },
        include: {
            tags: true,
            author: {
                include: {
                    image: true,
                },
            },
            images: true,
            category: true,
        },
    });
    return getRandomFromArray(featured);
}

export async function getBlogsByCategory(id: string, page: number, prisma: PrismaClient) {

    const query = {
        OR: [
            {
                category: {
                    parent: {
                        id: id
                    }
                }
            }, {
                category: {
                    id: id
                }
            }

        ],
        AND: [
            {
                publishDate: {
                    lte: new Date(),
                },
            },
        ]

    }
    const data = await prisma.$transaction([
        prisma.blog.count({ where: query }),
        prisma.blog.findMany({
            skip: page === 0 ? 0 : (page - 1) * 5,
            take: 5,
            where: query,
            include: {
                tags: true,
                author: {
                    include: {
                        image: true,
                    },
                },
                images: true,
                category: true,
            },
            orderBy: {
                publishDate: 'desc'
            }
        })
    ])
        ;
    const totalPages = Math.ceil(data[0] / 10);

    return { list: data[1], totalPages: totalPages }

}



export async function addView(
    { id, userEmail }: { id: string; userEmail?: string },
    prisma: PrismaClient,
) {
    const blogs = prisma.blog;
    try {
        const update = await blogs.update({
            where: {
                id,
                publishDate: {
                    lte: new Date(),
                },
            },
            data: {
                Views: { increment: 1 },
            },
            include: {
                tags: true,
                category: true,

                author: {
                    include: {
                        image: true,
                    },
                },
                images: true,
                Likes: userEmail
                    ? {
                        where: {
                            user: {
                                email: userEmail,
                            },
                        },
                    }
                    : false,
                _count: {
                    select: {
                        Likes: true,
                    },
                },
                Comments: {
                    include: {
                        User: true,
                    },
                },
            },
        });

        return update;
    } catch (error) {
        console.log(error);
        return;
    }
}
export async function getRecent(page: number, prisma: PrismaClient) {
    const recentDate = new Date(Date.now() - 90 * (24 * 60 * 60 * 1000)); // 90 days

    const recentQuery = {
        AND: [
            {
                publishDate: {
                    lte: new Date(),
                },
            },
            {
                publishDate: {
                    gte: recentDate,
                },
            },
        ],
    }

    const data = await prisma.$transaction([
        prisma.blog.count({ where: recentQuery }),
        prisma.blog.findMany({
            skip: page === 0 ? 0 : (page - 1) * 10,
            take: 10,
            where: recentQuery,
            include: {
                tags: true,
                category: true,

                author: {
                    include: {
                        image: true,
                    },
                },
                images: true,
            },
            orderBy: {
                publishDate: "desc",
            },
        })
    ])

    const totalPages = Math.ceil(data[0] / 10);

    return { recent: data[1], totalPages };
}

export async function getPopular(page: number, prisma: PrismaClient) {


    const popular = await prisma.blog.findMany({
        skip: page === 0 ? 0 : (page - 1) * 10,
        take: 10,
        where: {
            publishDate: {
                lte: new Date(),
            },
        },
        include: {
            // reviews: true,
            tags: true,
            category: true,

            author: {
                include: {
                    image: true,
                },
            },
            images: true,
        },
        orderBy: [
            { Likes: { _count: "desc" } },
            { Views: "desc" },
            { publishDate: "desc" },
        ],
    });

    return { popular, totalPages: 5 };
}

export async function getEssential(page: number, prisma: PrismaClient) {

    const data = await prisma.$transaction([
        prisma.blog.count({ where: { publishDate: { lte: new Date() } } }),
        prisma.blog.findMany({
            skip: page === 0 ? 0 : (page - 1) * 10,
            take: 10,
            where: {
                publishDate: {
                    lte: new Date(),
                },
            },
            include: {
                // reviews: true,
                tags: true,
                category: true,

                author: {
                    include: {
                        image: true,
                    },
                },
                images: true,
            },
        })



    ])

    const totalPages = Math.ceil(data[0] / 10);

    return { essential: data[1], totalPages };
}

async function getAuthor(id: string, page: number, prisma: PrismaClient) {
    const users = prisma.user;

    const totalBlogs = await prisma.blog.count({
        where: {
            author: {
                id
            },
            publishDate: {
                lte: new Date()
            }
        }
    })
    const author = await users.findUnique({
        where: { id },
        include: {
            image: true,
            blogs: {
                where: {
                    publishDate: {
                        lte: new Date()
                    }
                },
                take: 10,
                skip: (page - 1) * 10,
                include: {
                    images: true,
                },
                orderBy: {
                    date: "desc",
                }
            },
        },
    });

    return { author, totalPages: Math.ceil(totalBlogs / 10) };
}

async function addComment(comment: CommentDTO, prisma: PrismaClient) {
    const comments = prisma.blogComment;
    // console.log(comment);
    const newComment = await comments.create({
        data: {
            comment: comment.comment,
            User: {
                connect: {
                    email: comment.email,
                },
            },
            Blog: { connect: { id: comment.blogId } },
        },
        include: {
            User: true,
        },
    });

    return newComment;
}

async function getComments(id: string, page: number, prisma: PrismaClient) {
    const comments = prisma.blogComment;

    const readComments = await comments.findMany({
        skip: (page - 1) * 5,
        take: 5,
        where: {
            blogId: id,
        },
    });

    return readComments;
}

export async function getSimilar(id: string, page: number, prisma: PrismaClient) {



    const blog = await prisma.blog.findUnique({

        where: {
            id,
        },
        include: {
            category: {
                include: {
                    parent: true,
                },
            },
            tags: true,
        },
    });

    if (!blog) return { similar: [], totalPages: 0 };
    else {
        const query = {
            AND: [
                {
                    id: { not: blog.id },
                },
                {
                    publishDate: {
                        lte: new Date(),
                    },
                },
            ],
            OR: [
                {
                    category: {
                        id: {
                            equals: blog.category?.id ?? "",
                        },
                    },
                },

                {
                    category: {
                        parentId: {
                            equals: blog.category?.parent?.id ?? "",
                        },
                    },
                },

                {
                    tags: {
                        every: {
                            name: {
                                in: blog.tags.map((t) => t.name),
                            },
                        },
                    },
                },
            ],
        }

        const data = await prisma.$transaction([
            prisma.blog.count({ where: query }),
            prisma.blog.findMany({
                skip: page === 0 ? 0 : (page - 1) * 10,
                take: 10,
                where: query,
                include: {
                    tags: true,
                    category: true,

                    author: {
                        include: {
                            image: true,
                        },
                    },
                    images: true,
                },
            })

        ])

        const totalPages = Math.ceil(data[0] / 10);


        return { similar: data[1], totalPages };
    }
}
export async function getBySearchTerm(
    search: string,
    page: number,
    prisma: PrismaClient,
) {
    const blogs = prisma.blog;
    const searchQuery = {
        where: {
            OR: [
                {
                    title: {
                        contains: search,
                    },
                },
                {
                    description: {
                        contains: search,
                    },
                },
                {
                    subTitle: {
                        contains: search,
                    },
                },
                {
                    content: {
                        contains: cleanHtmlString(search),
                    },
                },
            ],
            AND: [
                {
                    publishDate: {
                        lte: new Date(),
                    },
                },
            ],
        },
        orderBy: {
            publishDate: "desc",
        },
    }
    const data = await prisma.$transaction([blogs.count({ where: searchQuery.where }), blogs.findMany({
        where: searchQuery.where, orderBy: {
            publishDate: "desc",
        }, skip: (page - 1) * 10, take: 10
    })]);
    return { records: data[1], totalPages: Math.ceil(data[0] / 10) };
}

export async function addLike(
    blogId: string,
    userEmail: string,
    prisma: PrismaClient,
) {
    const BlogLike = prisma.blogLike;
    const Like = await BlogLike.create({
        data: {
            blog: {
                connect: { id: blogId },
            },
            user: {
                connect: { email: userEmail },
            },
        },
    });

    const newLikes = await BlogLike.count({
        where: {
            blog: {
                id: blogId,
            },
        },
    });
    return { liked: true, likes: newLikes };
}

export async function removeLike(
    blogId: string,
    userEmail: string,
    prisma: PrismaClient,
) {
    const BlogLike = prisma.blogLike;
    const user = await getUserByEmail(userEmail, prisma);
    if (!user) return false;
    const Like = await BlogLike.deleteMany({
        where: {
            blogId: blogId,
            userId: user.id,
        },
    });

    const newLikes = await BlogLike.count({
        where: {
            blog: {
                id: blogId,
            },
        },
    });

    return { liked: false, likes: newLikes };
}

export {
    create,
    update,
    remove,
    read,
    getAll,
    getAuthor,
    addComment,
    getComments,
};
