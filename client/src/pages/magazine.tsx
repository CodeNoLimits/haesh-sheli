import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User,
  Search,
  Tag,
  TrendingUp,
  Heart,
  Eye,
  Share2,
  ArrowRight,
  Mail,
  Star,
  Filter,
  ChevronRight,
  Globe,
  Award,
  Target,
  MessageCircle,
  Users
} from 'lucide-react';

const translations = {
  he: {
    // SEO
    title: 'מגזין האש שלי | תורה, רוחניות ועדכונים מעולם ברסלב',
    description: 'מגזין רוחני המוקדש לתורת רבי נחמן מברסלב. מאמרים מעמיקים, עדויות מרגשות ועדכונים על פעילות הקרן.',

    // Hero Section
    heroTitle: 'מגזין האש שלי',
    heroSubtitle: 'תורה, רוחניות ועדכונים מעולם ברסלב',
    heroDescription: 'מגזין רוחני ייחודי המוקדש לתורתו ודרכו של רבי נחמן מברסלב. כאן תמצאו מאמרים מעמיקים, עדויות מרגשות מרחבי העולם, ועדכונים על פעילות הקרן להפצת ספרי רבנו הקדוש.',

    // Categories
    categoriesTitle: 'קטגוריות',
    categories: [
      { name: 'תורה ורוחניות', count: 45, icon: 'BookOpen' },
      { name: 'ברסלב בעולם', count: 32, icon: 'Globe' },
      { name: 'עדכוני הקרן', count: 28, icon: 'Award' },
      { name: 'מועדים וחגים', count: 15, icon: 'Calendar' },
      { name: 'סיפורים', count: 22, icon: 'Heart' },
      { name: 'שאלות ותשובות', count: 18, icon: 'MessageCircle' }
    ],

    // Featured Articles
    featuredTitle: 'מאמרים מובילים',
    featuredSubtitle: 'המאמרים הנקראים והמשפיעים ביותר',

    // Latest Articles
    latestTitle: 'מאמרים אחרונים',
    latestSubtitle: 'התוכן החדש ביותר שלנו',

    // Articles Data
    articles: [
      {
        id: 1,
        title: 'עצות לשמחה מליקוטי מוהרן',
        excerpt: 'מאמר מעמיק על דברי רבנו הקדוש בענין השמחה והאמונה, ואיך להגיע לשמחה אמיתית בכל מצב ובכל זמן, גם בעתות של קושי וניסיון.',
        category: 'תורה ורוחניות',
        author: 'הרב יעקב הן יעקוב חן',
        date: '15 ינואר 2025',
        readTime: '8 דקות קריאה',
        views: 1250,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/1-1-300x300.d110a0.webp',
        featured: true,
        tags: ['שמחה', 'ליקוטי מוהרן', 'חיזוק']
      },
      {
        id: 2,
        title: 'סיפורים מברסלב ברחבי העולם',
        excerpt: 'עדויות מרגשות מברסלבים מרחבי העולם על ישועות וחוויות רוחניות באמצעות תורת רבנו הקדוש, כיצד השפיעו הספרים על חייהם.',
        category: 'ברסלב בעולם',
        author: 'הרב משה כהן',
        date: '12 ינואר 2025',
        readTime: '6 דקות קריאה',
        views: 980,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/44-300x300.d110a0.webp',
        featured: true,
        tags: ['עדויות', 'חו"ל', 'ישועות']
      },
      {
        id: 3,
        title: 'ההתבודדות - דרך לחיבור אמיתי',
        excerpt: 'מדריך מעשי להתבודדות על פי תורת רבי נחמן מברסלב. איך ליצור חיבור אמיתי עם הבורא דרך התבודדות יומיומית ותפילה אישית.',
        category: 'תורה ורוחניות',
        author: 'הרב דוד לוי',
        date: '10 ינואר 2025',
        readTime: '12 דקות קריאה',
        views: 1450,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/2-1-300x300.d110a0.webp',
        featured: false,
        tags: ['התבודדות', 'תפילה', 'חיבור']
      },
      {
        id: 4,
        title: 'פעילויות הקרן ברחבי הארץ',
        excerpt: 'סיקור מפורט של פעילויות הקרן בחודש האחרון: הפצת ספרים, הרצאות, ופעילויות חינוכיות במרכזים השונים ברחבי הארץ.',
        category: 'עדכוני הקרן',
        author: 'צוות האש שלי',
        date: '8 ינואר 2025',
        readTime: '5 דקות קריאה',
        views: 750,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/02/Untitled-design-10-1024x1024.d110a0.webp',
        featured: false,
        tags: ['פעילויות', 'הפצה', 'חינוך']
      },
      {
        id: 5,
        title: 'טו בשבט ותורת רבנו על הטבע',
        excerpt: 'ט"ו בשבט מתקרב ועמו הזדמנות ללמוד על יחסו המיוחד של רבי נחמן לטבע ולבריאה. מה לימדנו רבנו על החיבור לטבע?',
        category: 'מועדים וחגים',
        author: 'הרב אליעזר גולד',
        date: '5 ינואר 2025',
        readTime: '7 דקות קריאה',
        views: 620,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/3-1-300x300.d110a0.webp',
        featured: false,
        tags: ['טו בשבת', 'טבע', 'חגים']
      },
      {
        id: 6,
        title: 'הנא ברסלב - חיבור לשורשים',
        excerpt: 'מסע רוחני לאומן ולקברו הקדוש של רבי נחמן. המדריך המלא לנוסעים לראש השנה ולחגים, כולל הכנה רוחנית ומעשית.',
        category: 'ברסלב בעולם',
        author: 'הרב יוסף ברגר',
        date: '3 ינואר 2025',
        readTime: '15 דקות קריאה',
        views: 2100,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/5-1-300x300.d110a0.webp',
        featured: true,
        tags: ['אומן', 'נסיעה', 'ראש השנה']
      }
    ],

    // Newsletter
    newsletterTitle: 'הצטרפו לרשימת התפוצה',
    newsletterSubtitle: 'קבלו עדכונים על מאמרים חדשים ופעילויות הקרן',
    newsletterDescription: 'הירשמו לקבלת עדכונים שוטפים על תוכן חדש, מאמרים מיוחדים לחגים ומועדים, ועדכונים על פעילויות הקרן ברחבי העולם.',
    newsletterPlaceholder: 'הכניסו את כתובת המייל שלכם',
    newsletterButton: 'הצטרפו עכשיו',
    newsletterSuccess: 'תודה! נרשמתם בהצלחה לרשימת התפוצה',

    // Statistics
    statsTitle: 'המגזין במספרים',
    stats: [
      { number: '150+', label: 'מאמרים פורסמו', icon: 'BookOpen' },
      { number: '25K+', label: 'קוראים חודשיים', icon: 'Users' },
      { number: '12', label: 'שפות זמינות', icon: 'Globe' },
      { number: '4.9', label: 'דירוג ממוצע', icon: 'Star' }
    ],

    // Content Types
    contentTypesTitle: 'סוגי התוכן במגזין',
    contentTypes: [
      {
        title: 'מאמרי תורה',
        description: 'פירושים ועיונים בתורתו הקדושה של רבי נחמן מברסלב',
        icon: 'BookOpen'
      },
      {
        title: 'עדויות וסיפורים',
        description: 'סיפורים מרגשים על ישועות וחוויות רוחניות',
        icon: 'Heart'
      },
      {
        title: 'מדריכים מעשיים',
        description: 'הדרכה מעשית ליישום תורת רבנו בחיי היום יום',
        icon: 'Target'
      },
      {
        title: 'עדכוני הקרן',
        description: 'חדשות ועדכונים על פעילויות הקרן ברחבי העולם',
        icon: 'Globe'
      }
    ],

    // CTA
    ctaTitle: 'רוצים לתרום למגזין?',
    ctaDescription: 'יש לכם סיפור, מאמר או עדות שתרצו לשתף? נשמח לשמוע מכם!',
    ctaButtonPrimary: 'שלחו תוכן',
    ctaButtonSecondary: 'צרו קשר',

    // Common
    readMore: 'קרא עוד',
    readTime: 'זמן קריאה',
    views: 'צפיות',
    author: 'מאת',
    searchPlaceholder: 'חפש במגזין...',
    filterBy: 'סנן לפי',
    allCategories: 'כל הקטגוריות',
    sortBy: 'מיין לפי',
    newest: 'החדשים ביותר',
    popular: 'הפופולריים ביותר'
  },

  en: {
    // SEO
    title: 'My Fire Magazine | Torah, Spirituality and Updates from Breslov World',
    description: 'Spiritual magazine dedicated to Rabbi Nachman of Breslov\'s teachings. Deep articles, moving testimonies and updates on foundation activities.',

    // Hero Section
    heroTitle: 'My Fire Magazine',
    heroSubtitle: 'Torah, Spirituality and Updates from Breslov World',
    heroDescription: 'A unique spiritual magazine dedicated to the teachings and path of Rabbi Nachman of Breslov. Here you will find deep articles, moving testimonies from around the world, and updates on foundation activities for spreading our holy Rabbi\'s books.',

    // Categories
    categoriesTitle: 'Categories',
    categories: [
      { name: 'Torah & Spirituality', count: 45, icon: 'BookOpen' },
      { name: 'Breslov Worldwide', count: 32, icon: 'Globe' },
      { name: 'Foundation Updates', count: 28, icon: 'Award' },
      { name: 'Holidays & Festivals', count: 15, icon: 'Calendar' },
      { name: 'Stories', count: 22, icon: 'Heart' },
      { name: 'Q&A', count: 18, icon: 'MessageCircle' }
    ],

    // Featured Articles
    featuredTitle: 'Featured Articles',
    featuredSubtitle: 'Our most read and impactful articles',

    // Latest Articles
    latestTitle: 'Latest Articles',
    latestSubtitle: 'Our newest content',

    // Articles Data
    articles: [
      {
        id: 1,
        title: 'Joy Lessons from Likutei Moharan',
        excerpt: 'A deep article on our holy Rabbi\'s words about joy and faith, and how to achieve true joy in any situation and at any time, even during times of difficulty and trial.',
        category: 'Torah & Spirituality',
        author: 'Rabbi Yaakov Hen',
        date: 'January 15, 2025',
        readTime: '8 min read',
        views: 1250,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/1-1-300x300.d110a0.webp',
        featured: true,
        tags: ['joy', 'Likutei Moharan', 'encouragement']
      },
      {
        id: 2,
        title: 'Breslov Stories from Around the World',
        excerpt: 'Moving testimonies from Breslov Hasidim worldwide about salvations and spiritual experiences through our holy Rabbi\'s teachings, how the books influenced their lives.',
        category: 'Breslov Worldwide',
        author: 'Rabbi Moshe Cohen',
        date: 'January 12, 2025',
        readTime: '6 min read',
        views: 980,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/44-300x300.d110a0.webp',
        featured: true,
        tags: ['testimonies', 'worldwide', 'salvations']
      },
      {
        id: 3,
        title: 'Hitbodedut - Path to True Connection',
        excerpt: 'Practical guide to hitbodedut according to Rabbi Nachman of Breslov\'s teachings. How to create true connection with the Creator through daily meditation and personal prayer.',
        category: 'Torah & Spirituality',
        author: 'Rabbi David Levi',
        date: 'January 10, 2025',
        readTime: '12 min read',
        views: 1450,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/2-1-300x300.d110a0.webp',
        featured: false,
        tags: ['hitbodedut', 'prayer', 'connection']
      },
      {
        id: 4,
        title: 'Foundation Activities Across the Country',
        excerpt: 'Detailed coverage of foundation activities in the past month: book distribution, lectures, and educational activities in various centers across the country.',
        category: 'Foundation Updates',
        author: 'My Fire Team',
        date: 'January 8, 2025',
        readTime: '5 min read',
        views: 750,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/02/Untitled-design-10-1024x1024.d110a0.webp',
        featured: false,
        tags: ['activities', 'distribution', 'education']
      },
      {
        id: 5,
        title: 'Tu BiShvat and Our Rabbi\'s Teaching on Nature',
        excerpt: 'Tu BiShvat approaches and with it an opportunity to learn about Rabbi Nachman\'s special relationship with nature and creation. What did our Rabbi teach us about connecting with nature?',
        category: 'Holidays & Festivals',
        author: 'Rabbi Eliezer Gold',
        date: 'January 5, 2025',
        readTime: '7 min read',
        views: 620,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/3-1-300x300.d110a0.webp',
        featured: false,
        tags: ['Tu BiShvat', 'nature', 'holidays']
      },
      {
        id: 6,
        title: 'Traveling to Breslov - Connecting to Roots',
        excerpt: 'Spiritual journey to Uman and our holy Rabbi\'s grave. Complete guide for Rosh Hashana and holiday travelers, including spiritual and practical preparation.',
        category: 'Breslov Worldwide',
        author: 'Rabbi Yosef Berger',
        date: 'January 3, 2025',
        readTime: '15 min read',
        views: 2100,
        image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/5-1-300x300.d110a0.webp',
        featured: true,
        tags: ['Uman', 'travel', 'Rosh Hashana']
      }
    ],

    // Newsletter
    newsletterTitle: 'Join Our Mailing List',
    newsletterSubtitle: 'Get updates on new articles and foundation activities',
    newsletterDescription: 'Subscribe to receive regular updates on new content, special holiday articles, and updates on foundation activities worldwide.',
    newsletterPlaceholder: 'Enter your email address',
    newsletterButton: 'Join Now',
    newsletterSuccess: 'Thank you! You have successfully subscribed to our mailing list',

    // Statistics
    statsTitle: 'Magazine by Numbers',
    stats: [
      { number: '150+', label: 'Articles Published', icon: 'BookOpen' },
      { number: '25K+', label: 'Monthly Readers', icon: 'Users' },
      { number: '12', label: 'Languages Available', icon: 'Globe' },
      { number: '4.9', label: 'Average Rating', icon: 'Star' }
    ],

    // Content Types
    contentTypesTitle: 'Content Types in Magazine',
    contentTypes: [
      {
        title: 'Torah Articles',
        description: 'Commentaries and studies in Rabbi Nachman of Breslov\'s holy teachings',
        icon: 'BookOpen'
      },
      {
        title: 'Testimonies & Stories',
        description: 'Moving stories about salvations and spiritual experiences',
        icon: 'Heart'
      },
      {
        title: 'Practical Guides',
        description: 'Practical guidance for implementing our Rabbi\'s teachings in daily life',
        icon: 'Target'
      },
      {
        title: 'Foundation Updates',
        description: 'News and updates on foundation activities worldwide',
        icon: 'Globe'
      }
    ],

    // CTA
    ctaTitle: 'Want to Contribute to the Magazine?',
    ctaDescription: 'Do you have a story, article or testimony you\'d like to share? We\'d love to hear from you!',
    ctaButtonPrimary: 'Submit Content',
    ctaButtonSecondary: 'Contact Us',

    // Common
    readMore: 'Read More',
    readTime: 'read time',
    views: 'views',
    author: 'by',
    searchPlaceholder: 'Search magazine...',
    filterBy: 'Filter by',
    allCategories: 'All Categories',
    sortBy: 'Sort by',
    newest: 'Newest',
    popular: 'Most Popular'
  },

  fr: {
    // SEO
    title: 'Magazine Mon Feu | Torah, Spiritualité et Actualités du Monde Breslov',
    description: 'Magazine spirituel dédié aux enseignements du Rabbi Nachman de Breslov. Articles profonds, témoignages émouvants et actualités des activités de la fondation.',

    // Hero Section
    heroTitle: 'Magazine Mon Feu',
    heroSubtitle: 'Torah, Spiritualité et Actualités du Monde Breslov',
    heroDescription: 'Un magazine spirituel unique dédié aux enseignements et à la voie du Rabbi Nachman de Breslov. Ici vous trouverez des articles profonds, des témoignages émouvants du monde entier, et des actualités sur les activités de la fondation pour diffuser les livres de notre saint Rabbi.',

    // Categories
    categoriesTitle: 'Catégories',
    categories: [
      { name: 'Torah & Spiritualité', count: 45, icon: 'BookOpen' },
      { name: 'Breslov dans le Monde', count: 32, icon: 'Globe' },
      { name: 'Actualités Fondation', count: 28, icon: 'Award' },
      { name: 'Fêtes & Festivals', count: 15, icon: 'Calendar' },
      { name: 'Histoires', count: 22, icon: 'Heart' },
      { name: 'Q&R', count: 18, icon: 'MessageCircle' }
    ],

    // Featured Articles
    featuredTitle: 'Articles en Vedette',
    featuredSubtitle: 'Nos articles les plus lus et les plus impactants',

    // Latest Articles
    latestTitle: 'Derniers Articles',
    latestSubtitle: 'Notre contenu le plus récent',

    // Newsletter
    newsletterTitle: 'Rejoignez Notre Liste de Diffusion',
    newsletterSubtitle: 'Recevez des mises à jour sur les nouveaux articles et les activités de la fondation',
    newsletterDescription: 'Abonnez-vous pour recevoir des mises à jour régulières sur le nouveau contenu, des articles spéciaux pour les fêtes, et des actualités sur les activités de la fondation dans le monde.',
    newsletterPlaceholder: 'Entrez votre adresse email',
    newsletterButton: 'Rejoignez Maintenant',
    newsletterSuccess: 'Merci ! Vous vous êtes inscrit avec succès à notre liste de diffusion',

    // Statistics
    statsTitle: 'Le Magazine en Chiffres',
    stats: [
      { number: '150+', label: 'Articles Publiés', icon: 'BookOpen' },
      { number: '25K+', label: 'Lecteurs Mensuels', icon: 'Users' },
      { number: '12', label: 'Langues Disponibles', icon: 'Globe' },
      { number: '4.9', label: 'Note Moyenne', icon: 'Star' }
    ],

    // Content Types
    contentTypesTitle: 'Types de Contenu dans le Magazine',
    contentTypes: [
      {
        title: 'Articles de Torah',
        description: 'Commentaires et études des saints enseignements du Rabbi Nachman de Breslov',
        icon: 'BookOpen'
      },
      {
        title: 'Témoignages & Histoires',
        description: 'Histoires émouvantes sur les saluts et expériences spirituelles',
        icon: 'Heart'
      },
      {
        title: 'Guides Pratiques',
        description: 'Guidance pratique pour mettre en œuvre les enseignements de notre Rabbi dans la vie quotidienne',
        icon: 'Target'
      },
      {
        title: 'Actualités Fondation',
        description: 'Nouvelles et mises à jour sur les activités de la fondation dans le monde',
        icon: 'Globe'
      }
    ],

    // CTA
    ctaTitle: 'Voulez-vous Contribuer au Magazine?',
    ctaDescription: 'Avez-vous une histoire, un article ou un témoignage que vous aimeriez partager? Nous aimerions vous entendre!',
    ctaButtonPrimary: 'Soumettre du Contenu',
    ctaButtonSecondary: 'Nous Contacter',

    // Common
    readMore: 'Lire Plus',
    readTime: 'temps de lecture',
    views: 'vues',
    author: 'par',
    searchPlaceholder: 'Rechercher dans le magazine...',
    filterBy: 'Filtrer par',
    allCategories: 'Toutes les Catégories',
    sortBy: 'Trier par',
    newest: 'Plus Récent',
    popular: 'Plus Populaire'
  },

  es: {
    // SEO
    title: 'Revista Mi Fuego | Torá, Espiritualidad y Noticias del Mundo Breslov',
    description: 'Revista espiritual dedicada a las enseñanzas del Rabino Nachman de Breslov. Artículos profundos, testimonios conmovedores y noticias de las actividades de la fundación.',

    // Hero Section
    heroTitle: 'Revista Mi Fuego',
    heroSubtitle: 'Torá, Espiritualidad y Noticias del Mundo Breslov',
    heroDescription: 'Una revista espiritual única dedicada a las enseñanzas y el camino del Rabino Nachman de Breslov. Aquí encontrarás artículos profundos, testimonios conmovedores de todo el mundo, y noticias sobre las actividades de la fundación para difundir los libros de nuestro santo Rabino.',

    // Categories
    categoriesTitle: 'Categorías',
    categories: [
      { name: 'Torá & Espiritualidad', count: 45, icon: 'BookOpen' },
      { name: 'Breslov en el Mundo', count: 32, icon: 'Globe' },
      { name: 'Noticias Fundación', count: 28, icon: 'Award' },
      { name: 'Fiestas & Festivales', count: 15, icon: 'Calendar' },
      { name: 'Historias', count: 22, icon: 'Heart' },
      { name: 'P&R', count: 18, icon: 'MessageCircle' }
    ],

    // Featured Articles
    featuredTitle: 'Artículos Destacados',
    featuredSubtitle: 'Nuestros artículos más leídos e impactantes',

    // Latest Articles
    latestTitle: 'Últimos Artículos',
    latestSubtitle: 'Nuestro contenido más reciente',

    // Newsletter
    newsletterTitle: 'Únete a Nuestra Lista de Correo',
    newsletterSubtitle: 'Recibe actualizaciones sobre nuevos artículos y actividades de la fundación',
    newsletterDescription: 'Suscríbete para recibir actualizaciones regulares sobre contenido nuevo, artículos especiales para fiestas, y noticias sobre actividades de la fundación en todo el mundo.',
    newsletterPlaceholder: 'Ingresa tu dirección de email',
    newsletterButton: 'Únete Ahora',
    newsletterSuccess: '¡Gracias! Te has suscrito exitosamente a nuestra lista de correo',

    // Statistics
    statsTitle: 'La Revista en Números',
    stats: [
      { number: '150+', label: 'Artículos Publicados', icon: 'BookOpen' },
      { number: '25K+', label: 'Lectores Mensuales', icon: 'Users' },
      { number: '25K+', label: 'Idiomas Disponibles', icon: 'Globe' },
      { number: '4.9', label: 'Calificación Promedio', icon: 'Star' }
    ],

    // Content Types
    contentTypesTitle: 'Tipos de Contenido en la Revista',
    contentTypes: [
      {
        title: 'Artículos de Torá',
        description: 'Comentarios y estudios de las santas enseñanzas del Rabino Nachman de Breslov',
        icon: 'BookOpen'
      },
      {
        title: 'Testimonios & Historias',
        description: 'Historias conmovedoras sobre salvaciones y experiencias espirituales',
        icon: 'Heart'
      },
      {
        title: 'Guías Prácticas',
        description: 'Orientación práctica para implementar las enseñanzas de nuestro Rabino en la vida diaria',
        icon: 'Target'
      },
      {
        title: 'Noticias Fundación',
        description: 'Noticias y actualizaciones sobre actividades de la fundación en todo el mundo',
        icon: 'Globe'
      }
    ],

    // CTA
    ctaTitle: '¿Quieres Contribuir a la Revista?',
    ctaDescription: '¿Tienes una historia, artículo o testimonio que te gustaría compartir? ¡Nos encantaría escucharte!',
    ctaButtonPrimary: 'Enviar Contenido',
    ctaButtonSecondary: 'Contáctanos',

    // Common
    readMore: 'Leer Más',
    readTime: 'tiempo de lectura',
    views: 'vistas',
    author: 'por',
    searchPlaceholder: 'Buscar en la revista...',
    filterBy: 'Filtrar por',
    allCategories: 'Todas las Categorías',
    sortBy: 'Ordenar por',
    newest: 'Más Reciente',
    popular: 'Más Popular'
  },

  ru: {
    // SEO
    title: 'Журнал Мой Огонь | Тора, Духовность и Новости из Мира Бреслов',
    description: 'Духовный журнал, посвященный учениям Рабби Нахмана из Бреслов. Глубокие статьи, трогательные свидетельства и новости о деятельности фонда.',

    // Hero Section
    heroTitle: 'Журнал Мой Огонь',
    heroSubtitle: 'Тора, Духовность и Новости из Мира Бреслов',
    heroDescription: 'Уникальный духовный журнал, посвященный учениям и пути Рабби Нахмана из Бреслов. Здесь вы найдете глубокие статьи, трогательные свидетельства со всего мира и новости о деятельности фонда по распространению книг нашего святого Рабби.',

    // Categories
    categoriesTitle: 'Категории',
    categories: [
      { name: 'Тора & Духовность', count: 45, icon: 'BookOpen' },
      { name: 'Бреслов в Мире', count: 32, icon: 'Globe' },
      { name: 'Новости Фонда', count: 28, icon: 'Award' },
      { name: 'Праздники & Фестивали', count: 15, icon: 'Calendar' },
      { name: 'Истории', count: 22, icon: 'Heart' },
      { name: 'В&О', count: 18, icon: 'MessageCircle' }
    ],

    // Featured Articles
    featuredTitle: 'Рекомендуемые Статьи',
    featuredSubtitle: 'Наши самые читаемые и влиятельные статьи',

    // Latest Articles
    latestTitle: 'Последние Статьи',
    latestSubtitle: 'Наш самый новый контент',

    // Newsletter
    newsletterTitle: 'Присоединяйтесь к Нашему Списку Рассылки',
    newsletterSubtitle: 'Получайте обновления о новых статьях и деятельности фонда',
    newsletterDescription: 'Подпишитесь, чтобы получать регулярные обновления о новом контенте, специальных статьях к праздникам и новостях о деятельности фонда по всему миру.',
    newsletterPlaceholder: 'Введите ваш email адрес',
    newsletterButton: 'Присоединиться Сейчас',
    newsletterSuccess: 'Спасибо! Вы успешно подписались на нашу рассылку',

    // Statistics
    statsTitle: 'Журнал в Цифрах',
    stats: [
      { number: '150+', label: 'Опубликованных Статей', icon: 'BookOpen' },
      { number: '25K+', label: 'Ежемесячных Читателей', icon: 'Users' },
      { number: '12', label: 'Доступных Языков', icon: 'Globe' },
      { number: '4.9', label: 'Средний Рейтинг', icon: 'Star' }
    ],

    // Content Types
    contentTypesTitle: 'Типы Контента в Журнале',
    contentTypes: [
      {
        title: 'Статьи Торы',
        description: 'Комментарии и изучение святых учений Рабби Нахмана из Бреслов',
        icon: 'BookOpen'
      },
      {
        title: 'Свидетельства & Истории',
        description: 'Трогательные истории о спасениях и духовных переживаниях',
        icon: 'Heart'
      },
      {
        title: 'Практические Руководства',
        description: 'Практическое руководство по применению учений нашего Рабби в повседневной жизни',
        icon: 'Target'
      },
      {
        title: 'Новости Фонда',
        description: 'Новости и обновления о деятельности фонда по всему миру',
        icon: 'Globe'
      }
    ],

    // CTA
    ctaTitle: 'Хотите Внести Вклад в Журнал?',
    ctaDescription: 'У вас есть история, статья или свидетельство, которыми вы хотели бы поделиться? Мы будем рады услышать от вас!',
    ctaButtonPrimary: 'Отправить Контент',
    ctaButtonSecondary: 'Связаться с Нами',

    // Common
    readMore: 'Читать Далее',
    readTime: 'время чтения',
    views: 'просмотры',
    author: 'автор',
    searchPlaceholder: 'Поиск в журнале...',
    filterBy: 'Фильтровать по',
    allCategories: 'Все Категории',
    sortBy: 'Сортировать по',
    newest: 'Новейшие',
    popular: 'Самые Популярные'
  }
};

