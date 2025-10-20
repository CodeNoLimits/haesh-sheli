import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Share2, Heart, Users, BookOpen, Download, Mail, MessageCircle, Gift } from 'lucide-react';
import { Link } from 'wouter';

const translations = {
  he: {
    title: 'הפצה',
    subtitle: 'הפץ את אור רבי נחמן לכל העולם',
    hero: 'כל אחד יכול להיות שליח של רבינו',
    heroDesc: 'הפצת תורת רבינו היא הדרך הכי טובה להביא אור ושמחה לעולם',
    
    section1Title: 'למה הפצה?',
    section1Text: 'רבי נתן אמר: "העיקר הוא ההפצה". כל אחד מאיתנו יכול להיות שליח של רבינו ולהפיץ את תורתו הקדושה. זה לא דורש כישורים מיוחדים - רק לב פתוח ורצון טוב.',
    
    section2Title: 'איך להפיץ?',
    way1: 'שתף ספרים',
    way1Desc: 'הורד והדפס ספרי ברסלב חינם ותן לחברים',
    way2: 'דבר עם אנשים',
    way2Desc: 'ספר לאנשים על רבינו בשיחה רגילה',
    way3: 'חלק בווטסאפ',
    way3Desc: 'שלח ציטוטים ושיעורים קצרים',
    way4: 'תמוך בקרן',
    way4Desc: 'עזור לנו להדפיס ולהפיץ עוד ספרים',
    
    section3Title: 'חומרי הפצה',
    downloadBooks: 'הורד ספרים להפצה',
    downloadFlyers: 'הורד עלונים',
    shareLinks: 'שתף קישורים',
    getHelp: 'קבל עזרה',
    
    testimonials: 'סיפורי הפצה',
    testimonial1: '"התחלתי להשאיר ספרים בתחנות אוטובוס. אחרי שבוע מישהו התקשר ואמר שזה שינה לו את החיים!"',
    testimonial1Author: 'משה, ירושלים',
    testimonial2: '"פשוט שיתפתי ציטוט של רבינו בווטסאפ. עשרות אנשים כתבו לי תודה ושאלו עוד."',
    testimonial2Author: 'שרה, תל אביב',
    testimonial3: '"נתתי ליקוטי מוהר"ן לשכן. עכשיו הוא בא איתי לראש השנה בברסלב!"',
    testimonial3Author: 'דוד, חיפה',
    
    ctaTitle: 'מוכן להתחיל?',
    ctaDesc: 'כל דבר קטן שתעשה יכול לשנות חיים',
    startNow: 'התחל עכשיו',
    contactUs: 'צור קשר לייעוץ',
    
    tips: 'טיפים להפצה מוצלחת',
    tip1: 'התחל קטן - אפילו אדם אחד זה הרבה',
    tip2: 'דבר מהלב - אנשים מרגישים כנות',
    tip3: 'אל תלחץ - תן לאנשים לקבל בקצב שלהם',
    tip4: 'תמשיך בהתמדה - כל יום קצת',
    
    quote: '"המפיץ תורת רבינו מביא את הגאולה"',
    quoteAuthor: '- רבי נתן'
  },
  en: {
    title: 'Outreach (Hafatsa)',
    subtitle: 'Spread Rabbi Nachman\'s light to the whole world',
    hero: 'Everyone can be Rabbenu\'s messenger',
    heroDesc: 'Spreading Rabbenu\'s Torah is the best way to bring light and joy to the world',
    
    section1Title: 'Why Outreach?',
    section1Text: 'Rabbi Nathan said: "The main thing is the outreach". Each of us can be a messenger of Rabbenu and spread his holy Torah. It doesn\'t require special skills - just an open heart and good will.',
    
    section2Title: 'How to Spread?',
    way1: 'Share Books',
    way1Desc: 'Download and print free Breslov books and give to friends',
    way2: 'Talk to People',
    way2Desc: 'Tell people about Rabbenu in regular conversation',
    way3: 'Share on WhatsApp',
    way3Desc: 'Send short quotes and lessons',
    way4: 'Support the Foundation',
    way4Desc: 'Help us print and distribute more books',
    
    section3Title: 'Outreach Materials',
    downloadBooks: 'Download Books for Distribution',
    downloadFlyers: 'Download Flyers',
    shareLinks: 'Share Links',
    getHelp: 'Get Help',
    
    testimonials: 'Outreach Stories',
    testimonial1: '"I started leaving books at bus stops. After a week someone called and said it changed their life!"',
    testimonial1Author: 'Moshe, Jerusalem',
    testimonial2: '"I simply shared a Rabbenu quote on WhatsApp. Dozens of people thanked me and asked for more."',
    testimonial2Author: 'Sarah, Tel Aviv',
    testimonial3: '"I gave Likutei Moharan to my neighbor. Now he comes with me to Rosh Hashanah in Uman!"',
    testimonial3Author: 'David, Haifa',
    
    ctaTitle: 'Ready to Start?',
    ctaDesc: 'Every small thing you do can change lives',
    startNow: 'Start Now',
    contactUs: 'Contact Us for Guidance',
    
    tips: 'Tips for Successful Outreach',
    tip1: 'Start small - even one person is a lot',
    tip2: 'Speak from the heart - people feel sincerity',
    tip3: 'Don\'t push - let people receive at their pace',
    tip4: 'Continue with persistence - a little every day',
    
    quote: '"Who spreads Rabbenu\'s Torah brings the redemption"',
    quoteAuthor: '- Rabbi Nathan'
  },
  fr: {
    title: 'Diffusion (Hafatsa)',
    subtitle: 'Répandez la lumière de Rabbi Nachman dans le monde entier',
    hero: 'Chacun peut être un messager de Rabbenu',
    heroDesc: 'Diffuser la Torah de Rabbenu est la meilleure façon d\'apporter lumière et joie au monde',
    
    section1Title: 'Pourquoi Diffuser?',
    section1Text: 'Rabbi Nathan a dit: "L\'essentiel est la diffusion". Chacun de nous peut être un messager de Rabbenu et diffuser sa sainte Torah. Cela ne nécessite pas de compétences spéciales - juste un cœur ouvert et une bonne volonté.',
    
    section2Title: 'Comment Diffuser?',
    way1: 'Partager des Livres',
    way1Desc: 'Téléchargez et imprimez des livres Breslov gratuits et donnez-les à vos amis',
    way2: 'Parler aux Gens',
    way2Desc: 'Parlez de Rabbenu lors de conversations normales',
    way3: 'Partager sur WhatsApp',
    way3Desc: 'Envoyez des citations et leçons courtes',
    way4: 'Soutenir la Fondation',
    way4Desc: 'Aidez-nous à imprimer et distribuer plus de livres',
    
    section3Title: 'Matériel de Diffusion',
    downloadBooks: 'Télécharger des Livres',
    downloadFlyers: 'Télécharger des Dépliants',
    shareLinks: 'Partager des Liens',
    getHelp: 'Obtenir de l\'Aide',
    
    testimonials: 'Histoires de Diffusion',
    testimonial1: '"J\'ai commencé à laisser des livres aux arrêts de bus. Après une semaine, quelqu\'un a appelé et dit que ça a changé sa vie!"',
    testimonial1Author: 'Moshe, Jérusalem',
    testimonial2: '"J\'ai simplement partagé une citation de Rabbenu sur WhatsApp. Des dizaines de personnes m\'ont remercié et en ont demandé plus."',
    testimonial2Author: 'Sarah, Tel Aviv',
    testimonial3: '"J\'ai donné Likutei Moharan à mon voisin. Maintenant il vient avec moi à Roch Hachana à Ouman!"',
    testimonial3Author: 'David, Haïfa',
    
    ctaTitle: 'Prêt à Commencer?',
    ctaDesc: 'Chaque petite chose que vous faites peut changer des vies',
    startNow: 'Commencer Maintenant',
    contactUs: 'Nous Contacter pour des Conseils',
    
    tips: 'Conseils pour une Diffusion Réussie',
    tip1: 'Commencez petit - même une personne c\'est beaucoup',
    tip2: 'Parlez du cœur - les gens ressentent la sincérité',
    tip3: 'Ne forcez pas - laissez les gens recevoir à leur rythme',
    tip4: 'Continuez avec persévérance - un peu chaque jour',
    
    quote: '"Celui qui diffuse la Torah de Rabbenu apporte la rédemption"',
    quoteAuthor: '- Rabbi Nathan'
  },
  es: {
    title: 'Difusión (Hafatsa)',
    subtitle: 'Difunde la luz de Rabino Nachman por todo el mundo',
    hero: 'Todos pueden ser mensajeros de Rabbenu',
    heroDesc: 'Difundir la Torá de Rabbenu es la mejor manera de traer luz y alegría al mundo',
    
    section1Title: '¿Por Qué Difundir?',
    section1Text: 'Rabino Nathan dijo: "Lo principal es la difusión". Cada uno de nosotros puede ser un mensajero de Rabbenu y difundir su santa Torá. No requiere habilidades especiales - solo un corazón abierto y buena voluntad.',
    
    section2Title: '¿Cómo Difundir?',
    way1: 'Compartir Libros',
    way1Desc: 'Descarga e imprime libros Breslov gratis y dáselos a amigos',
    way2: 'Hablar con Personas',
    way2Desc: 'Cuéntale a la gente sobre Rabbenu en conversación normal',
    way3: 'Compartir en WhatsApp',
    way3Desc: 'Envía citas y lecciones cortas',
    way4: 'Apoyar la Fundación',
    way4Desc: 'Ayúdanos a imprimir y distribuir más libros',
    
    section3Title: 'Materiales de Difusión',
    downloadBooks: 'Descargar Libros',
    downloadFlyers: 'Descargar Folletos',
    shareLinks: 'Compartir Enlaces',
    getHelp: 'Obtener Ayuda',
    
    testimonials: 'Historias de Difusión',
    testimonial1: '"Comencé a dejar libros en paradas de autobús. ¡Después de una semana alguien llamó y dijo que cambió su vida!"',
    testimonial1Author: 'Moshe, Jerusalén',
    testimonial2: '"Simplemente compartí una cita de Rabbenu en WhatsApp. Docenas de personas me agradecieron y pidieron más."',
    testimonial2Author: 'Sarah, Tel Aviv',
    testimonial3: '"Le di Likutei Moharan a mi vecino. ¡Ahora viene conmigo a Rosh Hashaná en Uman!"',
    testimonial3Author: 'David, Haifa',
    
    ctaTitle: '¿Listo para Comenzar?',
    ctaDesc: 'Cada pequeña cosa que hagas puede cambiar vidas',
    startNow: 'Comenzar Ahora',
    contactUs: 'Contáctanos para Orientación',
    
    tips: 'Consejos para una Difusión Exitosa',
    tip1: 'Empieza pequeño - incluso una persona es mucho',
    tip2: 'Habla desde el corazón - la gente siente la sinceridad',
    tip3: 'No presiones - deja que la gente reciba a su ritmo',
    tip4: 'Continúa con persistencia - un poco cada día',
    
    quote: '"Quien difunde la Torá de Rabbenu trae la redención"',
    quoteAuthor: '- Rabino Nathan'
  },
  ru: {
    title: 'Распространение (Хафаца)',
    subtitle: 'Распространите свет Рабби Нахмана по всему миру',
    hero: 'Каждый может быть посланником Раббену',
    heroDesc: 'Распространение Торы Раббену - лучший способ принести свет и радость в мир',
    
    section1Title: 'Зачем Распространять?',
    section1Text: 'Рабби Натан сказал: "Главное - это распространение". Каждый из нас может быть посланником Раббену и распространять его святую Тору. Это не требует особых навыков - только открытое сердце и добрую волю.',
    
    section2Title: 'Как Распространять?',
    way1: 'Делитесь Книгами',
    way1Desc: 'Скачивайте и печатайте бесплатные книги Бреслов и дарите друзьям',
    way2: 'Говорите с Людьми',
    way2Desc: 'Рассказывайте о Раббену в обычном разговоре',
    way3: 'Делитесь в WhatsApp',
    way3Desc: 'Отправляйте короткие цитаты и уроки',
    way4: 'Поддерживайте Фонд',
    way4Desc: 'Помогите нам печатать и распространять больше книг',
    
    section3Title: 'Материалы для Распространения',
    downloadBooks: 'Скачать Книги',
    downloadFlyers: 'Скачать Листовки',
    shareLinks: 'Поделиться Ссылками',
    getHelp: 'Получить Помощь',
    
    testimonials: 'Истории Распространения',
    testimonial1: '"Я начал оставлять книги на автобусных остановках. Через неделю кто-то позвонил и сказал, что это изменило его жизнь!"',
    testimonial1Author: 'Моше, Иерусалим',
    testimonial2: '"Я просто поделился цитатой Раббену в WhatsApp. Десятки людей поблагодарили меня и попросили еще."',
    testimonial2Author: 'Сара, Тель-Авив',
    testimonial3: '"Я дал Ликутей Мохаран своему соседу. Теперь он едет со мной на Рош ха-Шана в Умань!"',
    testimonial3Author: 'Давид, Хайфа',
    
    ctaTitle: 'Готовы Начать?',
    ctaDesc: 'Каждая маленькая вещь, которую вы делаете, может изменить жизнь',
    startNow: 'Начать Сейчас',
    contactUs: 'Свяжитесь с Нами за Советом',
    
    tips: 'Советы для Успешного Распространения',
    tip1: 'Начните с малого - даже один человек это много',
    tip2: 'Говорите от сердца - люди чувствуют искренность',
    tip3: 'Не давите - пусть люди принимают в своем темпе',
    tip4: 'Продолжайте настойчиво - немного каждый день',
    
    quote: '"Кто распространяет Тору Раббену, приносит искупление"',
    quoteAuthor: '- Рабби Натан'
  }
};

