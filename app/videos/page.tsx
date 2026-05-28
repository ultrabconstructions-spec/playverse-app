"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setVideos(data);
    }
  }

  const categories = [
    "Trending",
    "Gaming",
    "Action",
    "Live",
    "Premium",
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}

      <section className="relative h-screen overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        {/* NAVBAR */}

        <nav className="relative z-50 flex items-center justify-between px-10 py-8">

          <Link
            href="/"
            className="text-5xl font-black text-red-600"
          >
            PlayVerse
          </Link>

          <div className="flex gap-5">

            <Link
              href="/upload"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-black transition"
            >
              Upload
            </Link>

            <Link
              href="/profile"
              className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-2xl font-black transition"
            >
              Profile
            </Link>

          </div>

        </nav>

        {/* HERO CONTENT */}

        <div className="relative z-20 h-full flex items-center px-10">

          <div className="max-w-3xl">

            <div className="bg-red-600 inline-block px-4 py-2 rounded-full text-sm font-black mb-6">
              PLAYVERSE ORIGINAL
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              ENTER THE
              <br />
              GAMING
              <br />
              UNIVERSE
            </h1>

            <p className="text-zinc-300 text-2xl mb-10">
              Watch next-generation gaming content,
              livestreams and creator videos.
            </p>

            <div className="flex gap-5 flex-wrap">

              <Link
                href="/videos"
                className="bg-white text-black px-10 py-5 rounded-2xl text-2xl font-black hover:scale-105 transition"
              >
                ▶ Play
              </Link>

              <button className="bg-zinc-800/80 backdrop-blur-xl px-10 py-5 rounded-2xl text-2xl font-black hover:bg-zinc-700 transition">
                + My List
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORY ROWS */}

      <section className="relative z-30 -mt-24 pb-24">

        {categories.map((category, rowIndex) => (

          <div
            key={category}
            className="mb-16"
          >

            <div className="flex items-center justify-between px-10 mb-6">

              <h2 className="text-4xl font-black">
                {category}
              </h2>

              <button className="text-zinc-400 hover:text-white transition">
                View All →
              </button>

            </div>

            <div className="flex gap-6 overflow-x-auto px-10 scrollbar-hide">

              {videos.map((video, index) => (

                <Link
                  key={`${rowIndex}-${video.id}-${index}`}
                  href={`/watch/${video.id}`}
                  className="group min-w-[320px]"
                >

                  <div className="relative overflow-hidden rounded-[35px] bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:scale-105 transition duration-500 shadow-2xl">

                    {/* IMAGE */}

                    <img
                      src={
                        video.thumbnail_url ||
                        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
                      }
                      className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* CONTENT */}

                    <div className="absolute bottom-0 left-0 p-6 w-full">

                      <div className="flex items-center gap-3 mb-4">

                        {video.premium && (

                          <div className="bg-red-600 px-3 py-1 rounded-full text-xs font-black">
                            PREMIUM
                          </div>

                        )}

                        <div className="bg-black/70 px-3 py-1 rounded-full text-sm">
                          {video.views || 0} views
                        </div>

                      </div>

                      <h3 className="text-3xl font-black mb-4">
                        {video.title}
                      </h3>

                      <div className="opacity-0 group-hover:opacity-100 transition">

                        <button className="bg-white text-black px-5 py-3 rounded-xl font-black">
                          ▶ Watch Now
                        </button>

                      </div>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}