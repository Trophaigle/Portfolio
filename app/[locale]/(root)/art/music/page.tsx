"use client";

import Highlight from "@/app/components/utils/highlight";
import HeroMusic from "@/app/components/music/heroMusic";
import MusicGalery from "@/app/components/music/musicGalery";
import PDFDownloadContainer from "@/app/components/music/pdfDownload";
import PianoRepertoire from "@/app/components/music/repertoire";

export default function music() {

 return (
  <>
    {/* 🎵 Accroche */}
    <HeroMusic />

    {/* ⭐ Focus créatif */}
    {/*<Highlight
      title="Work in progress..."
      description="Organ version of *När det lider mot jul*"
      imageSrc="/music/nar_detlidermotjul_organOngoing.jpg"
    />*/}

    {/* 🎼 Compositions */}
    <MusicGalery />

    {/* 📄 Ressources (PDF, partitions) */}
    <PDFDownloadContainer />

    {/* 🎹 Répertoire (secondaire, discret) */}
 
    {/*<PianoRepertoire />*/}

  </>
  );
}