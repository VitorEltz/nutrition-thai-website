import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: typeof LucideIcon;
  children: React.ReactNode;
  mobile?: boolean;
  active?: boolean;
}

export function NavLink({ href, icon: Icon, children, mobile, active }: NavLinkProps) {
  return (
    <Link 
      to={href} 
      className={`
        flex items-center ${mobile ? 'gap-2' : 'gap-1'}
        ${active 
          ? 'text-primary-500' 
          : 'text-gray-700 hover:text-primary-500'
        }
        transition-colors
      `}
    >
      <Icon size={18} /> {children}
    </Link>
  );
}
