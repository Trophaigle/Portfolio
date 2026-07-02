"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ArtHero() {
  const [zooming, setZooming] = useState(false);
  const router = useRouter();
  const t = useTranslations("artPage");

  const triggerZoomAndNavigate = (href: string) => {
    setZooming(true);

    setTimeout(() => {
      router.push(href);
    }, 350);
  };

  return (
    <div className="bg-black">

      {/* HERO */}
      <div
        className={`relative overflow-hidden transition-transform duration-1000 ease-out ${
          zooming ? "scale-150" : "scale-100"
        }`}
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/roadSunset.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />

          {/* UX upgrade: gradient overlay (plus profond que simple noir) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-6 py-16 relative z-10">

          {/* glow background (subtil UX) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-[400px] h-[400px] md:w-[550px] md:h-[550px]
              rounded-full bg-gradient-to-tr from-purple-400/20 via-pink-300/10 to-yellow-200/10
              blur-3xl md:blur-[100px]"
            />
          </div>

          {/* GRID */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

          <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white md:w-1/3 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {t("musicTitle")}
          </h2>

          <Link
            href="/art/music"
            className="
              inline-block

              px-6 py-3
              md:px-10 lg:px-14

              rounded-full

              bg-red-700 hover:bg-red-600

              text-white font-medium tracking-wide

              transition-all duration-300 ease-out

              hover:scale-[1.05]
              active:scale-95

              hover:shadow-lg hover:shadow-red-500/30
            "
          >
            {t("musicCTA")}
          </Link>
        </motion.div>

            {/* CENTER PORTAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center md:w-1/3"
            >
              <img
                src="/images/gate.png"
                alt="Gate"
                className="
                  max-h-[40vh] md:max-h-[55vh]
                  object-contain
                  drop-shadow-2xl
                  transition-transform duration-300
                  hover:scale-[1.03]
                  select-none pointer-events-none
                "
              />

              <button
                onClick={() =>
                  triggerZoomAndNavigate(
                    "https://visual-audio-experience-threejs.vercel.app/"
                  )
                }
                className="
                  absolute top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2

                  text-white font-semibold text-xl md:text-2xl

                  transition-all duration-300
                  hover:text-purple-300
                  hover:scale-105
                  hover:drop-shadow-[0_0_18px_rgba(180,80,255,0.9)]
                "
              >
                {t("magicalPortal").split("|").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < 1 && <br />}
                  </React.Fragment>
                ))}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white md:w-1/3 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                {t("graphicTitle")}
              </h2>

              <Link
                href="/art/graphic"
                className="
                  inline-block

                  px-6 py-3
                  md:px-10 lg:px-14

                  rounded-full

                  bg-red-700 hover:bg-red-600

                  text-white font-medium tracking-wide

                  transition-all duration-300 ease-out

                  hover:scale-[1.05]
                  active:scale-95

                  hover:shadow-lg hover:shadow-red-500/30
                "
              >
                {t("graphicCTA")}
              </Link>
            </motion.div>

          </div>

          {/* FOOTER TEXT */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center pt-10"
          >
            <h2 className="text-center text-2xl text-gray-200">
              {t("footerText")}
            </h2>
          </motion.section>

        </div>
      </div>

      {/* THEATRE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 pb-8 flex justify-center"
      >
        <div className="max-w-2xl text-center text-gray-200 px-6 mb-10">

          <div className="text-4xl mb-4">🎭</div>

          <h3 className="text-2xl font-semibold mb-4 text-white">
            {t("theaterTitle")}
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {t("theaterText")}
          </p>

        </div>
      </motion.section>

    </div>
  );
}