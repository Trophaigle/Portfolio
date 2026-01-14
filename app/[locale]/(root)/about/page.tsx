
import Values from '@/app/components/about/values'
import Languages from '@/app/components/about/lang'
import Sports from '@/app/components/about/sports'
import IBelieve from '@/app/components/about/iBelieve'
import Image from 'next/image'

const About = () => {
  // throw new Error("NOT IMPLEMENTED");
  return (
    <>
    {/* <Me /> */}
    <IBelieve />
    <div className="bg-black flex flex-col items-center justify-center py-12 px-5">
  <h1 className="text-white text-3xl mb-6">Pyramide</h1>
  <div className="relative h-[600px] w-full max-w-md">
    <Image
      src="/images/self-care-rogne-black.png"
      alt="My image"
      fill
      className="object-contain"
    />
  </div>
</div>
      <Values />

    <Languages
  languages={[
    { name: "Français", level: "Native", flagEmoji: "🇫🇷" },
    { name: "Anglais", level: "Fluent C1-2", flagEmoji: "🇬🇧" },
    { name: "Danois", level: "Débutant A2", flagEmoji: "🇩🇰" },
    { name: "Espagnol", level: "Intermediate B1", flagEmoji: "🇪🇸" },
    // { name: "Polonais", level: "Débutant A1", flagEmoji: "🇵🇱" },
  ]}
/>
<Sports
  sports={[
    { name: "Climbing", icon: "🧗‍♂️", level: "Regular" },
    { name: "Running", icon: "🏃‍♂️", level: "Regular" },
    { name: "Tennis", icon: "🎾", level: "Leisure" },
    { name: "Gym", icon: "🏋️‍♂️", level: "Regular" },
  ]}
/>
    </>
  )
}

export default About