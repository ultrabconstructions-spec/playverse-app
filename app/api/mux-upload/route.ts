import { NextResponse } from "next/server";
import mux from "@/lib/mux";

export async function POST() {
  try {
    const upload = await mux.video.uploads.create({
      new_asset_settings: {
        playback_policy: ["public"],
      },

      cors_origin: "*",
    });

    return NextResponse.json(upload);
  } catch (error) {
    return NextResponse.json(
      { error: "Mux upload failed" },
      { status: 500 }
    );
  }
}