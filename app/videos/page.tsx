"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { supabase } from "@/lib/supabase";

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);

  const [featured, setFeatured] = useState<any>(null);

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

      if (data.length > 0) {
        setFeatured(data[0]);
      }
    }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}

      {featured && (

        <section className="relative h-screen w-full overflow-hidden">

          {/* VIDEO BACKGROUND */}

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src={`https://stream.mux.com/${featured.playback_id}.m3u8`}
            />
          </video>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

          {/* NAVBAR */}

          <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-8">

            <Link
              href="/"
              className="text-5xl font-black text-red-600 tracking-tight"
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
                className="bg-zinc-800/80 backdrop-blur-xl hover:bg-zinc-700 px-6 py-3 rounded-2xl font-black transition"
              >
                Profile
              </Link>

            </div>

          </nav>

          {/* FEATURED CONTENT */}

          <div className="relative z-20 h-full flex items-center px-10">

            <div className="max-w-3xl">

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-8xl font-black leading-none mb-8"
              >
                {featured.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-300 text-2xl mb-10 max-w-2xl"
              >
                Experience next-generation creator streaming on PlayVerse.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-5"
              >

                <Link
                  href={`/watch/${featured.id}`}
                  className="bg-white text-black px-10 py-5 rounded-2xl text-2xl font-black hover:scale-105 transition"
                >
                  ▶ Watch Now
                </Link>

                <button className="bg-zinc-800/80 backdrop-blur-xl px-10 py-5 rounded-2xl text-2xl font-black hover:bg-zinc-700 transition">
                  + My List
                </button>

              </motion.div>

            </div>

          </div>

        </section>

      )}

      {/* TRENDING */}

      <section className="relative z-30 -mt-32 px-10 pb-24">

        <div className="mb-10">

          <h2 className="text-5xl font-black mb-3">
            Trending Now
          </h2>

          <p className="text-zinc-400 text-xl">
            Most watched creator content
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {videos.map((video, index) => (

            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              <Link
                href={`/watch/${video.id}`}
                className="group block"
              >

                <div className="relative overflow-hidden rounded-[35px] bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:scale-105 transition duration-500 shadow-2xl">

                  {/* VIDEO PREVIEW */}

                  <video
                    src={`https://stream.mux.com/${video.playback_id}.m3u8`}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-[500px] object-cover"
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

                      <div className="bg-black/70 backdrop-blur-xl px-3 py-1 rounded-full text-sm">
                        {video.views || 0} views
                      </div>

                    </div>

                    <h3 className="text-3xl font-black mb-4">
                      {video.title}
                    </h3>

                    <div className="opacity-0 group-hover:opacity-100 transition">

                      <button className="bg-white text-black px-5 py-3 rounded-xl font-black">
                        ▶ Play
                      </button>

                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}