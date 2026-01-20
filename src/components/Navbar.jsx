
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { name: 'Home', href: './Hero.jsx' },
    { name: 'About Me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? ' bg-gray-950' : 'bg-gray-50'}`}>
      <nav className={`${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'} border-b fixed w-full top-0 z-40 transition-colors duration-300`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center h-30 font-syne w-full">
            {/* Left - Logo */}
            <div className="flex-4 flex items-center h-full ">
              <h1 className={`text-2xl font-bold p-8 ${isDarkMode ? 'text-white' : 'text-gray-950'}`}>
                S<span className="text-orange-500">r</span>iram
              </h1>
            </div>

            {/* Center - Nav Links (with joined vertical dividers) */}
            <div className={`hidden lg:flex flex-8 justify-center items-center h-full px-8 space-x-8 ${isDarkMode ? 'border-l border-r border-gray-700' : 'border-l border-r border-gray-200'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    isDarkMode 
                      ? 'text-gray-100 hover:text-white' 
                      : 'text-gray-700 hover:text-gray-950'
                  }  font-syne font-bold transition-colors duration-300 `}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right - Actions (left divider ensures continuous join) */}
            <div className={`flex-4 flex items-center justify-end h-full space-x-4 px-12 `}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-950 text-yellow-400 hover:bg-gray-950' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-all duration-200`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Let's Talk Button - Desktop */}
              <button className="hidden lg:flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-300">
                <span>Let's Talk</span>
                <span>↗</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-950' 
                    : 'text-gray-950 hover:bg-gray-100'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} border-t`}>
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-700 hover:text-gray-900'
                  } text-base font-medium py-2 transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium mt-4 transition-colors duration-200">
                <span>Let's Talk</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Demo Content */}
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-center`}>
          <h2 className="text-4xl font-bold mb-4">Modern Navbar</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Toggle between dark and light mode using the button in the navbar
          </p>
        </div>
      </div>
    </div>
  );
}