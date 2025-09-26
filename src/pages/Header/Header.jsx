import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10" 
            :"bg-gray-900/95 backdrop-blur-md"
  // Changed from bg-transparent to dark background
        }`}
      >
        {/* Top Border Gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center h-16 lg:h-20">
            
            {/* Centered Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-900/80 backdrop-blur-md rounded-full p-1 border border-gray-700/50">
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onMouseEnter={() => setHoveredLink(id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setActiveLink(id)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group
                    ${activeLink === id
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                      : "text-gray-300 hover:text-white"
                    }`}
                >
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm ${hoveredLink === id ? 'opacity-100' : ''}`} />
                  
                  <div className="relative flex items-center space-x-2">
                    <Icon className={`transition-transform duration-300 ${activeLink === id ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span>{text}</span>
                  </div>

                  {/* Active Indicator */}
                  {activeLink === id && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle - Centered */}
            <div className="lg:hidden flex items-center justify-center w-full">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white hover:border-blue-500/30 transition-all duration-300"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 py-4">
            <div className="container mx-auto px-4">
              <div className="grid gap-2">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                      ${activeLink === id
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <Icon className={`${activeLink === id ? 'text-blue-400' : ''}`} />
                    <span>{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700/50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ 
              width: `${Math.min(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 
                100
              )}%` 
            }}
          />
        </div>
      </header>

      {/* Add some spacing for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}