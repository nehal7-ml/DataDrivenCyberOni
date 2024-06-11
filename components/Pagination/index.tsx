"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronsLeft } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  pathname,
  query,
}: {
  currentPage: number;
  totalPages: number;
  pathname: string;
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  return (
    <div className="container flex flex-wrap justify-center space-x-2 ">
      {currentPage > 1 && (
        <Link
          href={{ query: { ...query, page: currentPage - 1 }, pathname }}
          className="  rounded px-2 py-1 font-semibold hover:text-blue-500 dark:text-white"
        >
          <ChevronLeft className="mx-2" />
        </Link>
      )}

      {pageNumbers.map((pageNumber) => (
        <Link
          href={{ query: { ...query, page: pageNumber }, pathname }}
          key={pageNumber}
          className={`${
            currentPage === pageNumber
              ? "bg-rose-600 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          } flex aspect-square h-10 w-10  items-center justify-center rounded-full px-2 py-1 font-semibold `}
        >
          {pageNumber}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={{ query: { ...query, page: currentPage + 1 }, pathname }}
          className=" rounded px-2 py-1 font-semibold hover:text-blue-500 dark:text-white"
        >
          <ChevronRight className="mx-2" />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
