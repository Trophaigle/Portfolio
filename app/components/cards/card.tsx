import React from "react";

interface CardProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
}

export default function Card({
  title,
  subtitle,
  image,
}: CardProps) {
  return (
    <article
      className="
        relative isolate
        flex flex-col justify-end

        h-[300px]
        w-full

        overflow-hidden
        rounded-2xl

        px-6
        pb-0

        bg-black

        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-2xl
        hover:shadow-purple-500/30
      "
    >
      {/* Background image */}
      <img
        src={image}
        alt={title?.toString()}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <h3 className="text-3xl font-bold text-white mb-3">
          {title}
        </h3>

        {/* Fixed height so every card stays identical */}
        <div
          className="
            h-24
            overflow-hidden

            text-sm
            leading-6
            text-gray-300
          "
        >
          {subtitle}
        </div>
      </div>
    </article>
  );
}