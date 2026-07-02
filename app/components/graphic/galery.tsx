"use client";

import { motion } from "framer-motion";
import ImageCard from "./imageCard";

export enum Technique {
  OIL_PAINTING = "Oil Painting",
  ACR_PAINTING = "Acrylic Painting",
  DIGITAL_PAINTING = "Digital Painting",
  PENCIL_DRAWING = "Pencil Drawing",
  COLORPENCIL_DRAWING = "Color Pencil Drawing",
  MIXED_MEDIA = "Mixed Media",
}

// 🔥 Wrapper animé
function AnimatedImageCard({
  src,
  alt,
  technique,
  index = 0,
}: {
  src: string;
  alt: string;
  technique: Technique;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.08, // effet cascade
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <ImageCard src={src} alt={alt} technique={technique} />
    </motion.div>
  );
}

// 🔥 données propres (évite répétition JSX)
const col1 = [
  { src: "/images/oeuvresGraphiques/couple_rogne.jpg", tech: Technique.OIL_PAINTING },
  { src: "/images/oeuvresGraphiques/elea3_rogne.jpg", tech: Technique.OIL_PAINTING },
  { src: "/images/oeuvresGraphiques/daenerys_rogne.jpg", tech: Technique.PENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/bedroom3_rogne.jpg", tech: Technique.OIL_PAINTING },
  { src: "/images/oeuvresGraphiques/jeanWoman_rogne.jpg", tech: Technique.COLORPENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/mereNature_rogne.jpg", tech: Technique.MIXED_MEDIA },
  { src: "/images/oeuvresGraphiques/abeille.jpg", tech: Technique.ACR_PAINTING },
  { src: "/images/oeuvresGraphiques/etatBrut_rogne.jpg", tech: Technique.PENCIL_DRAWING },
];

const col2 = [
  { src: "/images/oeuvresGraphiques/RosaEnflorece_rogne.png", tech: Technique.PENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/cat.jpg", tech: Technique.COLORPENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/pirate_rogne.jpg", tech: Technique.ACR_PAINTING },
  { src: "/images/oeuvresGraphiques/schindler.jpg", tech: Technique.PENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/MiseANu_rogne.jpg", tech: Technique.COLORPENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/climbingOutdoor.jpg", tech: Technique.ACR_PAINTING },
  { src: "/images/oeuvresGraphiques/bouldering_rogne.jpg", tech: Technique.ACR_PAINTING },
];

const col3 = [
  { src: "/images/oeuvresGraphiques/train_rogne.jpg", tech: Technique.ACR_PAINTING },
  { src: "/images/oeuvresGraphiques/NarDetLiderMotJul.jpg", tech: Technique.MIXED_MEDIA },
  { src: "/images/oeuvresGraphiques/lena_rogne.jpg", tech: Technique.PENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/flowers_rogne.jpg", tech: Technique.ACR_PAINTING },
  { src: "/images/oeuvresGraphiques/Beth_rogne.jpg", tech: Technique.PENCIL_DRAWING },
  { src: "/images/oeuvresGraphiques/Ridhwan_circuit_rogne.jpg", tech: Technique.ACR_PAINTING },
  { src: "/images/oeuvresGraphiques/christophe_rogne.jpg", tech: Technique.PENCIL_DRAWING },
];

export default function GaleryImage() {
  return (
    <div className="bg-white">
      <section className="container mx-auto py-16 px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Colonne 1 */}
          <div className="flex flex-col gap-6">
            {col1.map((img, i) => (
              <AnimatedImageCard
                key={img.src}
                src={img.src}
                alt={`image-${i}`}
                technique={img.tech}
                index={i}
              />
            ))}
          </div>

          {/* Colonne 2 */}
          <div className="flex flex-col gap-6 pt-12">
            {col2.map((img, i) => (
              <AnimatedImageCard
                key={img.src}
                src={img.src}
                alt={`image-${i}`}
                technique={img.tech}
                index={i}
              />
            ))}
          </div>

          {/* Colonne 3 */}
          <div className="flex flex-col gap-6">
            {col3.map((img, i) => (
              <AnimatedImageCard
                key={img.src}
                src={img.src}
                alt={`image-${i}`}
                technique={img.tech}
                index={i}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}