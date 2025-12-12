import Image from "next/image";
import ButtonCTA from "../buttons/buttonCTA";
import InfoBlock from "../utils/InfoBlock";
import { useTranslations } from "next-intl";

// from https://tailwindflex.com/@manon-daniel/hero-section   tailwindcss example (hero, button, navbar ...)
// https://tailwindflex.com/@gbenga-adegoke/hero-section-13 a voir aussi celui la plutot

function Hero () {

  const t = useTranslations('HomeHero');

  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white">

    {/* Image de fond */}
      <div className="absolute inset-0 -z-10">
        {/* <img
          src="https://picsum.photos/1600/900" // Remplace par ta bannière
          alt="banner"
          className="w-full h-full object-cover"
        /> */}
        <Image
          src="/images/traintrack.jpg"
          alt="Banner"
          fill
          className=" w-full h-full object-cover"
          priority
        />
        {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Text section */}
        <div className="md:w-1/2 mb-10 md:mb-0 z-20 md:mr-10">
          <InfoBlock
            title={t('title')}
            text={t('quote')}
          />
          <p className="text-gray-300 mt-4 text-sm mb-4">
           {t('subtext')}
          </p>
          <ButtonCTA label={t('button')} href="/about"/>
        </div>

    </div>

<svg className="absolute bottom-0 left-0 w-full" 
viewBox="0 0 1440 150" 
xmlns="http://www.w3.org/2000/svg" > 
<path fill="#ffffff" d="M0,96 C360,160 1080,0 1440,96 L1440,200 L0,200 Z" ></path> 
</svg>
  </section>

  );
}

export default Hero
