
import ProjectOverview from "@/app/components/home/projectOverview";
import Hero from "../../components/home/hero";
import ZigzagTimelineAuto from "../../components/home/timeline";



export default async function Home() {
  console.log('What am I doing here ? -- SERVER');

  return (
    <>
      <Hero />
      <div className="relative bg-white overflow-hidden">
  
  {/* Contenu réel */}
  <div className="relative z-10">
     <ProjectOverview />
        <ZigzagTimelineAuto />  
  </div>
</div>
   
       
      
    </>
  );
  // https://www.youtube.com/watch?v=Zq5fmkH0T78
}
