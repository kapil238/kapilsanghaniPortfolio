import React from "react";
import { useEffect, useRef } from 'react';
const ContactSection = () => {
      const headingRef = useRef(null);
        const textRef = useRef(null);
    return (
        <section id="contact" className="py-16 px-4 bg-[#0f172a] dark:bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                    </div>
                    <div className="w-[2px] h-16 mt-1 flex flex-col justify-between">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-full h-[2px] bg-gray-300 my-[3px] rounded-full" />
                        ))}
                    </div>
                    <div
                        ref={headingRef}
                        className="relative inline-block border-2 border-cyan-400 px-6 py-2 rounded-[30px_0_30px_0]"
                    >
                        <h2 className="text-2xl font-semibold text-white">Contact Me</h2>
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-10">
                    Feel free to reach out for collaborations or just a friendly hello! 👋
                </p>
                <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        className="col-span-1 sm:col-span-2 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="col-span-1 sm:col-span-2 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    ></textarea>
                    <button
                        type="submit"
                        className="col-span-1 sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
