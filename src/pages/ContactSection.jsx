import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaBehance } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section id="contact" className="bg-[#0f172a] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-4xl font-bold mb-12">
                    <span className="text-white">Get </span>
                    <span className="text-cyan-400">In Touch</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
                    <div className="bg-[#2e2e2e] p-6 rounded-md flex flex-col items-center">
                        <div className="bg-cyan-500 p-3 rounded-full mb-4">
                            <FiPhone size={24} />
                        </div>
                        <p className="text-lg font-mono">+91 94282 44569</p>
                    </div>
                    <div className="bg-[#2e2e2e] p-6 rounded-md flex flex-col items-center">
                        <div className="bg-cyan-500 p-3 rounded-full mb-4">
                            <FiMail size={24} />
                        </div>
                        <p className="text-lg font-mono">kapilsanghani111@gmail.com</p>
                    </div>
                    <div className="bg-[#2e2e2e] p-6 rounded-md flex flex-col items-center">
                        <div className="bg-cyan-500 p-3 rounded-full mb-4">
                            <FiMapPin size={24} />
                        </div>
                        <p className="text-lg font-mono">Gujarat, India</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Send Me An Email</h3>
                        <p className="text-gray-300 mb-4">Feel free to get in touch with me.<br />I am always open to discussing new projects or creative ideas.</p>
                        <h4 className="text-xl font-semibold mt-8 mb-3">Follow Me</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-[#2e2e2e] hover:bg-cyan-500 transition p-3 rounded-full">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-[#2e2e2e] hover:bg-cyan-500 transition p-3 rounded-full">
                                <FaTwitter />
                            </a>
                            <a href="#" className="bg-[#2e2e2e] hover:bg-cyan-500 transition p-3 rounded-full">
                                <FaLinkedinIn />
                            </a>
                            {/* <a href="#" className="bg-[#2e2e2e] hover:bg-[#ff4a00] transition p-3 rounded-full">
                                <FaBehance />
                            </a> */}
                        </div>
                    </div>

                    <form className="grid grid-cols-1 gap-4">
                        <input
                            type="text"
                            placeholder="YOUR NAME"
                            className="bg-[#2e2e2e] p-3 rounded text-white placeholder-gray-400"
                            required
                        />
                        <input
                            type="text"
                            placeholder="SUBJECT"
                            className="bg-[#2e2e2e] p-3 rounded text-white placeholder-gray-400"
                            required
                        />
                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            className="bg-[#2e2e2e] p-3 rounded text-white placeholder-gray-400"
                            required
                        />
                        <textarea
                            rows="5"
                            placeholder="YOUR MESSAGE"
                            className="bg-[#2e2e2e] p-3 rounded text-white placeholder-gray-400"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-700 transition p-3 font-bold rounded text-white"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
