
import Hero from "../../components/home/hero";
import ZigzagTimelineAuto from "../../components/home/timeline";
import Values from "../../components/home/values";


export default async function Home() {
  console.log('What am I doing here ? -- SERVER');

  return (
    <>
      
      <Hero />
      <ZigzagTimelineAuto />
      <Values />
      
    </>
  );
  // https://www.youtube.com/watch?v=Zq5fmkH0T78
}
