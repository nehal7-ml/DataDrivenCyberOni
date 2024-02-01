'use client'
import React from 'react';
import CartItem from './CartItem';
import { ServiceCartItem, SubService } from "@prisma/client";
import { DisplayServiceCartItemDTO, UpdateServiceCartItemDTO } from "@/crud/DTOs";
import { calculateServiceCartTotal } from "@/lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

const Cart = ({ cartItems, session }: { cartItems: DisplayServiceCartItemDTO[], session: Session }) => {

    const router = useRouter()
    function removeFromCartItems(itemId: string, subServiceId: string) {

        let current = cartItems.find(item => item.id === itemId)?.addons as SubService[]

        current = current.filter(addon => addon.id !== subServiceId)
        // console.log(current, subServiceId);
        updateCart(itemId, current)

    }

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
                    <div className="mt-4">
                        <p className="text-lg font-semibold">Total: ${calculateServiceCartTotal(cartItems)}</p>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Cart;
