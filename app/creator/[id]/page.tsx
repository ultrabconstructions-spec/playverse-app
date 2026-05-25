"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function CreatorPage() {
  const params = useParams();

  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("creator_id", params.id);

    if (data) {
      setVideos(data);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="mb-12">
        <h1 className="text-6xl font-bold mb-4">
          Creator Channel
        </h1>

        <p className="text-gray-400 text-xl">
          Premium PlayVerse Creator
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`/watch/${video.id}`}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:scale-105 transition"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold mb-3">
                {video.title}
              </h2>

              <p className="text-gray-400">
                {video.views} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}