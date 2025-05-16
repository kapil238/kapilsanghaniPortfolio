"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function ProfileCard() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div data-aos="flip-down">
      <div className="bg-[#1e293b] relative w-[300px] rounded-[110px_0px_110px_0px] border-[2px] border-cyan-400 p-6 text-white shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400">
            <Image src="/images/profile.png" alt="Avatar" width={96} height={96} />
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold">Kapil Sanghani</h2>
        <p className="text-center text-gray-400 text-lg">
          Full-Stack Developer
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          <li className="flex items-center gap-4">
            <Image
              src="/icons/gmail.png"
              alt="Email Icon"
              width={18}
              height={18}
            />
            kapilsanghani111@gmail.com
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/icons/phone-call.png"
              alt="Phone Icon"
              width={18}
              height={18}
            />
            +91 94282 44569
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/icons/placeholder.png"
              alt="Location Icon"
              width={18}
              height={18}
            />
            India
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/icons/briefcase.png"
              alt="Bag Icon"
              width={18}
              height={18}
            />
            Full-time / Freelancer
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/icons/web-link.png"
              alt="Web Icon"
              width={18}
              height={18}
            />
            www.kapil.com
          </li>
        </ul>

        <div className="flex flex-wrap gap-2 justify-center mt-5">
          {[
            "HTML",
            "CSS",
            "JS",
            "React",
            "Next",
            "Node",
            "Express",
            "MongoDB",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-cyan-500 text-black text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a href="/sanghanikapil.pdf" download>
            <button className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition duration-300">
              Download CV 
              <Image
                src="/icons/document.png"
                alt="Download Icon"
                width={18}
                height={18}
                className="inline-block ml-2"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
