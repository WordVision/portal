import React from "react";
import Image from "next/image";

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
  );
}
