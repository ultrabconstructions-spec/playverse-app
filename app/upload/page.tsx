"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function UploadPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playbackId, setPlaybackId] = useState("");
  const [premium, setPremium] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!title || !playbackId) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("videos")
      .insert([
        {
          title,
          thumbnail_url: thumbnail,
          playback_id: playbackId,
          premium,
        },
      ]);

    setLoading(false);

    if (error) {
      console.log(error);
      alert("Upload failed");
      return;
    }

    router.push("/videos");
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
            href="/videos"
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl font-bold transition"
          >
            Browse
          </Link>

        </div>

      </nav>

      {/* CONTENT */}

      <section className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12">

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Upload Video
          </h1>

          <p className="text-zinc-400 text-xl">
            Publish creator content to PlayVerse.
          </p>

        </div>

        {/* FORM */}

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

          {/* TITLE */}

          <div className="mb-8">

            <label className="block text-lg font-bold mb-3">
              Video Title
            </label>

            <input
              type="text"
              placeholder="Enter video title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black border border-zinc-700 p-5 rounded-2xl outline-none focus:border-red-600 transition"
            />

          </div>

          {/* THUMBNAIL */}

          <div className="mb-8">

            <label className="block text-lg font-bold mb-3">
              Thumbnail URL
            </label>

            <input
              type="text"
              placeholder="Paste thumbnail image URL..."
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="w-full bg-black border border-zinc-700 p-5 rounded-2xl outline-none focus:border-red-600 transition"
            />

          </div>

          {/* PLAYBACK ID */}

          <div className="mb-8">

            <label className="block text-lg font-bold mb-3">
              Mux Playback ID
            </label>

            <input
              type="text"
              placeholder="Paste Mux playback ID..."
              value={playbackId}
              onChange={(e) => setPlaybackId(e.target.value)}
              className="w-full bg-black border border-zinc-700 p-5 rounded-2xl outline-none focus:border-red-600 transition"
            />

          </div>

          {/* PREMIUM */}

          <div className="mb-10">

            <label className="flex items-center gap-4 text-lg font-bold">

              <input
                type="checkbox"
                checked={premium}
                onChange={(e) => setPremium(e.target.checked)}
                className="w-5 h-5"
              />

              Premium Video

            </label>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 p-5 rounded-2xl text-xl font-black transition"
          >

            {loading ? "Uploading..." : "Publish Video"}

          </button>

        </div>

      </section>

    </main>
  );
}