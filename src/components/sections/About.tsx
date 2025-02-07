import { Award, Apple } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
            alt="Nutritionist at work"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('about.description')}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Award className="text-primary-500" />
              <span>{t('about.certifiedNutritionist')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Apple className="text-primary-500" />
              <span>{t('about.dietSpecialist')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
