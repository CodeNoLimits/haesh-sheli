import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Scroll, Calendar, BookOpen, Heart, Star, Share2 } from 'lucide-react';

const translations = {
  he: {
    title: 'פרשת השבוע',
    subtitle: 'תורת רבי נחמן על פרשת השבוע',
    currentParasha: 'פרשת השבוע הנוכחית',
    insights: 'תובנות מרבינו',
    teachings: 'לימודים על הפרשה',
    share: 'שתף',
    download: 'הורד PDF',
    readMore: 'קרא עוד',
    archive: 'ארכיון פרשיות',
    quotes: 'ציטוטים מרבינו על הפרשה',
    practical: 'לקחים מעשיים לשבוע',
    connection: 'הקשר לעבודת ה׳',
    explore: 'חקור עוד',
    weekly: 'שיעור השבועי'
  },
  en: {
    title: 'Weekly Torah Portion (Parasha)',
    subtitle: 'Rabbi Nachman\'s teachings on the weekly portion',
    currentParasha: 'Current Weekly Portion',
    insights: 'Insights from Rabbenu',
    teachings: 'Teachings on the Portion',
    share: 'Share',
    download: 'Download PDF',
    readMore: 'Read More',
    archive: 'Parasha Archive',
    quotes: 'Rabbenu\'s Quotes on the Portion',
    practical: 'Practical Lessons for the Week',
    connection: 'Connection to Divine Service',
    explore: 'Explore More',
    weekly: 'Weekly Lesson'
  },
  fr: {
    title: 'Paracha de la Semaine',
    subtitle: 'Enseignements de Rabbi Nachman sur la portion hebdomadaire',
    currentParasha: 'Paracha de la Semaine Actuelle',
    insights: 'Aperçus de Rabbenu',
    teachings: 'Enseignements sur la Paracha',
    share: 'Partager',
    download: 'Télécharger PDF',
    readMore: 'Lire Plus',
    archive: 'Archive des Parachas',
    quotes: 'Citations de Rabbenu sur la Paracha',
    practical: 'Leçons Pratiques pour la Semaine',
    connection: 'Connexion au Service Divin',
    explore: 'Explorer Plus',
    weekly: 'Leçon Hebdomadaire'
  },
  es: {
    title: 'Porción Semanal de la Torá (Parashá)',
    subtitle: 'Enseñanzas de Rabino Nachman sobre la porción semanal',
    currentParasha: 'Porción Semanal Actual',
    insights: 'Perspectivas de Rabbenu',
    teachings: 'Enseñanzas sobre la Porción',
    share: 'Compartir',
    download: 'Descargar PDF',
    readMore: 'Leer Más',
    archive: 'Archivo de Parashiot',
    quotes: 'Citas de Rabbenu sobre la Parashá',
    practical: 'Lecciones Prácticas para la Semana',
    connection: 'Conexión con el Servicio Divino',
    explore: 'Explorar Más',
    weekly: 'Lección Semanal'
  },
  ru: {
    title: 'Недельная Глава Торы (Параша)',
    subtitle: 'Учения Рабби Нахмана о недельной главе',
    currentParasha: 'Текущая Недельная Глава',
    insights: 'Прозрения от Раббену',
    teachings: 'Учения о Главе',
    share: 'Поделиться',
    download: 'Скачать PDF',
    readMore: 'Читать Далее',
    archive: 'Архив Глав',
    quotes: 'Цитаты Раббену о Главе',
    practical: 'Практические Уроки на Неделю',
    connection: 'Связь с Служением Б-гу',
    explore: 'Изучить Больше',
    weekly: 'Недельный Урок'
  }
};

// Sample parasha data - in production this would come from an API
const currentParasha = {
  name: 'בראשית',
  nameEn: 'Bereishit',
  date: '25 תשרי תשפ"ה',
  dateEn: 'October 28, 2024',
  book: 'בראשית',
  chapters: 'א׳-ו׳',
  summary: 'בראשית מספרת על בריאת העולם, אדם וחוה בגן עדן, החטא הראשון, קין והבל, ודור המבול.',
  summaryEn: 'Bereishit tells of the creation of the world, Adam and Eve in the Garden of Eden, the first sin, Cain and Abel, and the generation of the flood.',
  insights: [
    'בליקוטי מוהר"ן תורה א׳ מבואר שבריאת העולם היא מתוך רצון ה\' להתגלות בעולם',
    'החטא הראשון מלמד על כוח התשובה - גם אחרי הנפילה הכי גדולה אפשר לחזור',
    'סיפור קין והבל מדגיש את חשיבות השמחה בעבודת ה\' ואי-הקנאה'
  ],
  insightsEn: [
    'In Likutei Moharan Torah 1, it\'s explained that the creation of the world is from G-d\'s desire to be revealed in the world',
    'The first sin teaches about the power of repentance - even after the greatest fall, return is possible',
    'The story of Cain and Abel emphasizes the importance of joy in divine service and non-jealousy'
  ],
  practical: [
    'התבודדות יומית - דבר עם ה\' בשפה שלך כמו שדיברו אדם וחוה',
    'מצא את הטוב בכל דבר - גם בקשיים, בדיוק כמו שה\' ראה שכל הבריאה "טוב"',
    'תמיד זכור שאפשר להתחיל מחדש - כל יום הוא בריאה חדשה'
  ],
  practicalEn: [
    'Daily hitbodedut - talk to G-d in your own language like Adam and Eve did',
    'Find the good in everything - even in difficulties, just as G-d saw all creation as "good"',
    'Always remember you can start anew - every day is a new creation'
  ]
};

