import { Link } from 'wouter';
import { Crown, Heart, ShoppingBag, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SubtleCTAProps {
  type: 'subscribe' | 'donate' | 'store' | 'downloads';
  className?: string;
}

const translations = {
  he: {
    subscribe: {
      title: 'הצטרף למשפחת האש שלי',
      description: 'קבל גישה בלעדית לכל התכנים והספרים הדיגיטליים',
      cta: 'למנוי החודשי',
      icon: Crown
    },
    donate: {
      title: 'תמכו בהפצת תורת רבינו',
      description: 'כל תרומה עוזרת להפיץ את ספרי רבי נחמן בכל העולם',
      cta: 'לתרומה',
      icon: Heart
    },
    store: {
      title: 'ספרי ברסלב איכותיים',
      description: 'מהדורות יפות ואיכותיות במחירים מיוחדים',
      cta: 'לחנות',
      icon: ShoppingBag
    },
    downloads: {
      title: 'הורדות חינמיות',
      description: 'כל ספרי רבינו זמינים להורדה חינם',
      cta: 'להורדות',
      icon: BookOpen
    }
  },
  en: {
    subscribe: {
      title: 'Join HaEsh Sheli Family',
      description: 'Get exclusive access to all digital content and books',
      cta: 'Monthly Subscription',
      icon: Crown
    },
    donate: {
      title: 'Support Rabbi Nachman\'s Teachings',
      description: 'Every donation helps spread Rebbe\'s books worldwide',
      cta: 'Donate',
      icon: Heart
    },
    store: {
      title: 'Quality Breslov Books',
      description: 'Beautiful editions at special prices',
      cta: 'Visit Store',
      icon: ShoppingBag
    },
    downloads: {
      title: 'Free Downloads',
      description: 'All of Rebbe\'s books available for free',
      cta: 'Downloads',
      icon: BookOpen
    }
  },
  fr: {
    subscribe: {
      title: 'Rejoignez la famille HaEsh Sheli',
      description: 'Accédez exclusivement à tout le contenu et livres numériques',
      cta: 'Abonnement mensuel',
      icon: Crown
    },
    donate: {
      title: 'Soutenez l\'enseignement de Rabbi Nachman',
      description: 'Chaque don aide à diffuser les livres du Rabbi dans le monde entier',
      cta: 'Faire un don',
      icon: Heart
    },
    store: {
      title: 'Livres Breslov de qualité',
      description: 'Belles éditions à prix spéciaux',
      cta: 'Visiter la boutique',
      icon: ShoppingBag
    },
    downloads: {
      title: 'Téléchargements gratuits',
      description: 'Tous les livres du Rabbi disponibles gratuitement',
      cta: 'Téléchargements',
      icon: BookOpen
    }
  },
  es: {
    subscribe: {
      title: 'Únete a la familia HaEsh Sheli',
      description: 'Obtén acceso exclusivo a todo el contenido y libros digitales',
      cta: 'Suscripción mensual',
      icon: Crown
    },
    donate: {
      title: 'Apoya las enseñanzas de Rabí Najmán',
      description: 'Cada donación ayuda a difundir los libros del Rebe en todo el mundo',
      cta: 'Donar',
      icon: Heart
    },
    store: {
      title: 'Libros Breslov de calidad',
      description: 'Ediciones hermosas a precios especiales',
      cta: 'Visitar tienda',
      icon: ShoppingBag
    },
    downloads: {
      title: 'Descargas gratuitas',
      description: 'Todos los libros del Rebe disponibles gratis',
      cta: 'Descargas',
      icon: BookOpen
    }
  },
  ru: {
    subscribe: {
      title: 'Присоединяйтесь к семье HaEsh Sheli',
      description: 'Получите эксклюзивный доступ ко всему контенту и цифровым книгам',
      cta: 'Месячная подписка',
      icon: Crown
    },
    donate: {
      title: 'Поддержите учение Рабби Нахмана',
      description: 'Каждое пожертвование помогает распространять книги Ребе по всему миру',
      cta: 'Пожертвовать',
      icon: Heart
    },
    store: {
      title: 'Качественные книги Бреслов',
      description: 'Красивые издания по специальным ценам',
      cta: 'Посетить магазин',
      icon: ShoppingBag
    },
    downloads: {
      title: 'Бесплатные загрузки',
      description: 'Все книги Ребе доступны бесплатно',
      cta: 'Загрузки',
      icon: BookOpen
    }
  }
};

const ctaLinks = {
  subscribe: '/subscription',
  donate: '/donate',
  store: '/store',
  downloads: '/downloads'
};

export function SubtleCTA({ type, className = '' }: SubtleCTAProps) {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const content = t[type];
  const Icon = content.icon;
  const isRTL = currentLanguage === 'he';

  return (
    <Link href={ctaLinks[type]}>
      <div 
        className={`subtle-cta group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
        style={{
          background: 'linear-gradient(135deg, rgba(26,163,217,0.08), rgba(11,120,198,0.08))',
          border: '2px solid rgba(26,163,217,0.2)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginTop: '2rem',
          marginBottom: '2rem',
          direction: isRTL ? 'rtl' : 'ltr'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div 
            className="group-hover:scale-110 transition-transform duration-300"
            style={{
              background: 'linear-gradient(135deg, #1aa3d9, #0b78c6)',
              padding: '1rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon size={28} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <h4 
              className="group-hover:text-primary transition-colors"
              style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1aa3d9'
              }}
            >
              {content.title}
            </h4>
            <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>
              {content.description}
            </p>
          </div>
          <div 
            className="group-hover:translate-x-1 transition-transform"
            style={{
              background: '#1aa3d9',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              whiteSpace: 'nowrap'
            }}
          >
            {content.cta}
          </div>
        </div>
      </div>
    </Link>
  );
}

