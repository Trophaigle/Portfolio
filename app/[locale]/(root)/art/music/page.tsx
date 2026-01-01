"use client";

import HeroMusic from "@/app/components/music/heroMusic";
import MusicGalery from "@/app/components/music/musicGalery";
import PDFDownloadContainer from "@/app/components/music/pdfDownload";

export default function music() {

 return (
   <>
    <HeroMusic />
    <PDFDownloadContainer />
    <MusicGalery />
    {/* sketch */}
   </>
  );
}