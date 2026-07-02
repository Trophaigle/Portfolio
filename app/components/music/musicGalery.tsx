import React from "react";
import { motion } from "framer-motion";
import MusicCard from "./musicCard";
import { musicData } from "@/data/music";
import { useTranslations } from "next-intl";

function MusicGallery() {
  const t = useTranslations("music-composition");

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">

        {/* 🎯 Titre (entrée douce UX) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-10 text-center"
        >
          {t("myCompos")}
        </motion.h2>

        {/* 🎧 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {musicData.map((piece, index) => (
            <motion.div
              key={piece.slug}

              // ✨ état initial UX premium
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
                filter: "blur(4px)",
              }}

              // ✨ animation apparition scroll
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}

              // ✨ timing cascade
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1], // easing smooth premium
                delay: index * 0.08,
              }}

              viewport={{ once: true, amount: 0.2 }}

              // 🎨 UX hover interaction
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
            >

              {/* 🎨 Glow léger au hover (UX premium subtil) */}
              <div className="relative group">

                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-black/10" />

                <MusicCard
                  piece={piece}
                  imageSrc={`/music/${piece.slug}/${piece.slug}.jpg`}
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default MusicGallery;