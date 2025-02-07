import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
      aria-label={`Switch to ${language === 'pt' ? 'English' : 'Portuguese'}`}
    >
      <Globe size={16} className="animate-spin-slow" />
      <span className="text-sm font-semibold uppercase tracking-wider">{language}</span>
    </button>
  );
} 