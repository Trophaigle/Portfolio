"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

interface TimelineStep {
  icon: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
}

const timelineSteps: TimelineStep[] = [
  {
    icon: "🖌️",
    title: {
      fr: "Apprentissage personnel",
      en: "Self Learning"
    },
    description: {
      fr: "J’aime approfondir mes connaissances et développer mes compétences dans les domaines qui éveillent ma curiosité : apprentissage de nouvelles langues (comme l’allemand), harmonie et orchestration musicales, ainsi que perfectionnement dans les arts graphiques.",
      en: "I enjoy deepening my knowledge and developing my skills in the subjects that spark my curiosity: learning new languages such as German, studying musical harmony and orchestration, and refining my graphic arts skills."
    },
   
  },
   {
    icon: "🌟",
    title: {
       fr: "Lancer et construire des projets, et explorer de nouvelles idées",
      en: "Launching, building projects, and exploring new ideas"
    },
    description: {
      fr: "Explorer de nouvelles techniques, perspectives, idées qui me rapprochent de ce que je souhaite créer dans ce monde ! (voir section 'Art' et 'Projets')",
      en: "Exploring new techniques, perspectives, and ideas that bring me closer to what I want to create in this world ! (see 'Art' and 'Projects' sections)"
    },
  
  },
  {
    icon: "🌟",
    title: {
      fr: "Ecole National Supérieure d'Informatique et de Mathématiques Appliquées de Grenoble (ENSIMAG) — Informatique",
      en: "National School of Computer Science and Applied Mathematics of Grenoble (ENSIMAG) — Computer Science"
    },
    description: {
      fr: "2022-2025",
      en: "2022-2025"
    },
  
  },
  {
    icon: "🕊️",
    title: {
      fr: "Classe Préparatoire aux Grandes Écoles (CPGE) — Physique - Chimie",
      en: "Preparatory Class for the Grandes Écoles (CPGE) — Physics - Chemistry"
    },
    description: { fr: "2020-2022", en: "2020-2022" },
  },
  /*{
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
  },*/
];


function getText(step: TimelineStep, locale: "fr" | "en") { //pour eviter d'écrire ...[locale] à chaque fois
  return {
    title: step.title[locale],
    description: step.description[locale],
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