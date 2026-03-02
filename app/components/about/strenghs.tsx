import React from 'react'


type CardProps = {
  title: string
  items: string[]
  color?: string
}

const Card: React.FC<CardProps> = ({ title, items, color = "bg-white" }) => {
  return (
    <div className={`rounded-xl shadow-lg p-6 flex-1 ${color} transition-transform hover:scale-105`}>
      <h2 className="text-2xl font-bold mb-4 text-gray-700">{title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  )
}

const Strengths: React.FC = () => {
  const strengths = ["Uses visual memory to learn, understand, imagine, and create effectively", "Confortable engaging interactions with people from all over the world", ""]
  const improvements = ["Prise d'initiative et de risque", ""]

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card title="Forces" items={strengths} color="bg-blue-50" />
        <Card title="Points à améliorer" items={improvements} color="bg-red-50" />
      </div>
    </div>
  )
}

export default Strengths