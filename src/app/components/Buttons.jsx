import React from "react";
import Image from "next/image";

export default function Buttons() {
  return (
    <div className="flex justify-center ">
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
          className="object-contain h-[60px] w-[200px] dark:invert"
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
          className="object-contain h-[60px] w-[200px]"
        />
      </a>
    </div>
  );
}
