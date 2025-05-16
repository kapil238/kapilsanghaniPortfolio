'use client';
import { useState } from 'react';
import { FaGithub, FaInstagram, FaDiscord, FaPhone, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-10 py-4 flex justify-between items-center bg-transparent text-white relative z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-cyan-400">&lt;C/&gt;</span> Kapil Sanghani
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="hover:text-cyan-400 transition">Home</a>
        <a href="#" className="hover:text-cyan-400 transition">Blogs</a>

        <div className="flex gap-4 text-cyan-400 text-lg">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaDiscord /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaPhone /></a>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-2xl text-cyan-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f172a] px-6 py-4 flex flex-col gap-4 md:hidden border-t border-gray-700">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Blogs</a>
          <div className="flex gap-4 text-cyan-400 text-xl mt-2">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaPhone /></a>
          </div>
        </div>
      )}
    </header>
  );
}
