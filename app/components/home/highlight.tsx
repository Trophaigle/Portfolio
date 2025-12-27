import Image from "next/image";
import Link from "next/link";

function Highlight() {

return (
  <div className="container mx-auto px-6 py-12">
    <Link
      href="/art"
      className="block group"
    >
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
            Highlight
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Ceci est un contenu mis en avant. Tu peux décrire ici ton projet,
            une œuvre artistique, une fonctionnalité importante ou tout autre
            élément clé que tu souhaites valoriser.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
            alt="Highlight visuel"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </Link>
  </div>
);
}

export default Highlight;