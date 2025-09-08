import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

export default function Yaaakov() {
  const { currentLanguage, setLanguage } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            {currentLanguage === 'he' ? 'יעקב - פיתוח האתר' : 
             currentLanguage === 'en' ? 'Yaaakov - Site Development' :
             currentLanguage === 'fr' ? 'Yaaakov - Développement du Site' :
             currentLanguage === 'es' ? 'Yaaakov - Desarrollo del Sitio' :
             currentLanguage === 'ru' ? 'Яааков - Разработка Сайта' : 'יעקב - פיתוח האתר'}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {currentLanguage === 'he' 
              ? 'עמוד זה מיועד לפיתוח ובדיקות טכניות של האתר. כאן ניתן לבדוק פונקציונליות חדשה ולעקוב אחרי הקידמה בפיתוח.'
              : currentLanguage === 'en'
              ? 'This page is dedicated to website development and technical testing. Here you can test new functionality and track development progress.'
              : currentLanguage === 'fr'
              ? 'Cette page est dédiée au développement et aux tests techniques du site. Ici vous pouvez tester de nouvelles fonctionnalités et suivre les progrès de développement.'
              : currentLanguage === 'es'
              ? 'Esta página está dedicada al desarrollo y pruebas técnicas del sitio web. Aquí puedes probar nuevas funcionalidades y seguir el progreso de desarrollo.'
              : currentLanguage === 'ru'
              ? 'Эта страница предназначена для разработки и технического тестирования сайта. Здесь вы можете тестировать новые функции и отслеживать прогресс разработки.'
              : 'עמוד זה מיועד לפיתוח ובדיקות טכניות של האתר. כאן ניתן לבדוק פונקציונליות חדשה ולעקוב אחרי הקידמה בפיתוח.'
            }
          </p>
        </div>

        {/* Development Status */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'he' ? 'סטטוס פיתוח' :
             currentLanguage === 'en' ? 'Development Status' :
             currentLanguage === 'fr' ? 'Statut de Développement' :
             currentLanguage === 'es' ? 'Estado de Desarrollo' :
             currentLanguage === 'ru' ? 'Статус Разработки' : 'סטטוס פיתוח'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Features */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                {currentLanguage === 'he' ? '✅ פונקציות מוכנות' :
                 currentLanguage === 'en' ? '✅ Ready Features' :
                 currentLanguage === 'fr' ? '✅ Fonctionnalités Prêtes' :
                 currentLanguage === 'es' ? '✅ Características Listas' :
                 currentLanguage === 'ru' ? '✅ Готовые Функции' : '✅ פונקציות מוכנות'}
              </h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• {currentLanguage === 'he' ? 'חנות מלאה עם מוצרים אמיתיים' : currentLanguage === 'en' ? 'Complete store with real products' : currentLanguage === 'fr' ? 'Boutique complète avec des produits réels' : currentLanguage === 'es' ? 'Tienda completa con productos reales' : currentLanguage === 'ru' ? 'Полный магазин с реальными товарами' : 'חנות מלאה עם מוצרים אמיתיים'}</li>
                <li>• {currentLanguage === 'he' ? 'מערכת עגלת קניות פונקציונלית' : currentLanguage === 'en' ? 'Functional shopping cart system' : currentLanguage === 'fr' ? 'Système de panier d\'achat fonctionnel' : currentLanguage === 'es' ? 'Sistema de carrito de compras funcional' : currentLanguage === 'ru' ? 'Функциональная система корзины покупок' : 'מערכת עגלת קניות פונקציונלית'}</li>
                <li>• {currentLanguage === 'he' ? 'הורדות חינמיות של ספרים' : currentLanguage === 'en' ? 'Free book downloads' : currentLanguage === 'fr' ? 'Téléchargements gratuits de livres' : currentLanguage === 'es' ? 'Descargas gratuitas de libros' : currentLanguage === 'ru' ? 'Бесплатные загрузки книг' : 'הורדות חינמיות של ספרים'}</li>
                <li>• {currentLanguage === 'he' ? 'תמיכה מלאה ב-5 שפות' : currentLanguage === 'en' ? 'Full support for 5 languages' : currentLanguage === 'fr' ? 'Support complet pour 5 langues' : currentLanguage === 'es' ? 'Soporte completo para 5 idiomas' : currentLanguage === 'ru' ? 'Полная поддержка 5 языков' : 'תמיכה מלאה ב-5 שפות'}</li>
                <li>• {currentLanguage === 'he' ? 'עיצוב רספונסיבי למובייל' : currentLanguage === 'en' ? 'Mobile responsive design' : currentLanguage === 'fr' ? 'Design responsive mobile' : currentLanguage === 'es' ? 'Diseño responsive móvil' : currentLanguage === 'ru' ? 'Мобильный отзывчивый дизайн' : 'עיצוב רספונסיבי למובייל'}</li>
              </ul>
            </div>

            {/* In Progress */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                {currentLanguage === 'he' ? '🚧 בפיתוח' :
                 currentLanguage === 'en' ? '🚧 In Development' :
                 currentLanguage === 'fr' ? '🚧 En Développement' :
                 currentLanguage === 'es' ? '🚧 En Desarrollo' :
                 currentLanguage === 'ru' ? '🚧 В Разработке' : '🚧 בפיתוח'}
              </h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• {currentLanguage === 'he' ? 'מערכת תשלומים מלאה' : currentLanguage === 'en' ? 'Complete payment system' : currentLanguage === 'fr' ? 'Système de paiement complet' : currentLanguage === 'es' ? 'Sistema de pago completo' : currentLanguage === 'ru' ? 'Полная система платежей' : 'מערכת תשלומים מלאה'}</li>
                <li>• {currentLanguage === 'he' ? 'אופטימיזציה לביצועים' : currentLanguage === 'en' ? 'Performance optimization' : currentLanguage === 'fr' ? 'Optimisation des performances' : currentLanguage === 'es' ? 'Optimización de rendimiento' : currentLanguage === 'ru' ? 'Оптимизация производительности' : 'אופטימיזציה לביצועים'}</li>
                <li>• {currentLanguage === 'he' ? 'בדיקות איכות מקיפות' : currentLanguage === 'en' ? 'Comprehensive quality testing' : currentLanguage === 'fr' ? 'Tests de qualité complets' : currentLanguage === 'es' ? 'Pruebas de calidad integrales' : currentLanguage === 'ru' ? 'Комплексное тестирование качества' : 'בדיקות איכות מקיפות'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'he' ? 'הערות טכניות' :
             currentLanguage === 'en' ? 'Technical Notes' :
             currentLanguage === 'fr' ? 'Notes Techniques' :
             currentLanguage === 'es' ? 'Notas Técnicas' :
             currentLanguage === 'ru' ? 'Технические Заметки' : 'הערות טכניות'}
          </h2>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {currentLanguage === 'he'
                ? 'האתר נבנה על טכנולוגיות מתקדמות ומודרניות הכוללות React, TypeScript, ו-Tailwind CSS. המערכת תומכת במלאי אמת-זמן, מערכת סל קניות מתקדמת, וחוויית משתמש מותאמת לשפה העברית.'
                : currentLanguage === 'en'
                ? 'The website is built on advanced and modern technologies including React, TypeScript, and Tailwind CSS. The system supports real-time inventory, advanced shopping cart system, and user experience adapted for Hebrew language.'
                : currentLanguage === 'fr'
                ? 'Le site web est construit sur des technologies avancées et modernes incluant React, TypeScript et Tailwind CSS. Le système prend en charge l\'inventaire en temps réel, un système de panier d\'achat avancé et une expérience utilisateur adaptée à la langue hébraïque.'
                : currentLanguage === 'es'
                ? 'El sitio web está construido en tecnologías avanzadas y modernas que incluyen React, TypeScript y Tailwind CSS. El sistema admite inventario en tiempo real, sistema avanzado de carrito de compras y experiencia de usuario adaptada para el idioma hebreo.'
                : currentLanguage === 'ru'
                ? 'Веб-сайт построен на передовых и современных технологиях, включая React, TypeScript и Tailwind CSS. Система поддерживает инвентарь в реальном времени, продвинутую систему корзины покупок и пользовательский опыт, адаптированный для иврита.'
                : 'האתר נבנה על טכנולוגיות מתקדמות ומודרניות הכוללות React, TypeScript, ו-Tailwind CSS. המערכת תומכת במלאי אמת-זמן, מערכת סל קניות מתקדמת, וחוויית משתמש מותאמת לשפה העברית.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}