"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import MuxPlayer from "@mux/mux-player-react";

export default function WatchPage() {
  const params = useParams();

  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
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
          views: data.views + 1,
        })
        .eq("id", data.id);
    }
  };

  if (!video) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  if (!video.playback_id) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Processing Video...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        {video.title}
      </h1>

      <MuxPlayer
        playbackId={video.playback_id}
        streamType="on-demand"
        autoPlay={false}
        className="w-full rounded-3xl overflow-hidden"
      />

      <div className="mt-6 text-gray-400">
        👁 {video.views} views
      </div>
    </main>
  );
}