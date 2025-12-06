import { musicData, MusicPiece } from "@/data/music";

interface Props {
  params: Promise<{ slug: string }>; // params est une Promise dans Next.js App Router
}

export default async function MusicDetailPage({ params }: Props) {
  // 🔹 "unwrap" la Promise
  const { slug } = await params;
  console.log("PARAMS slug:", slug); // log pour debugger

  // 🔹 récupérer directement le morceau depuis le data
  const piece: MusicPiece | undefined = musicData.find((m) => m.slug === slug);

  if (!piece) return <p className="text-white p-6">Music piece not found</p>;

  const sketches = piece.sketches || [];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8 text-white">
      {/* HEADER */}
      <header>
        <h1 className="text-4xl font-bold">{piece.title}</h1>
        {piece.description && <p className="text-gray-300 mt-2">{piece.description}</p>}
        {piece.type && (
          <span className="inline-block mt-4 px-3 py-1 rounded-full bg-blue-600 font-semibold">
            {piece.type.toUpperCase()}
          </span>
        )}
      </header>

      {/* PDF */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Partition (PDF)</h2>
        {piece.pdfUrl ? (
          <a href={piece.pdfUrl} target="_blank" className="text-blue-400 underline">
            View PDF
          </a>
        ) : (
          <p className="text-gray-400">No PDF available</p>
        )}
      </section>

      {/* Audio / Video */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Audio / Video</h2>
        {piece.audioUrl && <audio controls src={piece.audioUrl} className="w-full mb-4" />}
        {piece.videoUrl && (
          <iframe
            src={piece.videoUrl}
            className="w-full aspect-video rounded-lg mb-4"
          />
        )}
        {!piece.audioUrl && !piece.videoUrl && <p className="text-gray-400">No media available</p>}
      </section>

      {/* Sketches */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Sketches</h2>
        {sketches.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sketches.map((img) => (
              <img
                key={img}
                src={img}
                alt="Sketch"
                className="rounded-lg w-full h-auto object-cover"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No sketches available</p>
        )}
      </section>
    </div>
  );
}