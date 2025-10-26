import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';

export default function Home() {
  const { currentLanguage, setLanguage } = useLanguage();
  
  return (
    <>
      <SEO 
        title="האש שלי - חנות ספרי ברסלב"
        description="החנות המובילה למכירת ספרי רבי נחמן מברסלב במחיר הקרן. ספרים מקוריים, משלוחים חינם, תמיכה מלאה."
        keywords="ברסלב, רבי נחמן, ספרים, ליקוטי מוהרן, חנות, קרן"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
        
        {/* TOP PROMOTION BAR */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-lg">🚚</span>
              {currentLanguage === 'he' ? 'משלוחים חינם החל מ-399 ש״ח' :
               currentLanguage === 'en' ? 'Free shipping from 399 ₪' :
               'משלוחים חינם החל מ-399 ש״ח'}
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-2">
              <span className="text-lg">📚</span>
              {currentLanguage === 'he' ? '43 ספרים נבחרים' :
               currentLanguage === 'en' ? '43 selected books' :
               '43 ספרים נבחרים'}
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-2">
              <span className="text-lg">💎</span>
              {currentLanguage === 'he' ? 'מחיר הקרן בלבד' :
               currentLanguage === 'en' ? 'Foundation price only' :
               'מחיר הקרן בלבד'}
            </span>
          </div>
        </div>

        <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-books-composition.png')",
              filter: 'brightness(0.7)'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {currentLanguage === 'he' ? 'האש שלי' : 'Haesh Sheli'}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
                {currentLanguage === 'he' ? 
                  'החנות המובילה למכירת ספרי רבי נחמן מברסלב במחיר הקרן' :
                  'The leading store for Rabbi Nachman of Breslov books at foundation prices'
                }
              </h2>
              <p className="text-lg text-blue-50 mb-10 leading-relaxed">
                {currentLanguage === 'he' ? 
                  'אנחנו מדפיסים ומפיצים את ספרי רבי נחמן מברסלב בכל העולם במספר רב של שפות. החל מעברית, אנגלית, צרפתית ועוד.' :
                  'We print and distribute Rabbi Nachman of Breslov books worldwide in multiple languages. From Hebrew, English, French and more.'
                }
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/store" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">🛒</span>
                  {currentLanguage === 'he' ? 'גלה את החנות' : 'Discover the Store'}
                </a>
                <a 
                  href="/about" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-200 backdrop-blur-sm border border-white/30"
                >
                  <span className="mr-2">📖</span>
                  {currentLanguage === 'he' ? 'למד עוד' : 'Learn More'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'he' ? 'המוצרים המובילים' : 'Featured Products'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLanguage === 'he' ? 
                  'הספרים הנמכרים ביותר של רבי נחמן מברסלב' :
                  'The best-selling books by Rabbi Nachman of Breslov'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Product 1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ליקוטי מוהרן</h3>
                    <p className="text-gray-600 text-sm">Likutei Moharan</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">95₪</span>
                    <span className="text-sm text-gray-500 line-through">120₪</span>
                  </div>
                  <a 
                    href="/product/likutei-moharan" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  >
                    {currentLanguage === 'he' ? 'קנה עכשיו' : 'Buy Now'}
                  </a>
                </div>
              </div>

              {/* Featured Product 2 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-[3/4] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">📖</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">סיפורי מעשיות</h3>
                    <p className="text-gray-600 text-sm">Sipurei Maasiot</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">75₪</span>
                    <span className="text-sm text-gray-500 line-through">95₪</span>
                  </div>
                  <a 
                    href="/product/sipurei-maasiot" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  >
                    {currentLanguage === 'he' ? 'קנה עכשיו' : 'Buy Now'}
                  </a>
                </div>
              </div>

              {/* Featured Product 3 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">🎵</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">שיעורים</h3>
                    <p className="text-gray-600 text-sm">Audio Shiurim</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">חינם</span>
                    <span className="text-sm text-gray-500">Free</span>
                  </div>
                  <a 
                    href="/shiurim" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  >
                    {currentLanguage === 'he' ? 'האזן עכשיו' : 'Listen Now'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'he' ? 'למה לבחור בנו?' : 'Why Choose Us?'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'he' ? 'משלוחים חינם' : 'Free Shipping'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'he' ? 'משלוחים חינם החל מ-399 ש״ח' : 'Free shipping from 399 ₪'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'he' ? 'מחיר הקרן' : 'Foundation Price'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'he' ? 'מחירים הוגנים ללא רווח' : 'Fair prices without profit'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'he' ? 'תמיכה מלאה' : 'Full Support'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'he' ? 'תמיכה 24/7 בכל השפות' : '24/7 support in all languages'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'he' ? 'תשלום מאובטח' : 'Secure Payment'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'he' ? 'תשלום מאובטח עם Stripe' : 'Secure payment with Stripe'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentLanguage === 'he' ? 'מוכנים להתחיל?' : 'Ready to Start?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {currentLanguage === 'he' ? 
                'הצטרפו לאלפי לקוחות מרוצים שקונים את ספרי רבי נחמן מברסלב' :
                'Join thousands of satisfied customers buying Rabbi Nachman of Breslov books'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/store" 
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">🛒</span>
                {currentLanguage === 'he' ? 'קנה עכשיו' : 'Buy Now'}
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-200 backdrop-blur-sm border border-white/30"
              >
                <span className="mr-2">📞</span>
                {currentLanguage === 'he' ? 'צור קשר' : 'Contact Us'}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}