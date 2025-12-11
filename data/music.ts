export interface MusicPiece {
  slug: string;             // unique identifier for URL
  type?: string;            // e.g., "piano", "orchestra"
  pdfUrl?: string;          // path to PDF
  audioUrl?: string;        // path to audio file
  videoUrl?: string;        // YouTube or other video URL
  sketches?: string[];      // array of image URLs
  isNew?: boolean;
}

// Example data
export const musicData: MusicPiece[] = [
    {
    slug: "balade-du-soir-e-majeur",
    type: "piano",
    pdfUrl: "/music/balade-du-soir-e-majeur/BaladeDuSoir1EMajorOnePage.pdf",
    isNew: true,
    videoUrl: "https://www.youtube.com/embed/1iDDVL20Bqs?si=sznBKEyyG0wLySvn",
    sketches: []
  },
  {
    slug: "la-rosa-enflorece",
    type: "orchestra",
    pdfUrl: "/music/la-rosa-enflorece/RosaEnflorece.pdf",
    videoUrl: "https://www.youtube.com/embed/BJp_RsPpZho?si=kqzeWHGILxHYf8OG",
    sketches: ["/sketches/nocturne-1.jpg", "/sketches/nocturne-2.jpg"]
  },
  {
    slug: "danse-des-poules",
    type: "piano",
    pdfUrl: "/music/danse-des-poules/DansePouleVersionPagesAjustée.pdf",
    videoUrl: "https://www.youtube.com/embed/pzbkw3pux2g?si=xJnk3lGk7MNIRmj4",
    isNew: true,
    sketches: []
  },
    {
    slug: "nar-det-lider-mot-jul",
    type: "orchestra",
    pdfUrl: "/music/nar-det-lider-mot-jul/FinalVersion_CoverPlusSheet.pdf",
    
    sketches: ["/music/nar-det-lider-mot-jul/page1SketchPapierNarDetLiderMotJul.jpg", "/sketches/autre_bout.jpg"]
  },
  {
    slug: "petit-nocturne-sankta-lucia",
    type: "piano",
    pdfUrl: "/music/petit-nocturne-sankta-lucia/NocturneLucia_merged.pdf",
    
    sketches: ["/music/petit-nocturne-sankta-lucia/sketch_rogne.jpg"]
  },
   {
    slug: "comptine-noel-organ",

    type: "organ",
    pdfUrl: "/music/comptine-noel-organ/ComptinedeNoelOrgan.pdf",
    
    sketches: []
  },
  {
    slug: "balade-a-paris-Gb",

    type: "piano",
    pdfUrl: "/music/balade-a-paris-Gb/Petite-Balade-a-Paris-en-Gb.pdf",
    videoUrl: "https://www.youtube.com/embed/8J0RPYWc-U4?si=V8FD5CU4NEJwaNBj",
    sketches: []
  },
   {
    slug: "marche-funebre",

    type: "organ",
    pdfUrl: "/music/marche-funebre/FunesteForPdf.pdf",
    videoUrl: "https://www.youtube.com/embed/RfBuS2MXnZ0?si=DedRygbGob2KN_-L",
    sketches: []
  }
];