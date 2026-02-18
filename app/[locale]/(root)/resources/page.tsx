import Link from "next/link";

export default function Resources() {
    const resources = [
  {
    category: "Talks & Videos",
    icon: "🎥",
    items: [
      {
        title: "S'arrêter et prendre conscience | Le temps de méditer de Christophe André",
        summary:
          "Méditation quotidienne",
        url: "https://www.youtube.com/watch?v=f3N2QrQMCsQ",
      },
      {
        title: "Start With Why – Simon Sinek (TEDx)",
        summary:
          "How great leaders inspire action: clarity of purpose before strategy.",
        url: "https://www.youtube.com/watch?v=u4ZoJKF_VuA",
      },
      {
        title: "Et si on arrêtait d’avoir peur ? – Margaux Hammann",
        summary:
          "Remise en question de la place de la peur pour la transformer en véritable moteur",
        url: "https://www.youtube.com/watch?v=xKSSEHbRXcM",
      },
       {
        title: "How Being Bold Will Change Your Life | Gregory Russell Benedikt | TEDxSan Diego Studio",
        summary:
          "",
        url: "https://www.youtube.com/watch?v=ezygvBTXeeQ",
      },
      {
        title: "Les 6 règles pour avoir confiance en soi | Sally | TEDxBrussels",
        summary:
          "",
        url: "https://www.youtube.com/watch?v=2E_Kx-MBlEA",
      },
      {
        title: "Steve Job Speech",
        summary:
          "",
        url: "https://www.youtube.com/watch?v=Tuw8hxrFBH8",
      },
      {
        title: "The secrets of learning a new language | Lýdia Machová | TED",
        summary:
          "Enjoyment, Methods (that works for you), System, Patience",
        url: "https://www.youtube.com/watch?v=o_XVt5rdpFY",
      },
      {
        title: "Danish Podcast: Learn Danish Like a Child – Fast and Naturally",
        summary:
          "More than just a method to learn a language, it's rethinking how to learn something and face difficulties. It could be summarized in 'keeping simple, fun/love, making mistakes, courage and repetition'.",
        url: "https://www.youtube.com/watch?v=XimUGRxIPIk",
      },
      
      {
        title: "N'attendez pas votre place, créez-la! | Rebecca Sfedj | TEDxEMLYON",
        summary:
          "D'après un sondage Ipsos, la moitié des français estiment être passés à côté de leur vie.La réponse de Rebecca: n'attendez pas votre place, créez-la!",
        url: "https://www.youtube.com/watch?v=6lBFWkQ5x10",
      },
      {
        title: "Lucas Hof",
        summary:
          "Chaine Youtube / NewsLetter / Podcasts",
        url: "https://www.youtube.com/@Lucas_HOF",
      },
      {
        title: "Thomas D'Ansembourg",
        summary:
          "Livres et conférences sur la communication et bien d'autres choses",
        url: "https://www.youtube.com/watch?v=t2hWWM3OJdU",
      },
      {
        title: "Why Having Fun Is the Secret to a Healthier Life | Catherine Price | TED",
        summary:
          "",
        url: "https://www.youtube.com/watch?v=iMBJrvEwv8s",
      },
      // {
      //   title: "Christophe André: 9 choses à éliminer de votre vie avant 2026 pour retrouver la paix intérieure",
      //   summary:
      //     "Rappels",
      //   url: "https://www.youtube.com/watch?v=QV_ld64HyNs",
      // },
     
    ],
  },
   {
    category: "Articles",
    icon: "📄",
    items: [
      {
        title: "Le monde appartient à ceux qui osent !",
        summary:
          "'Bref, engagez-vous ! Impliquez-vous ! Montrez-vous ! Faites entendre votre voix, vos envies, vos impressions, vos convictions ! Oser dire OUI ! Mieux encore... Oser vous tromper !'",
        url: "https://personal-branding.fr/le-monde-appartient-a-ceux-qui-osent/",
      },
    ],
  },
  {
    category: "Personnalités inspirantes",
    icon: "📄",
    items: [
      {
        title: "J.J. Goldman",
        summary:
          "Humble, chansons dont les gens se reconnaissant dedans",
        url: "",
      },
      {
        title: "J. Williams",
        summary:
          "Humble, belle musique",
        url: "",
      },
      {
        title: "Courbet",
        summary:
          "Audace",
        url: "",
      },
      {
        title: "Jim Carrey",
        summary:
          "Oser la folie",
        url: "",
      },
    ],
  },
];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Resources
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          A curated collection of talks, articles and ideas that inspire my
          creative and personal journey.
        </p>

        <div className="space-y-16">
          {resources.map((group, index) => (
            <div key={index}>
              {/* Category title */}
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-2">
                <span>{group.icon}</span>
                <span>{group.category}</span>
              </h2>
  {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div
                      className="
                        h-full bg-gray-50 rounded-2xl p-6
                        border border-gray-200
                        transition
                        hover:shadow-lg
                        hover:-translate-y-1
                      "
                    >
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {item.title}
                      </h3>
                       <p className="text-gray-600 text-sm leading-relaxed">
                        {item.summary}
                      </p>

                      <span className="inline-block mt-4 text-purple-600 font-medium">
                        Open →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}