"use client"
// LanguageContext.js
import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { frenchTranslations } from './locales/fr-default';

// Créez le contexte
const LanguageContext = createContext();

// Créez un composant fournisseur de contexte
export const LanguageProvider = ({ children, initialLanguage = 'fr', initialTranslations = {} }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState(() => {
    // Utiliser les traductions initiales si disponibles
    if (initialTranslations && Object.keys(initialTranslations).length > 0) {
      return initialTranslations;
    }
    // Si français, utiliser frenchTranslations directement
    if (initialLanguage === 'fr') {
      return frenchTranslations;
    }
    // Sinon, fallback vers français en attendant le chargement
    return frenchTranslations;
  });
  const [loading, setLoading] = useState(false);

  // Synchroniser avec initialLanguage quand il change (changement de route)
  useEffect(() => {
    if (initialLanguage !== language) {
      setLanguage(initialLanguage);
      // Si on a des traductions initiales pour cette langue, les utiliser
      if (initialTranslations && Object.keys(initialTranslations).length > 0) {
        setTranslations(initialTranslations);
        setLoading(false);
      } else if (initialLanguage === 'fr') {
        // Si français, utiliser les traductions françaises
        setTranslations(frenchTranslations);
        setLoading(false);
      }
    }
  }, [initialLanguage, initialTranslations]);

  // Charger les traductions si nécessaire
  useEffect(() => {
    let mounted = true;
    
    async function loadTranslations(lang) {
      // Si on a déjà des traductions initiales pour cette langue, ne pas charger
      if (lang === initialLanguage && initialTranslations && Object.keys(initialTranslations).length > 0) {
        return;
      }
      
      // Si français, utiliser les traductions françaises directement
      if (lang === 'fr') {
        setTranslations(frenchTranslations);
        return;
      }
      
      setLoading(true);
      try {
        const res = await fetch(`/locales/${lang}.json`);
        if (!res.ok) throw new Error('Failed to fetch translations');
        const json = await res.json();
        if (mounted) {
          setTranslations(json);
          setLoading(false);
        }
      } catch (e) {
        console.error('Error loading translations for', lang, e);
        // En cas d'erreur, fallback vers français
        if (mounted) {
          setTranslations(frenchTranslations);
          setLoading(false);
        }
      }
    }

    // Charger seulement si on n'a pas de traductions initiales et si ce n'est pas français
    if (!(language === initialLanguage && initialTranslations && Object.keys(initialTranslations).length > 0)) {
      loadTranslations(language);
    }
    
    return () => { mounted = false; };
  }, [language, initialLanguage, initialTranslations]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  // Toujours fournir des traductions, avec fallback vers français
  const finalTranslations = useMemo(() => {
    if (!translations || Object.keys(translations).length === 0) {
      return frenchTranslations;
    }
    return translations;
  }, [translations]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, translations: finalTranslations, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);
