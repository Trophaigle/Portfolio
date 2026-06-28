import GaleryImage from '@/app/components/graphic/galery';
import Gallery from '@/app/components/graphic/galery';
import HeroGraphic from '@/app/components/graphic/heroGraphic';
import Highlight from '@/app/components/utils/highlight';
import React from 'react'

export default function graphic () {
  return (
    <>
  
      <HeroGraphic />
      {/*<Highlight title="Oeuvres graphiques" description="Découvrez une sélection de mes œuvres graphiques, où chaque image raconte une histoire unique à travers des détails captivants et une esthétique soignée." />*/}
      <GaleryImage />
    
   </>
  );
}
