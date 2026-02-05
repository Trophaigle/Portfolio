import Identity from '@/app/components/entrepreneurship/identity'
import Link from 'next/link';
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
  <span key="step1-text">
    Link toward main page {' '}
    <Link
      href="https://play.unity.com/fr/games/1827c35f-1c75-4c38-8ae1-94567c9d0776/hazard-spotting-unity-demo"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      (see prototype)
    </Link>
    .
  </span>
];

  return (
    <>
      {/* <IdentitySection items={itemsIdentity} /> */}
      {/* <div className="container mx-auto px-6 py-6">
        <h1 className="text-2xl text-center mb-4">Progression</h1>
        <InfoBox title="Unity serious game prototype" status="current" points={step1} />
      </div> */}
      <Link
      href="https://unityportfolio-gamma.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="block container mx-auto mt-10 max-w-sm"
    >
      <div className="w-full rounded-xl border border-gray-300 p-6 transition
                      hover:bg-gray-500 hover:shadow-md cursor-pointer">
        <h2 className="text-lg font-semibold">
          Vers la page web entrepreneuriale
        </h2>
        <p className="text-gray-100">
          Clique ici pour aller vers le site.
        </p>
      </div>
    </Link>
       
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
  points: React.ReactNode[]; // ← permet du texte ou des liens
  status: "done" | "current" | "todo";
}

export function InfoBox({ title, points, status }: BoxProps) {
  // Icone simple pour le statut
  const StatusIcon = () => {
    if (status === "done") return <span className="h-5 w-5 rounded-full bg-green-500"></span>;
    if (status === "current") return <span className="h-5 w-5 rounded-full bg-indigo-500"></span>;
    return <span className="h-5 w-5 rounded-full border-2 border-gray-500"></span>;
  };

  return (
    <div className="mx-auto rounded-xl p-6 bg-gray-800 border border-gray-600 shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
        <StatusIcon />
        {title}
      </h2>

      <ul className="space-y-2 text-gray-200">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-indigo-400"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}