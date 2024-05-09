/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0MNo62hAEeM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function SoftwareCard({ image, title, subTitle }: { image: string, title: string, subTitle: string }) {
    return (
        <Card className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center">
                <Image
                    alt="Product Image"
                    className="w-full h-48 object-cover"
                    height="200"
                    src={image}
                    style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                    }}
                    width="300"
                />
            </div>
            <div className="px-6 py-4">
                <h3 className="text-gray-900 font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 text-base">{subTitle}</p>
            </div>
        </Card>
    )
}