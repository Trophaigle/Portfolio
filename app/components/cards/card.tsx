
import React from "react";

// from https://tailwindflex.com/@ip-leroy/tailwind-image-card-with-text-above-it  On peut faire des components dans components pour créer component plus complexes

export default function Card({
  title,
  subtitle,
  image,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string
}) {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-5 pb-8 pt-40 max-w-sm
                        bg-black transition-transform transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/50">
      <img
        src={image}
        alt={title?.toString()}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        {subtitle}
      </div>
    </article>
  );
}