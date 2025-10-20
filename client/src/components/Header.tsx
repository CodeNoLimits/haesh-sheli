import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../hooks/useAuth';
import { CartWidget } from './CartWidget';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';

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
    prayers: 'תפילות',
    parsha: 'פרשת השבוע',
    donate: 'תרומות',
    qa: 'שאלות ותשובות',
    subscription: 'הוראת קבע',
    breslovVideos: 'סרטוני ברסלב',
    haeshHype: '🔥 האש הייפ',
    chat: '💬 צ\'אט ברסלבי',
    whatsapp: '💬 דבר איתנו',
    fire: '🔥 האש שלי',
    login: 'כניסה',
    logout: 'יציאה',
    welcome: 'שלום'
  },
  en: {
    home: 'Home',
    store: 'Store', 
    about: 'About',
    contact: 'Contact',
    magazine: 'Magazine',
    join: 'Join',
    downloads: 'Downloads',
    prayers: 'Prayers',
    parsha: 'Parsha',
    donate: 'Donate',
    qa: 'Q&A',
    subscription: 'Subscription',
    breslovVideos: 'Breslov Videos',
    haeshHype: '🔥 HaEsh Hype',
    chat: '💬 Breslov Chat',
    whatsapp: '💬 Talk to Us',
    fire: '🔥 My Fire',
    login: 'Login',
    logout: 'Logout',
    welcome: 'Welcome'
  },
  fr: {
    home: 'Accueil',
    store: 'Boutique',
    about: 'À propos',
    contact: 'Contact',
    magazine: 'Magazine',
    join: 'Rejoindre',
    downloads: 'Téléchargements',
    prayers: 'Prières',
    parsha: 'Paracha',
    donate: 'Don',
    qa: 'Questions & Réponses',
    subscription: 'Abonnement',
    breslovVideos: 'Vidéos Breslov',
    haeshHype: '🔥 HaEsh Hype',
    chat: '💬 Chat Breslov',
    whatsapp: '💬 Parlez-nous',
    fire: '🔥 Mon Feu',
    login: 'Connexion',
    logout: 'Déconnexion',
    welcome: 'Bienvenue'
  },
  es: {
    home: 'Inicio',
    store: 'Tienda',
    about: 'Acerca de',
    contact: 'Contacto', 
    magazine: 'Revista',
    join: 'Unirse',
    downloads: 'Descargas',
    prayers: 'Oraciones',
    parsha: 'Parashá',
    donate: 'Donar',
    qa: 'Preguntas y Respuestas',
    subscription: 'Suscripción',
    breslovVideos: 'Videos Breslov',
    haeshHype: '🔥 HaEsh Hype',
    chat: '💬 Chat Breslov',
    whatsapp: '💬 Habla con Nosotros',
    fire: '🔥 Mi Fuego',
    login: 'Iniciar Sesión',
    logout: 'Cerrar Sesión',
    welcome: 'Bienvenido'
  },
  ru: {
    home: 'Главная',
    store: 'Магазин',
    about: 'О нас',
    contact: 'Контакт',
    magazine: 'Журнал',
    join: 'Присоединиться',
    downloads: 'Загрузки',
    prayers: 'Молитвы',
    parsha: 'Параша',
    donate: 'Пожертвовать',
    qa: 'Вопросы и Ответы',
    subscription: 'Подписка',
    breslovVideos: 'Видео Бреслов',
    haeshHype: '🔥 ХаЭш Хайп',
    chat: '💬 Брeslов Чат',
    whatsapp: '💬 Поговорить с Нами',
    fire: '🔥 Мой Огонь',
    login: 'Войти',
    logout: 'Выйти',
    welcome: 'Добро пожаловать'
  }
};

