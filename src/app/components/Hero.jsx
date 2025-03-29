import React from "react";
import Image from "next/image";
import Buttons from "./Buttons";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#83caed] to-white dark:from-[#83caed] dark:to-gray-800 pt-20"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          <span className="highlight-cursor">
            WordVision
            <span className="moving-cursor"></span>
          </span>
        </h1>

        <p className="text-xl max-w-xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          Explore and dive into your favorite books and see the story just as
          you always wanted to.
        </p>
        <div className="space-x-4">
          <Buttons />
        </div>
      </div>
    </section>
  );
}
