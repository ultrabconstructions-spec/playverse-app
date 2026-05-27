"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/70" />

      </div>

      {/* NAVBAR */}

      <nav className="relative z-20 flex items-center justify-between px-8 py-6">

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

      {/* LOGIN CARD */}

      <section className="relative z-10 min-h-[80vh] flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-[40px] p-10">

          <h1 className="text-5xl font-black mb-5">
            Welcome Back
          </h1>

          <p className="text-zinc-400 text-lg mb-10">
            Login to continue streaming on PlayVerse.
          </p>

          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
            }}
            providers={["google"]}
            theme="dark"
          />

        </div>

      </section>

    </main>
  );
}