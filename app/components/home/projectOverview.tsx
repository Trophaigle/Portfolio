import ButtonCTA from "../buttons/buttonCTA";
import { useTranslations } from "next-intl";

// Composant pour une carte individuelle
interface StepCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
  cta?: React.ReactNode;
}

function StepCard({ title, description, icon, cta }: StepCardProps) {
  return (
    <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
      <div className="relative space-y-8 py-12 p-8">
        {icon}
        <div className="space-y-2">
          <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
            {title}
          </h5>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            {description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>

          {cta && <div className="pt-4">{cta}</div>}
        </div>
      </div>
    </div>
  );
}


// Composant principal
export default function ProjectOverview() {
    const t = useTranslations("projects");

   const steps = [
    {
      title: t("pfe.title"),
      description: t.raw("pfe.desc"), // returns an array
      icon: (<svg
        className="w-12 h-12 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M10 10l2-2v8" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>),
      cta: <ButtonCTA label={t("pfe.cta")} href="" />
    },
    {
      title: t("gl.title"),
      description: t.raw("gl.desc"),
      icon: ( <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>),
      cta: <ButtonCTA label={t("gl.cta")} href="https://github.com/Trophaigle/ProjetGL-Ensimag" />
    },
    {
      title: t("site.title"),
      description: t.raw("site.desc"),
      icon: ( <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>),
      cta: <ButtonCTA label={t("site.cta")} href="https://github.com/Trophaigle/Portfolio" />
    },
    {
      title: t("ai.title"),
      description: t.raw("ai.desc"),
      icon: (<svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10 8v3a1 1 0 0 0 1 1h3" />
        <path d="M14 8v8" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>),
    }
  ];

  return (
    <div className="bg-[radial-gradient(ellipse_at_40%_50%,rgba(100,124,140,0.8)_0%,transparent_50%)] p-4">
      {/* <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6"> */}
      <div className="container mx-auto h-max px-6"> {/*remplace celle du haut */}
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">{t("title")}</h2>
          {/* <p className="text-gray-300">We follow our process to get you started as quickly as possible</p> */}
        </div>
        <div className="mt-16 mb-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              cta={step.cta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}