/**
 * @jest-environment node
 */

import {GET, DELETE, PUT} from '@/app/api/events/[id]/route'
import {POST as addEventHandler} from '@/app/api/events/[id]/route'
import * as getAllEventHandler from '@/app/api/events/[id]/route'
import { createMocks } from 'node-mocks-http'
import { describe, expect, test, it, beforeAll } from '@jest/globals';
import { CreateTagDTO } from "@/crud/tags";
import { Event, EventStatus } from "@prisma/client";
import { CreateImageDTO } from "@/crud/DTOs";
import { createEventDTO } from "@/crud/event";


describe('Testing Events Api', () => {
    const mockEvent: createEventDTO = {
        date: new Date(),
        description: 'Test description',
        eventLink: 'http://test.com',
        isVirtual:false,
        location: 'San fransico, CA',
        name: 'Event name',
        status:"UPCOMING",
    };

    let createdEvent: Event;


    it('Adds a event to the test database', async () => {
        const { req, res } = createMocks({
            method: 'POST',
            body: mockEvent,
        })

        const response = await addEventHandler(req);

        expect(response.status).toEqual(200);
        createdEvent = (await response.json()).data;
    });
    it('delete Event', async () => {
        const { req, res } = createMocks({
            method: 'DELETE',
            body: mockEvent,
        })

        const response = await DELETE(req, { params: { id: createdEvent.id } });
        expect(response.status).toBe(200)
    })

});
