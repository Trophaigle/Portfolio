
import ProjectOverview from "@/app/components/home/projectOverview";
import Hero from "../../components/home/hero";
import ZigzagTimelineAuto from "../../components/home/timeline";



export default async function Home() {
  console.log('What am I doing here ? -- SERVER');

  return (
    <>
      <Hero />
      <ProjectOverview />
      <ZigzagTimelineAuto />      
    </>
  );
  // https://www.youtube.com/watch?v=Zq5fmkH0T78
}
