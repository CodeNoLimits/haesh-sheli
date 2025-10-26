import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';
import { Link } from 'wouter';

// Articles data inspired by breslov.co.il
const articles = [
  {
    id: 'simcha-remedy',
    title: 'התרופה לכל המחלות – היא השמחה',
    titleEn: 'The Remedy for All Diseases – It is Joy',
    author: 'רבי נחמן מברסלב',
    authorEn: 'Rabbi Nachman of Breslov',
    date: '21 אוגוסט 2025',
    dateEn: 'August 21, 2025',
    category: 'ברסלב',
    categoryEn: 'Breslov',
    excerpt: 'השמחה היא התרופה לכל המחלות. כאשר אדם שמח, הוא יכול להתגבר על כל קושי ולהתמודד עם כל אתגר בחיים.',
    excerptEn: 'Joy is the remedy for all diseases. When a person is joyful, they can overcome any difficulty and face any challenge in life.',
    image: '📖',
    gradient: 'from-blue-50 to-blue-100'
  },
  {
    id: 'bereshit-new-beginning',
    title: 'פרשת בראשית – התחלה חדשה',
    titleEn: 'Parashat Bereshit – A New Beginning',
    author: 'רבי נחמן מברסלב',
    authorEn: 'Rabbi Nachman of Breslov',
    date: '16 אוקטובר 2025',
    dateEn: 'October 16, 2025',
    category: 'פרשת השבוע',
    categoryEn: 'Weekly Torah Portion',
    excerpt: 'למה היה צורך בבריאה? השבוע אנו נקרא את פרשת בראשית, שהיא ההתחלה של הכל. ילד קטן שואל את השאלה הזו...',
    excerptEn: 'Why was creation necessary? This week we read Parashat Bereshit, which is the beginning of everything. A small child asks this question...',
    image: '🌱',
    gradient: 'from-green-50 to-green-100'
  },
  {
    id: 'paradise-this-world',
    title: 'לחיות בגן עדן כבר בעולם הזה!',
    titleEn: 'To Live in Paradise Already in This World!',
    author: 'רבי נחמן מברסלב',
    authorEn: 'Rabbi Nachman of Breslov',
    date: '16 אוקטובר 2025',
    dateEn: 'October 16, 2025',
    category: 'ברסלב',
    categoryEn: 'Breslov',
    excerpt: 'רבנו ז״ל אומר שאדם צריך להשתדל להתרגל לחיות בעולם הבא, בגן־עדן. ההרגל נעשה כטבע...',
    excerptEn: 'Our Rabbi z"l says that a person should strive to get used to living in the next world, in paradise. The habit becomes nature...',
    image: '💎',
    gradient: 'from-purple-50 to-purple-100'
  },
  {
    id: 'noach-charity',
    title: 'פרשת נח – המעלה של צדקה וחסד',
    titleEn: 'Parashat Noach – The Virtue of Charity and Kindness',
    author: 'רבי נחמן מברסלב',
    authorEn: 'Rabbi Nachman of Breslov',
    date: '23 אוקטובר 2025',
    dateEn: 'October 23, 2025',
    category: 'פרשת השבוע',
    categoryEn: 'Weekly Torah Portion',
    excerpt: 'פרשת נח ידועה בעיקר בשל סיפור המבול. נח בנה תיבה שבה כינס זוג מכל בעל חיים...',
    excerptEn: 'Parashat Noach is known mainly for the story of the flood. Noah built an ark in which he gathered a pair of every living creature...',
    image: '🚢',
    gradient: 'from-indigo-50 to-indigo-100'
  },
  {
    id: 'yom-kippur-new-life',
    title: 'יום הכיפורים – הזדמנות לחיים חדשים',
    titleEn: 'Yom Kippur – An Opportunity for New Life',
    author: 'רבי נחמן מברסלב',
    authorEn: 'Rabbi Nachman of Breslov',
    date: '30 ספטמבר 2025',
    dateEn: 'September 30, 2025',
    category: 'יהדות',
    categoryEn: 'Judaism',
    excerpt: 'יום הכיפורים הוא היום הקדוש ביותר בשנה. זהו יום של תשובה, סליחה והתחלה חדשה...',
    excerptEn: 'Yom Kippur is the holiest day of the year. It is a day of repentance, forgiveness and new beginning...',
    image: '🕊️',
    gradient: 'from-white to-gray-50'
  },
  {
    id: 'despair-worse-than-sin',
    title: 'הדבר הגרוע ביותר זה הייאוש – עד כדי כך שהוא גרוע מהחטא בעצמו',
    titleEn: 'The Worst Thing is Despair – So Much So That It is Worse Than the Sin Itself',
    author: 'רבי נחמן מברסלב',
    authorEn: 'Rabbi Nachman of Breslov',
    date: '14 אוגוסט 2025',
    dateEn: 'August 14, 2025',
    category: 'רוחניות',
    categoryEn: 'Spirituality',
    excerpt: 'הייאוש הוא האויב הגדול ביותר של האדם. כאשר אדם מתייאש, הוא מאבד את כל תקווה...',
    excerptEn: 'Despair is man\'s greatest enemy. When a person despairs, they lose all hope...',
    image: '💪',
    gradient: 'from-red-50 to-red-100'
  }
];

