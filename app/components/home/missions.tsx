import React from 'react'
import ButtonCTA from '../buttons/buttonCTA'
import InfoBlock from '../utils/InfoBlock'

function Missions () {
  return (
<section className="relative py-20 px-6 text-white overflow-visible
bg-[radial-gradient(circle_at_30%_50%,rgba(120,124,104,0.4)_0%,transparent_20%)]">

  <div className="container mx-auto px-4 md:px-6 relative">

    {/* 🔥 Section Mission Text */}
    <div className="mt-3 max-w-3xl">
      <InfoBlock
        title="My mission"
        text={
          <>
            Through orchestration, composition, and artistic work, 
            my goal is to create experiences that <strong>uplift</strong>, 
            <strong> bring people together</strong>, and <strong>re-enchant</strong> everyday life.
            <br /><br />
            I explore the Nordic imagination to bring a sense 
            of beauty, escape, and depth into a world that needs it.
          </>
        }
      />
    </div>
  </div>
</section>
  )
}

export default Missions
