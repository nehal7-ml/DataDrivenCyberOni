/**
 * @jest-environment node
 * 
 */

import {GET as getBlog, DELETE as deleteBlog, PUT as updateBlog} from '@/app/api/blogs/[id]/route'
import {POST as addblogHandler} from '@/app/api/blogs/[id]/route'
import {GET as getBlogs} from '@/app/api/blogs/[id]/route'
import { createMocks } from 'node-mocks-http'
import { describe, expect, test, it, beforeAll } from '@jest/globals';
import { CreateTagDTO } from "@/crud/tags";
import { Blog } from "@prisma/client";
import { CreateImageDTO, CreateBlogDTO } from "@/crud/DTOs";


describe('Testing blogs Api', () => {
    const mockblog: CreateBlogDTO = {
        title: 'TEst Tilte',
        content: 'testcontent',
        description: 'test  description',
        date: new Date(),
        featured:false,
        subTitle: 'preview',
        author: {
            email: 'nehal.sk.99@gmail.com'
        },
        tags: [
            { name: 'Tech' },
            { name: 'Mobile' },
        ] as CreateTagDTO[],
        images: [
            { name: 'Image 1', src: 'image1.jpg' } as CreateImageDTO,
            { name: 'Image 2', src: 'image2.jpg' } as CreateImageDTO,
        ],
    };

    let createdblog: Blog;


    it('Adds a blog to the test database', async () => {
        const { req, res } = createMocks({
            method: 'POST',
            body: mockblog,
        })
        console.log(typeof addblogHandler);
        const response = await addblogHandler(req);

        expect(response.status).toEqual(200);
        createdblog = (await response.json()).data;
    });
    it('delete blog', async () => {
        const { req, res } = createMocks({
            method: 'DELETE',
            body: mockblog,
        })

        const response = await deleteBlog(req, { params: { id: createdblog.id } });
        expect(response.status).toBe(200)
    })

});
