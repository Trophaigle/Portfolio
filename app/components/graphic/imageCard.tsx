"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageCardProps {
  src: string;
  alt: string;
}

export default function ImageCard({ src, alt }: ImageCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="w-full h-auto rounded-xl shadow overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="relative w-full h-auto group">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={1000}
            className="
              w-full h-auto object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Fullscreen Modal */}
     {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-[10000] text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
          >
            <X size={28} />
          </button>
          
          {/* Image wrapper */}
          <div className="relative w-auto h-full max-h-full py-8 z-[1]">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1600}
              className="object-contain w-auto h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}