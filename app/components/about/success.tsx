"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Success = () => {
  const t = useTranslations("success");

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden"
      id="success"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-pink-500 to-indigo-500 opacity-20 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-2xl text-center p-10 rounded-3xl"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          <GradientText
            text={t("title")}
            highlights={[t("title_highlight")]}
          />
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="w-16 h-1 bg-white mx-auto mb-6 rounded-full origin-center"
        />

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.45,
            ease: "easeOut",
          }}
          className="text-lg md:text-xl text-white/80 leading-relaxed"
        >
          <GradientText
            text={t("p1")}
            highlights={[t("p1_highlight")]}
          />

          <br />
          <br />

          <GradientText
            text={t("p2")}
            highlights={[t("p2_highlight")]}
          />

          <br />
          <br />

          <GradientText
            text={t("p3")}
            highlights={[t("p3_highlight")]}
          />

          <br />
          <br />

          <GradientText
            text={t("p4")}
            highlights={[t("p4_highlight")]}
          />
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Success;

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
    {children}
  </span>
);

interface GradientTextProps {
  text: string;
  highlights: string[];
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  highlights,
}) => {
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        highlights.some(
          (highlight) =>
            highlight.toLowerCase() === part.toLowerCase()
        ) ? (
          <Highlight key={i}>{part}</Highlight>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};