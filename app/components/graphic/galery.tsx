import ImageCard from "./imageCard";


export default function GaleryImage() { //faire un truc avec api ? boucle ? pour eviter la repetition des lignes ?
  return (
    <div className="bg-white">
      <section className="container mx-auto py-16 px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Colonne 1 */}
          <div className="flex flex-col gap-6">
            <ImageCard src="/images/oeuvresGraphiques/elea_rogne.jpg" alt="Image 1" />
            <ImageCard src="/images/oeuvresGraphiques/daenerys_rogne.jpg" alt="Image 2" />
            <ImageCard src="/images/oeuvresGraphiques/jeanWoman_rogne.jpg" alt="Image 3" />
            <ImageCard src="/images/oeuvresGraphiques/mereNature_rogne.jpg" alt="Image 6" />
            <ImageCard src="/images/oeuvresGraphiques/abeille.jpg" alt="Image 6" />
            <ImageCard src="/images/oeuvresGraphiques/etatBrut_rogne.jpg" alt="Image 6" />

          </div>

          {/* Colonne 2 - plus haute */}
          <div className="flex flex-col gap-6 pt-12">
            <ImageCard src="/images/oeuvresGraphiques/RosaEnflorece_rogne.png" alt="Image 4" />
            <ImageCard src="/images/oeuvresGraphiques/pirate_rogne.jpg" alt="Image 5" />
            <ImageCard src="/images/oeuvresGraphiques/schindler.jpg" alt="Image 6" />
            <ImageCard src="/images/oeuvresGraphiques/MiseANu_rogne.jpg" alt="Image 3" />
            <ImageCard src="/images/oeuvresGraphiques/climbingOutdoor.jpg" alt="Image 9" />
          </div>

          {/* Colonne 3 */}
          <div className="flex flex-col gap-6">
            
            <ImageCard src="/images/oeuvresGraphiques/train_rogne.jpg" alt="Image 7" />
            <ImageCard src="/images/oeuvresGraphiques/NarDetLiderMotJul.jpg" alt="Image 6" />
            <ImageCard src="/images/oeuvresGraphiques/lena_rogne.jpg" alt="Image 8" />
            <ImageCard src="/images/oeuvresGraphiques/flowers_rogne.jpg" alt="Image 9" />
            <ImageCard src="/images/oeuvresGraphiques/Beth_rogne.jpg" alt="Image 9" />
            <ImageCard src="/images/oeuvresGraphiques/Ridhwan_circuit_rogne.jpg" alt="Image 9" />
            <ImageCard src="/images/oeuvresGraphiques/christophe_rogne.jpg" alt="Image 6" />
            
          </div>
        </div>
      </section>
    </div>
  );
}
