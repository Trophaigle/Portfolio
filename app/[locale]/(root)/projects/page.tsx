"use client";

import IBelievePro from '@/app/components/about/iBelievePro';
import Identity from '@/app/components/entrepreneurship/identity'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

const Projects = () => {
  const t = useTranslations("projects.portfolioCard");
  return (
   
   <>
     <main className="bg-black min-h-screen text-white">
      <Link
  href="https://unityportfolio-gamma.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="group block container mx-auto pt-10 max-w-xl mb-10"
>
  <div
    className="
      relative overflow-hidden rounded-2xl
      border border-cyan-500/30
      bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
      p-8
      transition-all duration-300
      hover:scale-[1.02]
      hover:border-cyan-400
      hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
      cursor-pointer
    "
  >
    {/* Glow effect */}
    <div
      className="
        absolute inset-0 opacity-0
        bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10
        transition-opacity duration-300
        group-hover:opacity-100
      "
    />

    <div className="relative z-10">
      <span
        className="
          inline-block mb-3 rounded-full
          bg-cyan-500/20 px-3 py-1
          text-xs font-medium text-cyan-300
        "
      >
        {t("badge")}
      </span>

      <h2 className="text-2xl font-bold text-white mb-3">
        {t("title")}
      </h2>

      <p className="text-slate-300 leading-relaxed">
        {t("description")}
      </p>

      <div
        className="
          mt-6 flex items-center gap-2
          text-cyan-400 font-semibold
        "
      >
        {t("cta")}
        <span className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </div>
  </div>
</Link>
    <IBelievePro />
       </main>
    </>
   
  );
};

export default Projects;