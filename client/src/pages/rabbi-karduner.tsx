import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Flame, Book, Heart } from 'lucide-react';

export default function RabbiKarduner() {
  const { currentLanguage, setLanguage } = useLanguage();
  const isRTL = currentLanguage === 'he';

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <section className="py-24 px-4 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
        <div className="container mx-auto max-w-6xl text-center">
          <Flame className="w-20 h-20 mx-auto mb-8 text-white animate-pulse" />
          <h1 className="text-6xl font-black text-white mb-6">
            {isRTL ? 'רבי ישראל קרדונר' : 'Rabbi Israel Karduner'}
          </h1>
          <p className="text-3xl text-white/95">
            {isRTL ? 'חסיד האש והמסירות' : 'The Chassid of Fire and Devotion'}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-12 bg-gradient-to-br from-orange-50 to-red-50 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <Book className="w-12 h-12 text-red-600" />
              <h2 className="text-4xl font-black text-gray-900">
                {isRTL ? 'רבי ישראל קרדונר זצ"ל' : 'Rabbi Israel Karduner z"l'}
              </h2>
            </div>
            <p className="text-2xl leading-relaxed text-gray-700 mb-8">
              {isRTL 
                ? 'רבי ישראל קרדונר (1868-1934) היה מגדולי חסידי ברסלב. הוא נודע בהתלהבותו הגדולה, במסירות נפשו העצומה, ובאהבתו הבלתי מוגבלת לרבינו. רבי ישראל קרדונר שימש כאב רוחני לרבים מחסידי ברסלב והפיץ את תורת רבינו בכל מקום.'
                : 'Rabbi Israel Karduner (1868-1934) was among the greatest Breslov Chassidim. He was known for his tremendous enthusiasm, his immense self-sacrifice, and his unlimited love for Rabbenu. Rabbi Israel Karduner served as a spiritual father to many Breslov Chassidim and spread Rabbenu\'s Torah everywhere.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { he: 'אהבה לרבינו', en: 'Love for Rabbenu' },
                { he: 'התלהבות אדירה', en: 'Tremendous Enthusiasm' },
                { he: 'מסירות נפש', en: 'Self-Sacrifice' }
              ].map((trait, idx) => (
                <Card key={idx} className="p-8 bg-white border-4 border-orange-300 text-center hover:shadow-2xl transition-all">
                  <Flame className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-900">{isRTL ? trait.he : trait.en}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-red-900 to-orange-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <Heart className="w-24 h-24 mx-auto mb-8 text-yellow-300 fill-yellow-300" />
          <p className="text-4xl font-black leading-relaxed">
            {isRTL 
              ? 'רבי ישראל קרדונר הראה לנו איך לאהוב את רבינו באש ובלהט, וללמוד תורתו בשמחה עצומה'
              : 'Rabbi Israel Karduner showed us how to love Rabbenu with fire and passion, and to learn his Torah with immense joy'}
          </p>
        </div>
      </section>
    </div>
  );
}
