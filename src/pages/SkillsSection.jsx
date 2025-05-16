"use client";

import { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { PiFireBold } from "react-icons/pi";

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState("fullstack");
    const [animateIcon, setAnimateIcon] = useState(false);

    const tabs = [
        { id: "fullstack", label: "Full Stack" },
        { id: "frontend", label: "Frontend Developer" },
        { id: "backend", label: "Backend Developer" },
    ];

    const tabClass = (tabId) =>
        `cursor-pointer transition-all duration-300 p-4 rounded-lg w-[220px] shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
            activeTab === tabId
                ? "bg-cyan-400 text-gray-900 border-b-4 border-cyan-700"
                : "bg-cyan-200 text-gray-800"
        }`;

    // Trigger animation only once when activeTab changes
    useEffect(() => {
        setAnimateIcon(true);
        const timer = setTimeout(() => setAnimateIcon(false), 1000); // animation duration 1s
        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <>
            <style>{`
                @keyframes slideInFromLeft {
                    0% {
                        transform: translateX(-50px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .slide-in {
                    animation: slideInFromLeft 0.60s ease forwards;
                }
            `}</style>

            <section id="skill" className="bg-gray-900 text-white py-16 px-4 text-center relative">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                    </div>
                    <div className="w-[2px] h-16 mt-1 flex flex-col justify-between">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-full h-[2px] bg-gray-300 my-[3px] rounded-full"
                            />
                        ))}
                    </div>
                    <div className="relative inline-block border-2 border-cyan-400 px-6 py-2 rounded-[30px_0_30px_0]">
                        <h2 className="text-2xl font-semibold text-white">Skills</h2>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-10">
                        <div className="text-cyan-400 text-5xl mb-4">&lt;/&gt;</div>
                        <p className="text-gray-300 text-sm">
                            I am a passionate full-stack developer skilled in building robust
                            and scalable web applications. Constantly driven to learn and adapt,
                            I leverage modern technologies to deliver efficient and
                            user-friendly solutions.
                        </p>
                    </div>

                    <div
                        role="tablist"
                        aria-label="Skill categories"
                        className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10"
                    >
                        {tabs.map(({ id, label }) => (
                            <div
                                key={id}
                                role="tab"
                                tabIndex={0}
                                aria-selected={activeTab === id}
                                aria-controls={`${id}-panel`}
                                id={`${id}-tab`}
                                onClick={() => setActiveTab(id)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        setActiveTab(id);
                                    }
                                }}
                                className={tabClass(id)}
                            >
                                <h3 className="font-bold text-lg">{label}</h3>
                            </div>
                        ))}
                    </div>

                    <div
                        id={`${activeTab}-panel`}
                        role="tabpanel"
                        aria-labelledby={`${activeTab}-tab`}
                        className="flex justify-center gap-6 flex-wrap transition-opacity duration-500"
                    >
                        {activeTab === "frontend" && (
                            <>
                                <SkillIcon
                                    key={`frontend-html`}
                                    icon={<FaHtml5 />}
                                    label="HTML"
                                    color="text-orange-400"
                                    bg="bg-orange-500"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`frontend-css`}
                                    icon={<FaCss3Alt />}
                                    label="CSS"
                                    color="text-blue-400"
                                    bg="bg-blue-600"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`frontend-js`}
                                    icon={<FaJsSquare />}
                                    label="JavaScript"
                                    color="text-yellow-400"
                                    bg="bg-yellow-500"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`frontend-react`}
                                    icon={<FaReact />}
                                    label="React"
                                    color="text-cyan-400"
                                    bg="bg-cyan-500"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`frontend-next`}
                                    icon={<SiNextdotjs />}
                                    label="Next.js"
                                    color="text-white"
                                    bg="bg-black"
                                    animate={animateIcon}
                                />
                            </>
                        )}

                        {activeTab === "backend" && (
                            <>
                                <SkillIcon
                                    key={`backend-node`}
                                    icon={<FaNodeJs />}
                                    label="Node.js"
                                    color="text-green-400"
                                    bg="bg-green-600"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`backend-express`}
                                    icon={<SiExpress />}
                                    label="Express"
                                    color="text-gray-300"
                                    bg="bg-gray-700"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`backend-mongo`}
                                    icon={<SiMongodb />}
                                    label="MongoDB"
                                    color="text-emerald-400"
                                    bg="bg-emerald-600"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`backend-mysql`}
                                    icon={<GrMysql />}
                                    label="MySQL"
                                    color="text-blue-300"
                                    bg="bg-blue-700"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`backend-firebase`}
                                    icon={<PiFireBold />}
                                    label="Firebase"
                                    color="text-orange-300"
                                    bg="bg-orange-600"
                                    animate={animateIcon}
                                />
                            </>
                        )}

                        {activeTab === "fullstack" && (
                            <>
                                <SkillIcon
                                    key={`fullstack-html`}
                                    icon={<FaHtml5 />}
                                    label="HTML"
                                    color="text-orange-400"
                                    bg="bg-orange-500"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-css`}
                                    icon={<FaCss3Alt />}
                                    label="CSS"
                                    color="text-blue-400"
                                    bg="bg-blue-600"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-js`}
                                    icon={<FaJsSquare />}
                                    label="JavaScript"
                                    color="text-yellow-400"
                                    bg="bg-yellow-500"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-react`}
                                    icon={<FaReact />}
                                    label="React"
                                    color="text-cyan-400"
                                    bg="bg-cyan-500"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-next`}
                                    icon={<SiNextdotjs />}
                                    label="Next.js"
                                    color="text-white"
                                    bg="bg-black"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-node`}
                                    icon={<FaNodeJs />}
                                    label="Node.js"
                                    color="text-green-400"
                                    bg="bg-green-600"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-express`}
                                    icon={<SiExpress />}
                                    label="Express"
                                    color="text-gray-300"
                                    bg="bg-gray-700"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-mongo`}
                                    icon={<SiMongodb />}
                                    label="MongoDB"
                                    color="text-emerald-400"
                                    bg="bg-emerald-600"
                                    animate={animateIcon}
                                />
                                <SkillIcon
                                    key={`fullstack-mysql`}
                                    icon={<GrMysql />}
                                    label="MySQL"
                                    color="text-blue-300"
                                    bg="bg-blue-700"
                                    animate={animateIcon}
                                />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

function SkillIcon({ icon, label, textColor = "text-white", bg = "bg-gray-700", animate }) {
    return (
        <div className="flex flex-col items-center cursor-default select-none">
            <div
                className={`p-3 rounded-full text-3xl ${bg} ${textColor} shadow-md transition-transform duration-300 hover:scale-110 ${
                    animate ? "slide-in" : ""
                }`}
                title={label}
            >
                {icon || <span className="font-bold text-sm">{label[0]}</span>}
            </div>
            <p className="mt-2 font-semibold">{label}</p>
        </div>
    );
}
