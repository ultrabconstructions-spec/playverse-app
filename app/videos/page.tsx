"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    fetchVideos();
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);}, []);

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    console.log(data, error);

    if (data) {
      setVideos(data);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold">
          PlayVerse
        </h1>

        <div className="flex gap-8 text-lg">
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

      {/* CONTENT */}
      <div className="p-10">
        <h1 className="text-6xl font-bold mb-10">
          PlayVerse Videos
        </h1>
<div className="mb-10 text-red-500 text-2xl">
  Total Videos: {videos.length}
</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/watch/${video.id}`}
            >
              <div className="group cursor-pointer">

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="mt-3">
                  <h2 className="text-xl font-bold line-clamp-1">
                    {video.title}
                  </h2>

                  <p className="text-zinc-400 mt-1">
                    👁 {video.views} views
                  </p>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>

    </main>
  );
}