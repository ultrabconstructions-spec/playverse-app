"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setUser(user);

      fetchVideos();
    }
  }

  async function fetchVideos() {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setVideos(data);
    }
  }

  async function logout() {
    await supabase.auth.signOut();

    window.location.href = "/";
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-5xl font-black mb-6">
            Not Logged In
          </h1>

          <Link
            href="/login"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold transition"
          >
            Login
          </Link>

        </div>
      </main>
    );
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

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold transition"
        >
          Logout
        </button>

      </nav>

      {/* PROFILE */}

      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 mb-16">

          <div className="flex flex-col md:flex-row md:items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-red-600 flex items-center justify-center text-5xl font-black">
              {user.email?.charAt(0).toUpperCase()}
            </div>

            <div>

              <h1 className="text-5xl font-black mb-4">
                Creator Profile
              </h1>

              <p className="text-zinc-400 text-xl mb-4">
                {user.email}
              </p>

              <div className="flex flex-wrap gap-4">

                <div className="bg-black px-5 py-3 rounded-2xl">
                  {videos.length} Videos
                </div>

                <div className="bg-black px-5 py-3 rounded-2xl">
                  Creator Account
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* VIDEOS */}

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-black">
            Your Videos
          </h2>

          <Link
            href="/upload"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-bold transition"
          >
            Upload New
          </Link>

        </div>

        {videos.length === 0 ? (

          <div className="bg-zinc-900 rounded-3xl p-20 text-center">

            <h3 className="text-3xl font-black mb-5">
              No Videos Uploaded
            </h3>

            <p className="text-zinc-400 mb-8">
              Upload your first creator video.
            </p>

            <Link
              href="/upload"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold transition"
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

                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition">

                  <img
                    src={
                      video.thumbnail_url ||
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                    }
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-5">

                    <div className="flex items-center gap-3 mb-3">

                      {video.premium && (

                        <div className="bg-red-600 px-3 py-1 rounded-full text-xs font-black">
                          PREMIUM
                        </div>

                      )}

                      <div className="text-zinc-400 text-sm">
                        {video.views || 0} views
                      </div>

                    </div>

                    <h3 className="text-xl font-black">
                      {video.title}
                    </h3>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}