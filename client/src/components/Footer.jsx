import { Link } from "react-router-dom";
import { Github, Instagram, Globe } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-colour)] bg-[var(--bg-colour)] text-[var(--text-colour)] py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          {/* Brand */}
          <Link
            to="/"
            className="text-lg font-bold text-[var(--primary-colour)] hover:text-[var(--primary-hover-colour)] transition-colors duration-300"
          >
            Piyush's Blog
          </Link>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-2 text-[var(--primary-colour)]">
              Useful Links
            </h3>
            <ul className="space-y-1 text-sm">
                <li>

                <Link
                  to="/Home"
                  className="hover:text-[var(--primary-hover-colour)] transition"
                  >
                  Home
                </Link>
                </li>
                <li>
                <Link
                  to="/about"
                  className="hover:text-[var(--primary-hover-colour)] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[var(--primary-hover-colour)] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-2 text-[var(--primary-colour)]">
              Follow Me
            </h3>
            <div className="flex gap-4 text-lg">
              <a
                href="https://github.com/piyusx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary-hover-colour)] transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/peeyush.js"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary-hover-colour)] transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://piyushrajbanshi.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary-hover-colour)] transition"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--border-colour)] mt-6 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {year} Piyush Rajbanshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
