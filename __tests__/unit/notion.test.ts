/**
 * @jest-environment node
 */

import { addToMarketingCrm } from "@/lib/externalRequests/notion";
import { describe, expect, it, afterAll } from "@jest/globals";


describe("test notion functions", () => {


    it('should add contact to marketing', async () => {

        const resp = await addToMarketingCrm({
            newRecord: {
                "Converted to Opportunity": {checkbox:false},
                "Email Address": { email: "test@email.com" },
                Message: { rich_text: [{ text: { content: "new message" } }] },
                Title: { rich_text: [{ text: { content: "Ceo" } }] },
                Name: {title: [{text: { content: "Name"}}]},
            }
        })

        console.log(resp);
        expect(resp.object).toBe('page')
    })

})