import React from "react";
import Buttons from "./Buttons";

export default function Download() {
  return (
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
      <div className=" space-x-4">
        <Buttons />
      </div>
    </section>
  );
}
