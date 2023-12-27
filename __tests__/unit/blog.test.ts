/**
 * @jest-environment node
 */

import { describe, expect, test, it } from '@jest/globals';
import prisma from "@/lib/prisma";
import { getBySearchTerm } from "@/crud/blog";

describe('Testing Service crud unit functions', () => {

    it('should successfully retrive searched service', async () => {
        const resp = await getBySearchTerm('Automate', 1, prisma);
        expect(resp.length).toBeGreaterThan(0);
    });



});
