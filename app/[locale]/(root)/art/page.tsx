"use client"

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import InfoBlock from "@/app/components/utils/InfoBlock";
import ButtonCTA from "@/app/components/buttons/buttonCTA";
import Image from "next/image";

export default function ArtHero() {
  const [zooming, setZooming] = useState(false);
  const router = useRouter();
  const t = useTranslations("artPage");

  const triggerZoomAndNavigate = (href : string) => {
    setZooming(true);

    // Wait for animation (350ms)
    setTimeout(() => {
      router.push(href);
    }, 350);
  };

  return (
    <>
    <div
  className={`relative overflow-hidden transition-transform duration-1000 ease-out ${
    zooming ? "scale-700" : "scale-100"
  }`}
>
  {/* BACKGROUND IMAGE + OVERLAY */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/images/roadSunset.jpg" // image de fond
      alt="Background"
      fill
      className="object-cover"
      priority
    />
    {/* Overlay sombre */}
    <div className="absolute inset-0 bg-black/55" />
  </div>

  {/* CONTAINER CONTENT */}
  <div className="container mx-auto px-6 py-16 relative z-10">

    {/* Spotlight glow behind the PNG */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
      <div
        className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full
                   bg-gradient-to-tr from-purple-400/30 via-pink-300/20 to-yellow-200/10
                   blur-3xl md:blur-[90px]"
      />
    </div>

    {/* FLEX LAYOUT */}
    <div className="flex flex-col md:flex-row items-center justify-between">

      {/* LEFT TEXT */}
      <div className="text-white md:w-1/3 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">{t("musicTitle")}</h2>
        <p className="text-gray-300 mb-4">{t("musicSubtitle")}</p>

        <Link
          href="/art/music"
          className="inline-block px-6 py-3 rounded-xl bg-red-700 hover:bg-indigo-700 transition"
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

        <button
          onClick={() => triggerZoomAndNavigate("/")}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-white font-semibold text-2xl
            hover:text-purple-400
            hover:drop-shadow-[0_0_12px_rgba(180,80,255,0.9)]
            transition
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
        <p className="text-gray-300 mb-4">{t("graphicSubtitle")}</p>

        <Link
          href="/art/graphic"
          className="inline-block px-6 py-3 rounded-xl bg-red-700 hover:bg-indigo-700 transition"
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
</div>



{/* autre art pratiqués: theatre */}
{/* THEATRE SECTION */}
<section className="mt-24 pb-8 flex justify-center">
  <div className="max-w-2xl text-center text-gray-200 px-6">

    {/* Icon */}
    <div className="text-4xl mb-4">
      🎭
    </div>

    {/* Title */}
    <h3 className="text-2xl font-semibold mb-4 text-white">
      {t('theaterTitle')}
    </h3>

    {/* Text */}
    <p className="text-gray-300 leading-relaxed">
       {t('theaterText')}
    </p>

  </div>
</section>
    </>
  );
}