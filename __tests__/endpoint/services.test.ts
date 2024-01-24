/**
 * @jest-environment node
 */

import { GET, DELETE, PUT } from '@/app/api/services/[id]/route'
import { POST as addServiceHandler } from '@/app/api/services/add/route'
import * as getAllServiceHandler from '@/app/api/services/[id]/route'
import { createMocks } from 'node-mocks-http'
import { describe, expect, test, it, beforeAll } from '@jest/globals';
import { CreateFaqDTO, CreateImageDTO, CreateServiceDTO, CreateServiceDescription, CreateSubServiceDTO, CreateTagDTO } from "@/crud/DTOs";
import { } from "@/crud/service";
import { Service } from "@prisma/client";
import { NextRequest } from "next/server";


describe('Testing Services Api', () => {
    const mockService: CreateServiceDTO = {
        title: 'Web Development Service',
        previewContent: 'Quality web development services for your business.',
        featured: true,
        ServiceDescription: [
            {
                title: 'Introduction',
                content: 'Our web development service includes...',
                imageOnLeft: true,
                image: { name: 'Service Image', src: 'service-image.jpg' } as CreateImageDTO,
            } as CreateServiceDescription,
        ],
        hourlyRate: 50,
        valueBrought: ['Responsive Design', 'User-Friendly Interfaces'],
        skillsUsed: ['HTML', 'CSS', 'JavaScript', 'React'],
        htmlEmbed: '<iframe src="https://example.com"></iframe>',
        image: { name: 'Service Cover Image', src: 'https://picsum.photos/200' } as CreateImageDTO,
        SubServices: [
            {
                id: '1',
                title: 'Custom Web Development',
                pricingModel: 'DEFAULT',
                discounts: [],
                serviceDeliverables: ['Custom Features', 'Responsive Design'],
                serviceUsageScore: 4.5,
                description: 'Tailored web development solutions for your unique requirements.',
                department: 'Development',
                estimated_hours_times_fifty_percent: 20,
                estimated_hours_times_one_hundred_percent: 40,
                overheadCost: 1000,
                complexity: 3,
                skillLevel: 'Advanced',
                image: { name: 'Subservice Image', src: 'https://picsum.photos/200' } as CreateImageDTO,
                tags: [{ name: 'Custom Development' }] as CreateTagDTO[],
            } as CreateSubServiceDTO,
        ],
        tags: [
            { name: 'Web Development' },
            { name: 'Custom Solutions' },
        ] as CreateTagDTO[],
        faqs: [
            { question: 'How long does it take?', answer: 'The development time varies based on...' } as CreateFaqDTO,
        ] as CreateFaqDTO[],

    };

    let createdService: Service;


    it('Adds a product to the test database', async () => {
        const req = new NextRequest('http://localhost:3000/api/services/add', {
            method: 'POST',
            body: JSON.stringify(mockService)
        })
        const response = await addServiceHandler(req);

        expect(response.status).toEqual(200);
        createdService = (await response.json()).data;
    }, 20000);
    it('delete Service', async () => {
        const req = new NextRequest('http://localhost:3000/api/delete/', {
            method: 'DELETE',
        })

        const response = await DELETE(req, { params: { id: createdService.id } });
        expect(response.status).toBe(200)
    }, 10000)

});
