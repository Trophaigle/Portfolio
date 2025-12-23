import { useTranslations } from "next-intl";

interface TimelineStep {
  icon: string;
  title: string;
  description: string;

  sourceUrl?: string;
  sourceLabel?: string;
}

const timelineSteps: TimelineStep[] = [
 
  {
    icon: "🖌️",
    title: "Meera Lee Patel's Journal",
    description:
      "'Wherever we are in life, change is always around the corner – and we often find ourselves clinging to the familiar, to what’s safe, even if it’s no longer serving us, rather than summoning the courage to simply let go. In this beautifully illustrated journal, artist and author Meera Lee Patel pairs inspiring quotes and encouraging prompts to help you face your current challenges, navigate difficult transitions, and leave your comfort zone—so you can confidently move forward, into your next chapter.'",
      sourceUrl: "https://www.meeralee.com/my-friend-fear",
      sourceLabel: "Lire la source"
  },
  {
    icon: "🌟",
    title: "Learn how great leaders inspire action (TEDX) — Top 5 lessons from Simon Sinek’s ‘Start With Why’",
    description:
      "The leaders and organisations which inspire action, and can sustain to do so for longer periods of time, are the ones which have a clarity of their ‘why’, discipline of ‘how’, and consistency of ‘what’.",
    sourceUrl: "https://medium.com/@supermansastry/learn-how-great-leaders-inspire-action-top-5-lessons-from-simon-sineks-start-with-why-5727c9c1d76",
    sourceLabel: "Lire la source"
  },
   {
    icon: "🧲",
    title: "Lien profond entre art et science",
    description:
      "'L’art recherche la beauté et parle à l’émotion; la science recherche la vérité et parle à la raison. Cette dichotomie n’a pas raison d’être : artistes et scientifiques s’engagent en réalité dans l’observation et dans l’expérimentation. “C’est par l’expérience que progressent la science et l’art”, selon Aristote ». L’art tout comme la science riment avec innovation.'",
       sourceUrl: "https://www.usherbrooke.ca/actualites/nouvelles/details/36748",
    sourceLabel: "Lire la source"
  },
  {
    icon: "🤝",
    title: "Grandir ensemble face à l’inconnu",
    description:
      "S’inspirant d’œuvres comme *Stranger Things*, cette thématique met en avant l’importance des liens humains et de la coopération pour affronter des mondes dangereux ou des situations inconnues. Les personnages, souvent jeunes, apprennent à se soutenir mutuellement, à partager leurs forces et leurs peurs, et à évoluer ensemble face aux défis, montrant que la résilience collective est la clé pour surmonter les obstacles.",
      sourceUrl: "https://www.imdb.com/title/tt4574334/", 
    sourceLabel: "Voir la série"
  },
];



export default function ZigzagTimelineAuto() {

  const t = useTranslations('Timeline');

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-black text-center mb-12">
       {t('title')}
      </h2>

      <div className="relative">
        {/* Ligne verticale centrale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>

        <div className="flex flex-col space-y-12 relative">
          {timelineSteps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="w-full">
                {/* --- Version Desktop (zigzag) --- */}
                <div className="hidden md:flex flex-row items-center w-full">
                  {isLeft && (
                    <>
                      {/* Boîte texte à gauche */}
                      <div className="md:w-1/2 p-6 bg-gray-800 rounded-xl shadow-lg flex justify-end">

                        <div className="text-left">
                          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          <p className="text-gray-300 mt-2">{step.description}</p>

                          {step.sourceUrl && (
                            <a
                              href={step.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-3 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
                            >
                              🔗 {step.sourceLabel ?? "Voir la source"}
                            </a>
                          )}

                        </div>
                      </div>
                      

                      {/* Cercle icône centré */}
                      <div className="w-12 h-12 rounded-full bg-gray-400 border-4 border-gray-900 text-2xl flex items-center justify-center mx-6 z-10">
                        {step.icon}
                      </div>

                      <div className="md:w-1/2"></div>
                    </>
                  )}

                  {!isLeft && (
                    <>
                      <div className="md:w-1/2"></div>

                      {/* Cercle icône centré */}
                      <div className="w-12 h-12 rounded-full bg-gray-400 border-4 border-gray-900 text-2xl flex items-center justify-center mx-6 z-10">
                        {step.icon}
                      </div>

                      {/* Boîte texte à droite */}
                      <div className="md:w-1/2 p-6 bg-gray-800 rounded-xl shadow-lg flex justify-start">
                        <div className="text-left md:text-right">

                          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          <p className="text-gray-300 mt-2">{step.description}</p>

                          {step.sourceUrl && (
                            <a
                              href={step.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-3 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
                            >
                              🔗 {step.sourceLabel ?? "Voir la source"}
                            </a>
                          )}

                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* --- Version Mobile (icône au-dessus du texte) --- */}
                <div className="flex md:hidden flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-900 border-4 border-white flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center w-full">

                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="text-gray-300 mt-2">{step.description}</p>

                    {step.sourceUrl && (
                      <a
                        href={step.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
                      >
                        🔗 {step.sourceLabel ?? "Voir la source"}
                      </a>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center px-6 md:px-25">
  <p className="text-black text-xl md:text-2xl">
   {t('quote')}
  </p>
</div>
    </div>
  );
}