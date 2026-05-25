"use client";

import { useState } from "react";

export default function UploadPage() {
  const [loading, setLoading] =
    useState(false);

  const uploadVideo = async (
    e: any
  ) => {
    const file = e.target.files[0];

    if (!file) return;

    setLoading(true);

    const response = await fetch(
      "/api/upload",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
        }),
      }
    );

    const data =
      await response.json();

    const uploadUrl = data.url;

    await fetch(uploadUrl, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type":
          "video/mp4",
      },
    });

    setLoading(false);

    alert(
      "Video uploaded successfully!"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Upload Video
      </h1>

      <label className="bg-white text-black px-8 py-4 rounded-2xl cursor-pointer font-bold">
        Select MP4
        <input
          type="file"
          accept="video/mp4"
          hidden
          onChange={uploadVideo}
        />
      </label>

      {loading && (
        <p className="mt-6">
          Uploading...
        </p>
      )}
    </main>
  );
}