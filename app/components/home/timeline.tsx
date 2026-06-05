"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

interface TimelineStep {
  icon: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  sourceUrl: string;
  sourceLabel: { fr: string; en: string };
}

const timelineSteps: TimelineStep[] = [
  {
    icon: "🖌️",
    title: {
      fr: "Journal de Meera Lee Patel",
      en: "Meera Lee Patel's Journal"
    },
    description: {
      fr: "« Où que nous soyons dans la vie, le changement est toujours au coin de la rue – et nous nous accrochons souvent à ce qui est familier, à ce qui est sûr, même si cela ne nous sert plus, plutôt que d'avoir le courage de lâcher prise. Dans ce journal magnifiquement illustré, l'artiste et auteure Meera Lee Patel associe des citations inspirantes et des exercices pour vous aider à affronter vos défis, naviguer dans les transitions difficiles et sortir de votre zone de confort afin de progresser en confiance vers votre prochain chapitre. »",
      en: "'Wherever we are in life, change is always around the corner – and we often find ourselves clinging to the familiar, to what’s safe, even if it’s no longer serving us, rather than summoning the courage to simply let go. In this beautifully illustrated journal, artist and author Meera Lee Patel pairs inspiring quotes and encouraging prompts to help you face your current challenges, navigate difficult transitions, and leave your comfort zone—so you can confidently move forward, into your next chapter.'"
    },
    sourceUrl: "https://www.meeralee.com/my-friend-fear",
    sourceLabel: { fr: "Lire la source", en: "Read source" }
  },
  {
    icon: "🌟",
    title: {
      fr: "Apprenez comment les grands leaders inspirent l'action (TEDX) — Top 5 leçons de ‘Start With Why’ de Simon Sinek",
      en: "Learn how great leaders inspire action (TEDX) — Top 5 lessons from Simon Sinek’s ‘Start With Why’"
    },
    description: {
      fr: "Les leaders et organisations qui inspirent l'action, et qui peuvent le maintenir sur le long terme, sont ceux qui ont une clarté de leur 'pourquoi', une discipline de leur 'comment' et une cohérence de leur 'quoi'.",
      en: "The leaders and organisations which inspire action, and can sustain to do so for longer periods of time, are the ones which have a clarity of their ‘why’, discipline of ‘how’, and consistency of ‘what’."
    },
    sourceUrl: "https://medium.com/@supermansastry/learn-how-great-leaders-inspire-action-top-5-lessons-from-simon-sineks-start-with-why-5727c9c1d76",
    sourceLabel: { fr: "Lire la source", en: "Read source" }
  },
  {
    icon: "🕊️",
    title: {
      fr: "Et si on arrêtait d'avoir peur ? | Margaux Hammann | TEDxReims",
      en: "What if we stopped being afraid? | Margaux Hammann | TEDxReims"
    },
    description: { fr: "", en: "" },
    sourceUrl: "https://www.youtube.com/watch?v=xKSSEHbRXcM",
    sourceLabel: { fr: "Lire la source", en: "Read source" }
  },
  {
    icon: "🧲",
    title: {
      fr: "Lien profond entre art et science",
      en: "Deep Connection Between Art and Science"
    },
    description: {
      fr: "« L’art recherche la beauté et parle à l’émotion ; la science recherche la vérité et parle à la raison. Cette dichotomie n’a pas raison d’être : artistes et scientifiques s’engagent en réalité dans l’observation et l’expérimentation. “C’est par l’expérience que progressent la science et l’art”, selon Aristote. L’art tout comme la science riment avec innovation. »",
      en: "'Art seeks beauty and speaks to emotion; science seeks truth and speaks to reason. This dichotomy has no real meaning: artists and scientists are actually engaged in observation and experimentation. “It is through experience that science and art progress,” according to Aristotle. Both art and science rhyme with innovation.'"
    },
    sourceUrl: "https://www.usherbrooke.ca/actualites/nouvelles/details/36748",
    sourceLabel: { fr: "Lire la source", en: "Read source" }
  },
];


function getText(step: TimelineStep, locale: "fr" | "en") { //pour eviter d'écrire ...[locale] à chaque fois
  return {
    title: step.title[locale],
    description: step.description[locale],
    sourceLabel: step.sourceLabel[locale],
  };
}

export default function ZigzagTimelineAuto() {

  const t = useTranslations('Timeline'); //Pour les titres generiques (titres de section etc ...)
  const locale = useLocale() as "fr" | "en"; //pour contenus spécifiques à la timeline, contenus possiblement amenés à évoluer ...

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
            const text = getText(step, locale);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="w-full"
      >
                {/* --- Version Desktop (zigzag) --- */}
                <div className="hidden md:flex flex-row items-center w-full">
                  {isLeft && (
                    <>
                      {/* Boîte texte à gauche */}
                      <div className="md:w-1/2 p-6 bg-gray-800 rounded-xl shadow-lg flex justify-end">

                        <div className="text-left">
                          <h3 className="text-xl font-semibold text-white">{text.title}</h3>
                          <p className="text-gray-300 mt-2">{text.description}</p>

                          {step.sourceUrl && (
                            <a
                              href={step.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-3 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
                            >
                              🔗 {text.sourceLabel ?? "Voir la source"}
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

                          <h3 className="text-xl font-semibold text-white">{text.title}</h3>
                          <p className="text-gray-300 mt-2">{text.description}</p>

                          {step.sourceUrl && (
                            <a
                              href={step.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-3 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
                            >
                              🔗 {text.sourceLabel ?? "Voir la source"}
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

                    <h3 className="text-xl font-semibold text-white">{text.title}</h3>
                    <p className="text-gray-300 mt-2">{text.description}</p>

                    {step.sourceUrl && (
                      <a
                        href={step.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
                      >
                        🔗 {text.sourceLabel ?? "Voir la source"}
                      </a>
                    )}

                  </div>
                </div>
              </motion.div>
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