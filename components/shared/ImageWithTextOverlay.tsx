import Image from "next/image";

type props = {
    text: string;
    image: string;
    width: number;
    height: number;
}

function ImageWithTextOverlay({ text, image, width, height }: props) {
    return (

        <div className="relative w-fit h-fit  rounded-lg">
            <Image className="z-0 object-cover rounded-lg" src={image} alt="text-overlay" width={width} height={height}></Image>
            <div className="absolute top-0 left-0 z-10  bg-gradient-to-b from-black/0 via-black/20 to-black/80 h-full w-full flex flex-col justify-end items-center text-center align-baseline text-ellipsis line-clamp-3 text-gray-50">
                <p>{text}</p>
            </div>
        </div>


    );
}

export default ImageWithTextOverlay;