"use client"

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ArtHero() {
  const [zooming, setZooming] = useState(false);
  const router = useRouter();
  const t = useTranslations("artHero");

  const triggerZoomAndNavigate = (href : string) => {
    setZooming(true);

    // Wait for animation (350ms)
    setTimeout(() => {
      router.push(href);
    }, 350);
  };

  return (
    <div
      className={`container mx-auto px-6 py-16 relative transition-transform duration-1000 ease-out ${
        zooming ? "scale-700" : "scale-100"
      }`}
    >

      {/* Spotlight glow behind the PNG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full 
                        bg-gradient-to-tr from-purple-400/30 via-pink-300/20 to-yellow-200/10 
                        blur-3xl md:blur-[90px]">
        </div>
      </div>

      {/* FLEX LAYOUT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT TEXT */}
        <div className="relative group text-white md:w-1/3 text-center md:text-left mb-8 md:mb-0">


        <h2 className="text-3xl font-bold mb-4">{t("musicTitle")}</h2>
        <p className="text-gray-300 mb-4">
         {t("musicSubtitle")}
        </p>

        <Link
          href="/art/music"
          className="inline-block px-6 py-3 rounded-xl bg-red-700 hover:bg-indigo-700 transition text-white text-center"
        >
          {t("musicCTA")}
        </Link>
      </div>

        {/* CENTER PNG */}
        <div className="relative flex justify-center md:w-1/3 mb-8 md:mb-0">

          <img
            src="/images/gate.png"
            alt="Gate"
            className="max-h-[40vh] md:max-h-[55vh] object-contain drop-shadow-2xl pointer-events-none select-none"
          />

          {/* CENTER BUTTON */}
          <button
            onClick={() => triggerZoomAndNavigate("/")}
            className="
             absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             flex flex-col items-center text-white font-semibold
             bg-transparent border-none outline-none
             transition
             hover:text-purple-400
             hover:drop-shadow-[0_0_12px_rgba(180,80,255,0.9)]
             cursor-pointer
             text-center leading-tight
             text-2xl
            "
          >
            {t("magicalPortal").split("|").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < 1 && <br />}
              </React.Fragment>
            ))}
            
          </button>
        </div>

        {/* RIGHT TEXT */}
        <div className="text-white md:w-1/3 text-center md:text-right">
          <h2 className="text-3xl font-bold mb-4">{t("graphicTitle")}</h2>
          <p className="text-gray-300 mb-4">
            {t("graphicSubtitle")}
          </p>

          <Link
            href="/art/graphic"
            className="inline-block px-6 py-3 rounded-xl bg-red-700 hover:bg-indigo-700 transition text-white text-center"
          >
            {t("graphicCTA")}
          </Link>
        </div>

      </div>

      <section className="flex justify-center pt-10">
        <h2 className="text-center text-2xl">
          {t("footerText")}
        </h2>
      </section>
    </div>
  );
}