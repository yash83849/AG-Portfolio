import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import resumeImage from "../assets/Aditya Gupta CV-page-1.png";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "mern", label: "Services" },
  { id: "about", label: "About" },
  { id: "experience", label: "My Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  // Highlight active section when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 bg-slate-900/90 backdrop-blur-md text-slate-100 z-50 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="max-w-[1280px] m-auto h-16 px-4 flex items-center justify-between">

        {/* Resume Button */}
        <a
          href={resumeImage}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl bg-cyan-600 rounded-3xl px-4 py-2 hover:bg-cyan-500 duration-300 shadow-md animate-glow-hover"
        >
          Resume
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-lg uppercase tracking-wider">
          {navItems.map((item) => (
            <span
              key={item.id}
              className={`group rounded-3xl px-4 py-2 cursor-pointer hover:bg-cyan-700/70 duration-300 ${
                activeSection === item.id ? "text-cyan-300" : "text-slate-200"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              <div className="w-0 group-hover:w-full h-0.5 bg-white duration-500" />
            </span>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 w-full flex flex-col gap-6 px-6 py-6 text-lg uppercase tracking-wider animate-fadeIn">
          {navItems.map((item) => (
            <span
              key={item.id}
              className="border-b border-slate-700 pb-2 cursor-pointer hover:text-cyan-300 text-slate-200"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
