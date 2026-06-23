
import Values from '@/app/components/about/values'
import Languages from '@/app/components/about/lang'
import Sports from '@/app/components/about/sports'
import IBelieve from '@/app/components/about/iBelieve'
import Pyramid from '@/app/components/about/pyramid'
import Style from '@/app/components/about/style'
import Success from '@/app/components/about/success'
import Strenghs from '@/app/components/about/strenghs'
import Strenghts from '@/app/components/about/strenghs'

const About = () => {
  
  return (
    <>
 <IBelieve />

  <Values />

  <Pyramid />

  <Languages
    languages={[
      { name: "Français", level: "Native", flagEmoji: "🇫🇷" },
      { name: "Anglais", level: "Fluent C1-2", flagEmoji: "🇬🇧" },
      { name: "Danois", level: "Débutant A1", flagEmoji: "🇩🇰" },
      { name: "Espagnol", level: "Intermediate B1", flagEmoji: "🇪🇸" },
      { name: "Allemand", level: "Débutant+ A2+", flagEmoji: "🇩🇪" },
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
  <Success />
  <Strenghts />
  <Style />
    </>
  )
}

export default About