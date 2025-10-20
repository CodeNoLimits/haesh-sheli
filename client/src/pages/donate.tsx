import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';

const translations = {
  he: {
    seoTitle: 'תרומות – הפצת ספרי ברסלב בעולם',
    seoDescription: 'הצטרפו להפצת ספרי רבי נחמן בעולם. כל תרומה מסייעת להדפסה, משלוח והנגשה חינמית של ספרים ותכנים.',
    title: 'תרמו להפצת ספרים',
    subtitle: 'יחד מפיצים אור – ספר ועוד ספר',
    intro: 'בזכותכם ספרי רבינו מגיעים לכל בית. התרומה מסייעת בהדפסות חדשות, משלוחי ספרים למי שאין בידו, ובהנגשה חינמית של קבצים להורדה.',
    optionsTitle: 'דרכי תרומה',
    options: [
      { title: 'הוראת קבע חודשית', desc: 'הצטרפו לתמיכה קבועה והיו שותפים להפצה רציפה בכל החודשים.', href: '/subscription' },
      { title: 'תרומה חד-פעמית', desc: 'תרומה לכל מטרה – הדפסה, משלוחים, חלוקה באירועים.', href: '/checkout' },
      { title: 'הקדשת ספרים', desc: 'אפשרות להקדשה בעותקים המחולקים – לזכות, לרפואה או לעילוי נשמה.', href: '/contact' },
    ],
    impactTitle: 'מה עושים עם התרומות?',
    impact: [
      'הדפסות של מהדורות חדשות לספרי רבי נחמן ותלמידיו.',
      'משלוח ספרים חינם למקומות מרוחקים ולמי שמתקשה ברכישה.',
      'תחזוקת אתר והנגשה חינמית של ספרים להורדה בכל השפות.',
      'אירועי חיזוק קהילתיים והפצת תכנים מחזקים.'
    ],
    contactCta: 'לתרומה ייעודית או שאלה – דברו איתנו',
    contactBtn: 'צור קשר',
  },
  en: {
    seoTitle: 'Donate – Spreading Breslov Books Worldwide',
    seoDescription: 'Join us in spreading Rabbi Nachman’s books. Your donation supports printing, shipping and free access to downloads.',
    title: 'Donate to Spread Books',
    subtitle: 'Together we spread light – book by book',
    intro: 'Thanks to you, our books reach every home. Donations fund new printings, free shipping to those in need, and free downloadable resources.',
    optionsTitle: 'Ways to Donate',
    options: [
      { title: 'Monthly Subscription', desc: 'Join monthly support to ensure ongoing distribution all year.', href: '/subscription' },
      { title: 'One‑Time Donation', desc: 'Donate toward printing, shipping or special distribution.', href: '/checkout' },
      { title: 'Dedicate Books', desc: 'Dedications in distributed copies — in merit, healing or memory.', href: '/contact' },
    ],
    impactTitle: 'What Do Donations Fund?',
    impact: [
      'Printing new editions of Rabbi Nachman and his students’ books.',
      'Free shipping to remote areas and those unable to purchase.',
      'Website maintenance and free downloads in multiple languages.',
      'Community events and uplifting content distribution.'
    ],
    contactCta: 'For designated giving or questions — talk to us',
    contactBtn: 'Contact Us',
  },
  fr: {
    seoTitle: 'Dons – Diffusion des Livres Breslev dans le Monde',
    seoDescription: 'Participez à la diffusion des livres de Rabbi Na’hman. Vos dons soutiennent l’impression, l’envoi et l’accès gratuit aux téléchargements.',
    title: 'Faites un Don pour Diffuser les Livres',
    subtitle: 'Ensemble, nous diffusons la lumière – livre après livre',
    intro: 'Grâce à vous, les livres arrivent dans chaque foyer. Les dons financent de nouvelles impressions, des envois gratuits et des ressources téléchargeables.',
    optionsTitle: 'Moyens de Faire un Don',
    options: [
      { title: 'Prélèvement Mensuel', desc: 'Soutien mensuel pour une diffusion continue toute l’année.', href: '/subscription' },
      { title: 'Don Ponctuel', desc: 'Pour l’impression, l’expédition ou une distribution spéciale.', href: '/checkout' },
      { title: 'Dédicace de Livres', desc: 'Dédicaces dans les exemplaires distribués — mérite, guérison, mémoire.', href: '/contact' },
    ],
    impactTitle: 'Que Financement Apportent les Dons ?',
    impact: [
      'Impression de nouvelles éditions des livres de Rabbi Na’hman et de ses élèves.',
      'Envois gratuits vers les zones éloignées et pour les personnes dans le besoin.',
      'Maintenance du site et téléchargements gratuits en plusieurs langues.',
      'Événements communautaires et diffusion de contenus édifiants.'
    ],
    contactCta: 'Pour un don dédié ou une question — contactez‑nous',
    contactBtn: 'Contact',
  },
  es: {
    seoTitle: 'Donaciones – Difusión de Libros Breslov en el Mundo',
    seoDescription: 'Únase a difundir los libros de Rabí Najmán. Su donación apoya impresión, envíos y descargas gratuitas.',
    title: 'Done para Difundir Libros',
    subtitle: 'Juntos difundimos luz – libro a libro',
    intro: 'Gracias a usted, los libros llegan a cada hogar. Los donativos financian nuevas impresiones, envíos gratuitos y recursos descargables.',
    optionsTitle: 'Formas de Donar',
    options: [
      { title: 'Suscripción Mensual', desc: 'Apoyo mensual para distribución continua todo el año.', href: '/subscription' },
      { title: 'Donación Única', desc: 'Para impresión, envío o distribución especial.', href: '/checkout' },
      { title: 'Dedicación de Libros', desc: 'Dedicaciones en copias distribuidas — mérito, sanación o memoria.', href: '/contact' },
    ],
    impactTitle: '¿Qué Financian las Donaciones?',
    impact: [
      'Impresión de nuevas ediciones de libros de Rabí Najmán y sus alumnos.',
      'Envíos gratuitos a zonas remotas y a quienes no pueden comprar.',
      'Mantenimiento del sitio y descargas gratuitas en varios idiomas.',
      'Eventos comunitarios y difusión de contenidos edificantes.'
    ],
    contactCta: 'Para donación designada o preguntas — contáctenos',
    contactBtn: 'Contacto',
  },
  ru: {
    seoTitle: 'Пожертвования – Распространение Книг Бреслов по Миру',
    seoDescription: 'Присоединяйтесь к распространению книг Рабби Нахмана. Пожертвования помогают печати, доставке и бесплатным загрузкам.',
    title: 'Пожертвовать на Распространение Книг',
    subtitle: 'Вместе распространяем свет — книга за книгой',
    intro: 'Благодаря вам книги доходят до каждого дома. Пожертвования финансируют новые тиражи, бесплатную доставку и загружаемые материалы.',
    optionsTitle: 'Способы Пожертвования',
    options: [
      { title: 'Ежемесячная Подписка', desc: 'Ежемесячная поддержка для непрерывного распространения.', href: '/subscription' },
      { title: 'Разовое Пожертвование', desc: 'На печать, доставку или специальную раздачу.', href: '/checkout' },
      { title: 'Посвящение Книг', desc: 'Посвящения в распространяемых экземплярах — в заслугу, на исцеление или в память.', href: '/contact' },
    ],
    impactTitle: 'На Что Идут Пожертвования?',
    impact: [
      'Печать новых изданий книг Рабби Нахмана и его учеников.',
      'Бесплатная доставка в удаленные районы и нуждающимся.',
      'Поддержка сайта и бесплатные загрузки на разных языках.',
      'Общественные мероприятия и распространение вдохновляющих материалов.'
    ],
    contactCta: 'Для целевых взносов или вопросов — свяжитесь с нами',
    contactBtn: 'Связаться',
  }
};

export default function Donate() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

  useEffect(() => {
    document.title = t.seoTitle;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t.seoDescription);
  }, [t.seoTitle, t.seoDescription]);

  return (
    <div className="min-h-screen bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      <section className="hero-gradient relative overflow-hidden py-16 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-books-composition.png" alt="Breslov Books" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="heading-oversized text-primary mb-3">{t.title}</h1>
          <p className="text-large text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="card-premium p-8 lg:p-10 mb-10">
            <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-line">{t.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.options.map((opt: any, i: number) => (
              <a key={i} href={opt.href} className="card-premium p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-2">{opt.title}</h3>
                <p className="text-foreground/80">{opt.desc}</p>
              </a>
            ))}
          </div>

          <div className="card-premium p-8 mt-8">
            <h2 className="text-2xl font-bold text-primary mb-3">{t.impactTitle}</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {t.impact.map((line: string, i: number) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-10">
            <a href="/contact" className="btn-breslov-primary inline-block">{t.contactCta}</a>
            <div className="mt-3">
              <a href="/contact" className="text-primary underline">{t.contactBtn}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
