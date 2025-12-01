// pages/index.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './ToggleLanguage';
import { frenchTranslations } from '../locales/fr-default';
const HomePage = () => {
  const langContext = useLanguage();
  const translations = langContext?.translations ?? frenchTranslations;

  return (
    <div>
      <LanguageToggle />
      <h1>{translations.welcome}</h1>
      <p>{translations.description}</p>
    </div>
  );
};

export default HomePage;
