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

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <Link
          href="/"
          className="text-4xl font-black text-red-600"
        >
          PlayVerse
        </Link>

        <div className="flex gap-4">

          <Link
            href="/upload"
            className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold transition"
          >
            Upload
          </Link>

          <Link
            href="/profile"
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl font-bold transition"
          >
            Profile
          </Link>

        </div>

      </nav>

      {/* HEADER */}

      <section className="px-8 py-16">

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Trending Videos
        </h1>

        <p className="text-zinc-400 text-xl">
          Stream creator content on PlayVerse.
        </p>

      </section>

      {/* VIDEOS */}

      <section className="px-8 pb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {videos.map((video) => (

            <Link
              key={video.id}
              href={`/watch/${video.id}`}
              className="group"
            >

              <div className="relative overflow-hidden rounded-[30px] bg-zinc-900 border border-zinc-800 hover:border-red-600 transition duration-300">

                {/* THUMBNAIL */}

                <img
                  src={
                    video.thumbnail_url ||
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                  }
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* HOVER OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">

                  <div>

                    <div className="flex items-center gap-3 mb-4">

                      {video.premium && (

                        <div className="bg-red-600 px-3 py-1 rounded-full text-xs font-black">
                          PREMIUM
                        </div>

                      )}

                      <div className="text-sm text-zinc-300">
                        {video.views || 0} views
                      </div>

                    </div>

                    <h2 className="text-2xl font-black mb-3">
                      {video.title}
                    </h2>

                    <button className="bg-white text-black px-5 py-2 rounded-xl font-black">
                      ▶ Watch
                    </button>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}