export default function Parasha() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

  const parashaName = isRTL ? currentParasha.name : currentParasha.nameEn;
  const parashaDate = isRTL ? currentParasha.date : currentParasha.dateEn;
  const parashaSummary = isRTL ? currentParasha.summary : currentParasha.summaryEn;
  const parashaInsights = isRTL ? currentParasha.insights : currentParasha.insightsEn;
  const parashaPractical = isRTL ? currentParasha.practical : currentParasha.practicalEn;

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-pulse">
            <Scroll className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl font-black text-white mb-6 drop-shadow-2xl">{t.title}</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Current Parasha Hero Card */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <Card className="overflow-hidden shadow-2xl border-4 border-amber-300">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-8 h-8" />
                    <h2 className="text-4xl font-black">{t.currentParasha}</h2>
                  </div>
                  <p className="text-xl opacity-90">{parashaDate}</p>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold">
                    <Share2 className="w-5 h-5 mr-2" />
                    {t.share}
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold">
                    <BookOpen className="w-5 h-5 mr-2" />
                    {t.download}
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-12 bg-gradient-to-br from-white to-amber-50">
              <div className="flex items-center gap-4 mb-8">
                <Star className="w-12 h-12 text-amber-500 fill-amber-500" />
                <h3 className="text-5xl font-black text-gray-900">{parashaName}</h3>
              </div>
              <div className="mb-8">
                <p className="text-gray-600 mb-2 font-semibold">{currentParasha.book} • {currentParasha.chapters}</p>
                <p className="text-xl text-gray-700 leading-relaxed">{parashaSummary}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <BookOpen className="w-12 h-12 text-blue-600" />
            <h2 className="text-5xl font-black text-gray-900">{t.insights}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {parashaInsights.map((insight, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{insight}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Lessons */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Heart className="w-12 h-12 text-green-600 fill-green-600" />
            <h2 className="text-5xl font-black text-gray-900">{t.practical}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {parashaPractical.map((lesson, idx) => (
              <Card key={idx} className="p-8 bg-white border-4 border-green-200 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="inline-block w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-3xl font-black mb-4">
                    {idx + 1}
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-center">{lesson}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to Divine Service */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Scroll className="w-20 h-20 mx-auto mb-8 text-yellow-300" />
          <h2 className="text-5xl font-black mb-8">{t.connection}</h2>
          <Card className="p-12 bg-white/10 backdrop-blur-sm border-2 border-white/30">
            <p className="text-2xl leading-relaxed">
              {isRTL 
                ? 'כל פרשה היא הזדמנות חדשה להתחבר לה\' דרך התורה. רבינו לימד שקריאת התורה בפרשת השבוע מעוררת אורות מיוחדים בנשמה ומסייעת בעבודת ה\' לאורך השבוע.' 
                : 'Every parasha is a new opportunity to connect with G-d through the Torah. Rabbenu taught that reading the weekly Torah portion awakens special lights in the soul and assists in divine service throughout the week.'
              }
            </p>
          </Card>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-black mb-8 text-gray-900">{t.archive}</h2>
          <p className="text-xl text-gray-600 mb-12">
            {isRTL 
              ? 'חקור את ארכיון הפרשיות עם תובנות מרבינו'
              : 'Explore the parasha archive with insights from Rabbenu'
            }
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'בראשית', 'נח', 'לך לך', 'וירא', 'חיי שרה', 'תולדות',
              'ויצא', 'וישלח', 'וישב', 'מקץ', 'ויגש', 'ויחי'
            ].map((parasha, idx) => (
              <Card key={idx} className="p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer bg-white border-2 border-gray-300 hover:border-amber-500">
                <Scroll className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="font-bold text-gray-900">{parasha}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button className="text-xl px-10 py-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black rounded-xl shadow-2xl transform hover:scale-110 transition-all">
              {t.explore} 📖
            </Button>
          </div>
        </div>
      </section>

      {/* Weekly Lesson CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <BookOpen className="w-24 h-24 mx-auto mb-8 animate-bounce" />
          <h2 className="text-6xl font-black mb-6">{t.weekly}</h2>
          <p className="text-2xl mb-12 text-white/90">
            {isRTL 
              ? 'קבל את שיעור הפרשה השבועי ישירות למייל'
              : 'Receive the weekly parasha lesson directly to your email'
            }
          </p>
          <Button className="text-2xl px-12 py-8 bg-white text-blue-700 hover:bg-gray-100 font-black rounded-2xl shadow-2xl transform hover:scale-110 transition-all">
            {isRTL ? 'הירשם עכשיו' : 'Subscribe Now'} 📧
          </Button>
        </div>
      </section>
    </div>
  );
}

