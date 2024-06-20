// pages/index.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './ToggleLanguage';
const HomePage = () => {
  const { translations } = useLanguage();

  return (
    <div>
      <LanguageToggle />
      <h1>{translations.welcome}</h1>
      <p>{translations.description}</p>
    </div>
  );
};

export default HomePage;
