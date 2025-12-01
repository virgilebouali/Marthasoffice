"use client"
// LanguageContext.js
<<<<<<< HEAD
import React, { createContext, useState, useContext, useEffect } from 'react';
=======
import React, { createContext, useState, useContext } from 'react';

// Import des fichiers de traduction
import fr from '../../public/locales/fr.json'
import en from '../../public/locales/en.json'
>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8

// Créez le contexte
const LanguageContext = createContext();

// Créez un composant fournisseur de contexte
<<<<<<< HEAD
export const LanguageProvider = ({ children, initialLanguage = 'fr', initialTranslations = {} }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState(
    initialTranslations && Object.keys(initialTranslations).length ? initialTranslations : {}
  );
  const [loading, setLoading] = useState(!translations || Object.keys(translations).length === 0);

  useEffect(() => {
    let mounted = true;
    async function loadTranslations(lang) {
      // If we have initial translations for the initial language, skip fetching
      if (lang === initialLanguage && initialTranslations && Object.keys(initialTranslations).length) {
        if (mounted) setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/locales/${lang}.json`);
        if (!res.ok) throw new Error('Failed to fetch translations');
        const json = await res.json();
        if (mounted) setTranslations(json);
      } catch (e) {
        console.error('Error loading translations for', lang, e);
        if (mounted) setTranslations({});
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadTranslations(language);
    return () => { mounted = false; };
  }, [language, initialLanguage, initialTranslations]);
=======
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');
  const translations = language === 'fr' ? fr : en;
>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  return (
<<<<<<< HEAD
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, translations, loading }}>
=======
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);
