import { MoveRight } from "lucide-react";
import Link from "next/link";




function CaseStudyCardSkeleton() {
    return (<>
        <div className="relative flex flex-col justify-around rounded-xl shadow-lg hover:shadow-lg dark:shadow-[2px_3px_10px_0_#09090b] dark:hover:shadow-[2px_3px_40px_0_#09090b] dark:bg-slate-800 h-full overflow-hidden">
            <div className="p-5 z-10 bg-gray-950/20 text-white h-full flex flex-col justify-center animate-pulse">
                <div className="border-l-4 border-service-green px-3 mb-5 font-bold text-xl animate-pulse">
                        <div className="mb-5 line-clamp-3 h-10 w-24 bg-gray-100 dark:bg-gray-300 rounded-lg"></div>
                    </div>
                <div className="mb-5 line-clamp-3 h-16 bg-gray-100 dark:bg-gray-300  rounded-lg"></div>
            </div>
        </div>

    </>)


        
}

export default CaseStudyCardSkeleton
