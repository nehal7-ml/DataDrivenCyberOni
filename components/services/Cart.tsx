'use client'
import React, { useState } from 'react';
import CartItem from './CartItem';
import { ServiceCartItem, SubService } from "@prisma/client";
import { DisplayServiceCartItemDTO, UpdateServiceCartItemDTO } from "@/crud/DTOs";
import { calculateServiceCartTotal } from "@/lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import CalendlyModal from "../Calendly/CalendlyModal";
import CalendlyPopup from "../Calendly";
import Link from "next/link";
import { useNotify } from "../Notification";

const Cart = ({ cartItems, session }: { cartItems: DisplayServiceCartItemDTO[], session: Session }) => {

    const router = useRouter();
    const notify = useNotify();

    function removeFromCartItems(itemId: string, subServiceId: string) {

        let current = cartItems.find(item => item.id === itemId)?.addons as SubService[]

        current = current.filter(addon => addon.id !== subServiceId)
        // console.log(current, subServiceId);
        updateCart(itemId, current)

    }

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
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <CartItem removeFromCart={removeFromCartItems} item={item} />
                        </div>
                    ))}
                    <div className="mt-4 flex justify-between items-center">
                        <div className="">
                            <p className="text-lg font-semibold">Total: ${calculateServiceCartTotal(cartItems)}</p>
                        </div>
                        <div id="__next" onClick={() => setScheduled(true)}>
                            <CalendlyPopup CTAText="Click to schedule" className="hover:underline text-blue-600" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center" onClick={onClickPay}>
                        <Link href={{ pathname: scheduled ? '/payments/services' : '#' }} className="inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">Complete Payment</Link>
                    </div>

                </div>
            )}

        </div>
    );
};


export default Cart;
