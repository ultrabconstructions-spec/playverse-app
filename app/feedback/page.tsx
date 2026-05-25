export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Feedback
      </h1>

      <textarea
        className="w-full h-60 rounded-3xl bg-white/10 p-6 text-white"
        placeholder="Write your feedback..."
      />

      <button className="mt-6 px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 font-bold">
        Submit
      </button>
    </main>
  );
}