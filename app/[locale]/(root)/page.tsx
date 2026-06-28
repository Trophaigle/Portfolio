
import ProjectOverview from "@/app/components/home/projectOverview";
import Hero from "../../components/home/hero";
import ZigzagTimelineAuto from "../../components/home/timeline";
import Highlight from "@/app/components/utils/highlight";
import ButtonCTA from "@/app/components/buttons/buttonCTA";
import Goal from "@/app/components/home/goal";



export default async function Home() {
  console.log('What am I doing here ? -- SERVER');

  return (
    <>
      <Hero />
      <div className="relative bg-white overflow-hidden">
  
  {/* Contenu réel */}
  <div className="relative z-10">
    <Goal />
    <ZigzagTimelineAuto />   
    
  </div>
</div>
   
       
      
    </>
  );
  // https://www.youtube.com/watch?v=Zq5fmkH0T78
}
