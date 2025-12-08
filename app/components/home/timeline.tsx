interface TimelineStep {
  icon: string;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    icon: "🕶️",
    title: "Chaque individu possède des capacités",
    description:
      ""
  },
  {
    icon: "🇸",
    title: "",
    description:
      ""
  },
  {
    icon: "",
    title: "",
    description:
      ""
  },
  {
    icon: "",
    title: "",
    description:
      ""
  },
];

export default function ZigzagTimelineAuto() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        L'intention, l'étoile polaire, mantras
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
                        </div>
                      </div>
                      

                      {/* Cercle icône centré */}
                      <div className="w-12 h-12 rounded-full bg-gray-900 border-4 border-white text-2xl flex items-center justify-center mx-6 z-10">
                        {step.icon}
                      </div>

                      <div className="md:w-1/2"></div>
                    </>
                  )}

                  {!isLeft && (
                    <>
                      <div className="md:w-1/2"></div>

                      {/* Cercle icône centré */}
                      <div className="w-12 h-12 rounded-full bg-gray-900 border-4 border-white text-2xl flex items-center justify-center mx-6 z-10">
                        {step.icon}
                      </div>

                      {/* Boîte texte à droite */}
                      <div className="md:w-1/2 p-6 bg-gray-800 rounded-xl shadow-lg flex justify-start">
                        <div className="text-left md:text-right">
                          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          <p className="text-gray-300 mt-2">{step.description}</p>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center px-6 md:px-32">
  <p className="text-gray-300 text-lg md:text-xl">
    Chaque individu possède des capacités, des forces et des centres d’intérêt qui peuvent devenir de puissants leviers pour lui-même et pour les autres. Souvent invisibles ou inexploités par peur, ces potentiels attendent simplement d’être révélés pour produire leur plein impact.
  </p>
</div>
    </div>
  );
}