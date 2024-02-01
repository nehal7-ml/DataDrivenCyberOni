// components/CartItem.js
import { DisplayServiceCartItemDTO, UpdateServiceCartItemDTO } from "@/crud/DTOs";
import { ServiceCartItem, SubService } from "@prisma/client";
import { X } from "lucide-react";
import { Session } from "next-auth";
import React from 'react';

const CartItem = ({ item, removeFromCart }: { item: DisplayServiceCartItemDTO, removeFromCart: (itemId: string, subserviceId: string) =>void }) => {

    return (
        <div className="flex items-center justify-between border-b p-4">
            <div>
                <h3 className="text-lg font-semibold">{item.service?.title}</h3>
                <div className="flex flex- flex-wrap gap-5">
                    {item.addons && (item.addons).length > 0 && (
                        item.addons.map((addon, index) => (<>
                            <div key={index} className="rounded-md border bg-blue-200 flex gap-2">
                                <p className="text-gray-500">Addons: {addon.title}</p>
                                <button onClick={() => removeFromCart(item.id, addon.id)} className="text-red-500">
                                    <X></X>
                                </button>
                            </div></>))
                    )}
                </div>
            </div>

        </div>
    );
};

export default CartItem;
