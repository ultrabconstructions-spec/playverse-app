"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSubscribe = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text">
          PlayVerse
        </h1>

        <button
          onClick={handleSubscribe}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 font-bold"
        >
          Subscribe $1
        </button>
      </nav>

      {/* HERO */}
      <section className="px-8 py-24 text-center">
        <h2 className="text-7xl font-extrabold mb-8">
          Welcome To PlayVerse
        </h2>

        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          Movies, streaming, live content, games, and creator entertainment.
        </p>
      </section>

      {/* MOVIE SECTION */}
      <section className="px-8 pb-20">
        <h3 className="text-4xl font-bold mb-10">
          Trending Movies
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
              alt="movie"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h4 className="text-3xl font-bold mb-4">
                Avengers
              </h4>

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 font-bold">
                Watch Now
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="movie"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h4 className="text-3xl font-bold mb-4">
                Cyber City
              </h4>

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 font-bold">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}