export interface MusicPiece {
  slug: string;             // unique identifier for URL
  title: string;            // piece title
  description: string;      // description of the piece
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
    title: "Balade du soir E majeur",
    description: "Description balade du soir",
    type: "piano",
    pdfUrl: "/music/balade-du-soir-e-majeur/BaladeDuSoir1Emajor.pdf",
    isNew: true,
    videoUrl: "https://www.youtube.com/embed/1iDDVL20Bqs?si=sznBKEyyG0wLySvn",
    sketches: []
  },
  {
    slug: "la-rosa-enflorece",
    title: "Nar Det Lider Mot Jul - 2025",
    description: "Nar det lider mot jul",
    type: "orchestra",
    pdfUrl: "/music/la-rosa-enflorece/RosaEnflorece.pdf",
    videoUrl: "https://www.youtube.com/embed/BJp_RsPpZho?si=kqzeWHGILxHYf8OG",
    sketches: ["/sketches/nocturne-1.jpg", "/sketches/nocturne-2.jpg"]
  },
  {
    slug: "danse-des-poules",
    title: "Danse des Poules",
    description: "Poules qui rourent, la nuit tombe, le renard passe, et le jour se lève ...",
    type: "piano",
    pdfUrl: "/music/danse-des-poules/DansePouleAvecAjustementFinal.pdf",
    videoUrl: "https://www.youtube.com/embed/pzbkw3pux2g?si=xJnk3lGk7MNIRmj4",
    isNew: true,
    sketches: []
  },
    {
    slug: "nar-det-lider-mot-jul",
    title: "Nar Det Lider Mot Jul - 2025",
    description: "Orchestration du chant de Noel suédois 'Nar det lider mot jul'",
    type: "orchestra",
    pdfUrl: "/music/nar-det-lider-mot-jul/FinalVersion_CoverPlusSheet.pdf",
    
    sketches: ["/music/nar-det-lider-mot-jul/page1SketchPapierNarDetLiderMotJul.jpg", "/sketches/autre_bout.jpg"]
  },
  {
    slug: "petit-nocturne-sankta-lucia",
    title: "Petit Nocturne pour la Sankta Lucia",
    description: "Nocturne écrit sur un Steinway en Suède après la cérémonie de Lucia",
    type: "piano",
    pdfUrl: "/music/petit-nocturne-sankta-lucia/NocturneLucia_merged.pdf",
    
    sketches: ["/music/petit-nocturne-sankta-lucia/sketch_rogne.jpg"]
  }
  
  
];