const categories = [
  { id: 'all', name: 'הכל', nameEn: 'All' },
  { id: 'breslov', name: 'ברסלב', nameEn: 'Breslov' },
  { id: 'torah', name: 'פרשת השבוע', nameEn: 'Weekly Torah Portion' },
  { id: 'judaism', name: 'יהדות', nameEn: 'Judaism' },
  { id: 'spirituality', name: 'רוחניות', nameEn: 'Spirituality' }
];

export default function Articles() {
  const { currentLanguage } = useLanguage();
  
  return (
    <>
      <SEO 
        title="מאמרים - האש שלי"
        description="מאמרים מרבי נחמן מברסלב על יהדות, רוחניות ופרשת השבוע. החכמה שתשנה לכם את החיים."
        keywords="מאמרים, רבי נחמן, ברסלב, יהדות, רוחניות, פרשת השבוע"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
        <Header currentLanguage={currentLanguage} onLanguageChange={() => {}} />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {currentLanguage === 'he' ? 'מאמרים' : 'Articles'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {currentLanguage === 'he' ? 
                'החכמה של רבי נחמן מברסלב תשנה לכם את החיים! קבלו אותה ישירות לתיבת המייל!' :
                'The wisdom of Rabbi Nachman of Breslov will change your life! Get it directly to your email!'
              }
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="px-6 py-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold rounded-lg transition-colors duration-200"
                >
                  {currentLanguage === 'he' ? category.name : category.nameEn}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className={`aspect-[16/9] bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                    <div className="text-center p-6">
                      <div className="text-4xl mb-4">{article.image}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {currentLanguage === 'he' ? article.title : article.titleEn}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {currentLanguage === 'he' ? article.category : article.categoryEn}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        {currentLanguage === 'he' ? article.author : article.authorEn}
                      </span>
                      <span className="text-sm text-gray-500">
                        {currentLanguage === 'he' ? article.date : article.dateEn}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {currentLanguage === 'he' ? article.excerpt : article.excerptEn}
                    </p>
                    <Link 
                      href={`/articles/${article.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      {currentLanguage === 'he' ? 'קרא עוד' : 'Read More'} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'he' ? 'החכמה של רבי נחמן מברסלב תשנה לכם את החיים!' : 'The wisdom of Rabbi Nachman of Breslov will change your life!'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {currentLanguage === 'he' ? 'קבלו אותה ישירות לתיבת המייל!' : 'Get it directly to your email!'}
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder={currentLanguage === 'he' ? 'כתובת אימייל' : 'Email address'}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                    {currentLanguage === 'he' ? 'הירשם' : 'Subscribe'}
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  {currentLanguage === 'he' ? 'נשלח לכם מאמרים חדשים כל שבוע' : 'We send you new articles every week'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
