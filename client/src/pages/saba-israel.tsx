import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Heart, Star, Book, Sparkles } from 'lucide-react';

const translations = {
  he: {
    title: 'סבא ישראל - רבי ישראל דב אודסר זצ"ל',
    subtitle: 'השליח הנאמן של רבינו בדורנו',
    intro: 'רבי ישראל דב אודסר (סבא ישראל) היה תלמיד מובהק של רבי נחמן מברסלב והפיץ את תורתו ברחבי העולם',
    story: 'הסיפור המדהים',
    letter: 'המכתב משמים - נ נח נחמ נחמן מאומן',
    teachings: 'תורות סבא ישראל',
    legacy: 'המורשת',
    quotes: [
      'תמיד להיות בשמחה! זה הכל!',
      'נ נח נחמ נחמן מאומן - זה כל התורה כולה',
      'רבינו חי וקיים! רבינו מביא את הגאולה!'
    ]
  },
  en: {
    title: 'Saba Israel - Rabbi Israel Dov Odesser z"l',
    subtitle: 'The faithful emissary of Rabbenu in our generation',
    intro: 'Rabbi Israel Dov Odesser (Saba Israel) was a distinguished student of Rabbi Nachman of Breslov and spread his teachings worldwide',
    story: 'The Amazing Story',
    letter: 'The Letter from Heaven - Na Nach Nachma Nachman MeUman',
    teachings: 'Saba Israel\'s Teachings',
    legacy: 'The Legacy',
    quotes: [
      'Always be joyful! That\'s everything!',
      'Na Nach Nachma Nachman MeUman - this is the entire Torah',
      'Rabbenu lives! Rabbenu brings the redemption!'
    ]
  },
  fr: {
    title: 'Saba Israël - Rabbi Israel Dov Odesser z"l',
    subtitle: 'Le fidèle émissaire de Rabbenu dans notre génération',
    intro: 'Rabbi Israel Dov Odesser (Saba Israël) était un étudiant éminent de Rabbi Nachman de Breslov et a répandu ses enseignements dans le monde entier',
    story: 'L\'Histoire Incroyable',
    letter: 'La Lettre du Ciel - Na Nach Nachma Nachman MeOuman',
    teachings: 'Enseignements de Saba Israël',
    legacy: 'L\'Héritage',
    quotes: [
      'Soyez toujours joyeux! C\'est tout!',
      'Na Nach Nachma Nachman MeOuman - c\'est toute la Torah',
      'Rabbenu vit! Rabbenu apporte la rédemption!'
    ]
  },
  es: {
    title: 'Saba Israel - Rabino Israel Dov Odesser z"l',
    subtitle: 'El fiel emisario de Rabbenu en nuestra generación',
    intro: 'Rabino Israel Dov Odesser (Saba Israel) fue un distinguido estudiante de Rabino Nachman de Breslov y difundió sus enseñanzas por todo el mundo',
    story: 'La Historia Asombrosa',
    letter: 'La Carta del Cielo - Na Nach Nachma Nachman MeUman',
    teachings: 'Enseñanzas de Saba Israel',
    legacy: 'El Legado',
    quotes: [
      '¡Siempre estar alegre! ¡Eso es todo!',
      'Na Nach Nachma Nachman MeUman - esta es toda la Torá',
      '¡Rabbenu vive! ¡Rabbenu trae la redención!'
    ]
  },
  ru: {
    title: 'Саба Израиль - Рабби Израиль Дов Одессер з"л',
    subtitle: 'Верный посланник Раббену в нашем поколении',
    intro: 'Рабби Израиль Дов Одессер (Саба Израиль) был выдающимся учеником Рабби Нахмана из Брeslов и распространял его учения по всему миру',
    story: 'Удивительная История',
    letter: 'Письмо с Небес - На Нах Нахма Нахман МеУман',
    teachings: 'Учения Сабы Израиля',
    legacy: 'Наследие',
    quotes: [
      'Всегда быть в радости! Это все!',
      'На Нах Нахма Нахман МеУман - это вся Тора',
      'Раббену жив! Раббену приносит искупление!'
    ]
  }
};

export default function SabaIsrael() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <section className="py-24 px-4 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block p-8 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-bounce">
            <Sparkles className="w-20 h-20 text-white" />
          </div>
          <h1 className="text-6xl font-black text-white mb-6 drop-shadow-2xl">{t.title}</h1>
          <p className="text-3xl text-white/95 mb-12">{t.subtitle}</p>
          <Card className="p-12 bg-white/95 backdrop-blur-sm max-w-4xl mx-auto shadow-2xl border-4 border-yellow-300">
            <p className="text-2xl text-gray-800 leading-relaxed">{t.intro}</p>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Star className="w-12 h-12 text-yellow-500 fill-yellow-500" />
            <h2 className="text-5xl font-black text-gray-900">{t.story}</h2>
            <Star className="w-12 h-12 text-yellow-500 fill-yellow-500" />
          </div>
          
          <Card className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-4 border-blue-300 mb-12 shadow-2xl">
            <h3 className="text-4xl font-black mb-8 text-center text-blue-900">{t.letter}</h3>
            <div className="text-center mb-8">
              <div className="inline-block text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent p-6">
                נ נח נחמ נחמן מאומן
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {isRTL 
                ? 'ביום יז\' בתמוז תר"פ קיבל סבא ישראל מכתב מופלא משמים שנחתם בשם רבי נחמן מברסלב. המכתב המדהים הזה חיזק את אמונתו והפך אותו לשליח הנאמן של רבינו'
                : 'On the 17th of Tammuz 5680, Saba Israel received a wondrous letter from heaven signed by Rabbi Nachman of Breslov. This amazing letter strengthened his faith and made him the faithful emissary of Rabbenu'}
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.quotes.map((quote, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-300 hover:shadow-2xl transition-all transform hover:scale-105">
                <Heart className="w-12 h-12 text-red-500 fill-red-500 mx-auto mb-6" />
                <p className="text-2xl text-center font-bold text-gray-900 leading-relaxed">{quote}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <Book className="w-24 h-24 mx-auto mb-8 animate-pulse" />
          <h2 className="text-6xl font-black mb-8">{t.legacy}</h2>
          <p className="text-3xl leading-relaxed">
            {isRTL 
              ? 'סבא ישראל הפיץ את שמחת רבינו בכל העולם והשאיר דור של ברסלבים שמחים ומאמינים'
              : 'Saba Israel spread Rabbenu\'s joy throughout the world and left a generation of joyful and believing Breslovers'}
          </p>
        </div>
      </section>
    </div>
  );
}
