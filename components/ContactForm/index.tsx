'use client'
import { AlertCircle, Mail, PlaneIcon, Send } from "lucide-react";
import React, { useState } from 'react';
import { LoadingCircle } from "../shared/icons";
import Balancer from "react-wrap-balancer";

function ContactForm() {

    const [showForm, setShowForm] = useState(true);
    const [showThanks, setShowThanks] = useState(false);
    const [showError, setShowError] = useState(false);
    const [selectedInterest, setSelectedInterest] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInterestClick = (interest: string) => {
        setSelectedInterest(interest);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here, you can handle form submission, e.g., sending data to a server.
        console.log('Form submitted:', { selectedInterest, name, email, message });

        if (name && email && message) {
            let res = await fetch(`/api/marketing/contact`, { method: "POST", body: JSON.stringify({ name, email, subject: selectedInterest, message }) })
            setShowForm(false)
            if (res.status === 200) {
                setShowThanks(true)
            }
            else {
                setShowError(true)
            }

        }
    };

    return (
        <div className="w-full h-full min-h-fit mx-auto p-6 bg-[#5001EAAD] rounded-lg shadow-lg">

            {showForm &&<form className="h-full w-full p-6" onSubmit={handleSubmit}>
                <h1 className="text-4xl my-2">Contact us</h1>
                <div className="mb-4 h-1/6">
                    <label
                        htmlFor="name"
                        className="transition-all duration-300 ease-in-out text-white text-sm"
                    >
                        Name :
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="border-0 border-b-2 placeholder-white  focus:border-[#A91079] p-2 focus:border-transparent focus:outline-none ring-0  bg-transparent w-full outline-none autofill-neutral"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="border-0 border-b-2  placeholder-white focus:border-[#A91079] p-2 focus:border-transparent focus:outline-none ring-0  bg-transparent w-full autofill-neutral"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block">Message:</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="border-0 border-b-2  placeholder-white focus:border-[#A91079] focus:border-none focus:border-b-2 foucs:ring-0 p-2 focus:outline-none bg-transparent w-full autofill-neutral"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-[#A91079] text-white rounded-lg py-4 px-8 hover:bg-blue-900 flex items-center justify-center"
                >
                    <Send color="white" className="mx-2" />
                    <span className="mx-2">Send Message</span>
                </button>
            </form>}

            {!showForm && !showThanks && !showError &&
                <>
                    <LoadingCircle></LoadingCircle>
                </>}

            {showThanks &&
                <>
                    <div className="w-full flex flex-col justify-center items-center p-10 text-center">
                        <Mail />
                        <Balancer>Check you email</Balancer>
                    </div>
                </>}

            {showError &&
                <>
                    <div className="w-full flex flex-col justify-center items-center p-10 text-center">
                        <AlertCircle color="red" />
                        <Balancer>An error occurred</Balancer>
                    </div>
                </>
            }
        </div>
    );
}

export default ContactForm;
