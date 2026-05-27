"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="relative h-screen flex items-center">

        {/* BACKGROUND */}

        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

        {/* NAVBAR */}

        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20">

          <h1 className="text-4xl font-black text-red-600">
            PlayVerse
          </h1>

          <div className="flex items-center gap-5">

            <Link
              href="/videos"
              className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl font-bold transition"
            >
              Browse
            </Link>

            <Link
              href="/upload"
              className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold transition"
            >
              Upload
            </Link>

          </div>

        </nav>

        {/* CONTENT */}

        <div className="relative z-10 max-w-4xl px-8">

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            The Future
            <br />
            Of Creator Streaming

          </h1>

          <p className="text-zinc-300 text-xl md:text-2xl max-w-2xl mb-10">

            Stream premium creator content,
            gaming, AI videos, live entertainment
            and cinematic experiences on PlayVerse.

          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/videos"
              className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-black transition"
            >
              Watch Now
            </Link>

            <Link
              href="/upload"
              className="bg-zinc-800 hover:bg-zinc-700 px-10 py-5 rounded-2xl text-xl font-black transition"
            >
              Start Uploading
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-24 px-8">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black mb-16 text-center">
            Why PlayVerse
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-red-600 transition">

              <div className="text-6xl mb-6">
                🎬
              </div>

              <h3 className="text-3xl font-black mb-5">
                Premium Streaming
              </h3>

              <p className="text-zinc-400 text-lg">
                Watch cinematic creator content
                with blazing fast playback powered by Mux.
              </p>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-red-600 transition">

              <div className="text-6xl mb-6">
                🚀
              </div>

              <h3 className="text-3xl font-black mb-5">
                Creator Platform
              </h3>

              <p className="text-zinc-400 text-lg">
                Upload videos, grow audience,
                monetize content and build your channel.
              </p>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-red-600 transition">

              <div className="text-6xl mb-6">
                🤖
              </div>

              <h3 className="text-3xl font-black mb-5">
                AI-Powered Future
              </h3>

              <p className="text-zinc-400 text-lg">
                Smart recommendations,
                AI discovery and next-gen streaming experiences.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TRENDING */}

      <section className="pb-24 px-8">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-12">

            <h2 className="text-5xl font-black">
              Trending Categories
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              "Gaming",
              "AI Videos",
              "Live Streams",
              "Technology",
            ].map((item) => (

              <div
                key={item}
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-3xl p-12 text-center text-2xl font-black transition cursor-pointer"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-8 pb-24">

        <div className="max-w-6xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-16 text-center">

          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready To Stream?
          </h2>

          <p className="text-zinc-400 text-xl mb-10 max-w-2xl mx-auto">
            Join creators building the future of online entertainment.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/upload"
              className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-black transition"
            >
              Upload First Video
            </Link>

            <Link
              href="/videos"
              className="bg-zinc-800 hover:bg-zinc-700 px-10 py-5 rounded-2xl text-xl font-black transition"
            >
              Explore Videos
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">

        © 2026 PlayVerse. All rights reserved.

      </footer>

    </main>
  );
}