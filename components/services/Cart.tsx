'use client'
import React, { useState } from 'react';
import CartItem from './CartItem';
import { ServiceCartItem, SubService } from "@prisma/client";
import { DisplayServiceCartItemDTO, UpdateServiceCartItemDTO } from "@/crud/DTOs";
import { calculateServiceCartTotal } from "@/lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import CalendlyPopup from "../Calendly";
import Link from "next/link";
import { useNotify } from "../Notification";
import CheckoutForm from "../CheckoutForm";
import PaymentModal from "../PaymentModal";

const Cart = ({ cartItems, session, cartId, clientSecret }: { cartItems: DisplayServiceCartItemDTO[], session: Session, cartId: string, clientSecret?: string }) => {

    const router = useRouter();
    const notify = useNotify();


    const [scheduled, setScheduled] = useState(false);

    async function updateCart(itemId: string, items: SubService[]) {
        const body: UpdateServiceCartItemDTO = {
            userId: (session?.user as { id: string })?.id,
            description: `adding Service with addons ${''}`,
            addons: items.map(item => ({ id: item.id })),
            cartItemId: itemId
        }
        const res = await fetch(`/api/cart/services/${(session?.user as { id: string })?.id}`, { method: 'PUT', body: JSON.stringify(body) })
        router.refresh()

    }

    function onClickPay() {
        if (!scheduled) {
            notify('schedule meeting before payment', 'fail', { autoClose: true })
        }
    }

    return (
        <div className="mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                    <div className="flex flex-col lg:flex-row container mx-auto gap-5">
                        <div className="lg:w-1/2">
                            {cartItems.map((item, index) => (
                                <div key={index} className="">
                                    <CartItem updateCart={updateCart} item={item} />
                                </div>
                            ))}
                            <div className="mt-4 flex justify-between items-center">
                                <div className="">
                                    <p className="text-lg font-semibold">Total: ${calculateServiceCartTotal(cartItems)}</p>
                                </div>
                            </div>
                            <div className="w-full text-center flex justify-center" onClick={() => setScheduled(true)}>
                                <CalendlyPopup CTAText="Click to schedule" className="rounded-lg text-gray-900 dark:text-inherit bg-gray-300 dark:bg-gray-700 p-2 hover:shadow-lg hover:underline " />
                        </div>
                    </div>


                        <div className="lg:w-1/2">
                            {clientSecret && <PaymentModal cartId={cartId} clientSecret={clientSecret} />}
                    </div>

                </div>
            )}

        </div>
    );
};


export default Cart;
