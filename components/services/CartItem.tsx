import { DisplayServiceCartItemDTO, UpdateServiceCartItemDTO } from "@/crud/DTOs";
import { ServiceCartItem, SubService } from "@prisma/client";
import { ChevronDown, Trash, X } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import React, { useState } from 'react';

const CartItem = ({ item, updateCart }: { item: DisplayServiceCartItemDTO, updateCart: (itemId: string, addons: SubService[]) => void }) => {
    const [showAddons, setShowAddons] = useState(false);

    const toggleAddons = () => {
        setShowAddons(!showAddons);
    };

    function deleteItem() {
        updateCart(item.id, [])

    }
    function removeAddon(id: string) {
        let current = item.addons.filter(addon => addon.id !== id)
        updateCart(item.id, current)
    }

    return (
        <div className="flex gap-1 flex-wrap items-center justify-between border-b p-4 rounded-md shadow-lg dark:shadow-dark-md">
            <div className="flex gap-2 ">
                <Image className="object-contain rounded-md aspect-square" src={item.service?.image ? item.service?.image.src : "https://picsum.photos/200"} alt={`${item.service?.title}`} width={50} height={50} />
                <h3 className="text-lg font-semibold">{item.service?.title}</h3>
            </div>


            <div className="flex items-center ">
                <button onClick={deleteItem} className="text-red-500 p-2">
                    <Trash />
                </button>
                <button onClick={toggleAddons} className="text-blue-500 p-2">
                    <ChevronDown className={`transform ${showAddons ? 'rotate-180' : ''}`} />
                </button>
            </div>
            <div className="w-full">
                {showAddons && item.addons && item.addons.length > 0 && (
                    <div className="flex flex-row gap-2 flex-wrap">
                        {item.addons.map((addon, index) => (
                            <div key={index} className="flex items-center gap-2 justify-between rounded-3xl border bg-blue-200 p-2 hover:shadow-md">
                                <p className="text-gray-500 m-0">Addons: {addon.title}</p>
                                <button onClick={() => removeAddon(addon.id)} className="hover:text-red-500">
                                    <Trash className="p-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartItem;