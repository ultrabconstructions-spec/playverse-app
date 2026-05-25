"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-gradient-to-b from-black/90 to-transparent">

        <Link href="/">
          <h1 className="text-3xl md:text-5xl font-extrabold text-red-600 cursor-pointer">
            PlayVerse
          </h1>
        </Link>

        <div className="flex gap-4 md:gap-8 text-sm md:text-lg font-medium">
          <Link href="/">
            Home
          </Link>

          <Link href="/videos">
            Videos
          </Link>

          <Link href="/upload">
            Upload
          </Link>
        </div>

      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center px-6 md:px-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Unlimited Movies,
            AI Videos & Streaming
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 mt-6">
            Watch creators, livestreams,
            gaming clips and cinematic content
            only on PlayVerse.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <Link href="/videos">
              <button className="bg-red-600 hover:bg-red-700 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold transition w-full sm:w-auto">
                ▶ Watch Now
              </button>
            </Link>

            <Link href="/upload">
              <button className="bg-white/20 backdrop-blur-lg hover:bg-white/30 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold transition border border-white/20 w-full sm:w-auto">
                Upload Video
              </button>
            </Link>

          </div>

        </div>

      </section>

      {/* TRENDING */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
          ].map((img, i) => (
            <div
              key={i}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden rounded-3xl">
                <img
                  src={img}
                  alt="Trending"
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-20 bg-zinc-950">

        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center">
          Why PlayVerse?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              AI Streaming
            </h3>

            <p className="text-zinc-400 text-lg">
              Smart recommendations and AI-powered video discovery.
            </p>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Creator Economy
            </h3>

            <p className="text-zinc-400 text-lg">
              Upload content, grow followers and monetize videos.
            </p>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Live Streaming
            </h3>

            <p className="text-zinc-400 text-lg">
              Go live instantly with premium cloud streaming.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500 text-sm md:text-base">
        © 2026 PlayVerse. All rights reserved.
      </footer>

    </main>
  );
}