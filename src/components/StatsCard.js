"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function StatsCard() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const stats = [
  { number: 5, label: "Programming Languages" },
  { number: 7, label: "Development Tools" },
  { number: 12, label: "Completed Projects" },
  ];

  return (
    <div data-aos="flip-right">
      <div className="bg-gray-800 text-white p-6 rounded-3xl w-60 space-y-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-b-0 gap-5"
          >
            <span className="text-cyan-400 text-6xl font-bold">
              {stat.number}
            </span>
            <span className="text-md">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
