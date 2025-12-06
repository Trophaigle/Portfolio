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
    pdfUrl: "/music/BaladeDuSoir1Emajor.pdf",
    isNew: true,
    sketches: ["/sketches/nocturne-1.jpg", "/sketches/nocturne-2.jpg"]
  },
  {
    slug: "la-rosa-enflorece",
    title: "Nar Det Lider Mot Jul - 2025",
    description: "Nar det lider mot jul",
    type: "orchestra",
    pdfUrl: "/music/BaladeDuSoir1Emajor.pdf",
    
    sketches: ["/sketches/nocturne-1.jpg", "/sketches/nocturne-2.jpg"]
  },
  {
    slug: "danse-des-poules",
    title: "Balade du soir E majeur",
    description: "Description balade du soir",
    type: "piano",
    pdfUrl: "/music/BaladeDuSoir1Emajor.pdf",
    isNew: true,
    sketches: ["/sketches/nocturne-1.jpg", "/sketches/nocturne-2.jpg"]
  },
    {
    slug: "nar-det-lider-mot-jul",
    title: "Nar Det Lider Mot Jul - 2025",
    description: "Nar det lider mot jul",
    type: "orchestra",
    pdfUrl: "/music/BaladeDuSoir1Emajor.pdf",
    
    sketches: ["/sketches/nocturne-1.jpg", "/sketches/nocturne-2.jpg"]
  },
  {
    slug: "petit-nocturne-sankta-lucia",
    title: "Nar Det Lider Mot Jul - 2025",
    description: "Nar det lider mot jul",
    type: "orchestra",
    pdfUrl: "/music/BaladeDuSoir1Emajor.pdf",
    
    sketches: ["/sketches/nocturne-1.jpg", "/sketches/nocturne-2.jpg"]
  }
  
  
];