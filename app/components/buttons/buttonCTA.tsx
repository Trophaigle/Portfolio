import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonCTAProps {
  label: string;
  href: string;
}

export default function ButtonCTA({
  label,
  href,
}: ButtonCTAProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex items-center gap-3

        rounded-full

        bg-red-700
        hover:bg-red-600

        px-8 py-4

        text-white
        font-semibold
        tracking-wide

        transition-all duration-300 ease-out

        hover:scale-[1.04]
        active:scale-95

        hover:shadow-xl
        hover:shadow-red-500/30

        border border-white/10
        backdrop-blur-sm
      "
    >
      <span>{label}</span>

      <ArrowRight
        size={18}
        className="
          transition-transform duration-300
          group-hover:translate-x-1
        "
      />
    </Link>
  );
}
