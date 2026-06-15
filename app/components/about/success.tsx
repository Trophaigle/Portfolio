"use client"

import React from 'react'
import { useTranslations } from 'next-intl'

const Success = () => {
  const t = useTranslations('success')

  return (
       <section className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden" id="success">
  <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-pink-500 to-indigo-500 opacity-20 pointer-events-none"></div>

  <div className="relative max-w-2xl text-center p-10 rounded-3xl">
    {/* Titre */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
      <GradientText
        text={t("title")}
        highlights={[t("title_highlight")]}
      />
    </h2>

    <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>

    {/* Paragraphe */}
    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      <GradientText
        text={t("p1")}
        highlights={[t("p1_highlight")]}
      />
      <br /><br />
      <GradientText
        text={t("p2")}
        highlights={[t("p2_highlight")]}
      />
      <br /><br />
      <GradientText
        text={t("p3")}
        highlights={[t("p3_highlight")]}
      />
      <br /><br />
      <GradientText
        text={t("p4")}
        highlights={[t("p4_highlight")]}
      />
    </p>
  </div>
</section>
  )
}

export default Success

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
    {children}
  </span>
);

interface GradientTextProps {
  text: string;          // phrase complète
  highlights: string[];  // mots à mettre en highlight
}

const GradientText: React.FC<GradientTextProps> = ({ text, highlights }) => {
  // On découpe le texte en morceaux selon les mots à mettre en highlight
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
          <Highlight key={i}>{part}</Highlight>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};
