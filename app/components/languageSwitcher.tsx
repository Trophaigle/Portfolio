// components/LanguageSwitcher.tsx
'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) return;

    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  }

  return (
    <select
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
      className="bg-transparent text-gray-100 border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer"
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  );
}