import React from 'react';
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { SocialLink } from './SocialLink';

interface FooterProps {
  whatsappUrl: string;
}

export function Footer({ whatsappUrl }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <SocialLink href="#" icon={Instagram} />
          <SocialLink href="#" icon={Linkedin} />
          <SocialLink href="mailto:contact@thainara.com" icon={Mail} />
          <SocialLink href={whatsappUrl} icon={MessageCircle} external />
        </div>
        <p>&copy; 2024 Thainara Oliveira. All rights reserved.</p>
      </div>
    </footer>
  );
}
