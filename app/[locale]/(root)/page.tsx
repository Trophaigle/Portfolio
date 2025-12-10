
import Hero from "../../components/home/hero";
import ZigzagTimelineAuto from "../../components/home/timeline";
import Values from "../../components/about/values";


export default async function Home() {
  console.log('What am I doing here ? -- SERVER');

  return (
    <>
      <Hero />
      <ZigzagTimelineAuto />      
    </>
  );
  // https://www.youtube.com/watch?v=Zq5fmkH0T78
}
