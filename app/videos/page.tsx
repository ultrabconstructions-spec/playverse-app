"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchVideos();
  }, [search]);

  async function fetchVideos() {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .ilike("title", `%${search}%`)
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

        <div className="flex items-center gap-5">

          <Link
            href="/upload"
            className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold transition"
          >
            Upload
          </Link>

          <Link
            href="/login"
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl font-bold transition"
          >
            Login
          </Link>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative h-[70vh] flex items-center px-10 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Unlimited Streaming
            <br />
            For Creators
          </h1>

          <p className="text-zinc-300 text-xl mb-8">
            Watch premium creator videos, gaming content,
            AI entertainment and live streams.
          </p>

          <div className="flex gap-5">

            <Link
              href="/upload"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold text-lg transition"
            >
              Start Uploading
            </Link>

            <Link
              href="/videos"
              className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-2xl font-bold text-lg transition"
            >
              Browse Videos
            </Link>

          </div>

        </div>

      </section>

      {/* SEARCH */}

      <section className="px-8 py-10">

        <input
          type="text"
          placeholder="Search videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 p-5 rounded-2xl text-white outline-none"
        />

      </section>

      {/* TRENDING */}

      <section className="px-8 pb-16">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-black">
            Trending Now
          </h2>

          <p className="text-zinc-400">
            {videos.length} Videos
          </p>

        </div>

        {videos.length === 0 ? (

          <div className="bg-zinc-900 rounded-3xl p-20 text-center">

            <h3 className="text-3xl font-bold mb-4">
              No Videos Yet
            </h3>

            <p className="text-zinc-400 mb-8">
              Upload your first video to PlayVerse.
            </p>

            <Link
              href="/upload"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold inline-block transition"
            >
              Upload Video
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {videos.map((video) => (

              <Link
                key={video.id}
                href={`/watch/${video.id}`}
                className="group"
              >

                <div className="relative overflow-hidden rounded-3xl bg-zinc-900">

                  {/* PREMIUM BADGE */}

                  {video.premium && (

                    <div className="absolute top-4 left-4 z-20 bg-red-600 px-3 py-1 rounded-full text-xs font-black">
                      PREMIUM
                    </div>

                  )}

                  {/* THUMBNAIL */}

                  <div className="overflow-hidden">

                    <img
                      src={
                        video.thumbnail_url ||
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                      }
                      className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="p-5">

                    <h3 className="text-xl font-bold mb-3 line-clamp-1">
                      {video.title}
                    </h3>

                    <div className="flex items-center justify-between text-zinc-400 text-sm">

                      <span>
                        {video.views || 0} views
                      </span>

                      <span>
                        Play Now
                      </span>

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        )}

      </section>

      {/* CATEGORIES */}

      <section className="px-8 pb-20">

        <h2 className="text-4xl font-black mb-10">
          Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "Gaming",
            "AI Videos",
            "Live Streams",
            "Technology",
          ].map((cat) => (

            <div
              key={cat}
              className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl p-10 text-center text-2xl font-bold transition cursor-pointer"
            >
              {cat}
            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">

        © 2026 PlayVerse. All rights reserved.

      </footer>

    </main>
  );
}