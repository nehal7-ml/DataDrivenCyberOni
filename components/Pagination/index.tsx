'use client'
import React from 'react';
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronsLeft } from "lucide-react";

const Pagination = ({ currentPage, totalPages, pathname }: { currentPage: number, totalPages: number, pathname: string }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
        <div className="flex justify-center space-x-2 container flex-wrap ">
            {currentPage > 1 && (
                <Link
                    href={{ query: { page: currentPage - 1 }, pathname }}

                    className="  dark:text-white hover:text-blue-500 font-semibold py-1 px-2 rounded"
                >
                    <ChevronLeft className="mx-2" />
                </Link>
            )}

            {pageNumbers.map((pageNumber) => (
                <Link
                    href={{ query: { page: pageNumber }, pathname }}
                    key={pageNumber}
                    className={`${currentPage === pageNumber
                        ? 'bg-rose-600 text-white'
                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                        } font-semibold py-1 px-2 rounded-full  aspect-square w-10 h-10 flex justify-center items-center `}
                >
                    {pageNumber}
                </Link>
            ))}

            {currentPage < totalPages && (
                <Link
                    href={{ query: { page: currentPage + 1 }, pathname }}

                    className=" dark:text-white hover:text-blue-500 font-semibold py-1 px-2 rounded"
                >

                    <ChevronRight className="mx-2" />
                </Link>
            )}
        </div>
    );
};

export default Pagination;
