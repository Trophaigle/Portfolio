import { getTranslations } from "next-intl/server";
import { musicData, MusicPiece } from "@/data/music";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function MusicDetailPage({ params }: Props) {
  const { slug } = await params;

  // Charge les traductions
  const tMusic = await getTranslations("music");
  const tMusicDescription = await getTranslations("musicDescription");

  // Récupère la musique
  const piece: MusicPiece | undefined = musicData.find((m) => m.slug === slug);

  if (!piece) return <p className="text-white p-6">Music piece not found</p>;

  const sketches = piece.sketches || [];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8 text-white">
      {/* HEADER */}
      <header>
        <h1 className="text-4xl font-bold">
          {tMusic(`${slug}.title`)}
        </h1>

        <p className="text-gray-300 mt-2">
          {tMusic(`${slug}.description`)}
        </p>

        {piece.type && (
          <span className="inline-block mt-4 px-3 py-1 rounded-full bg-blue-600 font-semibold">
            {piece.type.toUpperCase()}
          </span>
        )}
      </header>

      {/* PDF */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">{tMusicDescription("pdf")}</h2>
        {piece.pdfUrl ? (
          <a href={piece.pdfUrl} target="_blank" className="text-blue-400 underline">
            {tMusicDescription("viewPdf")}
          </a>
        ) : (
          <p className="text-gray-400">{tMusicDescription("noPdf")}</p>
        )}
      </section>

      {/* Audio / Video */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">{tMusicDescription("media")}</h2>

        {piece.audioUrl && (
          <audio controls src={piece.audioUrl} className="w-full mb-4" />
        )}

        {piece.videoUrl && (
          <iframe
            src={piece.videoUrl}
            className="w-full aspect-video rounded-lg mb-4"
          />
        )}

        {!piece.audioUrl && !piece.videoUrl && (
          <p className="text-gray-400">{tMusicDescription("noMedia")}</p>
        )}
      </section>

      {/* Sketches */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">{tMusicDescription("sketches")}</h2>

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
          <p className="text-gray-400">{tMusicDescription("noSketches")}</p>
        )}
      </section>
    </div>
  );
}