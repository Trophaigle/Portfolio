import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Pyramid = () => {

    const t = useTranslations('about')

  return (
    <div className="bg-black flex flex-col items-center justify-center py-12 px-10">
      <h1 className="text-white text-3xl mb-6">Pyramide</h1>
      <div className="relative h-[600px] w-full max-w-md">
        <Image
          src="/images/self-care-rogne-black.png"
          alt="My image"
          fill
          className="object-contain"
        />
      </div>
      <div className="mt-12 text-center px-6 md:px-25">
        <p className="text-white text-xl md:text-2xl">
          {t("quote-pyramid")}
        </p>
      </div>
    </div>
  )
}

export default Pyramid