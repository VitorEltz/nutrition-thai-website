import { useLanguage } from '../contexts/LanguageContext';

export function RecipesPage() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{t('nav.recipes')}</h1>
        <p className="text-center text-gray-600">Em breve...</p>
      </div>
    </div>
  );
}
