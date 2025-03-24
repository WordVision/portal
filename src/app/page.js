import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-indigo-100 to-white">
        <h1 className="text-5xl font-bold mb-4">WordVision</h1>
        <p className="text-xl max-w-xl mx-auto mb-6">
          Turn book passages into stunning AI-generated imagery. Read, imagine,
          and experience.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://apps.apple.com/"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
          >
            Google Play
          </a>
        </div>
      </section>

      {/* What is WordVision */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">What is WordVision?</h2>
        <p className="text-lg">
          WordVision is an AI-powered companion app for book lovers. It helps
          you visualize scenes from your favorite books by transforming selected
          passages into unique AI-generated images. Whether you're deep into a
          fantasy novel or exploring historical fiction, WordVision brings the
          world of the book to life.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            How it works
          </h2>
          <ul className="space-y-6 text-lg">
            <li>
              <strong>1. Select a passage:</strong> Highlight a scene or
              description in your book.
            </li>
            <li>
              <strong>2. Process with AI:</strong> Our AI analyzes the text and
              imagines a visual version of the scene.
            </li>
            <li>
              <strong>3. View your image:</strong> See and save the result,
              bringing your reading experience to a whole new level.
            </li>
          </ul>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Download WordVision</h2>
        <p className="text-lg mb-6">
          Get the app now and bring your books to life.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://apps.apple.com/"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
          >
            Google Play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WordVision. All rights reserved.
      </footer>
    </main>
  );
}
