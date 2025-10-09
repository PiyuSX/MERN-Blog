import { useState } from "react";
import { Search, Menu, X, LogIn, UserPlus, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import useThemeStore from "../store/themeStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "Projects", link: "/projects" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300"
            >
              Piyush's Blog
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden sm:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 dark:text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm transition-colors duration-300"
              />
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {isDarkMode ? (
              <Sun
                className="cursor-pointer text-yellow-400"
                onClick={toggleDarkMode}
              />
            ) : (
              <Moon
                className="cursor-pointer text-gray-700 dark:text-gray-300"
                onClick={toggleDarkMode}
              />
            )}
            <Link
              to="/signup"
              className="flex items-center bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <UserPlus className="h-5 w-5 mr-1" /> Sign Up
            </Link>
          </div>
        
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
             {isDarkMode ? (
              <Sun
                className="cursor-pointer text-yellow-400"
                onClick={toggleDarkMode}
              />
            ) : (
              <Moon
                className="cursor-pointer text-gray-700 dark:text-gray-300"
                onClick={toggleDarkMode}
              />
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Search Bar - Mobile */}
            <div className="relative my-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 dark:text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm transition-colors duration-300"
              />
            </div>

            {/* Nav Links - Mobile */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Auth Buttons - Mobile */}
            <div className="flex flex-col space-y-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/signup"
                className="flex items-center justify-center bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <UserPlus className="h-5 w-5 mr-2" /> Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
