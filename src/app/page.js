export default function Home() {
  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold">WordVision</span>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#hero" className="hover:text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-600">
              What
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-indigo-600">
              How
            </a>
          </li>
          <li>
            <a href="#download" className="hover:text-indigo-600">
              Download
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-indigo-100 to-white pt-20"
      >
        <h1 className="text-5xl font-bold mb-4">WordVision</h1>
        <p className="text-xl max-w-xl mb-6">
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
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto pt-20"
      >
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
      <section
        id="how"
        className="min-h-screen bg-gray-100 flex flex-col justify-center px-6 pt-20"
      >
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
      <section
        id="download"
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20"
      >
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
