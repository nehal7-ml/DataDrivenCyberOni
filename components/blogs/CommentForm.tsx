'use client'
import React, { FormEvent, useState } from 'react';
import ClientInput from "../layout/ClientInput";

const CommentForm = () => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit} className=" container rounded-lg p-24 mx-auto my-10 bg-gray-50 dark:bg-zinc-700 shadow-xl">
            <div className="relative mb-4">
                
                <textarea
                    className="peer shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 dark:bg-zinc-700 text-gray-700 dark:text-gray-50 leading-tight focus:outline-none focus:shadow-outline"
                    id="comment"
                    maxLength={250}
                    placeholder=""
                    rows={5}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <label className="absolute peer-focus:-top-3 peer-focus:text-blue-500  bg-gray-50 dark:bg-zinc-700 peer-placeholder-shown:top-3 -top-3 left-3 px-1 text-gray-500 transition-all block dark:text-white text-sm font-bold mb-2" htmlFor="comment">
                    Comment
                </label>
            </div>
            <div className="relative my-10">

                <ClientInput
                    className=" peer shadow-lg appearance-none border rounded w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 bg-gray-50 dark:bg-zinc-700 px-1 text-gray-500 transition-all  dark:text-white text-sm font-bold mb-2" htmlFor="comment">
                    Name
                </label>
            </div>
            <div className="relative my-10">
                
                <input
                    className="peer shadow-lg appearance-none border rounded w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 bg-gray-50 dark:bg-zinc-700 px-1 text-gray-500 transition-all  dark:text-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="agree">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        id="agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        required
                    />
                    <span className="text-sm">
                        I agree to the Terms and Conditions and Privacy Policy
                    </span>
                </label>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-rose-600  hover:bg-rose-700 text-white font-bold py-4 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Post Comment
                </button>
            </div>
        </form>
    );
};

export default CommentForm;
