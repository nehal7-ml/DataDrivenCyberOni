'use client'
import PaymentModal from "@/components/PaymentModal"
import React from 'react'

function PaymentPage({searchParams} :{searchParams: {price:number , currency: string, description: string, paymentId: string}}) {
  return (
    <div>
        
        <PaymentModal></PaymentModal>
    </div>
  )
}

export default PaymentPage