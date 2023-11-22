'use client'
import { X } from "lucide-react";
import { ReactNode, useState } from "react";

function Modal({ className, children }: { className?: string, children?: ReactNode, }) {
    const [show, setShow] = useState(true);
    return (

        <div className={`peer-focus:block peer-visited:block hidden ${show ? 'block  hover:block focus:block' : 'hidden'}`}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-transparent   flex items-center justify-center z-[100]">
                <div className="bg-black backdrop-blur-lg bg-opacity-50 absolute inset-0 w-screen h-full z-10"></div>
                <div className={className ? `relative ${className}` : ' relative bg-white dark:bg-gray-800 rounded-lg z-30 container'}>
                    <button onClick={() => setShow(false)} className="text-gray-500 dark:text-gray-200 hover:text-rose-500 absolute right-4 top-4"><X /></button>
                    {children}
                </div>
            </div>
        </div>

    );
}

export default Modal; 