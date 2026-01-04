import React from 'react'
import MusicCard from './musicCard'
import { musicData } from '@/data/music'
import { useTranslations } from 'next-intl'

function MusicGalery() {

  const t = useTranslations('music-composition');

  return (
    <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center pb-5">
          {t('myCompos')}
        </h2>

        {/* Galerie */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {musicData.map((piece) => (
              <MusicCard
                key={piece.slug}
                piece={piece}
                imageSrc={`/music/${piece.slug}/${piece.slug}.jpg`} // your cover image
              />
            ))}
           
         </div>
       </div>
    </div>
  )
}

export default MusicGalery