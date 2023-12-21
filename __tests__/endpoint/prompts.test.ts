/**
 * @jest-environment node
 */

import {GET, DELETE, PUT} from '@/app/api/products/[id]/route'
import {POST as addPromptHandler} from '@/app/api/products/[id]/route'
import * as getAllPromptHandler from '@/app/api/products/[id]/route'
import { createMocks } from 'node-mocks-http'
import { describe, expect, test, it, beforeAll } from '@jest/globals';
import { CreateTagDTO } from "@/crud/tags";
import { CreateImageDTO } from "@/crud/DTOs";
import { createGptPromptDTO } from "@/crud/prompt";
import { GptPrompt } from "@prisma/client";


describe('Testing Prompts Api', () => {
    const mockPrompt: createGptPromptDTO = {
        description: 'Sample prompt for GPT',
        prompt: 'Generate creative text using GPT-3.5!',
        temperature: 0.7,
        max_tokens: 100,
        top_p: 0.9,
        best_of: 3,
        frequency_penalty: 0.5,
        presence_penalty: 0.3,
        stop: 'stopword1,stopword2,stopword3',
        timesUsed: 5,
        timesIntegrated: 2,
        costPerToken: 0.01,
        profitMargin: 0.2, // 20%
        image: { name: 'Prompt Image', src: 'prompt-image.jpg' } as CreateImageDTO,
        tags: [
            { name: 'Tech' },
            { name: 'Mobile' },
        ] as CreateTagDTO[],

    };

    let createdPrompt: GptPrompt;


    it('Adds a product to the test database', async () => {
        const { req, res } = createMocks({
            method: 'POST',
            body: mockPrompt,
        })

        const response = await addPromptHandler(req);

        expect(response.status).toEqual(200);
        createdPrompt = (await response.json()).data;
    });
    it('delete Prompt', async () => {
        const { req, res } = createMocks({
            method: 'DELETE',
            body: mockPrompt,
        })

        const response = await DELETE(req, { params: { id: createdPrompt.id } });
        expect(response.status).toBe(200)
    })

});
