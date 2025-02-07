import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeroProps {
  whatsappUrl: string;
}

export function Hero({ whatsappUrl }: HeroProps) {
  const { t } = useLanguage();
  const doctoraliaUrl = "https://www.doctoralia.com.br/thainara-oliveira/nutricionista/curitiba";
  
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
          alt="Healthy food background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <img 
          src="/assets/hero_logo.png"
          alt="Thainara Oliveira - Sports Nutrition Specialist"
          className="max-w-[800px] w-full h-auto mb-8"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <Button href={whatsappUrl} icon={MessageCircle}>
            {t('hero.talkToMe')}
          </Button>
          <Button href={doctoraliaUrl} icon={Calendar}>
            {t('hero.bookAppointment')}
          </Button>
        </div>
      </div>
    </header>
  );
}
