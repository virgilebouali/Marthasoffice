"use client"
// LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Créez le contexte
const LanguageContext = createContext();

// Créez un composant fournisseur de contexte
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

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, translations, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);
