import PaymentModal from "@/components/PaymentModal"
import CheckoutServices from "@/components/services/Checkout"
import { getAll } from "@/crud/service"
import React from 'react'
import prisma from "@/lib/prisma"
import { createPaymentIntent } from "@/lib/externalRequests/stripe"
async function PaymentPage({ searchParams }: { searchParams: { price: number, currency: string, description: string, serviceId: string } }) {

  const { price, currency, serviceId } = searchParams

  const intent = await createPaymentIntent({ price: price ?? 6000, description: "Payment for folwwoing service" })
  return (
    <div>
      {/* <CheckoutServices services={services.records} /> */}
      <PaymentModal clientSecret={intent.client_secret as string}></PaymentModal>
    </div>
  )
}

export default PaymentPage