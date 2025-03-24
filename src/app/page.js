"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Book, ImageIcon, Download, Menu, X, ArrowRight } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Book className="w-10 h-10 text-indigo-600" />,
      title: "Select Your Passage",
      description:
        "Easily highlight any scene or description from your favorite book.",
    },
    {
      icon: <ImageIcon className="w-10 h-10 text-indigo-600" />,
      title: "AI Image Generation",
      description:
        "Our advanced AI transforms text into stunning, unique visual representations.",
    },
    {
      icon: <Download className="w-10 h-10 text-indigo-600" />,
      title: "Save & Share",
      description:
        "Collect and share your literary visualizations with other book lovers.",
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow z-50 px-4 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-indigo-600">
              WordVision
            </span>
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
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {["Home", "What", "How", "Download"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-indigo-50 dark:from-gray-900 to-white dark:to-gray-800 pt-20"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            WordVision
          </h1>
          <p className="text-xl max-w-xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            Transform book passages into stunning AI-generated imagery. Read,
            imagine, and experience literature like never before.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://apps.apple.com/app/wordvision"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="dark:invert"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wordvision"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/buttons/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="what" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
            How WordVision Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section
        id="download"
        className="min-h-[50vh] flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-br from-indigo-100 dark:from-gray-900 to-white dark:to-gray-800"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Bring Your Books to Life
        </h2>
        <p className="text-xl mb-8 text-center max-w-xl text-gray-600 dark:text-gray-300">
          Download WordVision and start transforming your reading experience
          today.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://apps.apple.com/app/wordvision"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="dark:invert"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.wordvision"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/buttons/GetItOnGooglePlay_Badge_Web_color_English.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} WordVision. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-indigo-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-600">
            Terms of Service
          </a>
        </div>
      </footer>
    </main>
  );
}
