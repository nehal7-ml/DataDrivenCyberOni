import sgMail from '@sendgrid/mail'
import client, { Client } from '@sendgrid/client'
import { ClientRequest } from "@sendgrid/client/src/request";
import { SendVerificationRequestParams } from "next-auth/providers/email";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

client.setApiKey(process.env.SENDGRID_API_KEY as string);


export type Lead = {
    firstName?: string;
    lastName?: string;
    email: string;
    city?: string;
}


export async function sendMagicLink({identifier}:SendVerificationRequestParams) {

}

export async function sendMail(email: string, message: string) {
    const msg: sgMail.MailDataRequired = {
        to: email, // Change to your recipient
        from: process.env.SENDGRID_EMAIL as string, // Change to your verified sender
        subject: 'Sendgrid email',
        text: message,
    }

    let response = await sgMail.send(msg);

    console.log(response[0].body)
    return response[0].statusCode

}


export async function contactForm(sender: string, message: string, subject: string) {
    const msg: sgMail.MailDataRequired = {
        to: process.env.CONTACT_EMAIL as string, // Change to your recipient
        from: process.env.SENDGRID_EMAIL as string, // Change to your verified sender
        subject: `Question/Message from ${sender} about ${subject}`,
        text: message,
    }

    let response = await sgMail.send(msg);
    return response[0].statusCode
}



export async function addToSendGrid(lead: Lead) {

    const list = await getList(process.env.SENDGRID_LIST as string);
    const data = {
        list_ids: [
            list.id,
        ],

        "contacts": [
            {
                "email": lead.email,
                "first_name": lead.firstName,
                "last_name": lead.lastName,
                "city": lead.city,
            }
        ]
    };

    const request: ClientRequest = {
        url: `/v3/marketing/contacts`,
        method: 'PUT',
        body: data
    }
    let response = await client.request(request);
    console.log(response[0].body)
    return response[0].statusCode

}


async function getList(listName: string) {
    const queryParams = {
        "page_size": 100
    };
    const request: ClientRequest = {
        url: `/v3/marketing/lists`,
        method: 'GET',
        qs: queryParams
    }

    let response = await client.request(request);

    console.log(response[0].body)
    for (const list of (response[0].body as { result: Array<any> }).result) {
        if (list.name === listName) return list;
    }

}