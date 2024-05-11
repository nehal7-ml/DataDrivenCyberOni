/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0MNo62hAEeM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SoftwareCard({
  image,
  title,
  subTitle,
}: {
  image: string;
  title: string;
  subTitle: string;
}) {
  return (
    <Card className="flex aspect-[3/4] h-auto w-[12em] max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg  hover:border-blue-600 hover:dark:border-emerald-500">
      <div className="relative flex h-4/6 w-full flex-grow justify-center">
        <Image
          alt="Product Image"
          className="h-full w-full object-cover"
          height={300}
          src={image}
          width={300}
        />
      </div>
      <div className="w-full px-2 py-1">
        <p className="m-0 line-clamp-2 w-full text-wrap  font-bold text-gray-900 dark:text-gray-50">
          {title}
        </p>
        <p className="m-0 line-clamp-2 text-sm text-gray-700 dark:text-gray-300">
          {subTitle}
        </p>
      </div>
    </Card>
  );
}
