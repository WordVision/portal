"use client";

import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth">
      {/* Responsive Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Download CTA */}
      <Download />

      {/* Footer */}
      <Footer />
    </main>
  );
}
