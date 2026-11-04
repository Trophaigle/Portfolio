

interface ButtonViewPdfProps {
  pdfUrl: string;
  viewPdfLabel: string;
}

export default function ViewPdfButton({
  pdfUrl,
  viewPdfLabel

}: ButtonViewPdfProps) {
  return (
    <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex items-center gap-3
                px-6 py-3
                rounded-full

                bg-red-700
                hover:bg-red-600

                text-white font-medium tracking-wide

                transition-all duration-300 ease-out

                hover:scale-[1.03]
                active:scale-95

                hover:shadow-lg
                hover:shadow-red-600/30

                border border-red-500/20
            "
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                />
            </svg>

            <span>{viewPdfLabel}</span>
            </a>
  );
}
