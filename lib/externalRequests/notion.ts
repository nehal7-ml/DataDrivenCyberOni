import { Client } from '@notionhq/client';
import { CreatePageParameters, CreatePageResponse, UpdatePageParameters, UpdatePageResponse } from "@notionhq/client/build/src/api-endpoints";

const notionApiKey = process.env.NOTION_KEY;
const notion = new Client({ auth: notionApiKey });



export type NewRecordType = Record<string,
    { type: 'rich_text', rich_text: { text: { content: string }, type: 'text' }[] } |
    { type: 'email', email: string }
>
export type CreatePageParams = Record<string,
    { type: 'email', content: string } |
    { type: 'title', content: string } |
    { type: 'phone', content: string } |
    { type: 'select', content: string[] } |
    { type: 'text', content: string } |
    { type: 'number', content: number }
    | undefined
> & {
    "Email Address": { type: 'email', content: string },
}
interface NotionProperty {
    [key: string]: any; // Additional properties can vary, so we use an index signature
}


export interface MarketingCrmRecord extends CreatePageParams {
    "Name": { type: 'title', content: string },
    "Company"?: { type: 'text', content: string },
    "Number of Employees"?: { type: 'number', content: number },
    "Requirements"?: { type: 'select', content: string[] },
    "Time Line"?: { type: 'text', content: string },
    "Budget"?: { type: 'text', content: string },
    "Phone"?: { type: 'phone', content: string },
    "Referral"?: { type: 'text', content: string },
    "Current Challenges"?: { type: 'text', content: string },
    "Message"?: { type: 'text', content: string },
    "ReferralToken"?: { type: 'text', content: string }
    "How_we_help"?: { type: 'text', content: string }


}

export interface AccountRecord {

}

export interface ReviewRecord {


}


export async function getRecord(email: string, databaseId: string) {
    const response = await notion.databases.query({
        database_id: databaseId as string,
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
    const properties = convertToNotionProperties(record)
    const response = await notion.pages.update({
        page_id: id,
        properties
    } as UpdatePageParameters);

    return response;
}

export async function addRecord(record: CreatePageParams, databaseId: string): Promise<CreatePageResponse> {
    const properties = convertToNotionProperties(record)
    const response = await notion.pages.create({
        parent: {
            database_id: databaseId as string,
        },
        properties,
    } as CreatePageParameters)
    // console.log("repsonse", respJson);
    return response;
}

export async function upsertRecord(record: CreatePageParams, databaseId: string): Promise<CreatePageResponse | UpdatePageResponse> {
    const existingRecord = await getRecord(record['Email Address'].content as string, databaseId);

    if (existingRecord) {
        // If the record exists, update it
        return updateRecord(existingRecord.id, record);
    } else {
        // If the record doesn't exist, create a new one
        return addRecord(record, databaseId);
    }

}
export async function deleteRecord(email: string, databaseId: string) {
    const existingRecord = await getRecord(email, databaseId);

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



// Function to convert a normal record to Notion properties
function convertToNotionProperties(record: CreatePageParams): NotionProperty {
    const property: NotionProperty = {}
    for (const key in record) {
        if (record[key] && record.hasOwnProperty(key)) {
            // Determine the type of property based on the value
            let notionRecord: any = record[key]?.content;

            // Create the Notion property object
            if (record[key]?.type === 'email') {
                notionRecord = { email: record[key]?.content }
            } else if (record[key]?.type === 'phone') {
                notionRecord = { phone_number: record[key]?.content }

            } else if (record[key]?.type === 'title') {
                notionRecord = { title: [{ text: { content: record[key]?.content } }] }
            }
            else if (record[key]?.type === 'number') {
                notionRecord = { number: Number(record[key]?.content) }

            }
            else if (record[key]?.type === 'text') {
                notionRecord = {
                    rich_text: [{ text: { content: record[key]?.content } }]

                }
            }
            else if (record[key]?.type === 'select') {
                notionRecord = { multi_select: (record[key]?.content as string[]).map(select => ({ name: select })) }
            }


            property[key] = notionRecord

            // Add the property to the properties array
        }
    }


    return property;
}