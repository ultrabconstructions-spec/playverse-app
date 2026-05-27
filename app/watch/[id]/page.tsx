"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import MuxPlayer from "@mux/mux-player-react";

import { supabase } from "@/lib/supabase";

export default function WatchPage() {
  const params = useParams();

  const [video, setVideo] = useState<any>(null);

  const [comments, setComments] = useState<any[]>([]);

  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchVideo();
    fetchComments();
  }, []);

  async function fetchVideo() {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("id", params.id)
      .single();

    if (data) {
      setVideo(data);

      await supabase
        .from("videos")
        .update({
          views: (data.views || 0) + 1,
        })
        .eq("id", data.id);
    }
  }

  async function fetchComments() {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .eq("video_id", params.id)
      .order("created_at", { ascending: false });

    if (data) {
      setComments(data);
    }
  }

  async function addComment() {
    if (!comment) return;

    await supabase
      .from("comments")
      .insert([
        {
          video_id: params.id,
          username: "PlayVerse User",
          message: comment,
        },
      ]);

    setComment("");

    fetchComments();
  }

  async function likeVideo() {
    if (!video) return;

    const newLikes = (video.likes || 0) + 1;

    await supabase
      .from("videos")
      .update({
        likes: newLikes,
      })
      .eq("id", video.id);

    setVideo({
      ...video,
      likes: newLikes,
    });
  }

  if (!video) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  const subscribed = false;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <Link
          href="/videos"
          className="text-4xl font-black text-red-600"
        >
          PlayVerse
        </Link>

        <Link
          href="/upload"
          className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold transition"
        >
          Upload
        </Link>

      </nav>

      {/* PLAYER */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        {video.premium && !subscribed ? (

          <div className="bg-zinc-900 h-[500px] rounded-3xl flex flex-col items-center justify-center text-center">

            <h1 className="text-5xl font-black mb-6">
              Premium Content
            </h1>

            <button className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-bold transition">
              <Link
  href="/pricing"
  className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-bold transition"
>
  Upgrade Subscription
</Link>
            </button>

          </div>

        ) : (

          <div className="overflow-hidden rounded-3xl">

            <MuxPlayer
              playbackId={video.playback_id}
              streamType="on-demand"
              autoPlay
            />

          </div>

        )}

        {/* DETAILS */}

        <div className="mt-10">

          <div className="flex flex-wrap items-center gap-5 mb-5">

            {video.premium && (

              <div className="bg-red-600 px-4 py-1 rounded-full text-sm font-black">
                PREMIUM
              </div>

            )}

            <div className="text-zinc-400">
              {video.views || 0} views
            </div>

            <div className="text-zinc-400">
              ❤️ {video.likes || 0}
            </div>

          </div>

          <h1 className="text-5xl font-black mb-6">
            {video.title}
          </h1>

          {/* ACTIONS */}

          <div className="flex gap-5 mb-10">

            <button
              onClick={likeVideo}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-bold transition"
            >
              ❤️ Like
            </button>

            <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-2xl font-bold transition">
              Share
            </button>

          </div>

        </div>

      </section>

      {/* COMMENTS */}

      <section className="max-w-5xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-black mb-8">
          Comments
        </h2>

        {/* INPUT */}

        <div className="bg-zinc-900 rounded-3xl p-6 mb-10">

          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-2xl p-5 outline-none min-h-[120px]"
          />

          <button
            onClick={addComment}
            className="mt-5 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold transition"
          >
            Post Comment
          </button>

        </div>

        {/* COMMENTS LIST */}

        <div className="space-y-6">

          {comments.map((item) => (

            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"
            >

              <div className="flex items-center justify-between mb-4">

                <h3 className="font-black text-xl">
                  {item.username}
                </h3>

                <div className="text-zinc-500 text-sm">
                  Comment
                </div>

              </div>

              <p className="text-zinc-300 text-lg">
                {item.message}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}