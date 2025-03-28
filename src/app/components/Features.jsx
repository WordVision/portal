import React from "react";
import { Book, ImageIcon, Download } from "lucide-react";

export default function Features() {
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
    <section id="what" className="py-20 bg-[#578ca4]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
          How WordVision Works
        </h2>
        <h3 className=" font-semibold text-center mb-12 text-gray-900 dark:text-white">
          Transform book passages into stunning AI-generated imagery. Read,
          imagine, and experience literature like never before.
        </h3>
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
  );
}
