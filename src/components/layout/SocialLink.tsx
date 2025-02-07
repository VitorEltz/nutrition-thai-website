import { DivideIcon as LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: typeof LucideIcon;
  external?: boolean;
}

export function SocialLink({ href, icon: Icon, external }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-primary-500 transition-colors"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Icon size={24} />
    </a>
  );
}
