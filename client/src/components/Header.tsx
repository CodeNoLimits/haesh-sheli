import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useCart } from '../contexts/CartContext';
import { CartWidget } from './CartWidget';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
}

const translations = {
  he: {
    home: 'דף הבית',
    store: 'חנות',
    about: 'אודות',
    contact: 'צור קשר',
    magazine: 'המגזין',
    join: 'הצטרפות',
    downloads: 'הורדות',
    subscription: 'הוראת קבע',
    fire: '🔥 האש שלי'
  },
  en: {
    home: 'Home',
    store: 'Store', 
    about: 'About',
    contact: 'Contact',
    magazine: 'Magazine',
    join: 'Join',
    downloads: 'Downloads',
    subscription: 'Subscription',
    fire: '🔥 My Fire'
  },
  fr: {
    home: 'Accueil',
    store: 'Boutique',
    about: 'À propos',
    contact: 'Contact',
    magazine: 'Magazine',
    join: 'Rejoindre',
    downloads: 'Téléchargements',
    subscription: 'Abonnement',
    fire: '🔥 Mon Feu'
  },
  es: {
    home: 'Inicio',
    store: 'Tienda',
    about: 'Acerca de',
    contact: 'Contacto', 
    magazine: 'Revista',
    join: 'Unirse',
    downloads: 'Descargas',
    subscription: 'Suscripción',
    fire: '🔥 Mi Fuego'
  },
  ru: {
    home: 'Главная',
    store: 'Магазин',
    about: 'О нас',
    contact: 'Контакт',
    magazine: 'Журнал',
    join: 'Присоединиться',
    downloads: 'Загрузки',
    subscription: 'Подписка',
    fire: '🔥 Мой Огонь'
  }
};

export function Header({ currentLanguage = 'he', onLanguageChange }: HeaderProps) {
  const [location] = useLocation();
  const { totalItems, totalPrice, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  
  const languageFlags = {
    he: '🇮🇱',
    en: '🇺🇸', 
    fr: '🇫🇷',
    es: '🇪🇸',
    ru: '🇷🇺'
  };

  return (
    <header className="site-header" data-testid="main-header" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
      <div className="header-container">
        {/* LOGO */}
        <div className="header-logo">
          <a href="/" data-testid="link-home">
            <img 
              src="https://www.haesh-sheli.co.il/wp-content/uploads/2021/12/cropped-%D7%A7%D7%A8%D7%95-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%A8-%D7%90%D7%95%D7%93%D7%A1%D7%A8.d110a0.webp" 
              alt="האש שלי תוקף עד ביאת המשיח"
              data-testid="img-logo"
            />
          </a>
        </div>

        {/* NAVIGATION */}
        <nav className="header-nav" data-testid="nav-main">
          <ul className="nav-menu">
            <li className={location === '/' ? 'current-menu-item' : ''}>
              <a href="/" data-testid="link-home">{t.home}</a>
            </li>
            <li className={location === '/store' ? 'current-menu-item' : ''}>
              <a href="/store" data-testid="link-store">{t.store}</a>
            </li>
            <li className={location === '/about' ? 'current-menu-item' : ''}>
              <a href="/about" data-testid="link-about">{t.about}</a>
            </li>
            <li className={location === '/contact' ? 'current-menu-item' : ''}>
              <a href="/contact" data-testid="link-contact">{t.contact}</a>
            </li>
            <li className={location === '/magazine' ? 'current-menu-item' : ''}>
              <a href="/magazine" data-testid="link-magazine">{t.magazine}</a>
            </li>
            <li className={location === '/join' ? 'current-menu-item' : ''}>
              <a href="/join" data-testid="link-join">{t.join}</a>
            </li>
            <li className={location === '/downloads' ? 'current-menu-item' : ''}>
              <a href="/downloads" data-testid="link-downloads">{t.downloads}</a>
            </li>
            <li className={location === '/subscription' ? 'current-menu-item' : ''}>
              <a href="/subscription" data-testid="link-subscription" style={{color: '#FFD700', fontWeight: 'bold'}}>👑 {t.subscription}</a>
            </li>
            <li className={location === '/yaaakov' ? 'current-menu-item' : ''}>
              <a href="/yaaakov" data-testid="link-yaaakov">
                {currentLanguage === 'he' ? 'יעקב' : currentLanguage === 'en' ? 'Yaaakov' : currentLanguage === 'fr' ? 'Yaaakov' : currentLanguage === 'es' ? 'Yaaakov' : currentLanguage === 'ru' ? 'Яааков' : 'יעקב'}
              </a>
            </li>
          </ul>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* LANGUAGE SELECTOR */}
        <div className="language-selector" data-testid="language-selector">
          {Object.entries(languageFlags).map(([lang, flag]) => (
            <button
              key={lang}
              onClick={() => onLanguageChange?.(lang)}
              className={`language-btn ${currentLanguage === lang ? 'active' : ''}`}
              data-testid={`button-language-${lang}`}
            >
              <span>{flag}</span>
              <span>{lang.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* HEADER ACTIONS */}
        <div className="header-actions">
          {/* Cart Widget */}
          <div 
            className="cart-widget" 
            onClick={() => setIsCartOpen(true)}
            data-testid="button-cart"
          >
            <div className="cart-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
              </svg>
              {totalItems > 0 && (
                <span className="cart-badge" key={totalItems} data-testid="cart-badge">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="cart-total" data-testid="cart-total">
              ₪{totalPrice.toFixed(2)}
            </span>
          </div>
          
          {/* Fire Logo */}
          <h2 className="fire-logo" data-testid="text-fire-logo">
            {t.fire}
          </h2>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} data-testid="nav-mobile">
        <ul className="nav-menu">
          <li className={location === '/' ? 'current-menu-item' : ''}>
            <a href="/" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-home">{t.home}</a>
          </li>
          <li className={location === '/store' ? 'current-menu-item' : ''}>
            <a href="/store" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-store">{t.store}</a>
          </li>
          <li className={location === '/about' ? 'current-menu-item' : ''}>
            <a href="/about" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-about">{t.about}</a>
          </li>
          <li className={location === '/contact' ? 'current-menu-item' : ''}>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-contact">{t.contact}</a>
          </li>
          <li className={location === '/magazine' ? 'current-menu-item' : ''}>
            <a href="/magazine" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-magazine">{t.magazine}</a>
          </li>
          <li className={location === '/join' ? 'current-menu-item' : ''}>
            <a href="/join" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-join">{t.join}</a>
          </li>
          <li className={location === '/downloads' ? 'current-menu-item' : ''}>
            <a href="/downloads" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-downloads">{t.downloads}</a>
          </li>
          <li className={location === '/subscription' ? 'current-menu-item' : ''}>
            <a href="/subscription" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-subscription" style={{color: '#FFD700', fontWeight: 'bold'}}>👑 {t.subscription}</a>
          </li>
          <li className={location === '/yaaakov' ? 'current-menu-item' : ''}>
            <a href="/yaaakov" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-yaaakov">
              {currentLanguage === 'he' ? 'יעקב' : currentLanguage === 'en' ? 'Yaaakov' : currentLanguage === 'fr' ? 'Yaaakov' : currentLanguage === 'es' ? 'Yaaakov' : currentLanguage === 'ru' ? 'Яааков' : 'יעקב'}
            </a>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
}