import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaLightbulb, FaGithub } from "react-icons/fa";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("https://backendportfolio-ydo6.onrender.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: `${formData.subject}\n\n${formData.message}`,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", subject: "", email: "", message: "" });
            } else {
                setStatus(data.error || "Failed to send message");
            }
        } catch (err) {
            setStatus("Something went wrong. Please try again.");
            console.error(err);
        }
    };

    return (
        <section id="contact" className="bg-[#0f172a] text-white py-16 px-6">
            <div className="sm:max-w-6xl md:max-w-5xl lg:max-w-7xl max-w-8xl mx-auto">
                <h2 className="text-center text-4xl font-bold mb-12">
                    <span className="text-white">Get </span>
                    <span className="text-cyan-400">In Touch</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
                    <div className="bg-[#1e293b] p-6 rounded-md flex flex-col items-center border-b-4 border-cyan-500">
                        <div className="bg-cyan-500 p-3 rounded-full mb-4">
                            <FiPhone size={24} />
                        </div>
                        <p className="text-lg font-mono">+91 94282 44569</p>
                    </div>
                    <div className="bg-[#1e293b] p-6 rounded-md flex flex-col items-center border-b-4 border-cyan-500">
                        <div className="bg-cyan-500 p-3 rounded-full mb-4">
                            <FiMail size={24} />
                        </div>
                        <p className="text-lg font-mono">kapilsanghani111@gmail.com</p>
                    </div>
                    <div className="bg-[#1e293b] p-6 rounded-md flex flex-col items-center border-b-4 border-cyan-500">
                        <div className="bg-cyan-500 p-3 rounded-full mb-4">
                            <FiMapPin size={24} />
                        </div>
                        <p className="text-lg font-mono">Gujarat, India</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 md:pl-24">Send Me An Email</h3>
                        <p className="text-gray-300 mb-4 md:pl-24">
                            Feel free to get in touch with me.<br />
                            I am always open to discussing new projects or creative ideas.
                        </p>
                        <h4 className="text-xl font-semibold mt-8 mb-3 md:pl-24">Follow Me</h4>
                        <div className="flex gap-4 md:pl-24">
                            <a href="https://www.facebook.com/kapil.sanghani.566" target="_black" className="bg-[#2e2e2e] hover:bg-cyan-500 transition p-3 rounded-full">
                                <FaFacebookF />
                            </a>
                            <a href="https://x.com/Kapilsanghani2" target="_black" className="bg-[#2e2e2e] hover:bg-cyan-500 transition p-3 rounded-full">
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com/in/kapil-sanghani-2a4358233/" target="_black" className="bg-[#2e2e2e] hover:bg-cyan-500 transition p-3 rounded-full">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/kapil238" target="_black" className="bg-[#2e2e2e] hover:bg-cyan-500 transition p-3 rounded-full">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="YOUR NAME"
                            className="p-3 rounded text-white placeholder-gray-400 border-b-3 focus:outline-none focus:border-cyan-500 focus:rounded-b-md"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="SUBJECT"
                            className="p-3 rounded text-white placeholder-gray-400 border-b-3 focus:outline-none focus:border-cyan-500 focus:rounded-b-md"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="YOUR EMAIL"
                            className="p-3 rounded text-white placeholder-gray-400 border-b-3 focus:outline-none focus:border-cyan-500 focus:rounded-b-md"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="YOUR MESSAGE"
                            className="p-3 rounded text-white placeholder-gray-400 border-b-3 focus:outline-none focus:border-cyan-500 focus:rounded-b-md"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-700 transition p-3 font-bold rounded text-white mb-8"
                        >
                            SEND MESSAGE
                        </button>
                        {status && <p className="text-sm text-center mt-2 text-cyan-300">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
