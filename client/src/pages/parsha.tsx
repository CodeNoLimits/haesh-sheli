import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';

const translations = {
  he: {
    seoTitle: 'פרשת השבוע – מבט ברסלבי',
    seoDescription: 'פרשת השבוע ברוח ברסלב: נקודות חיזוק קצרות בהשראת רבי נחמן ורבי נתן, עם קריאה לשמחה, תפילה והתחדשות.',
    title: 'פרשת השבוע',
    subtitle: 'מבט ברסלבי – שמחה, תפילה והתחדשות',
    intro: 'דברי רבי נחמן ורבי נתן מלמדים לראות בכל פרשה קריאה אישית להתחדשות. בעמוד זה תמצאו קווים מנחים ללימוד הפרשה ברוח תפילה ושמחה, וכן קריאה ליישום מעשי במשך השבוע.',
    guideTitle: 'איך לומדים פרשה בדרך ברסלב?',
    guide: [
      'התחילו בשמ��ה פשוטה: מצאו נקודה טובה אחת בפרשה וחיו אותה.',
      'קראו חלק קטן עם פירוש שמחזק את הלב, ודברו על זה בתפילה אישית.',
      'כתבו משפט אחד ליישום השבוע – חסד, תפילה, שיחה טובה או חיזוק ליהודי.',
      'חפשו קשר בין הפרשה לחייכם היום – עבודה, בית, חברים.',
      'סיימו בהודיה קצרה לבורא העולם על הזכות ללמוד תורה.'
    ],
    sampleTitle: 'דוגמה קצרה של יישום',
    sampleText: 'בפרשה שיש בה דיבור על אמונה וביטחון – קבלו על עצמכם כמה רגעים של אמירת תודה בכל יום, ובקשו בלשון שלכם להרגיש את השגחת ה׳.',
    sourcesTitle: 'מקורות ברסלביים ללימוד פרשה',
    sources: [
      'ליקוטי מוהר"ן – נקודות על פרשיות',
      'ליקוטי הלכות – הרחבות לרעיונות הפרשה',
      'שיחות הר"ן – חיזוק לשמחה והתחדשות'
    ],
    ctaTitle: 'להעמקה נוספת',
    ctaMagazine: 'לקריאת מאמרים במגזין',
    ctaWisdom: 'לעמוד "חכמת ברסלב"',
  },
  en: {
    seoTitle: 'Weekly Parsha – A Breslov View',
    seoDescription: 'Weekly Torah portion with Breslov spirit: short points inspired by Rabbi Nachman and Rabbi Nathan, calling for joy, prayer and renewal.',
    title: 'Weekly Parsha',
    subtitle: 'Breslov Perspective – Joy, Prayer and Renewal',
    intro: 'Rabbi Nachman and Rabbi Nathan teach us to see in each portion a personal call to renewal. This page offers guidelines to learn the Parsha with prayerful joy and to apply it during the week.',
    guideTitle: 'How to Learn Parsha the Breslov Way?',
    guide: [
      'Begin with simple joy: find one good point in the Parsha and live it.',
      'Read a small section with commentary that strengthens the heart, then speak about it in personal prayer.',
      'Write one practical step for this week — kindness, prayer, a good conversation or strengthening a fellow Jew.',
      'Seek a connection between the Parsha and your life today — work, home, friends.',
      'End with brief thanks to the Creator for the privilege of learning Torah.'
    ],
    sampleTitle: 'A Short Example of Application',
    sampleText: 'If the Parsha speaks about faith and trust — accept upon yourself a few moments of gratitude each day and ask, in your own words, to feel Divine Providence.',
    sourcesTitle: 'Breslov Sources for Parsha Study',
    sources: [
      'Likutei Moharan — points on portions',
      'Likutei Halachot — expansions of Parsha ideas',
      'Sichot HaRan — strengthening joy and renewal'
    ],
    ctaTitle: 'Deepen Further',
    ctaMagazine: 'Read articles in the Magazine',
    ctaWisdom: 'Go to “Breslov Wisdom”',
  },
  fr: {
    seoTitle: 'Paracha de la Semaine – Regard Breslev',
    seoDescription: 'Paracha avec l’esprit de Breslev : points courts inspirés de Rabbi Na’hman et Rabbi Nathan, appel à la joie, à la prière et au renouveau.',
    title: 'Paracha de la Semaine',
    subtitle: 'Perspective Breslev – Joie, Prière et Renouveau',
    intro: 'Rabbi Na’hman et Rabbi Nathan nous apprennent à voir dans chaque paracha un appel personnel au renouveau. Ce guide propose une étude priante et joyeuse, avec application concrète.',
    guideTitle: 'Comment Étudier la Paracha à la Manière Breslev ?',
    guide: [
      'Commencez par une joie simple : trouvez un point positif et vivez-le.',
      'Lisez une petite section avec un commentaire qui renforce le cœur, puis parlez-en en prière personnelle.',
      'Écrivez une étape pratique pour la semaine — gentillesse, prière, bonne conversation ou soutien à autrui.',
      'Cherchez le lien entre la paracha et votre vie — travail, maison, amis.',
      'Terminez par un bref remerciement pour le mérite d’étudier la Torah.'
    ],
    sampleTitle: 'Exemple Court d’Application',
    sampleText: 'Si la paracha parle de foi et de confiance — prenez quelques instants quotidiens pour remercier et demandez à ressentir la Providence.',
    sourcesTitle: 'Sources Breslev pour l’Étude de la Paracha',
    sources: [
      'Likouteï Moharan — points sur les parachiot',
      'Likouteï Halakhot — développements des idées de la paracha',
      'Si’hot Haran — renforcement de la joie et du renouveau'
    ],
    ctaTitle: 'Approfondir',
    ctaMagazine: 'Lire des articles dans le Magazine',
    ctaWisdom: 'Aller à « Sagesse de Breslev »',
  },
  es: {
    seoTitle: 'Parashá Semanal – Mirada Breslov',
    seoDescription: 'Parashá con espíritu Breslov: puntos breves inspirados en Rabí Najmán y Rabí Natán, llamado a la alegría, la oración y la renovación.',
    title: 'Parashá Semanal',
    subtitle: 'Perspectiva Breslov – Alegría, Oración y Renovación',
    intro: 'Rabí Najmán y Rabí Natán enseñan a ver en cada porción un llamado personal a renovarse. Esta guía propone un estudio orante y alegre con aplicación práctica.',
    guideTitle: '¿Cómo Estudiar la Parashá al Estilo Breslov?',
    guide: [
      'Comience con alegría simple: encuentre un punto bueno y vívalo.',
      'Lea una pequeña sección con comentario que fortalezca el corazón y hable de ello en oración personal.',
      'Escriba un paso práctico para la semana — bondad, oración, buena conversación o fortalecer a otro.',
      'Busque la conexión entre la parashá y su vida — trabajo, hogar, amigos.',
      'Termine con un breve agradecimiento por el mérito de estudiar Torá.'
    ],
    sampleTitle: 'Ejemplo Breve de Aplicación',
    sampleText: 'Si la parashá habla de fe y confianza — tome unos momentos diarios de gratitud y pida sentir la Providencia Divina.',
    sourcesTitle: 'Fuentes Breslov para Estudiar la Parashá',
    sources: [
      'Likutei Moharan — puntos sobre porciones',
      'Likutei Halajot — ampliaciones de ideas de la parashá',
      'Sijot Harán — fortalecimiento de la alegría y la renovación'
    ],
    ctaTitle: 'Profundizar Más',
    ctaMagazine: 'Leer artículos en la Revista',
    ctaWisdom: 'Ir a “Sabiduría de Breslov”',
  },
  ru: {
    seoTitle: 'Еженедельная Параша – Взгляд Бреслов',
    seoDescription: 'Параша в духе Бреслов: короткие точки от Рабби Нахмана и Рабби Натана, призыв к радости, молитве и обновлению.',
    title: 'Еженедельная Параша',
    subtitle: 'Б��есловская перспектива – радость, молитва и обновление',
    intro: 'Рабби Нахман и Рабби Натан учат видеть в каждой главе личный призыв к обновлению. Здесь — руководство к радостному молитвенному изучению и практическому применению на неделе.',
    guideTitle: 'Как Учить Парашу по-Бресловски?',
    guide: [
      'Начните с простой радости: найдите одну хорошую точку и живите ею.',
      'Прочитайте небольшой отрывок с комментарием, укрепляющим сердце, и поговорите об этом в личной молитве.',
      'Запишите одно практическое действие на неделю — доброта, молитва, хороший разговор или поддержка ближнего.',
      'Ищите связь между главой и вашей жизнью — работа, дом, друзья.',
      'Завершите краткой благодарностью за честь учить Тору.'
    ],
    sampleTitle: 'Короткий Пример Применения',
    sampleText: 'Если глава говорит о вере и доверии — уделяйте ежедневно несколько минут благодарности и просите почувствовать Провидение.',
    sourcesTitle: 'Бресловские Источники для Изучения Параши',
    sources: [
      'Ликутей Мохаран — точки по главам',
      'Ликутей Галахот — развитие идей главы',
      'Сихот а-Ран — укрепление радости и обновления'
    ],
    ctaTitle: 'Углубиться',
    ctaMagazine: 'Читать статьи в Журнале',
    ctaWisdom: 'К странице «Мудрость Бреслов»',
  }
};

export default function Parsha() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

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

          <div className="card-premium p-8 mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">{t.guideTitle}</h2>
            <ol className="list-decimal pl-6 space-y-3">
              {(t.guide as string[]).map((g, i) => (
                <li key={i} className="text-foreground/80">{g}</li>
              ))}
            </ol>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">{t.sampleTitle}</h3>
              <p className="text-foreground/80">{t.sampleText}</p>
            </div>
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">{t.sourcesTitle}</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                {(t.sources as string[]).map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/magazine" className="btn-breslov-primary inline-block">{t.ctaMagazine}</a>
            <a href="/breslov-wisdom" className="btn-breslov-secondary inline-block">{t.ctaWisdom}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
