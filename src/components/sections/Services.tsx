import { ChefHat, Dumbbell, Users } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { useLanguage } from '../../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: ChefHat,
      title: t('services.mealPlans.title'),
      description: t('services.mealPlans.description'),
    },
    {
      icon: Dumbbell,
      title: t('services.performance.title'),
      description: t('services.performance.description'),
    },
    {
      icon: Users,
      title: t('services.team.title'),
      description: t('services.team.description'),
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
