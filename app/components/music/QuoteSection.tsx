
export default function QuoteSection({
  quote = "quote test",
  author = "",
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-5 sm:px-8">
      <div className="w-full max-w-2xl text-center">

        {/* Guillemets */}
        <span
          className="
            block font-serif text-5xl sm:text-6xl
            leading-none mb-4
            bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400
            bg-clip-text text-transparent
          "
        >
          “
        </span>

        {/* Citation */}
        <blockquote
          className="
            text-xl sm:text-2xl md:text-3xl
            font-semibold
            leading-relaxed
            tracking-tight
            text-black
          "
        >
          {quote}
        </blockquote>

        {/* Auteur */}
        {author && (
          <p className="mt-6 text-sm sm:text-base text-gray-400">
            — {author}
          </p>
        )}

        {/* Petit accent */}
        <div
          className="
            mx-auto mt-8
            h-1 w-12 rounded-full
            bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400
          "
        />
      </div>
    </main>
  );
}



