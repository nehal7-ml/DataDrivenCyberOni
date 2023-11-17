'use client'
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNotify } from "../Notification";
import { useRouter } from "next/navigation";
function CalendlyModal({ open, onCloseModal }: { open: boolean, onCloseModal: () => void }) {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    const [toasted, setToasted] = useState(false);
    const notify = useNotify();
    const router = useRouter()
    useEffect(() => {
        if (open) notify('Scheduling A Meeting Is Required', 'neutral', { autoClose: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
        const element = document.getElementsByTagName("body")[0];
        if (element) {
            setRootElement(element);
        }
    }, []);
    function closeModal() {
        router.replace('?')
        onCloseModal()
    }

    return (<>

        <div className="relative">
            {rootElement && <PopupModal
                open={open}
                onModalClose={closeModal}
                rootElement={rootElement as HTMLElement}
                url="https://calendly.com/theapartmentguru/30min"


            />}
            {/* <ToastContainer icon={Info} autoClose={false} hideProgressBar={true} toastClassName={`z-[10000]`} position="bottom-right" >
            </ToastContainer> */}
        </div>

    </>);
}

export default CalendlyModal;