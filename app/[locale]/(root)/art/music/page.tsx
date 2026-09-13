"use client";

import Highlight from "@/app/components/utils/highlight";
import HeroMusic from "@/app/components/music/heroMusic";
import MusicGalery from "@/app/components/music/musicGalery";
import PDFDownloadContainer from "@/app/components/music/pdfDownload";
import PianoRepertoire from "@/app/components/music/repertoire";
import QuoteSection from "@/app/components/music/QuoteSection";

export default function music() {

 return (
  <>
    {/* 🎵 Accroche */}
    <HeroMusic />

    {/*CNN J . williams reveals a surprising fact about ... */}
    <QuoteSection 
    quote="I have to credit music. What it does for our lives, sustaining our spirit and unriching our souls. It's like great poetry, great literature... Something to live for, to live by." 
    author="John Williams"
    />

    {/* 🎼 Compositions */}
    <MusicGalery />

    {/* 📄 Ressources (PDF, partitions) */}
    <PDFDownloadContainer />

    {/* 🎹 Répertoire (secondaire, discret) */}
 
    {/*<PianoRepertoire />*/}

  </>
  );
}