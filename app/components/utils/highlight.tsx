import Image from "next/image";
import Link from "next/link";

type HighlightProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

function Highlight({
  title,
  description,
  imageSrc,
  imageAlt = "Highlight visuel",
  href = "#",
}: HighlightProps) {
  return (
    <div className="bg-white">
    <div className="container mx-auto px-6 py-12">
      <Link href={href} className="block group">
        <div
          className="bg-white rounded-2xl shadow-lg p-8
                     flex flex-col md:flex-row items-center gap-8
                     transition transform
                     group-hover:scale-[1.02]
                     group-hover:shadow-xl"
        >
          {/* Texte */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-black mb-4">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-64 relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Highlight;