"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

function CategoryChip({ name, id }: { name: string; id: string }) {
  const searchParams = useSearchParams();
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(searchParams.getAll("softwareCategoryId").includes(id));
  }, [id, searchParams]);

  return (
    <Link
      ref={ref!}
      href={selected ? {pathname: '/'} : `?${new URLSearchParams({ softwareCategoryId: id }).toString()}`}
      replace={true}
      aria-checked={selected}
      onClick={() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`flex h-fit w-fit cursor-pointer 
      rounded-full border border-gray-700 px-5
      py-2 text-center align-middle text-sm
    aria-checked:border-green-400 aria-checked:bg-green-400 aria-checked:text-white
      hover:border-blue-500 dark:border-gray-300 dark:hover:border-emerald-500 lg:text-base`}
      scroll={false}
    >
      {name}
    </Link>
  );
}

export default CategoryChip;
