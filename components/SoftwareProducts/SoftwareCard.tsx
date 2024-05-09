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
      <div className="flex flex-grow justify-center w-full">
        <Image
          alt="Product Image"
          className="h-full w-full object-cover"
          height={350}
          src={image}
          width={300}
        />
      </div>
      <div className="px-1 py-4">
        <h3 className="mb-2 line-clamp-2 w-full text-wrap text-xl font-bold text-gray-900 dark:text-gray-50">
          {title}
        </h3>
        <p className="text-base text-gray-700 dark:text-gray-300">{subTitle}</p>
      </div>
    </Card>
  );
}
