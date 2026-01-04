import { useTranslations } from "next-intl";
import React from "react";

interface Language {
  name: string;
  level: string; // Beginner, Intermediate, Fluent, Native
  flagEmoji: string; // 🇫🇷, 🇬🇧, etc.
}

interface LanguagesProps {
  languages: Language[];
}

export default function Languages({ languages }: LanguagesProps) {
  const t = useTranslations('languages-about')
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              <span className="text-3xl">{lang.flagEmoji}</span>
              <span className="text-xl font-semibold text-white mt-2">{lang.name}</span>
              <span className="text-sm text-gray-300 mt-1">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
