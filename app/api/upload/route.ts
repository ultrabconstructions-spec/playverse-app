import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  const body = await req.json();

  const response = await fetch(
    "https://api.mux.com/video/v1/uploads",
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.MUX_TOKEN_ID}:${process.env.MUX_TOKEN_SECRET}`
          ).toString("base64"),

        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        new_asset_settings: {
          playback_policy: [
            "public",
          ],
        },
        cors_origin: "*",
      }),
    }
  );

  const data =
    await response.json();

  return NextResponse.json({
    url: data.data.url,
  });
}