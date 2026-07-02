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
    slug: "theme-passion",
    type: "orchestra",
    pdfUrl: "/music/theme-passion/ThemeDelaPassion.pdf",
    videoUrl: "https://www.youtube.com/embed/t751r_iIZfs?si=6CF4obrnBF9nOtZb",
    sketches: []
  },
   {
    slug: "composers-journey-contest",
    type: "orchestra",
    isNew: true,
    videoUrl: "https://www.youtube.com/embed/f_0fT9AMsbQ?si=EKFQZy1j1gG1QgD3",
    sketches: []
  },
  {
    slug: "99-LuftBallons",
    type: "orchestra",
    isNew: true,
    videoUrl: "",
    pdfUrl: "/music/99-LuftBallons/99LuftBallonsOrchestra.pdf",
    sketches: ["/music/99-LuftBallons/99LuftBallonsSketchA3.jpg"]
  },
    {
    slug: "balade-du-soir-e-majeur",
    type: "piano",
    pdfUrl: "/music/balade-du-soir-e-majeur/BaladeDuSoir1EMajorOnePage.pdf",
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
    slug: "valse-joie",
    type: "orchestra",
    pdfUrl: "/music/valse-joie/ValseDeLaJoieFinaleSheet.pdf",
    videoUrl: "https://www.youtube.com/embed/_HdvTgjd9n4?si=_K8WAZvRFHAcJ3JJ",
    sketches: []
  },
   {
    slug: "marche-funebre",

    type: "piano",
    pdfUrl: "/music/marche-funebre/FunesteForPdf.pdf",
    videoUrl: "https://www.youtube.com/embed/RfBuS2MXnZ0?si=DedRygbGob2KN_-L",
    sketches: []
  },
  {
    slug: "comptine-aout",

    type: "piano",
    pdfUrl: "/music/comptine-aout/ComptineDAout.pdf",
    sketches: []
  },
  {
    slug: "prelude-vagabond",

    type: "piano",
    pdfUrl: "/music/prelude-vagabond/PréludeVagabond.pdf",
    videoUrl: "https://www.youtube.com/embed/v4n77kQ1YeY?si=4l0Bqp4oo7G3sT_v",
    sketches: []
  },
  /*{
    slug: "boom-boom-instru",
    videoUrl: "https://www.youtube.com/embed/BOZwdtLd64Y?si=jvMhXkcA9DysTA0m",
    type: "band",

  },
  {
    slug: "symphony-instru",
    videoUrl: "https://www.youtube.com/embed/YxeqlAWos_A?si=G0Qo2Qc_Cj1UpQ5_",
    type: "band",

  }*/
];