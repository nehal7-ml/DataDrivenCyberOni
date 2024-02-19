"use server"

import { addSupport } from "@/lib/externalRequests/notion";
import { ReviewFormState } from ".";

export async function submitReview(params: ReviewFormState) {
    const state = params
    try {
        const success = await addSupport({
            "Contact Information": { content: params.contact, type: "text" },
            "Customer Name": { content: params.name, type: "text" },
            Description: { content: params.message, type: "text" },
            Priority: { content: "HIGH", type: 'select' },
            Status: { content: "PENDING", type: 'select' }
        })
        if (success.object === 'page') return { ...state, success: true }
    
        return state
    } catch (error) {

        return { ...state, success: false }
    }

}