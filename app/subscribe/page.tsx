export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-xl w-full p-10 rounded-3xl bg-white/5 border border-white/10 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Subscribe to PlayVerse
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Unlock movies, games, and premium content.
        </p>

        <button className="w-full py-5 rounded-3xl bg-gradient-to-r from-pink-500 to-cyan-500 text-2xl font-bold">
          Pay $1
        </button>
      </div>
    </main>
  );
}