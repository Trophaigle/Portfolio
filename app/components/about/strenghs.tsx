export default function Strenghts() {
  const points = [
    "Partir d'une idée plus ou moins vague.",
    "Visualiser le résultat que l'on souhaite obtenir.",
    "Identifier les outils, connaissances et ressources nécessaires.",
    "Assembler les éléments étape par étape.",
    "Construire progressivement jusqu'à faire émerger une réalisation cohérente."
  ];

  return (
    <section className="force-redoutable">
      <h2>Ma force redoutable : La composition</h2>

      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}