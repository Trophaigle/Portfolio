import Identity from '@/app/components/entrepreneurship/identity'
import React from 'react'

const Entrepreneurship = () => {
  const itemsIdentity: string[] = [
    "Détermination",
    "Focus",
    "Love (over fear)",
    "Confiance",
    "Patience",
    "Flexibilité intellectuelle",
    "Action",
    "Tâches à fort levier"
  ];
    const step1 = [
    "Idée à explorer: ",
    "Exemple de situation: je suis un créateur de musique indépendant (j'ai du talent, des idées, je produits des morceaux mais je voudrais qu'ils se retrouvent utilisé par d'autres, que mon travail musical soit utile à qlq, qui lui donne du sens, pas juste pour moi.",
    "-> app / Saas / outil pour mettre en relation createur / initieur d'idée (plus tout seul dans son coin) et utilisateur / celui qui en a besoin pour son projet de la ressource produite.",
    "L'un donne du sens à sa production et l'autre en bénéficie ('revient à créer ensemble en quelque sorte')",
    "Pourrais être étendu à autre chose que de la musique.",
    "Interroger des gens sur le besoin, le confronter à la réalité (le besoin existe t-il vraiment ? si des choses existent, quel serait le point de différentiation ?)",
  ];

  return (
    <>
      <IdentitySection items={itemsIdentity} />
      <div className="container mx-auto px-6 py-6">
        <h1 className='text-2xl justify-center text-center mb-4'>Progression</h1>
        <InfoBox title="Step 1 (arrivée dans le game): Clarification d'un besoin" status="current" points={step1} />
       </div>
    </>
  );
};

export default Entrepreneurship;

export const IdentitySection = ({ items }: { items: string[] }) => {
  return (
    <div className="container mx-auto py-6 px-6">
      <h1 className="text-3xl text-center mb-4">Identity</h1>
      <Identity items={items} />
    </div>
  );
};

interface BoxProps {
  title: string;
  points: string[]; 
  status: string
}

export function InfoBox({ title, points, status } : BoxProps) {

  // status: "done" | "current" | "todo"
  const StatusIcon = ({ status } : {status: string}) => {
    if (status === "done") {
      return (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      );
    }

    if (status === "current") {
      return (
        <span className="relative flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex h-5 w-5 rounded-full bg-indigo-500"></span>
        </span>
      );
    }

    return (
      <span className="h-5 w-5 rounded-full border-2 border-gray-500"></span>
    );
};

return (
    <div className="relative mx-auto rounded-2xl p-6
                    bg-gradient-to-br from-gray-700/80 to-gray-800/90
                    border border-gray-600/50
                    shadow-lg backdrop-blur mt-8">
                    
      <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
        <StatusIcon status={status} />
        {title}
      </h2>

      <ul className="space-y-2 text-gray-200">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}