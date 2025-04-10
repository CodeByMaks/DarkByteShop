'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleChangeLanguage}
      className="px-3 py-1 border rounded text-white bg-black border-none cursor-pointer"
    >
      <option value="en">English (EN)</option>
      <option value="ru">Русский (RU)</option>
      <option value="tj">Тоҷикӣ (Tj)</option>
    </select>
  );
}