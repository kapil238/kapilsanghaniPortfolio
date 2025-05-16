import { useEffect, useRef, useState } from "react";

const projects = [
    { id: 1, title: "Job-Portal", image: "https://code.market/imgproxy/2024/05/Peof-Angular-Job-Board-Hiring-Template.jpeg", description: "A modern job portal with roles and search filters." },
    { id: 2, title: "Car-Rental", image: "https://camo.envatousercontent.com/b7d066bdde29bfee7b1902c02e53c80e11fc6942/68747470733a2f2f7065746572647261772e73747564696f2f696d616765732f647269766f78652f30315f707265766965772e6a7067", description: "A vehicle booking system with filters and payments." },
    { id: 3, title: "Blog", image: "https://i.pinimg.com/originals/a7/a1/5e/a7a15e14436de1f5561e2cb0a2c35b61.png", description: "Content-rich blogging platform with markdown support." },
    { id: 4, title: "News-Portal", image: "https://i0.wp.com/themes.svn.wordpress.org/news-portal/1.5.4/screenshot.png?w=post-thumbnail&strip=all", description: "Latest news with categories and highlights." },
    { id: 5, title: "HRMS-Software", image: "https://www.syncora.io/wp-content/uploads/2024/07/HRMS-page-banner-min.png", description: "Employee tracking, leave, and payroll software." },
];

export default function ProjectsSection() {
    const slidesRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        let ScrollTrigger, gsap;

        Promise.all([
            import("gsap").then((mod) => (gsap = mod.gsap)),
            import("gsap/ScrollTrigger").then((mod) => (ScrollTrigger = mod.ScrollTrigger)),
        ]).then(() => {
            gsap.registerPlugin(ScrollTrigger);

            const slides = gsap.utils.toArray(".slide");
            const headings = gsap.utils.toArray(".slide .heading");

            gsap.set(slides.slice(1), { xPercent: 100 });
            gsap.set(headings, { autoAlpha: 0 });
            gsap.set(headings[0], { autoAlpha: 1 });

            const tl = gsap.timeline();

            tl.to(slides.slice(1), {
                xPercent: 0,
                ease: "none",
                stagger: 1,
                duration: 1,
            });

            headings.forEach((heading, index) => {
                if (index === 0) return;
                tl.to(headings[index - 1], { autoAlpha: 0, duration: 0.3 }, (index - 1) + 0.7);
                tl.to(heading, { autoAlpha: 1, duration: 0.3 }, index);
            });

            ScrollTrigger.create({
                trigger: slidesRef.current,
                start: "top top",
                end: "+=500%",
                scrub: true,
                pin: true,
                animation: tl,
            });
        });

        return () => {
            if (ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const maskStyle = {
        width: "100%",
        maxWidth: "768px",
        aspectRatio: "16 / 9",
        maskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
        WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
    };

    return (
        <>
            <section id="projects" className="section-slides relative" ref={slidesRef} style={{ backgroundColor: '#0f172a' }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage:
                        "url('https://img.freepik.com/free-vector/abstract-memphis-pattern-backdrop-wallpaper-with-halftone-dots-design_1017-43997.jpg')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1,
                    zIndex: 0,
                }} />

                <div className="slides relative z-10">
                    {projects.map((project) => (
                        <div className="slide" key={project.id}>
                            <figure className="relative min-h-[60vh] sm:min-h-[80vh] md:h-screen m-0 flex flex-col items-center justify-start pt-6 px-4">
                                <h2 className="heading text-white text-2xl sm:text-3xl md:text-4xl font-bold select-none mb-6"
                                    style={{
                                        textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 5px rgba(255,255,255,0.7)",
                                        userSelect: "none",
                                        zIndex: 10,
                                        transformStyle: "preserve-3d",
                                        transform: "translateZ(20px)",
                                    }}>
                                    {project.title}
                                </h2>

                                <section
                                    onClick={() => setSelectedProject(project)}
                                    className="relative w-full flex justify-center cursor-pointer mb-12 sm:mb-20"
                                    style={maskStyle}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                                    />
                                </section>
                            </figure>
                        </div>
                    ))}
                </div>
            </section>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[100] px-4">
                    <div className="bg-white w-full max-w-2xl rounded-lg p-4 sm:p-6 relative">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-500"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">{selectedProject.title}</h2>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full max-h-[300px] sm:max-h-[400px] object-cover rounded mb-4"
                        />
                        <p className="text-gray-700 text-sm sm:text-base">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}
