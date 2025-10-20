import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

const translations = {
  he: {
    seoTitle: 'תפילות ברסלב | תיקון הכללי, התבודדות ותפילות מעשיות',
    seoDescription: 'עמוד תפילות בסגנון ברסלב: תיקון הכללי, הדרכה להתבודדות, ותפילות מעשיות מבית רבי נחמן, רבי נתן וסבא ישראל דב אודסר.',
    title: 'תפילות ברסלב',
    subtitle: 'תיקון הכללי • התבודדות • חיזוק הלב',
    intro: 'מסורת ברסלב מדגישה את כוח התפילה האישית. כאן תמצאו את עיקרי הדרך: תיקון הכללי כפי שמסר רבי נחמן, הדרכה מעשית להתבודדות על פי תלמידו רבי נתן, ודברי חיזוק מסבא ��שראל דב אודסר.',
    tikkunTitle: 'תיקון הכללי',
    tikkunDesc: 'רבי נחמן גילה "תיקון הכללי" — עשרה פרקי תהילים שהם תיקון כללי לנפש. מומלץ לומר בכוונה בכל עת, ובפרט בזמנים של ירידה.',
    psalmsLabel: 'עשרת המזמורים:',
    psalms: ['טז', 'לב', 'מא', 'מב', 'נט', 'עז', 'צ', 'קה', 'קלז', 'קנ'],
    hitbTitle: 'הדרכה קצרה להתבודדות',
    hitbSteps: [
      'מצאו מקום שקט לדבר עם ה׳ בפשטות, כפי שמדברים עם חבר טוב.',
      'ספרו לקב"ה בדיוק היכן אתם נמצאים, ללא מסכות וללא פחד.',
      'הודו על הטוב, בקשו על העתיד, ובכו על הכשלונות – בלשון שלכם.',
      'קבעו זמן קבוע, אפילו 5–10 דקות ביום, והתמידו בעדינות.',
      'סיימו בדברי תקווה: "ה׳, תן לי להתחיל מחדש בשמחה".'
    ],
    sourcesTitle: 'מקורות והשראה',
    sources: [
      'רבי נחמן מברסלב – ליקוטי מוהר"ן, שיחות הר"ן',
      'רבי נתן מברסלב – ליקוטי תפילות, ליקוטי הלכות',
      'סבא ישראל דב אודסר – דברי חיזוק ו��תעוררות'
    ],
    downloadsCta: 'להורדת ספרי תפילה וחיזוק בחינם',
    goToDownloads: 'לעמוד ההורדות',
  },
  en: {
    seoTitle: 'Breslov Prayers | Tikkun HaKlali, Hitbodedut and Practical Prayers',
    seoDescription: 'Breslov-style prayers: Tikkun HaKlali, practical guidance for Hitbodedut, and uplifting prayers from Rabbi Nachman, Rabbi Nathan and Rabbi Israel Dov Odesser.',
    title: 'Breslov Prayers',
    subtitle: 'Tikkun HaKlali • Hitbodedut • Strengthening the Heart',
    intro: 'Breslov emphasizes personal prayer. Here you will find the essentials: Rabbi Nachman’s Tikkun HaKlali, practical guidance for Hitbodedut from Rabbi Nathan, and encouragement from Rabbi Israel Dov Odesser.',
    tikkunTitle: 'Tikkun HaKlali',
    tikkunDesc: 'Rabbi Nachman revealed the "General Remedy" — ten Psalms that bring a general rectification to the soul. Recommended to say with intent anytime, especially during difficult times.',
    psalmsLabel: 'The ten Psalms:',
    psalms: ['16', '32', '41', '42', '59', '77', '90', '105', '137', '150'],
    hitbTitle: 'Short Guide to Hitbodedut',
    hitbSteps: [
      'Find a quiet place and speak to Hashem simply, as to a close friend.',
      'Tell G‑d exactly where you are, without masks or fear.',
      'Thank for the good, ask for the future, cry over failures — in your own words.',
      'Fix a consistent time, even 5–10 minutes daily, gently and steadily.',
      'Finish with hope: "Hashem, let me begin again with joy."'
    ],
    sourcesTitle: 'Sources and Inspiration',
    sources: [
      'Rabbi Nachman of Breslov – Likutei Moharan, Sichot HaRan',
      'Rabbi Nathan of Breslov – Likutei Tefilot, Likutei Halachot',
      'Rabbi Israel Dov Odesser – Words of encouragement'
    ],
    downloadsCta: 'Download free prayer and inspiration books',
    goToDownloads: 'Go to Downloads',
  },
  fr: {
    seoTitle: 'Prières Breslev | Tikkoun HaKlali, Hitbodedout et Prières Pratiques',
    seoDescription: 'Prières dans l’esprit de Breslev : Tikkoun HaKlali, guide pratique de Hitbodedout, et paroles d’encouragement de Rabbi Na’hman, Rabbi Nathan et Rabbi Israël Dov Odesser.',
    title: 'Prières Breslev',
    subtitle: 'Tikkoun HaKlali • Hitbodedout • Renforcement du Cœur',
    intro: 'Breslev met l’accent sur la prière personnelle. Retrouvez ici l’essentiel : le Tikkoun HaKlali de Rabbi Na’hman, des conseils pratiques de Rabbi Nathan et des encouragements de Rabbi Israël Dov Odesser.',
    tikkunTitle: 'Tikkoun HaKlali',
    tikkunDesc: 'Rabbi Na’hman a révélé le « Remède Général » — dix Psaumes qui réparent l’âme. À dire avec intention, en tout temps, et particulièrement dans les moments difficiles.',
    psalmsLabel: 'Les dix Psaumes :',
    psalms: ['16', '32', '41', '42', '59', '77', '90', '105', '137', '150'],
    hitbTitle: 'Guide Court de Hitbodedout',
    hitbSteps: [
      'Trouvez un lieu calme et parlez à D. avec simplicité, comme à un ami proche.',
      'Dites à D. où vous en êtes vraiment, sans masques ni peur.',
      'Remerciez pour le bien, demandez pour l’avenir, pleurez les échecs — avec vos mots.',
      'Fixez un moment constant, même 5–10 minutes par jour, avec douceur.',
      'Terminez avec espérance : « Permets-moi de recommencer dans la joie. »'
    ],
    sourcesTitle: 'Sources et Inspiration',
    sources: [
      'Rabbi Na’hman de Breslev – Likouteï Moharan, Si’hot Haran',
      'Rabbi Nathan de Breslev – Likouteï Tefilot, Likouteï Halakhot',
      'Rabbi Israël Dov Odesser – Paroles d’encouragement'
    ],
    downloadsCta: 'Téléchargez des livres gratuits de prières et d’inspiration',
    goToDownloads: 'Aller aux Téléchargements',
  },
  es: {
    seoTitle: 'Oraciones Breslov | Tikún HaKlali, Hitbodedut y Oraciones Prácticas',
    seoDescription: 'Oraciones al estilo Breslov: Tikún HaKlali, guía práctica de Hitbodedut, y palabras de ánimo de Rabí Najmán, Rabí Natán y Rabí Israel Dov Odesser.',
    title: 'Oraciones Breslov',
    subtitle: 'Tikún HaKlali • Hitbodedut • Fortalecimiento del Corazón',
    intro: 'Breslov enfatiza la oración personal. Aquí encontrará lo esencial: el Tikún HaKlali de Rabí Najmán, guía práctica de Hitbodedut de Rabí Natán y aliento de Rabí Israel Dov Odesser.',
    tikkunTitle: 'Tikún HaKlali',
    tikkunDesc: 'Rabí Najmán reveló el «Remedio General» — diez Salmos que reparan el alma. Recomendado decir con intención en cualquier momento, especialmente en tiempos difíciles.',
    psalmsLabel: 'Los diez Salmos:',
    psalms: ['16', '32', '41', '42', '59', '77', '90', '105', '137', '150'],
    hitbTitle: 'Guía Corta de Hitbodedut',
    hitbSteps: [
      'Busque un lugar tranquilo y hable con Hashem con sencillez, como con un amigo cercano.',
      'Dígale a Di-s exactamente dónde está, sin máscaras ni miedo.',
      'Agradezca por el bien, pida por el futuro, llore por los fracasos — con sus propias palabras.',
      'Fije un tiempo constante, incluso 5–10 minutos diarios, con suavidad.',
      'Termine con esperanza: «Permíteme comenzar de nuevo con alegría.»'
    ],
    sourcesTitle: 'Fuentes e Inspiración',
    sources: [
      'Rabí Najmán de Breslov – Likutei Moharan, Sijot Harán',
      'Rabí Natán de Breslov – Likutei Tefilot, Likutei Halajot',
      'Rabí Israel Dov Odesser – Palabras de ánimo'
    ],
    downloadsCta: 'Descargue libros gratuitos de oración e inspiración',
    goToDownloads: 'Ir a Descargas',
  },
  ru: {
    seoTitle: 'Молитвы Бреслов | Тикун hа-Клали, Хитбодедут и Практические Молитвы',
    seoDescription: 'Молитвы в духе Бреслов: Тикун hа-Клали, практическое руководство по Хитбодедут, и слова ободрения от Рабби Нахмана, Рабби Натана и Рабби Израэля Дова Одессера.',
    title: 'Молитвы Бреслов',
    subtitle: 'Тикун hа-Клали • Хитбодедут • Укрепление сердца',
    intro: 'В Бреслове особый акцент на личной молитве. Здесь — основы: Тикун hа-Клали Рабби Нахмана, практическое руководство по Хитбодедут от Рабби Натана и ободрение от Рабби Израэля Дова Одессера.',
    tikkunTitle: 'Тикун hа-Клали',
    tikkunDesc: 'Рабби Нахман открыл «Общее Исправление» — десять псалмов, приносящих общее исправление душе. Рекомендуется читать с намерением в любое время, особенно в трудные моменты.',
    psalmsLabel: 'Десять псалмов:',
    psalms: ['16', '32', '41', '42', '59', '77', '90', '105', '137', '150'],
    hitbTitle: 'Краткое Руководство по Хитбодедут',
    hitbSteps: [
      'Найдите тихое место и говорите с Творцом просто, как с близким другом.',
      'Расскажите Б‑гу, где вы на самом деле, без масок и страха.',
      'Благодарите за добро, просите о будущем, плачьте о неудачах — своими словами.',
      'Назначьте постоянное время, даже 5–10 минут в день, мягко и стабильно.',
      'Завершайте надеждой: «Позволь начать заново с радостью.»'
    ],
    sourcesTitle: 'Источники и Вдохновение',
    sources: [
      'Рабби Нахман из Бреслов — Ликутей Мохаран, Сихот а-Ран',
      'Рабби Натан из Бреслов — Ликутей Тефилот, Ликуте�� Галахот',
      'Рабби Исраэль Дов Одессер — Слова воодушевления'
    ],
    downloadsCta: 'Скачать бесплатные книги молитв и вдохновения',
    goToDownloads: 'К Загрузкам',
  }
};

