import { useLocale, useTranslations } from "next-intl";

interface MiniTimelineStep {
  icon: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
}

const miniTimelineSteps: MiniTimelineStep[] = [
  {
    icon: "📐",
    title: {
      fr: "Classe préparatoire 2020 - 2022",
      en: "Preparatory Classes 2020 - 2022"
    },
    description: {
      fr: "Formation intensive en mathématiques / physique / chimie et phisosophie, développant rigueur et endurance.",
      en: "Intensive training in mathematics / physics / chemistry and philosophy developping rigor and resilience."
    }
  },
   {
    icon: "🎓",
    title: {
      fr: "ENSIMAG - École Nationale Supérieure d’Informatique et de Mathématiques Appliquées de Grenoble 2022 - 2025",
      en: "National Graduate School of Computer Science and Applied Mathematics of Grenoble 2022 - 2025"
    },
    description: {
      fr: "École d’ingénieurs de Grenoble spécialisée en informatique, mathématiques appliquées et sciences du numérique.",
      en: "Engineering school in Grenoble specializing in computer science, applied mathematics, and digital sciences."
    }
  },
  {
    icon: "🎨",
    title: {
      fr: "Véritable développement de mes aptitudes artistiques 2022 - ...",
      en: "A genuine growth of my artistic abilities 2022 - ..."
    },
    description: {
      fr: "En parallèle de ma formation en informatique, j’ai acquis, en autodidacte ou dans le cadre associatif, de solides compétences en musique, arts visuels et théâtre.",
      en: "Alongside my computer science studies, I have cultivated strong skills in music, visual arts, and theatre, both self-taught and through community involvement."
    }
  },
  {
    icon: "🇸🇪",
    title: {
      fr: "ERASMUS - Chalmers Goteborg 2025",
      en: "ERASMUS  Chalmers Goteborg 2025"
    },
    description: {
      fr: "Séjour de six mois en Suède dans le cadre d’Erasmus, à l’Université de Chalmers. Découverte de la culture, des gens et des lieux, une vraie ouverture au monde.",
      en: "Spent six months in Sweden on Erasmus at Chalmers University, discovering the culture, the people, and the landscapes — a real window to the world."
    }
  },
];

function getText(step: MiniTimelineStep, locale: "fr" | "en") {
  return {
    title: step.title[locale],
    description: step.description[locale],
  };
}

export default function MiniTimeline() {
  const t = useTranslations("MiniTimeline");
  const locale = useLocale() as "fr" | "en";

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        {t("title")}
      </h2>

      <div className="relative max-w-3xl mx-auto">

        {/* Ligne verticale */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-red-500" />

        <div className="space-y-10">
          {miniTimelineSteps.map((step, index) => {
            const text = getText(step, locale);

            return (
              <div key={index} className="relative pl-16">
                   {/* Icône */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full
                                bg-gray-800 border-4 border-gray-900
                                flex items-center justify-center text-2xl">
                  {step.icon}
                </div>

                {/* Contenu */}
                <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white">
                    {text.title}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {text.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
