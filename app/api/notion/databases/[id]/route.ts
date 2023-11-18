import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from 'next/router';
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextRequest, params: { id: string }) {

    try {

        const databaseId = params.id as string;
        const databases = await getDatabase({ databaseId });
        return NextResponse.json({ data: databases })


    } catch (error) {

        return NextResponse.json({ error }, { status: 500 })

    }
}


const notionApiKey = process.env.notion_pub_key!;
const marketing_crm_contacts_database_id =
    process.env.marketing_crm_contacts_database_id!;

export async function getDatabase({
    databaseId,
}: {
    databaseId: string;
}): Promise<any> {
    const headers = {
        "Notion-Version": "2021-08-16",
        Authorization: `Bearer ${notionApiKey}`,
    };

    const response = await axios.get(
        `https://api.notion.com/v1/databases/${databaseId}`,
        { headers },
    );
    return response.data;
}
