
import ProjectOverview from "@/app/components/home/projectOverview";
import Hero from "../../components/home/hero";
import ZigzagTimelineAuto from "../../components/home/timeline";
import Highlight from "@/app/components/home/highlight";
import ButtonCTA from "@/app/components/buttons/buttonCTA";



export default async function Home() {
  console.log('What am I doing here ? -- SERVER');

  return (
    <>
      <Hero />
      <div className="relative bg-white overflow-hidden">
  
  {/* Contenu réel */}
  <div className="relative z-10">
    {/* <Highlight
  title="Highlight"
  description="Ceci est un contenu mis en avant. Tu peux décrire ici ton projet,
  une œuvre artistique ou un élément clé que tu souhaites valoriser."
  imageSrc="/images/oeuvresGraphiques/abeille.jpg"
/> */}
    <ZigzagTimelineAuto />   
    
  </div>
</div>
   
       
      
    </>
  );
  // https://www.youtube.com/watch?v=Zq5fmkH0T78
}
