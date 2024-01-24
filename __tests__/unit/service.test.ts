/**
 * @jest-environment node
 */

import { getBySearchTerm } from "@/crud/service";
import { addToSendGrid } from "@/lib/externalRequests/sendgrid";
import { describe, expect, test, it } from '@jest/globals';
import prisma from "@/lib/prisma";

describe('Testing Service crud unit functions', () => {

    it('should successfully retrive searched service', async () => {
        const resp = await getBySearchTerm('Web', 1, prisma);
        expect(resp.length).toBeGreaterThan(0);
    });



});
