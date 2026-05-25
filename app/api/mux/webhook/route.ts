import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("MUX WEBHOOK:", body);

    if (body.type === "video.asset.ready") {
      const asset = body.data;

      const playbackId =
        asset.playback_ids?.[0]?.id;

      const { data, error } =
        await supabase
          .from("videos")
          .insert({
            title: "Uploaded Video",
            thumbnail:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
            playback_id: playbackId,
            mux_asset_id: asset.id,
            views: 0,
          })
          .select();

      console.log(data, error);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json({
      error: true,
    });
  }
}