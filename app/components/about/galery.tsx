"use client";

import { useState } from "react";

function Galery() {
const galleryItems = [
  {
    title: "Orchestral Adaptation of a Sephardic Song ('La Rosa Enflorece') - 2024",
    image: "/images/RosaEnfloreceFrontPage.jpg",
    description: "Orchestration based on a 4-part score (Soprano, Alto, Tenor, Bass)",
    pdf: "/pdf/RosaEnflorece_Orchestra.pdf",
    youtube: "https://www.youtube.com/watch?v=BJp_RsPpZho"
  },
  {
    title: "Orchestral Arrangement of a Swedish Christmas Song - 2025",
    image: "/images/NarDetLiderMotJulFrontPage.jpg",
    description: "Orchestral arrangement of a Swedish Christmas song (Nar Det Lider Mot Jul)",
    pdf: "/pdf/NarDetLiderMotJulOrchestra.pdf"
  },
  {
    title: "Example of a Sketch on Paper",
    image: "/images/page1SketchPapierNarDetLiderMotJul.jpg",
    description: "Initial hand-drawn sketch (for 'Nar Det Lider Mot Jul') before digital or manuscript transcription",
    pdf: "/pdf/SketchPapierNarDetLiderMotJul.pdf"
  },
];

  const [modalContent, setModalContent] = useState<{ pdf?: string; youtube?: string } | null>(null);

  const openModal = (item: { pdf?: string; youtube?: string }) => {
    setModalContent(item);
  };

  const closeModal = () => setModalContent(null);

  return (
    <section className="py-16 px-6 bg-black">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-white">
        Examples of Works
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-6 bg-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
{modalContent && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 pt-20"
    onClick={closeModal}
  >
    <div
      className="bg-white rounded-lg overflow-hidden max-w-6xl w-full p-4 relative h-[90vh] sm:h-[90vh] md:h-[85vh] lg:h-[80vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        {/* PDF */}
        {modalContent.pdf && (
          <iframe
            src={modalContent.pdf}
            className="flex-1 w-full h-full"
            title="Partition PDF"
          />
        )}

        {/* YouTube */}
        {modalContent.youtube && (
          <iframe
            src={modalContent.youtube.replace("watch?v=", "embed/")}
            className="flex-1 w-full h-full"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <button
        className="absolute top-4 right-4 text-white bg-red-600 px-3 py-1 rounded"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
}

export default Galery;
