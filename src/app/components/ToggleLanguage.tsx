// components/LanguageToggle.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { FlagIcon, Globe } from 'lucide-react';

const LanguageToggle = () => {
<<<<<<< HEAD
  const langContext = useLanguage();
  const toggleLanguage = langContext?.toggleLanguage ?? (() => {});
=======
  const { toggleLanguage } = useLanguage();
>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8

  return (
    <button onClick={toggleLanguage} className="font-bold flex gap-2">
      <Globe className="text-blue" />
       EN/FR
    </button>
  );
};

export default LanguageToggle;