export default function Prayers() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = t.seoTitle;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t.seoDescription);
  }, [t.seoTitle, t.seoDescription]);

  const copyPsalms = () => {
    const list = (t.psalms as string[]).join(', ');
    navigator.clipboard.writeText(list).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      <section className="hero-gradient relative overflow-hidden py-16 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-books-composition.png" alt="Breslov Books" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="heading-oversized text-primary mb-3">{t.title}</h1>
          <p className="text-large text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="card-premium p-8 lg:p-10 mb-10">
            <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-line">{t.intro}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-premium p-8">
              <h2 className="text-3xl font-bold text-primary mb-3">{t.tikkunTitle}</h2>
              <p className="text-muted-foreground mb-6">{t.tikkunDesc}</p>
              <div className="bg-secondary/40 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{t.psalmsLabel}</h3>
                  <button onClick={copyPsalms} className="btn-breslov-secondary text-sm px-3 py-1">{copied ? '✔' : '⧉'}</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(t.psalms as string[]).map((p, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-primary/10 text-primary font-semibold">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-3xl font-bold text-primary mb-3">{t.hitbTitle}</h2>
              <ol className="space-y-3 list-decimal pl-6">
                {(t.hitbSteps as string[]).map((s, i) => (
                  <li key={i} className="text-foreground/80">{s}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="card-premium p-8 mt-8">
            <h2 className="text-2xl font-bold text-primary mb-3">{t.sourcesTitle}</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {(t.sources as string[]).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-10">
            <a href="/downloads" className="btn-breslov-primary inline-block">{t.downloadsCta}</a>
            <div className="mt-3">
              <a href="/downloads" className="text-primary underline">{t.goToDownloads}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
