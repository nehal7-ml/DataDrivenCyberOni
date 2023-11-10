'use server'

import { verifyCaptcha } from "@/lib/externalRequests/google";
import { addToSendGrid, sendMailHtml } from "@/lib/externalRequests/sendgrid";
import { createBackgroundTemplate } from "@/lib/utils";
import { redirect } from "next/navigation";
const template = `<div>
<p>Contact filled by {{firstName}} {{lastName}} </p>

<p>Details below: </p>
<p>move in date: {{date}}</p>
<p>bedroom count: {{bedCount}}</p>
<p>bath count: {{bathCount}}</p>
<p>credit Score: {{credit}}</p>
<p>budget: {{budget}}</p>

<div style="padding: 4px;">
    background :
    <div style="margin-left: 20px;">
    {{background}}
    </div>
</div>
<p>Lead Source: {{source}}</p>
<div style="padding: 4px;">
    Contact info:
    <div style="margin-left: 10px;">
        <p>name: {{firstName}} {{lastName}}</p>
        <p>email: {{email}}</p>
        <p>phone: {{phone}}</p>
    </div>
</div>
<p>Special request: {{message}}</p>
</div>`


export async function submitContact(formData: FormData, token: string) {

    const { success } = await verifyCaptcha(token);
    if (success !== true) {
        redirect(`?notify=true&message=${'Captcha Error'}&notifyType=${'fail'}`);
    } else {

        const backgroundString = createBackgroundTemplate(formData);

        console.log(formData.get('date'));
        const data: { [key: string]: string } = {
            'date': formData.get('date') as string,
            'bedCount': formData.get('bedCount') as string,
            'bathCount': formData.get('bathCount') as string,
            'bgNone': 'None',

            'credit': formData.get('credit') as string,
            'budget': formData.get('budget') as string,
            'firstName': formData.get('firstName') as string,
            'lastName': formData.get('lastName') as string,
            'email': formData.get('email') as string,
            'phone': formData.get('phone') as string,
            'source': formData.get('source') as string,
            'message': formData.get('message') as string,
            'terms': 'on',
            'background': backgroundString
        }
        await addToSendGrid({ email: data.email, firstName: data.firstName, lastName: data.lastName })
        const response = await sendMailHtml(formData.get('email') as string,
            process.env.CONTACT_EMAIL as string,
            formData.get('firstName') as string,

            `${template.replace(/{{(.*?)}}/g, (match, key) => data[key.trim()] || '')}`)
        // console.log(response);
        if (response === 202) return 200
        else return 400

    }

    // mutate data
    // revalidate cache
}



