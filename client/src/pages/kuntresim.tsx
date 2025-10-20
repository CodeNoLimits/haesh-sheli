import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookMarked, Download, Eye, Star } from 'lucide-react';
import { Link } from 'wouter';

const translations = {
  he: {
    title: 'קונטרסים',
    subtitle: 'אוסף קונטרסים וחוברות קטנות של תורת רבינו',
    description: 'קונטרסים הם חוברות קצרות שמרכזות נושא אחד מתורת רבי נחמן. מושלם להתחלה או להעמקה בנושא ספציפי.',
    allTopics: 'כל הנושאים',
    downloadNow: 'הורד עכשיו',
    readOnline: 'קרא באתר',
    pages: 'עמודים',
    free: 'חינם',
    featured: 'קונטרסים מומלצים',
    categories: {
      faith: 'אמונה',
      prayer: 'תפילה',
      joy: 'שמחה',
      holidays: 'חגים',
      personal: 'עבודה אישית',
      stories: 'סיפורים'
    }
  },
  en: {
    title: 'Booklets (Kuntresim)',
    subtitle: 'Collection of short booklets on Rabbenu\'s teachings',
    description: 'Booklets are short pamphlets focusing on one topic from Rabbi Nachman\'s teachings. Perfect for beginners or deepening a specific subject.',
    allTopics: 'All Topics',
    downloadNow: 'Download Now',
    readOnline: 'Read Online',
    pages: 'pages',
    free: 'Free',
    featured: 'Featured Booklets',
    categories: {
      faith: 'Faith',
      prayer: 'Prayer',
      joy: 'Joy',
      holidays: 'Holidays',
      personal: 'Personal Work',
      stories: 'Stories'
    }
  },
  fr: {
    title: 'Livrets (Kuntresim)',
    subtitle: 'Collection de courts livrets sur les enseignements de Rabbenu',
    description: 'Les livrets sont des brochures courtes concentrées sur un sujet des enseignements de Rabbi Nachman. Parfait pour débuter ou approfondir un sujet spécifique.',
    allTopics: 'Tous les Sujets',
    downloadNow: 'Télécharger',
    readOnline: 'Lire en Ligne',
    pages: 'pages',
    free: 'Gratuit',
    featured: 'Livrets Recommandés',
    categories: {
      faith: 'Foi',
      prayer: 'Prière',
      joy: 'Joie',
      holidays: 'Fêtes',
      personal: 'Travail Personnel',
      stories: 'Histoires'
    }
  },
  es: {
    title: 'Folletos (Kuntresim)',
    subtitle: 'Colección de folletos cortos sobre las enseñanzas de Rabbenu',
    description: 'Los folletos son panfletos cortos enfocados en un tema de las enseñanzas de Rabino Nachman. Perfecto para principiantes o profundizar en un tema específico.',
    allTopics: 'Todos los Temas',
    downloadNow: 'Descargar',
    readOnline: 'Leer en Línea',
    pages: 'páginas',
    free: 'Gratis',
    featured: 'Folletos Destacados',
    categories: {
      faith: 'Fe',
      prayer: 'Oración',
      joy: 'Alegría',
      holidays: 'Festividades',
      personal: 'Trabajo Personal',
      stories: 'Historias'
    }
  },
  ru: {
    title: 'Буклеты (Кунтресим)',
    subtitle: 'Коллекция коротких буклетов об учениях Раббену',
    description: 'Буклеты - это короткие брошюры, сосредоточенные на одной теме из учений Рабби Нахмана. Идеально для начинающих или углубления в конкретную тему.',
    allTopics: 'Все Темы',
    downloadNow: 'Скачать',
    readOnline: 'Читать Онлайн',
    pages: 'страниц',
    free: 'Бесплатно',
    featured: 'Рекомендуемые Буклеты',
    categories: {
      faith: 'Вера',
      prayer: 'Молитва',
      joy: 'Радость',
      holidays: 'Праздники',
      personal: 'Личная Работа',
      stories: 'Истории'
    }
  }
};

