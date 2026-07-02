import { getTranslations } from "next-intl/server";
import { musicData } from "@/data/music";
import MusicView from "@/app/components/music/MusicView";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function MusicDetailPage({ params }: Props) {
  const { slug } = await params;

  const tMusic = await getTranslations("music");
  const tMusicDescription = await getTranslations("musicDescription");

  const piece = musicData.find((m) => m.slug === slug);

  if (!piece) {
    return (
      <div className="text-white p-6">
        Music piece not found
      </div>
    );
  }

  // ✅ RESOLVE ALL TRANSLATIONS HERE (IMPORTANT)
  const title = tMusic(`${slug}.title`);
  const description = tMusic(`${slug}.description`);

  const mediaLabel = tMusicDescription("media");
  const pdfLabel = tMusicDescription("pdf");
  const viewPdfLabel = tMusicDescription("viewPdf");
  const noPdfLabel = tMusicDescription("noPdf");
  const noMediaLabel = tMusicDescription("noMedia");
  const sketchesLabel = tMusicDescription("sketches");
  const noSketchesLabel = tMusicDescription("noSketches");

  return (
    <MusicView
      slug={slug}
      piece={piece}
      title={title}
      description={description}
      mediaLabel={mediaLabel}
      pdfLabel={pdfLabel}
      viewPdfLabel={viewPdfLabel}
      noPdfLabel={noPdfLabel}
      noMediaLabel={noMediaLabel}
      sketchesLabel={sketchesLabel}
      noSketchesLabel={noSketchesLabel}
    />
  );
}