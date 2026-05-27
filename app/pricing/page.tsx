"use client";

import Link from "next/link";

export default function PricingPage() {
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

        <Link
          href="/videos"
          className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl font-bold transition"
        >
          Browse
        </Link>

      </nav>

      {/* HEADER */}

      <section className="text-center py-24 px-6">

        <h1 className="text-6xl font-black mb-8">
          Upgrade To Premium
        </h1>

        <p className="text-zinc-400 text-2xl max-w-2xl mx-auto">
          Unlock premium creator content,
          exclusive videos and future live streams.
        </p>

      </section>

      {/* PLANS */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FREE */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10">

            <h2 className="text-4xl font-black mb-6">
              Free
            </h2>

            <div className="text-6xl font-black mb-8">
              ₹0
            </div>

            <ul className="space-y-5 text-zinc-300 text-lg mb-10">

              <li>✔ Watch free videos</li>
              <li>✔ Upload videos</li>
              <li>✔ Creator dashboard</li>

            </ul>

            <button className="w-full bg-zinc-800 py-5 rounded-2xl text-xl font-black">
              Current Plan
            </button>

          </div>

          {/* PREMIUM */}

          <div className="bg-red-600 rounded-[40px] p-10 text-black">

            <div className="inline-block bg-black text-white px-4 py-2 rounded-full font-black mb-6">
              MOST POPULAR
            </div>

            <h2 className="text-4xl font-black mb-6">
              Premium
            </h2>

            <div className="text-6xl font-black mb-8">
              ₹499
              <span className="text-2xl">
                /month
              </span>
            </div>

            <ul className="space-y-5 text-lg mb-10">

              <li>✔ Premium videos</li>
              <li>✔ Exclusive live streams</li>
              <li>✔ Early access content</li>
              <li>✔ Ad-free streaming</li>
              <li>✔ Future AI recommendations</li>

            </ul>

            <button className="w-full bg-black text-white py-5 rounded-2xl text-xl font-black hover:bg-zinc-900 transition">
              Upgrade Now
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}