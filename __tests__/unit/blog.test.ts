/**
 * @jest-environment node
 */

import { describe, expect, test, it } from '@jest/globals';
import prisma from "@/lib/prisma";
import { addLike, addView, create, getBySearchTerm, remove, removeLike } from "@/crud/blog";
import { CreateBlogDTO, CreateImageDTO, CreateTagDTO } from "@/crud/DTOs";
import { Blog } from "@prisma/client";

describe('Testing Service crud unit functions', () => {
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
    it('should successfully create a Blog', async () => {
        const resp = await create(mockblog, prisma);
        expect(resp.title).toBe(mockblog.title);
        createdblog = resp;
    });
    it('should successfully retrive searched Blog', async () => {
        const resp = await getBySearchTerm('Automate', 1, prisma);
        expect(resp.length).toBeGreaterThan(0);
    });

    it('should successfully retrive searched Blog add a like and retrieve is user liked it', async () => {
        const resp = await addView({ id: createdblog.id, userEmail: 'nehal.sk.99@gmail.com'}, prisma);
        //console.log(resp);
        expect(resp.Likes.length).toBeGreaterThan(0);
    });

    it('should successfully add a like for the user', async () => {
        const resp = await addLike( createdblog.id,  'nehal.sk.99@gmail.com', prisma);
        expect(resp).toBe(true);
    });

    it('should successfully remove a like for the user', async () => {
        const resp = await removeLike( createdblog.id,  'nehal.sk.99@gmail.com', prisma);
        //console.log(resp);
        expect(resp).toBe(false);
    });


    it('should successfully remove a blog', async () => {
        const resp = await remove( createdblog.id,  prisma);
        //console.log(resp);
        expect(resp).toBe(undefined);
    });





});
