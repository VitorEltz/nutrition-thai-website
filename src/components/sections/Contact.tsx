import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

interface ContactProps {
  whatsappUrl: string;
}

export function Contact({ whatsappUrl }: ContactProps) {
  const { t } = useLanguage();
  const doctoraliaUrl = "https://www.doctoralia.com.br/thainara-oliveira/nutricionista/curitiba";
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">{t('contact.title')}</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button href={whatsappUrl} icon={MessageCircle} size="lg">
            {t('contact.talkToMe')}
          </Button>
          <Button href={doctoraliaUrl} icon={Calendar} size="lg">
            {t('contact.bookAppointment')}
          </Button>
        </div>
      </div>
    </section>
  );
}
