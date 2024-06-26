import { CreateProductDTO } from "@/crud/DTOs";
import { create } from "@/crud/product";
import apiHandler from "@/errorHandler";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

async function post(req: NextRequest) {
       const product = await req.json() as CreateProductDTO;
        const newProduct = await create(product, prisma);
        return NextResponse.json({ message: "Add success", data: newProduct });

}

export const { POST, DELETE, GET, PATCH, PUT } = apiHandler({ POST: post });
