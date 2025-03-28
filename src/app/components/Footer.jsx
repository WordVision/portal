import React from "react";

export default function Footer() {
  return (
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
  );
}
