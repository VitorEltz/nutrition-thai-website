import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Book, Apple, Calculator } from 'lucide-react';
import { NavLink } from './NavLink';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", icon: Home, label: t('nav.home') },
    { href: "/about", icon: Users, label: t('nav.about') },
    { href: "/blog", icon: Book, label: t('nav.blog') },
    { href: "/recipes", icon: Apple, label: t('nav.recipes') },
    { href: "/calculator", icon: Calculator, label: t('nav.calculator') },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-1xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="./public/icons/logo.png" 
              alt="Thai Oliveira Logo" 
              className="h-12" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                icon={item.icon}
                active={location.pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  icon={item.icon} 
                  mobile
                  active={location.pathname === item.href}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
