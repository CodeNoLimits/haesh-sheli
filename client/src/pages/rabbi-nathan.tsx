import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Pen, Book, Heart, Star } from 'lucide-react';

export default function RabbiNathan() {
  const { currentLanguage, setLanguage } = useLanguage();
  const isRTL = currentLanguage === 'he';

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto max-w-6xl text-center">
          <Pen className="w-20 h-20 mx-auto mb-8 text-white" />
          <h1 className="text-6xl font-black text-white mb-6">
            {isRTL ? 'רבי נתן מברסלב' : 'Rabbi Nathan of Breslov'}
          </h1>
          <p className="text-3xl text-white/95">
            {isRTL ? 'התלמיד הנאמן והסופר של רבינו' : 'The Faithful Student and Scribe of Rabbenu'}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-12 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <Book className="w-12 h-12 text-indigo-600" />
              <h2 className="text-4xl font-black text-gray-900">
                {isRTL ? 'רבי נתן מברסלב זצ"ל' : 'Rabbi Nathan of Breslov z"l'}
              </h2>
            </div>
            <p className="text-2xl leading-relaxed text-gray-700 mb-8">
              {isRTL 
                ? 'רבי נתן מברסלב (1780-1844) היה התלמיד הגדול ביותר של רבי נחמן. הוא כתב את רוב ספרי ברסלב כולל ליקוטי מוהר"ן, ליקוטי הלכות, וליקוטי תפילות. ללא רבי נתן, תורת רבינו לא הייתה מגיעה אלינו.'
                : 'Rabbi Nathan of Breslov (1780-1844) was the greatest student of Rabbi Nachman. He wrote most Breslov books including Likutei Moharan, Likutei Halakhot, and Likutei Tefilot. Without Rabbi Nathan, Rabbenu\'s Torah would not have reached us.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { he: 'ליקוטי מוהר"ן', en: 'Likutei Moharan' },
                { he: 'ליקוטי הלכות', en: 'Likutei Halakhot' },
                { he: 'ליקוטי תפילות', en: 'Likutei Tefilot' },
                { he: 'שבחי הרן', en: 'Shivchei HaRan' }
              ].map((book, idx) => (
                <Card key={idx} className="p-6 bg-white border-2 border-indigo-300">
                  <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 mb-3" />
                  <p className="text-xl font-bold text-gray-900">{isRTL ? book.he : book.en}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <Heart className="w-24 h-24 mx-auto mb-8 text-pink-300 fill-pink-300" />
          <blockquote className="text-4xl font-black mb-8 italic">
            {isRTL ? '"העיקר הוא ההפצה"' : '"The main thing is the outreach"'}
          </blockquote>
          <p className="text-2xl text-purple-200">
            {isRTL ? '- רבי נתן מברסלב' : '- Rabbi Nathan of Breslov'}
          </p>
        </div>
      </section>
    </div>
  );
}
