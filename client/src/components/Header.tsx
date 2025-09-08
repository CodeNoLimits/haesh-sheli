import React, { useState } from 'react';
import { useLocation } from 'wouter';

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
    fire: '🔥 Мой Огонь'
  }
};

export function Header({ currentLanguage = 'he', onLanguageChange }: HeaderProps) {
  const [location] = useLocation();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  
  const languageFlags = {
    he: '🇮🇱',
    en: '🇺🇸', 
    fr: '🇫🇷',
    es: '🇪🇸',
    ru: '🇷🇺'
  };

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-ba655d5 elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile" style={{background: '#dc3545', padding: '1rem 0'}}>
      <div className="elementor-container elementor-column-gap-default" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        {/* LOGO COLUMN */}
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8cf799f">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-widget elementor-widget-theme-site-logo elementor-widget-image">
              <div className="elementor-widget-container">
                <a href="/">
                  <img 
                    width="185" 
                    height="300"
                    src="https://www.haesh-sheli.co.il/wp-content/uploads/2021/12/cropped-%D7%A7%D7%A8%D7%95-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%A8-%D7%90%D7%95%D7%93%D7%A1%D7%A8.d110a0.webp" 
                    className="attachment-full size-full wp-image-27" 
                    alt="האש שלי תוקף עד ביאת המשיח"
                    style={{height: '80px', width: 'auto'}}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION COLUMN */}
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b208748">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-nav-menu__align-center elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu">
              <div className="elementor-widget-container">
                <nav aria-label="תפריט" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-grow">
                  <ul id="menu-1-ac3cd0c" className="elementor-nav-menu" style={{display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap'}}>
                    <li className={`menu-item ${location === '/' ? 'current-menu-item' : ''}`}>
                      <a href="/" className="elementor-item" style={{color: 'white', textDecoration: 'none', fontWeight: location === '/' ? 'bold' : 'normal'}}>
                        {t.home}
                      </a>
                    </li>
                    <li className={`menu-item ${location === '/store' ? 'current-menu-item' : ''}`}>
                      <a href="/store" className="elementor-item" style={{color: 'white', textDecoration: 'none', fontWeight: location === '/store' ? 'bold' : 'normal'}}>
                        {t.store}
                      </a>
                    </li>
                    <li className={`menu-item ${location === '/about' ? 'current-menu-item' : ''}`}>
                      <a href="/about" className="elementor-item" style={{color: 'white', textDecoration: 'none', fontWeight: location === '/about' ? 'bold' : 'normal'}}>
                        {t.about}
                      </a>
                    </li>
                    <li className={`menu-item ${location === '/contact' ? 'current-menu-item' : ''}`}>
                      <a href="/contact" className="elementor-item" style={{color: 'white', textDecoration: 'none', fontWeight: location === '/contact' ? 'bold' : 'normal'}}>
                        {t.contact}
                      </a>
                    </li>
                    <li className={`menu-item ${location === '/magazine' ? 'current-menu-item' : ''}`}>
                      <a href="/magazine" className="elementor-item" style={{color: 'white', textDecoration: 'none', fontWeight: location === '/magazine' ? 'bold' : 'normal'}}>
                        {t.magazine}
                      </a>
                    </li>
                    <li className={`menu-item ${location === '/join' ? 'current-menu-item' : ''}`}>
                      <a href="/join" className="elementor-item" style={{color: 'white', textDecoration: 'none', fontWeight: location === '/join' ? 'bold' : 'normal'}}>
                        {t.join}
                      </a>
                    </li>
                    <li className={`menu-item ${location === '/downloads' ? 'current-menu-item' : ''}`}>
                      <a href="/downloads" className="elementor-item" style={{color: 'white', textDecoration: 'none', fontWeight: location === '/downloads' ? 'bold' : 'normal'}}>
                        {t.downloads}
                      </a>
                    </li>
                    {/* Yaakov Temp Tab - Always right */}
                    <li className={`menu-item ${location === '/yacov-ren-temp' ? 'current-menu-item' : ''}`} style={{marginLeft: 'auto'}}>
                      <a href="/yacov-ren-temp" className="elementor-item" style={{color: '#ffc107', textDecoration: 'none', fontWeight: 'bold', background: 'rgba(255,193,7,0.2)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.9rem'}}>
                        יעקב חן
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* LANGUAGE SELECTOR */}
        <div className="elementor-column elementor-col-15 elementor-top-column" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="language-selector" style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            {Object.entries(languageFlags).map(([lang, flag]) => (
              <button
                key={lang}
                onClick={() => onLanguageChange?.(lang)}
                style={{
                  background: currentLanguage === lang ? 'rgba(255,255,255,0.2)' : 'transparent',
                  border: currentLanguage === lang ? '2px solid rgba(255,255,255,0.5)' : '2px solid transparent',
                  color: 'white',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
                onMouseEnter={(e) => {
                  if (currentLanguage !== lang) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentLanguage !== lang) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span>{flag}</span>
                <span>{lang.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CART AND FIRE COLUMN */}
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ba655d5">
          <div className="elementor-widget-wrap elementor-element-populated" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
            {/* Cart Icon */}
            <div className="cart-container" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{position: 'relative', cursor: 'pointer'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                  <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
                </svg>
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#ffc107',
                  color: '#333',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>0</span>
              </div>
              <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold'}}>₪0</span>
            </div>
            
            {/* Fire Icon */}
            <div className="elementor-element elementor-widget elementor-widget-heading" style={{textAlign: 'center'}}>
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default" style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bold', margin: 0}}>
                  {t.fire}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

