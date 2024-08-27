'use client';

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode.toString());
  };

  return (
    <nav className={`flexBetween max-container padding-container relative z-30 py-5 ${darkMode ? 'bg-gray-90' : 'bg-white'}`}>
      <Link href="/" className="flex items-center">
        <span className="text-xl font-bold text-green-50 dark:text-green-50">Reise-App</span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className={`regular-16 ${darkMode ? 'text-gray-10' : 'text-gray-50'} flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <div className="flex items-center gap-4">
          <button 
            type="button" 
            className={`px-6 py-2 font-semibold rounded-lg transition-colors ${darkMode ? 'bg-gray-10 text-gray-90' : 'bg-green-50 text-white'} hover:bg-gray-200 dark:hover:bg-gray-800`}
          >
            Anmelden
          </button>
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-10' : 'bg-gray-50'} transition-colors`}
          >
            <span className="sr-only">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            {darkMode ? (
              <span className="text-yellow-50">🌞</span> // Sun Emoji for Light Mode
            ) : (
              <span className="text-gray-900">🌜</span> // Moon Emoji for Dark Mode
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center lg:hidden gap-4">
        <button 
          type="button" 
          className={`px-6 py-2 font-semibold rounded-lg transition-colors ${darkMode ? 'bg-gray-10 text-gray-90' : 'bg-green-50 text-white'} hover:bg-gray-200 dark:hover:bg-gray-800`}
        >
          Anmelden
        </button>
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-10' : 'bg-gray-50'} transition-colors`}
        >
          <span className="sr-only">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          {darkMode ? (
            <span className="text-yellow-50">🌞</span> // Sun Emoji for Light Mode
          ) : (
            <span className="text-gray-900">🌜</span> // Moon Emoji for Dark Mode
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