const booklets = [
  { id: 1, title: 'תיקון הכללי', titleEn: 'Tikkun HaKlali', category: 'prayer', pages: 16, featured: true },
  { id: 2, title: 'נענועי מוחין', titleEn: 'Nanuei Mochin', category: 'faith', pages: 24, featured: true },
  { id: 3, title: 'אזמרה לאלוקי בעודי', titleEn: 'Azamra', category: 'joy', pages: 12, featured: true },
  { id: 4, title: 'ליקוטי עצות קצר', titleEn: 'Likutey Etzot Short', category: 'personal', pages: 32, featured: false },
  { id: 5, title: 'סיפורי מעשיות לילדים', titleEn: 'Stories for Children', category: 'stories', pages: 48, featured: false },
  { id: 6, title: 'ראש השנה בברסלב', titleEn: 'Rosh Hashanah in Breslov', category: 'holidays', pages: 20, featured: true },
  { id: 7, title: 'התבודדות', titleEn: 'Hitbodedut', category: 'prayer', pages: 16, featured: false },
  { id: 8, title: 'שמחה', titleEn: 'Joy', category: 'joy', pages: 12, featured: false },
  { id: 9, title: 'אמונה', titleEn: 'Faith', category: 'faith', pages: 18, featured: false },
  { id: 10, title: 'פסח', titleEn: 'Passover', category: 'holidays', pages: 22, featured: false },
  { id: 11, title: 'שבועות', titleEn: 'Shavuot', category: 'holidays', pages: 16, featured: false },
  { id: 12, title: 'הצדיק האמת', titleEn: 'The True Tzaddik', category: 'faith', pages: 28, featured: false },
];

export default function Kuntresim() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

  const featuredBooklets = booklets.filter(b => b.featured);
  const allBooklets = booklets;

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <BookMarked className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl font-black text-white mb-6 drop-shadow-2xl">{t.title}</h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">{t.subtitle}</p>
          <Card className="p-8 bg-white/95 backdrop-blur-sm max-w-4xl mx-auto shadow-2xl">
            <p className="text-xl text-gray-700 leading-relaxed">{t.description}</p>
          </Card>
        </div>
      </section>

      {/* Featured Booklets */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Star className="w-12 h-12 text-yellow-500 fill-yellow-500" />
            <h2 className="text-5xl font-black text-gray-900">{t.featured}</h2>
            <Star className="w-12 h-12 text-yellow-500 fill-yellow-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooklets.map((booklet) => (
              <Card key={booklet.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-yellow-200">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 relative">
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.free}
                  </div>
                  <BookMarked className="w-20 h-20 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    {isRTL ? booklet.title : booklet.titleEn}
                  </h3>
                  <p className="text-center text-gray-600">{booklet.pages} {t.pages}</p>
                </div>
                <div className="p-6 bg-white space-y-3">
                  <Link href={`/downloads?booklet=${booklet.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-lg">
                      <Download className="w-5 h-5 mr-2" />
                      {t.downloadNow}
                    </Button>
                  </Link>
                  <Button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold">
                    <Eye className="w-5 h-5 mr-2" />
                    {t.readOnline}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Booklets */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t.allTopics}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allBooklets.map((booklet) => (
              <Card key={booklet.id} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-400 bg-gradient-to-br from-white to-gray-50">
                <div className="text-center mb-4">
                  <BookMarked className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {isRTL ? booklet.title : booklet.titleEn}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-semibold">
                    {booklet.pages} {t.pages}
                  </span>
                </div>
                <div className="space-y-2">
                  <Link href={`/downloads?booklet=${booklet.id}`}>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      {t.downloadNow}
                    </Button>
                  </Link>
                  <Button className="w-full" variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {t.readOnline}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <BookMarked className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-5xl font-black mb-6">📚 {isRTL ? 'התחל ללמוד היום!' : 'Start Learning Today!'}</h2>
          <p className="text-2xl mb-8 text-white/90">{isRTL ? 'כל הקונטרסים זמינים חינם להורדה' : 'All booklets available for free download'}</p>
          <Link href="/downloads">
            <Button className="text-2xl px-12 py-8 bg-white text-indigo-700 hover:bg-gray-100 font-black rounded-2xl shadow-2xl transform hover:scale-110 transition-all">
              {t.downloadNow} 🚀
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

