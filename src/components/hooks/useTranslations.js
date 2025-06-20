import es from '../../translations/es';
import en from '../../translations/en';
import { useLanguage } from '../../contexts/LanguageContext';

export default function useTranslations() {
  const { language } = useLanguage();
  return language === 'es' ? es : en;
}