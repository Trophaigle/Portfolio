import React from "react";

const skills = [
  {
    category: "Software",
    items: ["MuseScore", "Cakewalk"]
  },
  {
    category: "Instruments",
    items: ["Piano", "Guitar"]
  },
  {
    category: "Orchestration / Composition",
    items: ["Paper orchestration", "Orchestration on MuseScore"]
  }
];

export default function TechnicalSkills() {
  return (
    <section className="bg-black py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Technical skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:shadow-purple-500/50 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {skill.category}
              </h3>
              <ul className="text-gray-300 list-disc list-inside text-center space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}