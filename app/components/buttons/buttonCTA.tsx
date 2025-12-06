import Link from 'next/link';
import React from 'react'

interface ButtonCTAProps {
  label: string;
  href: string;
}

function ButtonCTA({ label, href }: ButtonCTAProps) { //couleurs scandinaves ?
  return (
    <Link
      href={href}
      className="inline-block bg-red-700 text-white font-bold py-3 px-6 rounded hover:bg-gray-600 hover:text-white transition-colors"
    >
      {label}
    </Link>
  );
}

export default ButtonCTA
