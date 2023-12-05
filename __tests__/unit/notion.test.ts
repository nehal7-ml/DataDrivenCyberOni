/**
 * @jest-environment node
 */

import { CreatePageParams, addToMarketingCrm } from "@/lib/externalRequests/notion";
import { describe, expect, it, afterAll } from "@jest/globals";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";


describe("test notion functions", () => {
    const record: CreatePageParams = {
        email: "email@example.com",
        budget: "10010c,100",
        challenges: 'challenges',
        employess: "100000",
        message: "message",
        company: "company",
        name: "name",
        phone: "230-12309213",
        referral: "facebook",
        requirements: ["App Development"],
        timeline: '3 mohtnos',
        refToken:"jhsdalkshdlkajsdklasjd"
    }

    it('should add contact to marketing', async () => {

        const resp = await addToMarketingCrm(record)

        //console.log(resp);
        expect(resp).toBe('page')
    })

})