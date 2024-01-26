import { PrismaClient } from "@prisma/client";
import { CreateOrderDTO } from "./DTOs";
import { connect } from "http2";



export async function create(order: CreateOrderDTO, prisma: PrismaClient) {
    const orders = prisma.order
    const newOrder = await orders.create(
        {
            data: {
                user: {
                    connect: {
                        email: order.userEmail
                    }
                },
                product: {
                    connect: {
                        id: order.productId
                    }
                },
                address: typeof order.address === 'string' ? {
                    connect: {
                        id: order.address
                    }
                } : {
                    create: order.address

                }

            }
        }

    )

    return newOrder
}