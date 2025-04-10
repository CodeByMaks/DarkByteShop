'use client';

import { useTranslation as useTranslationOrg } from 'react-i18next';
import { useEffect } from 'react';

export function useTranslation(ns: string) {
  const { t, i18n } = useTranslationOrg(ns);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('lang') || 'en';
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }
  }, []);

  return { t, i18n };
}
