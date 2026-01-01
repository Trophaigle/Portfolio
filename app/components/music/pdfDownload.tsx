import { useTranslations } from "next-intl";

export default function PDFDownloadContainer() {
    const t = useTranslations("musicDownloadClavier");

  const imageUrl = "/music/ClavierSheetsCover.jpg";
  const pdfUrl = "/music/ClavierSheetsWithCover.pdf";

  return (
    <div className="w-full flex justify-center py-12 bg-white">
      <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 max-w-3xl shadow-sm hover:shadow-md transition">
        
        {/* Image à gauche */}
        <img
          src={imageUrl}
          alt="Couverture de la partition"
          className="w-44 rounded-xl"
        />

        {/* Texte à droite */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            {t('title')}
          </h2>

          <p className="text-gray-600">
           {t('subtitle')}
          </p>

          <a
            href={pdfUrl}
            download
            className="
              mt-2 w-fit rounded-lg
              border border-gray-300
              bg-white px-4 py-2
              text-gray-900
              hover:bg-gray-100 hover:border-gray-400
              transition
            "
          >
            {t('download')}
          </a>
        </div>
      </div>
    </div>
  );
}