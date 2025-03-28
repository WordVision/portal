import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 w-full shadow z-50 px-4 lg:px-8 py-4"
      style={{ backgroundColor: "#ccfbfb" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/WordVision_logo.png"
            width={75}
            height={22}
            className="rounded-md"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium">
          {["Home", "What", "How", "Download"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#686868] hover:text-indigo-600 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-[#ccfbfb] dark:bg-gray-800 shadow-lg">
          <ul className="hidden lg:flex space-x-6 text-sm font-medium">
            {["Home", "What", "How", "Download"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#686868] hover:text-indigo-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
