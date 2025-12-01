// pages/index.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './ToggleLanguage';
<<<<<<< HEAD
import { frenchTranslations } from '../locales/fr-default';
const HomePage = () => {
  const langContext = useLanguage();
  const translations = langContext?.translations ?? frenchTranslations;
=======
const HomePage = () => {
  const { translations } = useLanguage();
>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8

  return (
    <div>
      <LanguageToggle />
      <h1>{translations.welcome}</h1>
      <p>{translations.description}</p>
    </div>
  );
};

export default HomePage;
