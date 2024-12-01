import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="bg-red-900 dark:bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="bg-red-700 p-2 rounded-full">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-xl font-bold">RedTilt</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#reviews" className="hover:underline">
            Reviews
          </a>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
          <a href="#jobs" className="hover:underline">
            Jobs
          </a>
        </nav>

        {/* Dark Mode Toggle and Button */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center bg-red-700 dark:bg-gray-700 rounded-full hover:bg-red-800 dark:hover:bg-gray-600 transition duration-300"
          >
            {darkMode ? (
              // Moon Icon for Dark Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M21.75 15.004a9.75 9.75 0 01-11.52-12.405c.151-.023.303-.034.455-.034a7.75 7.75 0 107.75 7.75c0 .152-.012.304-.034.455a9.709 9.709 0 013.349 4.234z" />
              </svg>
            ) : (
              // Sun Icon for Light Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zm0 1.5a6.75 6.75 0 110 13.5 6.75 6.75 0 010-13.5zM12 0a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zm11.25-6a.75.75 0 010 1.5H21a.75.75 0 010-1.5h2.25zM3 .75A.75.75 0 013.75 0v2.25a.75.75 0 01-1.5 0V.75A.75.75 0 013 .75zM4.5 19.5a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5h2.25zM19.5 4.5a.75.75 0 010 1.5h-2.25a.75.75 0 010-1.5h2.25zM2.25 11.25a.75.75 0 01.75-.75H5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" />
              </svg>
            )}
          </button>

          {/* CTA Button */}
          <button className="bg-red-700 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-red-800 dark:hover:bg-gray-600 transition duration-300">
            Start a Project
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
