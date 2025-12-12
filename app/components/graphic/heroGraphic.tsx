
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'

function HeroGraphic () {
    const t = useTranslations('heroGraphic') 
  return (
     <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
      {/* Image de fond */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://picsum.photos/1600/900" // Remplace par ta bannière
          alt="banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>
      </div>

       {/* Titre */}
        <div className="flex flex-col items-center justify-center gap-4 -mt-20">
          <h1 className="text-5xl font-bold drop-shadow-xl px-2">
             {t('title')}
          </h1>

          {/* Boutons avec Link */}
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition cursor-default">
              {t('buttons.drawing')}
            </div>
            
            <div className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition cursor-default">
               {t('buttons.painting')}
            </div>
          </div>
            
          <p className='text-2xl'>{t('subtitle')}</p>
        </div>
        
      {/* Courbe SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,96 C360,160 1080,0 1440,96 L1440,200 L0,200 Z"
        ></path>
      </svg>
    </section>
  )
}

export default HeroGraphic