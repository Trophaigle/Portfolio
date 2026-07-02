"use client";

import React from "react";

type MusicPiece = {
  type?: string;
  pdfUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  sketches?: string[];
};

type Props = {
  slug: string;
  piece: MusicPiece;

  title: string;
  description: string;

  mediaLabel: string;
  pdfLabel: string;
  viewPdfLabel: string;
  noPdfLabel: string;
  noMediaLabel: string;
  sketchesLabel: string;
  noSketchesLabel: string;
};

export default function MusicView({
  piece,
  slug,
  title,
  description,
  mediaLabel,
  pdfLabel,
  viewPdfLabel,
  noPdfLabel,
  noMediaLabel,
  sketchesLabel,
  noSketchesLabel,
}: Props) {
  const sketches = piece.sketches || [];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">{title}</h1>

          <p className="text-gray-300">{description}</p>

          {piece.type && (
            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">
              {piece.type.toUpperCase()}
            </span>
          )}
        </header>

        {/* MEDIA */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">{mediaLabel}</h2>

          {piece.audioUrl && (
            <audio controls src={piece.audioUrl} className="w-full" />
          )}

          {piece.videoUrl && (
            <iframe
              src={piece.videoUrl}
              className="w-full aspect-video rounded-lg"
            />
          )}

          {!piece.audioUrl && !piece.videoUrl && (
            <p className="text-gray-400">{noMediaLabel}</p>
          )}
        </section>

        {/* PDF */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">{pdfLabel}</h2>

          {piece.pdfUrl ? (
            <a
            href={piece.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex items-center gap-3
                px-6 py-3
                rounded-full

                bg-red-700
                hover:bg-red-600

                text-white font-medium tracking-wide

                transition-all duration-300 ease-out

                hover:scale-[1.03]
                active:scale-95

                hover:shadow-lg
                hover:shadow-red-600/30

                border border-red-500/20
            "
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                />
            </svg>

            <span>{viewPdfLabel}</span>
            </a>
          ) : (
            <p className="text-gray-400">{noPdfLabel}</p>
          )}
        </section>

        {/* SKETCHES */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">{sketchesLabel}</h2>

          {sketches.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sketches.map((img) => (
                <img
                  key={img}
                  src={img}
                  className="rounded-lg hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400">{noSketchesLabel}</p>
          )}
        </section>

      </div>
    </div>
  );
}