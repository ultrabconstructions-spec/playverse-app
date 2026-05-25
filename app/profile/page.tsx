export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        My Profile
      </h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 max-w-2xl">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500" />

          <div>
            <h2 className="text-3xl font-bold">
              PlayVerse User
            </h2>

            <p className="text-gray-400">
              Premium Member
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}