

import FinalCTA from '@/app/components/about/finalCTA'
import Galery from '@/app/components/about/galery'
import Philosophy from '@/app/components/about/philosophy'
import TechnicalSkills from '@/app/components/about/skills'
import CustomerReviews from '@/app/components/about/customerReviews'
import React from 'react'
import Values from '@/app/components/home/values'

const About = () => {
  // throw new Error("NOT IMPLEMENTED");
  return (
    <>
   
      <Values />
      {/* <CustomerReviews /> */}
      <TechnicalSkills />
      <Galery />
      <Philosophy />
      <FinalCTA />
    </>
  )
}

export default About