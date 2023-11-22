import { Client } from '@notionhq/client';
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";

const notionApiKey = process.env.NOTION_KEY;
const notion = new Client({ auth: notionApiKey });

const marketing_crm_contacts_database_id = process.env.NOTION_DATABASE_ID!;


export type NewRecordType = Record<string,
    { type: 'rich_text', rich_text: { text: { content: string }, type: 'text' }[] } |
    { type: 'email', email: string }
>

export interface CreatePageParams {
    email: string,
    name: string,
    company?: string,
    employess?: string,
    requirements?: string[],
    timeline?: string,
    budget?: string,
    phone?: string,
    referral?: string,
    challenges?: string,
    message?: string,


}
export async function addToMarketingCrm(record: CreatePageParams) {
    const headers = {
        "Notion-Version": "2021-08-16",
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
    };
    const config = {
        headers,
    };
    const response = await notion.pages.create({
        parent: {
            database_id: marketing_crm_contacts_database_id as string,
        },
        properties: {
            "Email Address": { email: record.email },
            "Name": {title:[{text:{content:record.name}}]},
            "Phone": { phone_number: record.phone },
            "Message": { rich_text: [{ text: { content: record.message } }] },
            "Company": { rich_text: [{ text: { content: record.company } }] },
            "Referral": { rich_text: [{ text: { content: record.referral } }] },
            "Time Line": { rich_text: [{ text: { content: record.timeline } }] },
            "Current Challenges": { rich_text: [{ text: { content: record.challenges } }] },
            "Number of Employees": { number: Number(record.employess) },
            "Requirements": { multi_select: record.requirements?.map(requirement => ({ name: requirement })) }
        }


        ,
    } as CreatePageParameters)
    // console.log("repsonse", respJson);
    return response.object;
}


