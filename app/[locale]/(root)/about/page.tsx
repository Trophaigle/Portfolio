
import Values from '@/app/components/about/values'
import Languages from '@/app/components/about/lang'
import Sports from '@/app/components/about/sports'
import IBelieve from '@/app/components/about/iBelieve'
import Image from 'next/image'
import Pyramid from '@/app/components/about/pyramid'
import Style from '@/app/components/about/style'

const About = () => {
  // throw new Error("NOT IMPLEMENTED");
  return (
    <>
    {/* <Me /> */}
    <IBelieve />

    <Pyramid />

    <Values />

    <Languages
  languages={[
    { name: "Français", level: "Native", flagEmoji: "🇫🇷" },
    { name: "Anglais", level: "Fluent C1-2", flagEmoji: "🇬🇧" },
    { name: "Danois", level: "Débutant A1", flagEmoji: "🇩🇰" },
    { name: "Espagnol", level: "Intermediate B1", flagEmoji: "🇪🇸" },
    { name: "Allemand", level: "Débutant A1", flagEmoji: "🇩🇪" },
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
  <Style />
    </>
  )
}

export default About