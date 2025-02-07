import { Video, MapPin, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function AttendanceTypes() {
  const { t } = useLanguage();

  const renderBenefits = (benefits: string[]) => (
    <ul className="mt-4 space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check size={20} className="text-primary-500 mt-1 flex-shrink-0" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('attendance.title')}</h2>
          <p className="text-gray-600 text-lg">{t('attendance.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Remote Consultation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Video className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold">{t('attendance.remote.title')}</h3>
            </div>
            <p className="text-gray-600 mb-6">
              {t('attendance.remote.description')}
            </p>
            {renderBenefits(t('attendance.remote.benefits'))}
          </div>

          {/* In-Person Consultation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold">{t('attendance.inPerson.title')}</h3>
            </div>
            <p className="text-gray-600 mb-6">
              {t('attendance.inPerson.description')}
            </p>
            {renderBenefits(t('attendance.inPerson.benefits'))}
          </div>
        </div>
      </div>
    </section>
  );
} 