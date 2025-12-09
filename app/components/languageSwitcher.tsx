'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;

    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
    setOpen(false);
  };

  return (
    <div className="relative flex items-center">
      {/* Globe button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-700 transition-colors duration-200 text-gray-100"
      >
        <FiGlobe size={20} />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className={`
            lg:absolute lg:right-0 lg:top-full lg:mt-1
            w-32 bg-navbarcolor rounded-md shadow-lg border border-gray-700 overflow-hidden z-50
          `}>
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => switchLocale(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-100 hover:bg-gray-600 ${
                  lang.code === locale ? 'bg-gray-800 font-bold' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