// Icon mapping component
const iconMap = {
  BookOpen,
  Calendar,
  Clock,
  User,
  Search,
  Tag,
  TrendingUp,
  Heart,
  Eye,
  Share2,
  ArrowRight,
  Mail,
  Star,
  Filter,
  ChevronRight,
  Globe,
  Award,
  Target,
  MessageCircle,
  Users
} as const;

type IconKey = keyof typeof iconMap;

const IconComponent = ({ iconName, className = "w-6 h-6" }: { iconName: string, className?: string }) => {
  const Icon = iconMap[iconName as IconKey] ?? BookOpen;
  return <Icon className={className} aria-hidden />;
};

export default function Magazine() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [emailSubscription, setEmailSubscription] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  // Set document title and meta description
  useEffect(() => {
    document.title = t.title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t.description);
  }, [t.title, t.description]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscriptionStatus('success');
    setEmailSubscription('');
    setTimeout(() => setSubscriptionStatus(''), 5000);
  };

  // Filter and sort articles
  const filteredArticles = t.articles
    .filter(article => 
      (selectedCategory === '' || article.category === selectedCategory) &&
      (searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
    .sort((a, b) => {
      if (sortBy === 'popular') return b.views - a.views;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const latestArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20 lg:py-32" data-testid="hero-section">
        <div className="hero-overlay absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-scale">
            <h1 className="heading-oversized mb-6 text-primary" data-testid="hero-title">
              {t.heroTitle}
            </h1>
            <p className="text-large text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="hero-subtitle">
              {t.heroSubtitle}
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
              {t.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-secondary/20" data-testid="search-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  data-testid="search-input"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                data-testid="category-filter"
              >
                <option value="">{t.allCategories}</option>
                {t.categories.map((category, index) => (
                  <option key={index} value={category.name}>{category.name}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                data-testid="sort-filter"
              >
                <option value="newest">{t.newest}</option>
                <option value="popular">{t.popular}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background" data-testid="categories-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center" data-testid="categories-title">
              {t.categoriesTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {t.categories.map((category, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)}
                  className={`card-premium p-6 text-center cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.name ? 'ring-2 ring-primary bg-primary/5' : 'hover:shadow-lg'
                  }`}
                  data-testid={`category-${index}`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent iconName={category.icon} className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2" data-testid={`category-name-${index}`}>
                    {category.name}
                  </h3>
                  <span className="text-xs text-muted-foreground" data-testid={`category-count-${index}`}>
                    {category.count} מאמרים
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-secondary/20" data-testid="featured-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="featured-title">
                  {t.featuredTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="featured-subtitle">
                  {t.featuredSubtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 4).map((article, index) => (
                  <article 
                    key={article.id}
                    className="card-premium overflow-hidden group hover:shadow-xl transition-all duration-300"
                    data-testid={`featured-article-${index}`}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-200" data-testid={`featured-article-title-${index}`}>
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`featured-article-excerpt-${index}`}>
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {article.views}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {article.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a 
                          href="#" 
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors duration-200"
                          data-testid={`featured-article-link-${index}`}
                        >
                          {t.readMore}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-20 bg-background" data-testid="latest-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="latest-title">
                {t.latestTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="latest-subtitle">
                {t.latestSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <article 
                  key={article.id}
                  className="card-premium overflow-hidden group hover:shadow-xl transition-all duration-300"
                  data-testid={`latest-article-${index}`}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-200" data-testid={`latest-article-title-${index}`}>
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`latest-article-excerpt-${index}`}>
                      {article.excerpt.slice(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 text-sm transition-colors duration-200"
                      data-testid={`latest-article-link-${index}`}
                    >
                      {t.readMore}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-secondary/20" data-testid="stats-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="stats-title">
                {t.statsTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="card-premium p-8 text-center group hover:scale-105 transition-transform duration-300"
                  data-testid={`stat-${index}`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent iconName={stat.icon} className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-4" data-testid={`stat-number-${index}`}>
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-background" data-testid="content-types-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="content-types-title">
                {t.contentTypesTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.contentTypes.map((type, index) => (
                <div 
                  key={index}
                  className="card-premium p-8 text-center group hover:shadow-xl transition-all duration-300"
                  data-testid={`content-type-${index}`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent iconName={type.icon} className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4" data-testid={`content-type-title-${index}`}>
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`content-type-description-${index}`}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary relative overflow-hidden" data-testid="newsletter-section">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="newsletter-title">
              {t.newsletterTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed" data-testid="newsletter-subtitle">
              {t.newsletterSubtitle}
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed" data-testid="newsletter-description">
              {t.newsletterDescription}
            </p>
            
            {subscriptionStatus === 'success' && (
              <div className="bg-background/20 border border-background/30 rounded-xl p-4 mb-8 animate-fade-in-scale" data-testid="newsletter-success">
                <p className="text-background font-semibold">{t.newsletterSuccess}</p>
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" data-testid="newsletter-form">
              <input
                type="email"
                value={emailSubscription}
                onChange={(e) => setEmailSubscription(e.target.value)}
                placeholder={t.newsletterPlaceholder}
                className="flex-1 px-6 py-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-background focus:outline-none"
                required
                data-testid="newsletter-email"
              />
              <button
                type="submit"
                className="bg-background text-primary px-8 py-4 rounded-xl font-semibold hover:bg-background/90 transition-all duration-200 inline-flex items-center justify-center gap-2"
                data-testid="newsletter-submit"
              >
                <Mail className="w-5 h-5" />
                {t.newsletterButton}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background" data-testid="cta-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="cta-title">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="cta-description">
              {t.ctaDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-breslov-primary inline-flex items-center justify-center gap-2"
                data-testid="cta-button-primary"
              >
                <Share2 className="w-5 h-5" />
                {t.ctaButtonPrimary}
              </a>
              <a 
                href="/contact" 
                className="btn-breslov-secondary inline-flex items-center justify-center gap-2"
                data-testid="cta-button-secondary"
              >
                <MessageCircle className="w-5 h-5" />
                {t.ctaButtonSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}