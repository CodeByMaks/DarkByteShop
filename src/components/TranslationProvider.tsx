'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n-client';
type Props = {
  children: React.ReactNode;
};

export default function TranslationProvider({ children }: Props) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
