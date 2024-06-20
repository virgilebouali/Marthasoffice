// components/LanguageToggle.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { FlagIcon, Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="font-bold flex gap-2">
      <Globe className="text-blue" />
       EN/FR
    </button>
  );
};

export default LanguageToggle;
