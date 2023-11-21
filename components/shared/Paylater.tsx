import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function PayLater() {
    return ( 
    <div className="flex flex-col justify-center items-center">
        <Image src={'/pay-later.png'} alt="pay-later" height={500} width={500}/>
        <div className="text-center font-bold mb-5 font-nunito text-2xl">Build Now Pay later</div>
        <div>
            <Link href={'#'} className="rounded-full flex gap-3 bg-[#33D460] shadow-[0_10px_25px_0_#33D3D454] p-3 w-fit text-white text-center justify-center items-center">Apply Now <MoveRight /></Link>
        </div>
    </div>);
}

export default PayLater;