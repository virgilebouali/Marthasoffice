"use client"
// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

// Import des fichiers de traduction
import fr from '../../public/locales/fr.json'
import en from '../../public/locales/en.json'

// Créez le contexte
const LanguageContext = createContext();

// Créez un composant fournisseur de contexte
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');
  const translations = language === 'fr' ? fr : en;

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);
