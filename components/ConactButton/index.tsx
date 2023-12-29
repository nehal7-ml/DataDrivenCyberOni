'use client'
import Image from "next/image";
import ContactForm from "../ContactForm";
import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../shared/modal";

function ContactButton() {
    const [show, setShow] = useState(false);
    return (
        <>
<<<<<<< HEAD
            <button className="peer fixed shadow-lg flex justify-center items-center bottom-20 right-5 lg:right-5 lg:bottom-20 h-16 w-16 rounded-full hover:shadow-xl hover:transition-all duration-75 z-[100]">
=======
            <button onClick={() => setShow(true)} className="peer fixed shadow-lg flex justify-center items-center bottom-20 right-5 lg:right-5 lg:bottom-20 h-16 w-16 rounded-full hover:shadow-xl hover:transition-all duration-75 z-[100]">
>>>>>>> 8f0d6c8a059d87d1f0d68193e496ec3a953c9e6a
                <Image className="object-contain" src={'/images/chat-button.png'} alt="chatbutton" width={60} height={60} />
            </button>
            <Modal setShowModal={setShow} showModal={show} >
                    <ContactForm onModal={true} setShowModal={setShow} />
            </Modal>
        </>


    );
}

export default ContactButton;