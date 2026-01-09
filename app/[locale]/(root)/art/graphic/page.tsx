import GaleryImage from '@/app/components/graphic/galery';
import Gallery from '@/app/components/graphic/galery';
import HeroGraphic from '@/app/components/graphic/heroGraphic';
import Highlight from '@/app/components/home/highlight';
import React from 'react'

export default function graphic () {
  return (
    <>
  
      <HeroGraphic />
       <Highlight
  title="Work in progress ..."
  description="Dessin préparatoire avec quadrillage pour une peinture 'Embrasse-moi, caresse-moi...'"
  imageSrc="/images/oeuvresGraphiques/dessin_preparatoire.jpg"
/>
      <GaleryImage />
    
   </>
  );
}
