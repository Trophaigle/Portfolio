import React from 'react';
import Card from '../cards/card';
import { useTranslations } from 'next-intl';

function Values() { 
  // si on doute dans le présent, regarder dans le passé les moments les plus mémorables (c'est ceux qui illustrent les valeurs importantes)
  //On peut facilement se faire enliser par notre env, physique ou digital (resteindre maladroitement notre realité uniquement à ce qu'on peut voir à l'instant t) si on n'y prete pas attention, ce socle de valeur est la pour ca. 
  //suivre, dans la mesure de nos moyens, ce qui nous anime, nous rend vivant, aller chercher ca
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
      // image: "https://images.unsplash.com/photo-1656090729242-f742a02db629?q=80&w=1470&auto=format&fit=crop"
      image: "/images/amadeus.jpg"
    },
    {
      title: t('boldness.title'),
      subtitle: t('boldness.subtitle'),
      // image: "https://images.unsplash.com/photo-1495072667656-424d680e6299?q=80&w=1172&auto=format&fit=crop"
      image: "/images/MI.jpg"
    },
    {
      title: t('aesthetics.title'),
      subtitle: t('aesthetics.subtitle'),
      image: "https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: t('exploration.title'),
      subtitle: t('exploration.subtitle'),
      //image: "https://images.unsplash.com/photo-1603623898218-0cb7f493309b?q=80&w=1170&auto=format&fit=crop"
      image: "/images/exploration.jpeg"
    },
    {
      title: t('sharing.title'),
      subtitle: t('sharing.subtitle'),
      image: "https://images.unsplash.com/photo-1670460891931-a2780ccb223f?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: t('community.title'),
      subtitle: t('community.subtitle'),
      image: "/images/lotr.jpeg"
    },
    {
      title: t('fun.title'),
      subtitle: t('fun.subtitle'),
      image: "/images/fun.jpeg"
    },
  ];
  //creer communauté comme il y avait pour les serveur de jeu par exemple (art, musique, humain, pas juste virtuel, creer du lien à travers sujet commun, que les gens mettent leur talent en commun, chacun à des talents à mettre en jeu)
  //Minecraft à marché car on peut créer ce quon veut, s'exprimer, se lacher, rever, imaginer et partager tout ca.
  //une equipe qui poursuit un meme but

  return (
    <div className="bg-black p-8" id="values">
  <div className="container mx-auto">
    <h1 className="text-white text-4xl mb-12 text-center">
      {t("title")}
    </h1>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {values.map((value, index) => (
          <Card
            key={index}
            title={value.title}
            subtitle={value.subtitle}
            image={value.image}
          />
        ))}
      </div>

      {/* Phrase sous les cartes */}
      <p className="mt-16 text-center text-gray-400 text-sm italic">
        {t("sentence")}
      </p>
    </div>
  </div>
</div>
  );
}

export default Values;