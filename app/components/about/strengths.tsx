import { useTranslations } from "next-intl";

export default function Strengths() {
  const t = useTranslations("strengths");

  const points = t.raw("points") as string[];

  return (
    <div className="bg-black px-4 py-8 md:px-8 lg:px-12">
      <section className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-2xl md:p-12">
        <h2 className="mb-8 text-4xl font-extrabold">
          ⚡ {t("title")}
          <span className="mt-2 block text-cyan-400">
            {t("subtitle")}
          </span>
        </h2>

        <ul className="space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm"
            >
              <span className="text-xl text-cyan-400">◆</span>
              <span className="text-slate-200">{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}