export function Header({ currentLanguage = 'he', onLanguageChange }: HeaderProps) {
  const [location] = useLocation();
  const { totalItems, totalPrice, setIsCartOpen } = useCart();
  const { user, isAuthenticated, isLoading } = useAuth();
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
      {/* LANGUAGE BAR (top) */}
      <div className="header-language-bar" style={{background: 'linear-gradient(90deg,#1aa3d9,#0b78c6)', padding: '6px 10px', position: 'sticky', top: 0, zIndex: 30}}>
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap'}}>
          {Object.entries(languageFlags).map(([lang, flag]) => (
            <button
              key={lang}
              onClick={() => onLanguageChange?.(lang)}
              className={`language-btn ${currentLanguage === lang ? 'active' : ''}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '4px 8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.3)',
                background: currentLanguage === lang ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: '#fff', fontWeight: 700
              }}
              data-testid={`button-language-${lang}`}
            >
              <span>{flag}</span>
              <span>{lang.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
      {/* TOP ROW - Logo + User Actions */}
      <div className="header-container-top">
        {/* LOGO */}
        <div className="header-logo">
          <a href="/" data-testid="link-home" className="transition-all duration-500 hover:scale-110 hover:rotate-2 hover:drop-shadow-2xl inline-block hover:-translate-y-2">
            <img 
              src="https://www.haesh-sheli.co.il/wp-content/uploads/2021/12/cropped-%D7%A7%D7%A8%D7%95-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%A8-%D7%90%D7%95%D7%93%D7%A1%D7%A8.d110a0.webp" 
              alt="האש שלי תוקף עד ביאת המשיח"
              data-testid="img-logo"
              className="transition-all duration-500 hover:brightness-110 hover:contrast-110"
            />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="mobile-menu-toggle transition-all duration-300 hover:scale-125 hover:bg-white hover:text-red-600 hover:shadow-xl hover:rotate-90"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <span className="transition-all duration-300">
            {mobileMenuOpen ? <X /> : <Menu />}
          </span>
        </button>

        {/* USER ACTIONS */}
        <div className="header-actions">
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/972501234567?text=שלום, אני מעוניין לשמוע עוד על הספרים והמנויים שלכם" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-widget transition-all duration-300 hover:scale-110 hover:bg-green-500 hover:text-white hover:shadow-xl hover:-translate-y-1 cursor-pointer flex items-center px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30" 
            data-testid="button-whatsapp"
            style={{marginRight: currentLanguage === 'he' ? '10px' : '0', marginLeft: currentLanguage !== 'he' ? '10px' : '0'}}
          >
            <span className="text-sm">{t.whatsapp}</span>
          </a>

          {/* Authentication Button */}
          <div className="auth-widget" data-testid="auth-widget" style={{marginRight: currentLanguage === 'he' ? '10px' : '0', marginLeft: currentLanguage !== 'he' ? '10px' : '0'}}>
            {isLoading ? (
              <div className="auth-loading flex items-center px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30">
                <span className="text-sm">...</span>
              </div>
            ) : isAuthenticated && user ? (
              <div className="auth-user flex items-center space-x-2" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
                <div className="flex items-center px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30">
                  <User size={16} className="mr-2" style={{marginRight: currentLanguage === 'he' ? '0' : '8px', marginLeft: currentLanguage === 'he' ? '8px' : '0'}} />
                  <span className="text-sm">{t.welcome} {user.firstName || user.email}</span>
                </div>
                <a
                  href="/api/logout"
                  className="logout-btn transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white hover:shadow-xl hover:-translate-y-1 cursor-pointer flex items-center px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30"
                  data-testid="button-logout"
                >
                  <LogOut size={16} className="mr-1" style={{marginRight: currentLanguage === 'he' ? '0' : '4px', marginLeft: currentLanguage === 'he' ? '4px' : '0'}} />
                  <span className="text-sm">{t.logout}</span>
                </a>
              </div>
            ) : (
              <a
                href="/api/login"
                className="login-btn transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:-translate-y-1 cursor-pointer flex items-center px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30"
                data-testid="button-login"
              >
                <LogIn size={16} className="mr-1" style={{marginRight: currentLanguage === 'he' ? '0' : '4px', marginLeft: currentLanguage === 'he' ? '4px' : '0'}} />
                <span className="text-sm">{t.login}</span>
              </a>
            )}
          </div>

          {/* Cart Widget */}
          <div 
            className="cart-widget transition-all duration-300 hover:scale-110 hover:bg-white hover:text-red-600 hover:shadow-xl hover:-translate-y-1 cursor-pointer" 
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
          <h2 className="fire-logo transition-all duration-500 hover:scale-125 hover:text-orange-400 hover:drop-shadow-lg hover:-translate-y-1 hover:rotate-12" data-testid="text-fire-logo">
            {t.fire}
          </h2>
        </div>
      </div>

      {/* BOTTOM ROW - ALL NAVIGATION HORIZONTAL */}
      <div className="header-container-bottom" style={{position: 'sticky', top: 40, zIndex: 25, background: 'linear-gradient(90deg,#1aa3d9,#0b78c6)', padding: '10px 20px'}}>
        <nav className="header-nav-all-horizontal" data-testid="nav-main">
          <ul className="nav-menu-horizontal" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem', listStyle: 'none', margin: 0, padding: 0}}>
            <li className={location === '/' ? 'current-menu-item' : ''}>
              <a href="/" data-testid="link-home" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.home}</a>
            </li>
            <li className={location === '/store' ? 'current-menu-item' : ''}>
              <a href="/store" data-testid="link-store" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.store}</a>
            </li>
            <li className={location === '/magazine' ? 'current-menu-item' : ''}>
              <a href="/magazine" data-testid="link-magazine" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.magazine}</a>
            </li>
            <li className={location === '/haesh-hype' ? 'current-menu-item' : ''}>
              <a href="/haesh-hype" data-testid="link-haesh-hype" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#EF4444', fontWeight: '700', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.haeshHype}</a>
            </li>
            <li className={location === '/downloads' ? 'current-menu-item' : ''}>
              <a href="/downloads" data-testid="link-downloads" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.downloads}</a>
            </li>
            <li className={location === '/prayers' ? 'current-menu-item' : ''}>
              <a href="/prayers" data-testid="link-prayers" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.prayers}</a>
            </li>
            <li className={location === '/subscription' ? 'current-menu-item' : ''}>
              <a href="/subscription" data-testid="link-subscription" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#FFD700', fontWeight: '700', padding: '0.5rem 1rem', textDecoration: 'none'}}>👑 {t.subscription}</a>
            </li>
            <li className={location === '/keren-style' ? 'current-menu-item' : ''}>
              <a href="/keren-style" data-testid="link-keren-style" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#FF6B35', fontWeight: '700', padding: '0.5rem 1rem', textDecoration: 'none'}}>🎥 {t.breslovVideos}</a>
            </li>
            <li className={location === '/about' ? 'current-menu-item' : ''}>
              <a href="/about" data-testid="link-about" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.about}</a>
            </li>
            <li className={location === '/contact' ? 'current-menu-item' : ''}>
              <a href="/contact" data-testid="link-contact" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.contact}</a>
            </li>
            <li className={location === '/join' ? 'current-menu-item' : ''}>
              <a href="/join" data-testid="link-join" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.join}</a>
            </li>
            <li className={location === '/chat' ? 'current-menu-item' : ''}>
              <a href="/chat" data-testid="link-chat" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#10B981', fontWeight: '700', padding: '0.5rem 1rem', textDecoration: 'none'}}>{t.chat}</a>
            </li>
            <li className={location === '/yaaakov' ? 'current-menu-item' : ''}>
              <a href="/yaaakov" data-testid="link-yaaakov" className="transition-all duration-300 hover:scale-110 hover:text-yellow-300 hover:drop-shadow-lg inline-block hover:-translate-y-1" style={{color: '#fff', fontWeight: '600', padding: '0.5rem 1rem', textDecoration: 'none'}}>
                {currentLanguage === 'he' ? 'יעקב' : currentLanguage === 'en' ? 'Yaaakov' : currentLanguage === 'fr' ? 'Yaaakov' : currentLanguage === 'es' ? 'Yaaakov' : currentLanguage === 'ru' ? 'Яааков' : 'יעקב'}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* MOBILE NAVIGATION - GRID 4x4 HARMONIEUX */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} data-testid="nav-mobile">
        <div className="mobile-menu-panel">
          <a href="/" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-home" className={location === '/' ? 'current-menu-item' : ''}>
            🏠<br/>{t.home}
          </a>
          <a href="/store" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-store" className={location === '/store' ? 'current-menu-item' : ''}>
            🛍️<br/>{t.store}
          </a>
          <a href="/magazine" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-magazine" className={location === '/magazine' ? 'current-menu-item' : ''}>
            📖<br/>{t.magazine}
          </a>
          <a href="/haesh-hype" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-haesh-hype" className={location === '/haesh-hype' ? 'current-menu-item' : ''} style={{background: 'linear-gradient(135deg, #FF6B35, #FF8C42)'}}>
            🔥<br/>{t.haeshHype.replace('🔥 ', '')}
          </a>
          <a href="/downloads" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-downloads" className={location === '/downloads' ? 'current-menu-item' : ''}>
            📥<br/>{t.downloads}
          </a>
          <a href="/prayers" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-prayers" className={location === '/prayers' ? 'current-menu-item' : ''}>
            🙏<br/>{t.prayers}
          </a>
          <a href="/parsha" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-parsha" className={location === '/parsha' ? 'current-menu-item' : ''}>
            📜<br/>{t.parsha}
          </a>
          <a href="/subscription" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-subscription" className={location === '/subscription' ? 'current-menu-item' : ''} style={{background: 'linear-gradient(135deg, #FFD700, #FFA500)'}}>
            👑<br/>{t.subscription}
          </a>
          <a href="/keren-style" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-keren-style" className={location === '/keren-style' ? 'current-menu-item' : ''}>
            🎥<br/>{t.breslovVideos}
          </a>
          <a href="/chat" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-chat" className={location === '/chat' ? 'current-menu-item' : ''} style={{background: 'linear-gradient(135deg, #10B981, #059669)'}}>
            💬<br/>{t.chat.replace('💬 ', '')}
          </a>
          <a href="/about" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-about" className={location === '/about' ? 'current-menu-item' : ''}>
            ℹ️<br/>{t.about}
          </a>
          <a href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-contact" className={location === '/contact' ? 'current-menu-item' : ''}>
            ✉️<br/>{t.contact}
          </a>
          <a href="/join" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-join" className={location === '/join' ? 'current-menu-item' : ''}>
            ➕<br/>{t.join}
          </a>
          <a href="/donate" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-donate" className={location === '/donate' ? 'current-menu-item' : ''}>
            💝<br/>{t.donate}
          </a>
          <a href="/qa" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-qa" className={location === '/qa' ? 'current-menu-item' : ''}>
            ❓<br/>{t.qa}
          </a>
          <a href="/yaaakov" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-yaaakov" className={location === '/yaaakov' ? 'current-menu-item' : ''}>
            👤<br/>{currentLanguage === 'he' ? 'יעקב' : 'Yaaakov'}
          </a>
        </div>
      </nav>

      <CartWidget />
    </header>
  );
}
