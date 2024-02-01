// pages/cart.tsx
import React, { useState } from 'react';
import Cart from "@/components/services/Cart";
import { getServiceCart } from "@/crud/cart";
import prisma from "@/lib/prisma";
import { DisplayServiceCartDTO, DisplayServiceCartItemDTO } from "@/crud/DTOs";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuthAdapter";
import { redirect } from "next/navigation";
type CartItem = {
    id: string;
    name: string;
    price: number;
    addons: string[];
};
interface CartProps {
    searchParams: { cartId: string; }
}


export const dynamic = 'force-dynamic'
const CartPage: React.FC<CartProps> = async ({ searchParams }) => {
    let items = [] as DisplayServiceCartItemDTO[];
    const session = await getServerSession(authOptions)
    const user = session?.user as { id: string, email: string }
    if (!session) redirect('/auth/signin')
    const apiUrl = process.env.HOST
    const cart = await getServiceCart(user.id, prisma)

    // console.log(cart);
    if (cart) {
        items = cart.items
    }
    else {

    }
    return (
        <div className="container mx-auto flex flex-col justify-center items-center">
            <Cart session={session} cartItems={items} />
            <Link href={{ pathname: '/payments/services', query: { cartId: searchParams.cartId } }} className="inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">Complete Payment</Link>
        </div>
    );
};

export default CartPage;
