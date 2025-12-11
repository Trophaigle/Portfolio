import React from 'react';
import Card from '../cards/card';
import { useTranslations } from 'next-intl';

function Values() {
   const t = useTranslations('values');
    const values = [
    {
      title: t('creativity.title'),
      subtitle: t('creativity.subtitle'),
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: t('impact.title'),
      subtitle: t('impact.subtitle'),
      image: "https://images.unsplash.com/photo-1498673394965-85cb14905c89?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: t('excellence.title'),
      subtitle: t('excellence.subtitle'),
      image: "https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: t('boldness.title'),
      subtitle: t('boldness.subtitle'),
      image: "https://images.unsplash.com/photo-1495072667656-424d680e6299?q=80&w=1172&auto=format&fit=crop"
    },
    {
      title: t('aesthetics.title'),
      subtitle: t('aesthetics.subtitle'),
      image: "https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: t('exploration.title'),
      subtitle: t('exploration.subtitle'),
      image: "https://images.unsplash.com/photo-1603623898218-0cb7f493309b?q=80&w=1170&auto=format&fit=crop"
    }
  ];

  return (
    <div className=" bg-black p-8">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl mb-12 text-center">{t("title")}</h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {values.map((value, index) => (
              <Card key={index} title={value.title} subtitle={value.subtitle} image={value.image}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;