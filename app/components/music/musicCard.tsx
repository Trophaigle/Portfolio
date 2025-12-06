import { MusicPiece } from "@/data/music";
import Link from "next/link";

interface CardProps {
  piece: MusicPiece;
  imageSrc: string;
  isNew?: boolean;
}

export default function MusicCard({ piece, imageSrc, isNew }: CardProps) {
  // couleur auto selon type
  const getBadgeColor = (type?: string) => {
    if (!type) return "";
    const t = type.toLowerCase();
    if (t === "piano") return "bg-blue-600";
    if (t === "orchestra") return "bg-yellow-600";
    return "bg-purple-600"; // par défaut pour toute autre catégorie
  };

  return (
    <Link href={`/art/music/${piece.slug}`} className="block">
      <div className="flex items-center bg-gray-800 rounded-xl shadow-lg overflow-hidden p-4 min-h-[300px]">
        {/* Image à gauche */}
        <div className="w-1/2 h-full">
          <img
            src={imageSrc}
            alt={piece.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Texte à droite */}
        <div className="ml-4 w-1/2 relative h-full flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-white flex items-center">
            {piece.title}

            {/* Badge NEW */}
            {piece.isNew && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            )}
          </h3>

          <p className="text-gray-300 mt-2">{piece.description}</p>

          {/* Badge sous la description */}
          {piece.type && (
            <span
              className={`inline-block mt-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(
                piece.type
              )}`}
            >
              {piece.type.toUpperCase()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}