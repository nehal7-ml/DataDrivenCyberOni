import { LoadingDots } from "./icons";

function Redirecting({ message }: { message: string }) {
    return (
        <div className="grid h-screen place-content-center bg-white px-4 font-nunito">
            <div className="text-center">
                {/* Lucide's XCircle icon */}
                <div className="mx-auto h-5 w-full text-red-600 sm:h-64">
                    <LoadingDots />
                </div>

                <h3 className="w- mt-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {message}
                </h3>


            </div>
        </div>
    );
}

export default Redirecting;