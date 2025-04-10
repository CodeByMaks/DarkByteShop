'use client';

import { useTranslation as useTranslationOrg } from 'react-i18next';

export function useTranslation(ns: string = 'common') {
  const { t, i18n } = useTranslationOrg(ns);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    document.cookie = `lang=${lng}; path=/`;
  };

  return { t, i18n, changeLanguage };
}
