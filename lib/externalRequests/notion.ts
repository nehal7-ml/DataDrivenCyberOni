import axios from "axios";

const notionApiKey = process.env.notion_pub_key!;
const marketing_crm_contacts_database_id =
    process.env.marketing_crm_contacts_database_id!;


export interface NewRecordType {
    "Email Address": { email: string };
    Company?: {
        has_more: boolean;
        id: string;
        type: string;
        relation: [{ id: string }];
    };
    "Converted to Opportunity": { checkbox: boolean };
    Owner?: { id: string; type: string; people: [] };
    Title?: {
        rich_text: { text: { content: string } }[];
    };
    Name?: {
        title: { text: { content: string } }[];
    };
    Message: {
        rich_text: { text: { content: string } }[];
    };
}

export interface CreatePageParams {
    newRecord: NewRecordType;
}
export async function addToMarketingCrm({ newRecord }: CreatePageParams) {
    const headers = {
        "Notion-Version": "2021-08-16",
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
    };
    const config = {
        headers,
    };
    const response = await fetch(
        `https://api.notion.com/v1/pages`,
        {
            method: "POST",
            body: JSON.stringify({
                parent: {
                    database_id: marketing_crm_contacts_database_id,
                },
                properties: newRecord,
            }),
            headers: headers,
        }
    );
    const respJson = await response.json()
    console.log("repsonse", respJson);
    return respJson;
}


