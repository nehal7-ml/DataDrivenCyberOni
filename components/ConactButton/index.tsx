import Image from "next/image";
import ContactForm from "../ContactForm";
import { Dispatch, SetStateAction } from "react";
import Modal from "../layout/ServerModal";

function ContactButton() {
    return (
        <>
            <button className="peer fixed shadow-lg flex justify-center items-center bottom-20 right-5 lg:right-5 lg:bottom-20 h-16 w-16 rounded-full hover:shadow-xl hover:transition-all duration-75 z-[100]">
                <Image className="object-contain" src={'/images/chat-button.png'} alt="chatbutton" width={60} height={60} />
            </button>
            <Modal >
                <ContactForm />
            </Modal>
        </>


    );
}

export default ContactButton;