"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Card from "../cards/card";

function Values() {
  const t = useTranslations("values");

  const values = [
    {
      title: t("creativity.title"),
      subtitle: t("creativity.subtitle"),
      image:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: t("impact.title"),
      subtitle: t("impact.subtitle"),
      image:
        "https://images.unsplash.com/photo-1498673394965-85cb14905c89?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: t("excellence.title"),
      subtitle: t("excellence.subtitle"),
      image: "/images/amadeus.jpg",
    },
    {
      title: t("boldness.title"),
      subtitle: t("boldness.subtitle"),
      image: "/images/MI.jpg",
    },
    {
      title: t("aesthetics.title"),
      subtitle: t("aesthetics.subtitle"),
      image:
        "https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: t("exploration.title"),
      subtitle: t("exploration.subtitle"),
      image: "/images/exploration.jpeg",
    },
    {
      title: t("sharing.title"),
      subtitle: t("sharing.subtitle"),
      image:
        "https://images.unsplash.com/photo-1670460891931-a2780ccb223f?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: t("community.title"),
      subtitle: t("community.subtitle"),
      image: "/images/lotr.jpeg",
    },
    {
      title: t("fun.title"),
      subtitle: t("fun.subtitle"),
      image: "/images/fun.jpeg",
    },
  ];

  return (
    <div className="bg-black p-8" id="values">
      <div className="container mx-auto">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl mb-12 text-center"
        >
          {t("title")}
        </motion.h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <Card
                  title={value.title}
                  subtitle={value.subtitle}
                  image={value.image}
                />
              </motion.div>
            ))}
          </div>

          {/* Phrase finale */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-16 text-center text-gray-400 text-sm italic"
          >
            {t("sentence")}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Values;