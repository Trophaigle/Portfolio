import React from 'react'
import MusicCard from './musicCard'
import { musicData } from '@/data/music'

function MusicGalery() {
  return (
    <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          
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