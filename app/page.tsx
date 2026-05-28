import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <Link
        href="/videos"
        className="bg-red-600 px-8 py-4 rounded-2xl text-2xl font-black"
      >
        Enter PlayVerse
      </Link>
    </main>
  );
}
