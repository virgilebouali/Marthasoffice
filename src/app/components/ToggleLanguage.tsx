// components/LanguageToggle.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useRouter, usePathname } from 'next/navigation';
import { FlagIcon, Globe } from 'lucide-react';

const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const langContext = useLanguage();
  const currentLanguage = langContext?.language || 'fr';

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'fr' ? 'en' : 'fr';
    
    // Remplacer la locale dans le chemin
    let newPath = pathname;
    
    // Si on est sur une route avec locale, remplacer la locale
    if (pathname.startsWith('/fr/')) {
      newPath = pathname.replace('/fr/', '/en/');
    } else if (pathname.startsWith('/en/')) {
      newPath = pathname.replace('/en/', '/fr/');
    } else if (pathname === '/fr') {
      newPath = '/en';
    } else if (pathname === '/en') {
      newPath = '/fr';
    } else {
      // Si pas de locale, ajouter la locale
      newPath = `/${newLang}${pathname}`;
    }
    
    router.push(newPath);
  };

  return (
    <button onClick={toggleLanguage} className="font-bold flex gap-2">
      <Globe className="text-blue" />
       EN/FR
    </button>
  );
};

export default LanguageToggle;
