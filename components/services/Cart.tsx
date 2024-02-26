'use client'
import React, { Dispatch, useState } from 'react';
import CartItem from './CartItem';
import { ServiceCartItem, SubService } from "@prisma/client";
import { Discount, DisplayServiceCartItemDTO, UpdateServiceCartItemDTO } from "@/crud/DTOs";
import { calculateServiceCartTotal } from "@/lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import CalendlyPopup from "../Calendly";
import Link from "next/link";
import { useNotify } from "../Notification";
import CheckoutForm from "../CheckoutForm";
import PaymentModal from "../PaymentWrapper";
import { MoveRight, X } from "lucide-react";
import LabelInput from "../shared/label-input";

const Cart = ({ cartItems, session, cartId, clientSecret }: { cartItems: DisplayServiceCartItemDTO[], session: Session, cartId: string, clientSecret?: string }) => {

    const router = useRouter();
    const notify = useNotify();


    const [scheduled, setScheduled] = useState(false);

    const [discounts, setDiscounts] = useState<Discount[]>([]);
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
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center py-4 border-b-2 ">Cart</h2>
            {cartItems.length === 0 ? (
                <div className="flex flex-col gap-5 justify-center items-center">
                    <p className="text-center my-10">Your cart is empty.</p>
                    <Link href={'/services'} className="flex justify-center items-center gap-4 hover:text-blue-400">Find services <MoveRight /></Link>
                </div>
            ) : (
                    <div className="flex flex-col lg:flex-row w-full px-5 gap-5">
                        <div className="lg:w-1/2">
                            {cartItems.map((item, index) => (
                            <CartItem key={index} updateCart={updateCart} item={item} />
                        ))}
                            <div>
                                <AppliedDiscounts discounts={discounts} />
                            </div>
                            <div className="my-4 flex justify-between items-center">
                                <div>
                                    <ApplyDiscount
                                        discounts={discounts}
                                        setDiscounts={setDiscounts}
                                        availableDiscounts={extractAllDiscounts(cartItems)} />
                                </div>
                                <div className="">
                                    <p className="text-lg font-semibold">Total: ${calculateServiceCartTotal(cartItems)}</p>
                                </div>
                            </div>
                            <div className="w-full text-center flex justify-center" onClick={() => setScheduled(true)}>
                                <CalendlyPopup CTAText="Click to schedule" className="rounded-lg text-gray-900 dark:text-inherit bg-gray-300 dark:bg-gray-700 p-2 hover:shadow-lg hover:underline " />
                        </div>
                    </div>


                        <div className="lg:w-1/2">
                            {clientSecret &&
                                <PaymentModal
                                redirect={`${process.env.HOST}/onboarding?cartId=${cartId}`}
                                    checkoutMessage="Save 10% By Choosing to pre purchase services, you will be charged 50% of the total cost  of the project. And receive priority booking privileges."
                                    active={scheduled} activationError="schedule meeting before payment"
                                    cartId={cartId}
                                    clientSecret={clientSecret} />}
                    </div>

                </div>
            )}

        </div>
    );
};

function ApplyDiscount({ discounts, setDiscounts, availableDiscounts }: { discounts: Discount[], setDiscounts: Dispatch<Discount[]>, availableDiscounts: Discount[] }) {

    const [discountCode, setDiscountCode] = useState("");
    const notify = useNotify();

    function AddDiscount() {
        const existing = checkIfExist(discountCode, availableDiscounts);
        const added = checkIfExist(discountCode, discounts);
        if (added) {
            notify('Discount added Already', 'fail', { autoClose: true })
            setDiscountCode("")
            return
        }
        if (existing) {
            setDiscounts([...discounts, existing])
        }
        else {
            notify('Discount Code invalid', 'fail', { autoClose: true });

        }
        setDiscountCode("")

    }
    return (
        <div className="flex gap-2 justify-center items-center">
            <LabelInput value={discountCode} onChange={(e) => setDiscountCode(e.target.value.toUpperCase())} label="Discount Code" />
            <button onClick={AddDiscount} type="button" className="bg-blue-500 rounded-md text-white p-2 py-4 h-fit">Apply Discount</button>
        </div>
    )
}


function AppliedDiscounts({ discounts }: { discounts: Discount[] }) {


    function removeDiscount(discount: string) {

    }

    return <div className="flex flex-wrap my-4">
        {discounts.map((discount, index) => (
            <div key={index} className="flex items-center gap-2 justify-between rounded-3xl border bg-blue-200 p-2 hover:shadow-md">
                <p className="text-gray-500 m-0">{discount.name}</p>
                <button onClick={() => removeDiscount(discount.name)} className="hover:text-red-500">
                    <X className="p-1 text-red-400" />
                </button>
            </div>
        ))}
    </div>
}
// Function to extract all available discounts from cart items
function extractAllDiscounts(cartItems: DisplayServiceCartItemDTO[]): Discount[] {
    const allDiscounts: Discount[] = [];

    cartItems.forEach((cartItem) => {
        cartItem.addons.forEach((addon) => {
            if (addon.discounts) {
                allDiscounts.push(...addon.discounts as Discount[]);
            }
        });
    });

    return allDiscounts;
}



function checkIfExist(discount: string, availableDiscounts: Discount[]) {
    return availableDiscounts.find((item) => item.name === discount)
}
export default Cart;
