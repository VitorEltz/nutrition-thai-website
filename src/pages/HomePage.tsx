import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { AttendanceTypes } from '../components/sections/AttendanceTypes';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';

interface HomePageProps {
  whatsappUrl: string;
}

export function HomePage({ whatsappUrl }: HomePageProps) {
  return (
    <>
      <Hero whatsappUrl={whatsappUrl} />
      <Services />
      <AttendanceTypes />
      <Testimonials />
      <Contact whatsappUrl={whatsappUrl} />
    </>
  );
}
