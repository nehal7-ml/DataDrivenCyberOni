import { Client } from '@notionhq/client';
import { CreatePageParameters, CreatePageResponse, UpdatePageParameters, UpdatePageResponse } from "@notionhq/client/build/src/api-endpoints";

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
    refToken?: string
    howHelp?: string


}
export async function addToMarketingCrm(record: CreatePageParams) {

    const properties = generateRecord(record);
    const response = await notion.pages.create({
        parent: {
            database_id: marketing_crm_contacts_database_id as string,
        },
        properties,
    } as CreatePageParameters)
    // console.log("repsonse", respJson);
    return response;
}

export async function getRecord(email: string) {
    const response = await notion.databases.query({
        database_id: marketing_crm_contacts_database_id as string,
        filter: {
            property: 'Email Address',
            email: {
                equals: email,
            },
        },
    });

    return response.results.length > 0 ? response.results[0] : null;
}

export async function updateRecord(id: string, record: CreatePageParams) {
    if (!id) {
        throw new Error(`Record with email ${record.email} not found.`);
    }

    const properties = generateRecord(record)

    const response = await notion.pages.update({
        page_id: id,
        properties
    } as UpdatePageParameters);

    return response;
}

export async function upsertRecord(record: CreatePageParams): Promise<CreatePageResponse | UpdatePageResponse> {
    const existingRecord = await getRecord(record.email);

    if (existingRecord) {
        // If the record exists, update it
        return updateRecord(existingRecord.id, record);
    } else {
        // If the record doesn't exist, create a new one
        return addToMarketingCrm(record);
    }

}
export async function deleteRecord(email: string) {
    const existingRecord = await getRecord(email);

    if (!existingRecord) {
        throw new Error(`Record with email ${email} not found.`);
    }

    // Archive the existing record (simulate delete)
    const response = await notion.pages.update({
        page_id: existingRecord.id,
        archived: true,
    });

    return response;
}
export async function getDatabase({
    databaseId,
}: {
    databaseId: string;
}): Promise<any> {
    const response = await notion.databases.retrieve({ database_id: databaseId })
    return response
}


export function generateRecord(record: CreatePageParams) {
    return {
        "Email Address": { email: record.email },
        "Name": { title: [{ text: { content: record.name } }] },
        "Phone": record.phone ? { phone_number: record.phone } : undefined,
        "Message": record.message ? { rich_text: [{ text: { content: record.message } }] } : undefined,
        "Company": record.company ? { rich_text: [{ text: { content: record.company } }] } : undefined,
        "Referral": record.referral ? { rich_text: [{ text: { content: record.referral } }] } : undefined,
        "Time Line": record.timeline ? { rich_text: [{ text: { content: record.timeline } }] } : undefined,
        "Current Challenges": record.challenges ? { rich_text: [{ text: { content: record.challenges } }] } : undefined,
        "Number of Employees": record.employess ? { number: Number(record.employess) } : undefined,
        "Requirements": record.requirements ? { multi_select: record.requirements?.map(requirement => ({ name: requirement })) } : undefined,
        "ReferralToken": record.refToken ? { rich_text: [{ text: { content: record.refToken } }] } : undefined,
        "How_we_help": record.howHelp ? { rich_text: [{ text: { content: record.howHelp } }] } : undefined
    }

}