export default function Hafatsa() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 px-4"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          overflow: 'hidden'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Share2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-2xl text-white/90 mb-8">{t.subtitle}</p>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">{t.hero}</h2>
            <p className="text-xl text-gray-700">{t.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Why Hafatsa Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-12 shadow-2xl border-4 border-purple-200 bg-white/90 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-12 h-12 text-red-500 fill-red-500" />
              <h2 className="text-4xl font-black text-gray-900">{t.section1Title}</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-700">{t.section1Text}</p>
          </Card>
        </div>
      </section>

      {/* How to Spread Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t.section2Title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: t.way1, desc: t.way1Desc, color: 'blue' },
              { icon: Users, title: t.way2, desc: t.way2Desc, color: 'green' },
              { icon: MessageCircle, title: t.way3, desc: t.way3Desc, color: 'purple' },
              { icon: Gift, title: t.way4, desc: t.way4Desc, color: 'red' }
            ].map((way, idx) => {
              const Icon = way.icon;
              return (
                <Card 
                  key={idx}
                  className="p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 bg-gradient-to-br from-white to-gray-50"
                  style={{ borderColor: `var(--${way.color}-400)` }}
                >
                  <div className={`inline-block p-4 bg-${way.color}-100 rounded-full mb-6`}>
                    <Icon className={`w-12 h-12 text-${way.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{way.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{way.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">{t.section3Title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/downloads">
              <Button className="w-full h-24 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                <Download className="w-6 h-6 mr-2" />
                {t.downloadBooks}
              </Button>
            </Link>
            <Button className="w-full h-24 text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <Download className="w-6 h-6 mr-2" />
              {t.downloadFlyers}
            </Button>
            <Button className="w-full h-24 text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <Share2 className="w-6 h-6 mr-2" />
              {t.shareLinks}
            </Button>
            <Link href="/contact">
              <Button className="w-full h-24 text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                <Mail className="w-6 h-6 mr-2" />
                {t.getHelp}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">{t.testimonials}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: t.testimonial1, author: t.testimonial1Author },
              { text: t.testimonial2, author: t.testimonial2Author },
              { text: t.testimonial3, author: t.testimonial3Author }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-purple-200 hover:shadow-2xl transition-shadow">
                <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">{testimonial.text}</p>
                <p className="font-bold text-purple-700">— {testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">{t.tips}</h2>
          <div className="space-y-6">
            {[t.tip1, t.tip2, t.tip3, t.tip4].map((tip, idx) => (
              <Card key={idx} className="p-6 bg-white/80 backdrop-blur-sm border-2 border-orange-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{tip}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <BookOpen className="w-20 h-20 mx-auto text-yellow-300" />
          </div>
          <blockquote className="text-4xl font-bold mb-6 italic">{t.quote}</blockquote>
          <p className="text-2xl text-purple-200">{t.quoteAuthor}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl font-black text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-2xl text-white/90 mb-12">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/downloads">
              <Button className="text-2xl px-12 py-8 bg-white text-purple-700 hover:bg-gray-100 font-black rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all">
                {t.startNow} 🚀
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="text-2xl px-12 py-8 bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-black rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all">
                {t.contactUs} 💬
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

