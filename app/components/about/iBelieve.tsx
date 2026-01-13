"use client";

import React from 'react'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';



export default function IBelieve () { //ecrit dans auberge jeunesse Copenhague, il neige dehors et il fait froid. Et moi je travail sur le site dans la grande salle un soir

   const t = useTranslations("Quotes");
  const quotes = t.raw("list") as string[];

  return (
    <section className="py-32 bg-neutral-950">
      <div className="flex justify-center">
        <div className="space-y-16 text-center">

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light tracking-wide text-gray-200"
          >
            {t("title")}
          </motion.h2>
           {/* Quotes */}
          <div className="space-y-10">
            {quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="
                  relative
                  px-6
                  border-gray-700
                  max-w-4xl
                  mx-auto
                  text-lg
                  md:text-xl
                  leading-loose
                  italic
                  text-gray-400
                "
              >
                       {quote}
              </motion.blockquote>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}