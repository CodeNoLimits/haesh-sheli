import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  he: {
    title: 'אודות האש שלי',
    subtitle: 'ספרי ברסלב אמיתיים באיכות גבוהה',
    ourStory: 'הסיפור שלנו',
    storyText: 'אנחנו מתמחים במכירת ספרי רבי נחמן מברסלב וספרי ברסלב אמיתיים באיכות הגבוהה ביותר. המטרה שלנו היא להפיץ את האור של רבי נחמן לכל הרוצה לקרוא ולהתקרב.',
    ourMission: 'המשימה שלנו',
    missionText: 'להביא את הספרות הברסלבית האמיתית לכל יהודי, בכל מקום בעולם. אנו מאמינים שלכל אדם זכות לגשת לחכמת רבי נחמן ולתורתו הקדושה.',
    whyChooseUs: 'למה לבחור בנו',
    reasons: [
      'ספרים אמיתיים ומקוריים מהמקורות הנכונים',
      'מחירים הוגנים ומשלוחים מהירים',
      'שירות לקוחות מקצועי וידידותי',
      'מגוון רחב של ספרי ברסלב',
      'איכות דפוס גבוהה ועמידה'
    ],
    contactUs: 'צור קשר',
    contactText: 'יש לכם שאלות? רוצים להזמין משהו מיוחד? אנחנו כאן בשבילכם!'
  },
  en: {
    title: 'About My Fire',
    subtitle: 'Authentic Breslov Books in High Quality',
    ourStory: 'Our Story',
    storyText: 'We specialize in selling authentic Rabbi Nachman of Breslov books and Breslov literature of the highest quality. Our goal is to spread Rabbi Nachman\'s light to anyone who wishes to read and draw closer.',
    ourMission: 'Our Mission',
    missionText: 'To bring authentic Breslov literature to every Jew, anywhere in the world. We believe every person has the right to access Rabbi Nachman\'s wisdom and holy Torah.',
    whyChooseUs: 'Why Choose Us',
    reasons: [
      'Authentic and original books from the right sources',
      'Fair prices and fast shipping',
      'Professional and friendly customer service',
      'Wide variety of Breslov books',
      'High quality and durable printing'
    ],
    contactUs: 'Contact Us',
    contactText: 'Have questions? Want to order something special? We\'re here for you!'
  },
  fr: {
    title: 'À Propos de Mon Feu',
    subtitle: 'Livres Breslov Authentiques de Haute Qualité',
    ourStory: 'Notre Histoire',
    storyText: 'Nous nous spécialisons dans la vente de livres authentiques du Rabbi Nachman de Breslov et de littérature Breslov de la plus haute qualité. Notre but est de répandre la lumière du Rabbi Nachman à tous ceux qui souhaitent lire et se rapprocher.',
    ourMission: 'Notre Mission',
    missionText: 'Apporter la littérature Breslov authentique à chaque Juif, partout dans le monde. Nous croyons que chaque personne a le droit d\'accéder à la sagesse du Rabbi Nachman et à sa Torah sainte.',
    whyChooseUs: 'Pourquoi Nous Choisir',
    reasons: [
      'Livres authentiques et originaux des bonnes sources',
      'Prix équitables et livraison rapide',
      'Service client professionnel et amical',
      'Large variété de livres Breslov',
      'Impression de haute qualité et durable'
    ],
    contactUs: 'Contactez-Nous',
    contactText: 'Vous avez des questions? Vous voulez commander quelque chose de spécial? Nous sommes là pour vous!'
  },
  es: {
    title: 'Acerca de Mi Fuego',
    subtitle: 'Libros Breslov Auténticos de Alta Calidad',
    ourStory: 'Nuestra Historia',
    storyText: 'Nos especializamos en vender libros auténticos del Rabino Nachman de Breslov y literatura Breslov de la más alta calidad. Nuestro objetivo es difundir la luz del Rabino Nachman a todos los que desean leer y acercarse.',
    ourMission: 'Nuestra Misión',
    missionText: 'Llevar literatura Breslov auténtica a cada judío, en cualquier lugar del mundo. Creemos que cada persona tiene derecho a acceder a la sabiduría del Rabino Nachman y su Torá sagrada.',
    whyChooseUs: 'Por Qué Elegirnos',
    reasons: [
      'Libros auténticos y originales de las fuentes correctas',
      'Precios justos y envío rápido',
      'Servicio al cliente profesional y amigable',
      'Amplia variedad de libros Breslov',
      'Impresión de alta calidad y duradera'
    ],
    contactUs: 'Contáctanos',
    contactText: '¿Tienes preguntas? ¿Quieres pedir algo especial? ¡Estamos aquí para ti!'
  },
  ru: {
    title: 'О Моем Огне',
    subtitle: 'Подлинные Книги Бреслов Высокого Качества',
    ourStory: 'Наша История',
    storyText: 'Мы специализируемся на продаже подлинных книг Рабби Нахмана из Бреслов и литературы Бреслов высочайшего качества. Наша цель - распространить свет Рабби Нахмана всем, кто желает читать и приблизиться.',
    ourMission: 'Наша Миссия',
    missionText: 'Принести подлинную литературу Бреслов каждому еврею в любой точке мира. Мы верим, что каждый человек имеет право на доступ к мудрости Рабби Нахмана и его святой Торе.',
    whyChooseUs: 'Почему Выбрать Нас',
    reasons: [
      'Подлинные и оригинальные книги из правильных источников',
      'Справедливые цены и быстрая доставка',
      'Профессиональное и дружелюбное обслуживание клиентов',
      'Широкий ассортимент книг Бреслов',
      'Высококачественная и прочная печать'
    ],
    contactUs: 'Свяжитесь с Нами',
    contactText: 'Есть вопросы? Хотите заказать что-то особенное? Мы здесь для вас!'
  }
};

export default function About() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-800 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {t.ourStory}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            {t.storyText}
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
            {t.ourMission}
          </h2>
          <p className="text-lg text-red-700 leading-relaxed text-center max-w-4xl mx-auto">
            {t.missionText}
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t.whyChooseUs}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.reasons.map((reason, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-green-800 font-medium">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t.contactUs}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {t.contactText}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-red-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {t.contactUs}
          </a>
        </div>
      </div>
    </div>
  );
}