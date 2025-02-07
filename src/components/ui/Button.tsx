import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  href: string;
  icon: typeof LucideIcon;
  children: React.ReactNode;
  size?: 'default' | 'lg';
}

export function Button({ href, icon: Icon, children, size = 'default' }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        bg-primary-500 hover:bg-primary-600 text-white 
        rounded-full inline-flex items-center gap-2 transition-colors
        ${size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'}
      `}
    >
      {children} <Icon size={size === 'lg' ? 24 : 20} />
    </a>
  );
}
