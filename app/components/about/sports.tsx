import { useTranslations } from "next-intl";
import React from "react";

interface Sport {
  name: string;
  level?: string; // optionnel : Leisure, Regular, Competitive, etc.
  icon: string;   // 🧗‍♂️ 🏃‍♂️ 🎾 🏋️‍♂️
}

interface SportsProps {
  sports: Sport[];
}

export default function Sports({ sports }: SportsProps) {
//   const t = useTranslations("sports-about");

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {/* {t("title")} */}
          Sports
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {sports.map((sport, idx) => (
            <div
              key={idx}
              className="
                bg-gray-900 p-6 rounded-xl shadow-lg
                flex flex-col items-center justify-center
                hover:scale-105 transition-transform
              "
            >
              <span className="text-4xl">{sport.icon}</span>

              <span className="text-xl font-semibold text-white mt-3">
                {sport.name}
              </span>

              {sport.level && (
                <span className="text-sm text-gray-400 mt-1">
                  {sport.level}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}