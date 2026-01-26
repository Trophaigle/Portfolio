function PianoRepertoire() {
  const repertoire = [
    {
      category: "Classical",
      icon: "🎼",
      pieces: [
        "Frédéric Chopin – Nocturnes",
        "Frédéric Chopin – Fantaisie Impromptu",
         "Frédéric Chopin – Concerto 1 E minor",
         "valses, orchestre, ..."
      ],
    },
    {
      category: "Ragtime",
      icon: "🎹",
      pieces: [
        "Scott Joplin – Elite Synchopation",
        "Scott Joplin – Maple Leaf Rag",
        "Scott Joplin – Original Rags",
      ],
    },
    {
      category: "Jazz",
      icon: "🎹",
      pieces: [
        "Hit the road jack",
        "Hymne à l'amour",
        "Autre morceaux avec accord 7,9,sus,aug,dim",
      ],
    },
    {
      category: "Songs",
      icon: "🎵",
      pieces: [
        "Tout",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
          Piano repertoire
        </h2>

        <div className="space-y-4">
          {repertoire.map((group, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-gray-200 shadow-sm"
            >
              <summary
                className="
                  cursor-pointer list-none
                  flex items-center justify-between
                  px-6 py-4
                  text-black font-semibold text-lg
                  hover:bg-gray-50
                  transition
                "
              >
                <span className="flex items-center gap-3">
                  <span>{group.icon}</span>
                  <span>{group.category}</span>
                </span>

                <span className="text-gray-400 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>

              <ul className="px-6 pb-6 pt-2 space-y-3 text-gray-700">
                {group.pieces.map((piece, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    {piece}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PianoRepertoire;