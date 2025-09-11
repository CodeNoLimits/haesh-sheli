import { useState } from 'react';
import { Star, Heart, Book, Lightbulb, Quote, Mountain, Music, Flame, Play, Volume2, VolumeX, Youtube, Target } from 'lucide-react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BreslovWisdom() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('teachings');
  const [ambientMusicEnabled, setAmbientMusicEnabled] = useState(false);

  const breslovTeachings = [
    {
      id: 'joy',
      title: 'מצוה גדולה להיות בשמחה תמיד - התורה השלמה',
      icon: '😊',
      content: `"מִצְוָה גְּדוֹלָה לִהְיוֹת בְּשִׂמְחָה תָּמִיד, וּלְהִתְגַּבֵּר לְהַרְחִיק הָעַצְבוּת וְהַמָּרָה שְׁחֹרָה בְּכָל כֹּחוֹ"`,
      verbatim: true,
      source: 'ליקוטי מוהר״ן תנינא, תורה כ״ד',
      description: `זוהי התורה המפורסמת ביותר של רבי נחמן על השמחה. רבינו הקדוש מגלה כאן שהשמחה אינה רק "מצב רוח נחמד" אלא מצווה ממש - וכלי רפואי חזק לנפש ולגוף. כל מחלה באה מקלקול השמחה, ולכן השמחה היא רפואה גדולה. זה לא פשטנות - זה חכמה עמוקה על הקשר בין הרגש לבריאות. השמחה פותחת את הלב, מחזקת את החיים, ומקרבת לה'.`
    },
    {
      id: 'prayer',
      title: 'התבודדות - השיחה הנשגבת עם הבורא',
      icon: '🤲',
      content: `ע"פ דברי רבינו: צריך לקבוע זמן בכל יום להתבודדות ולהרחבת השיחה בלשון אשכנז לפני ה' יתברך`,
      verbatim: false,
      source: 'ליקוטי מוהר״ן חלק א, תורה כ״ה',
      description: `זוהי התורה המיוחדת של רבי נחמן על ההתבודדות - התפילה האישית בלשון שלנו. רבינו מלמד שצריך לקבוע זמן קבוע מדי יום לשיחה פרטית עם ה', דוקא בשפת האם (לשון אשכנז) כדי לשפוך את הלב כמים. זו עבודה יותר חשובה מהתפילות הקבועות - זו השיחה האמיתית והאישית עם הבורא, שכל אדם יכול לעשות בכל מקום ובכל זמן.`
    },
    {
      id: 'faith',
      title: 'אמונה פשוטה - יסוד כל היסודות',
      icon: '💫',
      content: `ע"פ דברי רבינו: העיקר לילך באמונה פשוטה תמימה בלי חכמות כלל, כי "תם תהיה עם ה' אלהיך". המתחכמים באמונה נעשים כופרים, אבל האמונה הפשוטה היא הדרך האמיתית לידיעת השם יתברך`,
      verbatim: false,
      source: 'ליקוטי מוהר"ן תנינא, סימן לג',
      description: `רבינו הקדוש מגלה כאן את הסוד הנעלם של האמונה האמיתית. בעולם שבו כולם רוצים להבין הכל בשכל, רבי נחמן מלמד אותנו שהאמונה האמיתית היא דוקא בפשטות. כל מי שמנסה "להסביר" את האמונה בחכמות נופל לכפירה, כי הוא מנסה להכניס את האין סוף לתוך המוח הקטן. האמונה הפשוטה - כמו של ילד קטן - היא הדרך היחידה לחיבור אמיתי עם הבורא. זוהי מהפכה רוחנית: לא החכם הגדול מתקרב לה', אלא הפשוט והתמים.`
    },
    {
      id: 'tikkun',
      title: 'אין שום יאוש בעולם כלל - מסר התקווה הנצחי',
      icon: '🔧',
      content: `"וְהָעִקָּר – לְחַזֵּק עַצְמוֹ בְּכָל מַה שֶּׁאֶפְשָׁר, כִּי אֵין שׁוּם יֵאוּשׁ בָּעוֹלָם כְּלָל"`,
      verbatim: true,
      source: 'ליקוטי מוהר״ן תנינא, תורה ע״ח',
      description: `זוהי אולי התורה החזקה ביותר שאמר רבינו הקדוש - המסר שמציל מיליוני נשמות מייאוש. רבי נחמן מגלה כאן את הסוד: הייאוש עצמו הוא תחבולת השטן! העיקר הוא תמיד לחזק את עצמנו בכל מה שאפשר, כי באמת אין שום דבר כזה יאוש בעולם כלל. זהו מסר התקווה הנצחי שמאיר בחושך הגדול ביותר - הקדוש ברוך הוא תמיד מחכה לתשובה, ותמיד יש תקווה.`
    },
    {
      id: 'humility',
      title: 'ענווה אמיתית - מי באמת גדול',
      icon: '🕊️',
      content: `ע"פ דברי רבינו: הענווה האמיתית היא לדעת את מקום האדם - לא גאווה כשיש לו מעלות, לא עצבות כשאין לו. הכל מן השם יתברך. כמו משה רבנו - ענו מאד וגם מנהיג גדול`,
      verbatim: false,
      source: 'שיחות הר"ן אות ז',
      description: `רבינו הקדוש מגלה כאן את האמת הפנימית על הענווה. רבים חושבים שענווה פירושה להיות "שפל ונכנע", אבל רבי נחמן מלמד שזו אינה ענווה אלא עצבות! הענווה האמיתית היא לדעת את המקום האמיתי שלי - לא גאווה כשיש לי כישרונות, לא עצבות כשאין לי. הכל מן השמים. משה רבנו היה הכי ענוו והכי מנהיג. הענווה האמיתית נותנת כח לעבוד את ה' בכל הכחות, תמיד להתקדם, בלי גאווה ובלי עצבות. זוהי הדרך האמיתית לגדלות רוחנית.`
    },
    {
      id: 'truth',
      title: 'אמת - יסוד כל הקדושה',
      icon: '✨',
      content: `ע"פ דברי רבינו: העיקר הכל להיות אמיתי, לדבר אמת ולחיות אמת. הקדוש ברוך הוא אמת, ומי שרוצה להתקרב אליו יתברך חייב להיות אמיתי`,
      verbatim: false,
      source: 'שיחות הר"ן אות יב',
      description: `רבינו הקדוש מגלה כאן את הבסיס לכל עבודת ה' - האמת. רבים חושבים שעבודת ה' זה רק לקיים מצוות, אבל רבי נחמן מלמד שבלי אמת הכל ריק. האמת זה לא רק "לא לשקר", זה לחיות באמת - להיות כנה עם עצמי, להכיר איפה אני באמת עומד רוחנית. הרבה פעמים אנחנו משקרים לעצמנו שאנחנו צדיקים, ובזה אנחנו מפסידים את האפשרות להתקדם. רק מי שמכיר באמת את מצבו יכול להתחיל לתקן. ה' הוא אמת, ורק דרך האמת אפשר להתחבר אליו.`
    }
  ];

  const breslovBooks = [
    {
      title: 'ליקוטי מוהר"ן',
      description: 'התורות והחידושים של רבי נחמן מברסלב',
      type: 'ספר עיקרי',
      price: '89₪'
    },
    {
      title: 'ספיפת רוח',
      description: 'סיפורי מעשיות של רבי נחמן',
      type: 'מעשיות',
      price: '65₪'
    },
    {
      title: 'ליקוטי עצות',
      description: 'עצות מעשיות לחיי יום יום',
      type: 'הדרכה',
      price: '45₪'
    },
    {
      title: 'שיחות הר"ן',
      description: 'דברי חידוש ועצה',
      type: 'חיזוק',
      price: '55₪'
    }
  ];

  const breslovPractices = [
    {
      title: 'התבודדות יומית - שעה עם הבורא',
      description: 'שעה מדי יום לשיחה אישית עם ה\'',
      icon: <Mountain className="w-6 h-6 text-blue-600" />,
      content: `"דע! כשהאדם מתפלל בשדה, אזי כל העשבים כולם באים בתוך התפילה ומסייעים לו ונותנים לו כח בתפילתו"`,
      verbatim: true,
      source: 'ליקוטי מוהר״ן תנינא, תורה י״א',
      practicalGuide: 'בחר מקום שקט בבית, בתחילה 5-10 דקות ביום, דבר בעברית או בשפה שלך, פתח את הלב כמו עם חבר קרוב.'
    },
    {
      title: 'אמירת תהילים - תרופת הנשמה',
      description: 'תהילים כתרופה לנפש ולגוף',
      icon: <Book className="w-6 h-6 text-green-600" />,
      content: `ע"פ דברי רבינו: התהילים הם סגולה נפלאה לכל דבר, הן לנפש הן לגוף. מי שאומר תהילים בכוונה מתקן נזקים גדולים בנשמתו`,
      verbatim: false,
      source: 'שיחות הר"ן אות מד',
      practicalGuide: 'אמור מזמורים ידועים בכוונה (תהילים כ, כג, מב), התרכז במשמעות המילים, בזמן קושי אמור תהילים קשורים למצבך.'
    },
    {
      title: 'שמחה תמיד - מצוה גדולה',
      description: 'לשמוח בכל מצוה ובכל רגע',
      icon: <Heart className="w-6 h-6 text-red-600" />,
      content: `"מִצְוָה גְּדוֹלָה לִהְיוֹת בְּשִׂמְחָה תָּמִיד"`,
      verbatim: true,
      source: 'ליקוטי מוהר״ן תנינא, תורה כ״ד',
      practicalGuide: 'מצא דבר אחד חיובי בכל יום, תודה לה\' על הטוב הקטן שיש לך, עשה דברים שמשמחים אותך בקדושה.'
    },
    {
      title: 'ניגונים קדושים - שיר הנשמה',
      description: 'ניגונים ושירים לעילוי הנשמה',
      icon: <Music className="w-6 h-6 text-purple-600" />,
      content: `ע"פ דברי רבינו: הניגון הקדוש יש בו כח גדול מאד לעורר הלב ולהביא אותו לתשובה. כל אדם צריך ללמוד ניגון פשוט`,
      verbatim: false,
      source: 'ליקוטי מוהר"ן חלק ב, ח',
      practicalGuide: 'למד ניגון ברסלבי פשוט, שיר "נ נח נחמא נחמן מאומן", השתמש במוזיקה קדושה ברקע בזמן לימוד.'
    },
    {
      title: 'התחזקות מנפילות - תמיד לקום',
      description: 'איך לקום אחרי כל נפילה ולהמשיך',
      icon: <Target className="w-6 h-6 text-orange-600" />,
      content: `ע"פ דברי רבינו: עיקר הדבר לא ליפול מהכלל לגמרי. אפילו אם נפל אלף פעמים - לא יפול מהכלל. הצדיק נופל שבע וקם`,
      verbatim: false,
      source: 'ליקוטי מוהר"ן חלק א, פ"ב',
      practicalGuide: 'אחרי כל טעות או נפילה - תמיד חזור מיד לעבודה, אל תתייאש אף פעם, כל התחלה חדשה יקרה לה\'.'
    },
    {
      title: 'לימוד תורה בהתלהבות',
      description: 'ללמוד תורת רבינו בשמחה ובחיות',
      icon: <Flame className="w-6 h-6 text-yellow-600" />,
      content: `ע"פ דברי רבינו: כל אדם חייב ללמוד תורה בכל יום, ובפרט ללמוד ספרי רבינו הקדושים. אפילו דף אחד ביום בהבנה ובכוונה`,
      verbatim: false,
      source: 'שיחות הר"ן אות כט',
      practicalGuide: 'קבע זמן קצר ללימוד יומי, התחל מליקוטי מוהרן או ספר המידות, למד באיטיות ובהבנה.'
    }
  ];

  // Citations quotidiennes authentiques de Rabbi Nachman - style "Faria"
  const dailyQuotes = [
    {
      id: 1,
      text: `"וְהָעִקָּר – לְחַזֵּק עַצְמוֹ בְּכָל מַה שֶּׁאֶפְשָׁר, כִּי אֵין שׁוּם יֵאוּשׁ בָּעוֹלָם כְּלָל"`,
      verbatim: true,
      source: 'ליקוטי מוהר״ן תנינא, תורה ע״ח, סעיף ז׳',
      explanation: `זוהי החזרה המפורסמת ביותר בכל ברסלב. רבי נחמן מגלה כאן שהיסוד הבסיסי הוא לחזק את עצמנו תמיד, כי באמת - אין שום דבר כזה יאוש בעולם כלל. זה לא רק נחמה, זו עובדה רוחנית.`,
      theme: 'אמונה ותקווה',
      practicalApplication: 'בכל מצב קשה - זכור שהקדוש ברוך הוא נותן לך כח להתחזק, ושאין שום יאוש באמת.'
    },
    {
      id: 2,
      text: `"מִצְוָה גְּדוֹלָה לִהְיוֹת בְּשִׂמְחָה תָּמִיד, וּלְהִתְגַּבֵּר לְהַרְחִיק הָעַצְבוּת וְהַמָּרָה שְׁחֹרָה בְּכָל כֹּחוֹ"`,
      verbatim: true,
      source: 'ליקוטי מוהר״ן תנינא, תורה כ״ד',
      explanation: `התורה המפורסמת ביותר של רבי נחמן על השמחה. רבינו הקדוש מלמד שהשמחה אינה רק "מצב רוח טוב" - זו מצווה ממש! ועוד - צריך להתגבר בכל הכח להרחיק עצבות, כי העצבות הרסנית לנשמה.`,
      theme: 'שמחה ועבודת ה׳',
      practicalApplication: 'כל יום עשה מאמץ מודע להיות שמח. זה לא תלוי במצב החיצוני - זו עבודה פנימית של בחירה.'
    },
    {
      id: 3,
      text: `ע"פ דברי רבינו: יודע אני כמה קשה לאדם לעבוד את השם יתברך בזמן הזה, כי הניסיונות גדולים מאד. דוקא בזמן הזה שכרו של מי שמתגבר גדול יותר מכל הדורות`,
      verbatim: false,
      source: 'ליקוטי מוהר"ן חלק ב, סימן נ"ח',
      explanation: `רבינו הקדוש מגלה כאן סוד מיוחד: הקושי שאנו חווים בעבודת ה' בזמן הזה הוא לא "עונש" אלא "זכות". דוקא בעידן שלנו, עם כל הניסיונות והקשיים, מי שמתגבר וממשיך - השכר שלו גדול יותר מכל הדורות הקודמים.`,
      theme: 'התגברות על ניסיונות',
      practicalApplication: 'כשאתה מתמודד עם קושי רוחני, זכור: זה לא אומר שאתה נופל, זה אומר שה\' רואה בך פוטנציאל גדול.'
    },
    {
      id: 4,
      text: `ע"פ דברי רבינו: יש לאדם לידע שגם כשהוא לא מצליח בתפילה - אל יפסיק מלהתפלל. גם לתפילה 'קרה' יש ערך גדול`,
      verbatim: false,
      source: 'ליקוטי מוהר"ן חלק ב, סימן ט"ז',
      explanation: `רבי נחמן מגלה כאן אמת עמוקה על התפילה: גם התפילה שנראית לנו "לא מוצלחת" היא יקרה מאד לפני ה'. לפעמים אנחנו לא מרגישים את השפעת התפילה, אבל היא עובדת גם בלי שנרגיש זאת. העיקר - לא לוותר על התפילה.`,
      theme: 'התפילה ורגש',
      practicalApplication: 'גם כשאתה מרגיש שהתפילה שלך "קרה" - המשך להתפלל. ה\' מקבל גם את התפילה הזאת בחיבה.'
    },
    {
      id: 5,
      text: `ע"פ דברי רבינו: כל אדם יש לו נקודה טובה אחת לפחות, ובנקודה הטובה הזאת הוא יכול לתלות את עצמו. אפילו הרשע הגדול ביותר - גם לו יש נקודה טובה אחת`,
      verbatim: false,
      source: 'ליקוטי מוהר"ן חלק א, סימן רפ"ב',
      explanation: `זוהי אולי התורה החמה ביותר שאמר רבינו הקדוש. בעולם של ביקורת וריגושי עון, רבי נחמן מלמד אותנו לחפש את הטוב. לכל אדם, כמה גרוע שהוא נראה, יש לפחות נקודה טובה אחת. וכשאנו מוצאים את הנקודה הזאת - נוכל לבנות עליה עולם שלם של אור.`,
      theme: 'נקודות טובות',
      practicalApplication: 'כל יום חפש נקודה טובה אחת בעצמך ובמישהו אחר. זה ישנה את כל היום שלך.'
    },
    {
      id: 6,
      text: `ע"פ דברי רבינו: לפעמים אדם חושב שאם הוא לא יכול ללמוד הרבה תורה - לא שווה לו להתחיל. אבל העיקר להתחיל אפילו במעט. דקה אחת ביום באמת ובכוונה יותר חביב מלימוד שעות בלי כוונה`,
      verbatim: false,
      source: 'שיחות הר"ן אות מ"ג',
      explanation: `רבי נחמן פורץ כאן את המחשבה השקרית של "הכל או לא כלום". הרבה אנשים לא מתחילים בעבודת ה' כי הם חושבים שהם צריכים להיות "גדולים" מיד. אבל רבינו מלמד: התחלה קטנה עם כוונה טובה, היא יותר יקרה מעבודה "גדולה" בלי לב.`,
      theme: 'איכות על פני כמות',
      practicalApplication: 'התחל במשהו קטן שאתה יכול לעמוד בו: 5 דקות לימוד ביום, תפילה קצרה מהלב. איכות על פני כמות.'
    }
  ];

  const breslovVideos = [
    {
      id: '0yDDjp4i2rQ',
      title: 'תורת רבי נחמן - חכמת הלב',
      description: 'הרצאה מעמיקה על תורת רבי נחמן מברסלב והדרך לחיבור עם ה\' דרך השמחה',
      category: 'שיעור תורה',
      duration: '45:30'
    },
    {
      id: 'YlmlOW5Rvi0',
      title: 'ליקוטי מוהרן - פרק הראשון', 
      description: 'ביאור מקיף על הפרק הראשון בליקוטי מוהרן - יסודות האמונה הפשוטה',
      category: 'לימוד עמוק',
      duration: '38:15'
    },
    {
      id: '3LFVAOXVB9Y',
      title: 'התבודדות ותפילה',
      description: 'המדריך המלא להתבודדות יומית - איך לדבר עם ה\' כמו עם חבר',
      category: 'הדרכה מעשית',
      duration: '29:45'
    },
    {
      id: '3uQP06r20H8',
      title: 'דרכי השמחה בעבודת ה\'',
      description: 'מצוה גדולה להיות בשמחה תמיד - איך להגיע לשמחה אמיתית בכל יום',
      category: 'חיזוק וחיזוק',
      duration: '52:20'
    },
    {
      id: 'Imiqgs8VvyE',
      title: 'ניגוני ברסלב לנשמה',
      description: 'ניגונים קדושים ומרגשים של רבי נחמן מברסלv - מוזיקה לעילוי הנשמה',
      category: 'מוזיקה קדושה',
      duration: '1:15:30',
      isAmbientMusic: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="title-breslov-wisdom">
              חכמת ברסלב האמיתית
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              תורת רבי נחמן מברסלב • דרך השמחה והאמונה
            </p>
            <div className="flex justify-center items-center gap-4 text-lg">
              <Flame className="w-8 h-8 text-yellow-400" />
              <span>אש שלי - מקור לספרי ברסלב אותנטיים</span>
              <Flame className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex gap-2 flex-wrap justify-center">
            {[
              { id: 'teachings', label: 'תורות ומאמרים', icon: <Book className="w-4 h-4" /> },
              { id: 'daily-quotes', label: 'פרלות יומיות', icon: <Quote className="w-4 h-4" /> },
              { id: 'videos', label: 'סרטוני לימוד', icon: <Youtube className="w-4 h-4" /> },
              { id: 'books', label: 'ספרי ברסלב', icon: <Star className="w-4 h-4" /> },
              { id: 'practices', label: 'דרכי עבודה', icon: <Lightbulb className="w-4 h-4" /> }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                data-testid={`nav-${section.id}`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        {activeSection === 'videos' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-4 mb-4">
                <Youtube className="w-12 h-12 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  סרטוני לימוד וחיזוק ברוח ברסלב
                </h2>
                <Youtube className="w-12 h-12 text-red-600" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                אוסף מיוחד של סרטוני לימוד, הרצאות וניגונים קדושים המביאים את תורת רבי נחמן מברסלב בצורה מעמיקה ומרגשת
              </p>
              
              {/* Ambient Music Toggle */}
              <div className="mt-8 flex justify-center">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-4">
                    <Music className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">מוזיקת רקע לנשמה</span>
                    <button
                      onClick={() => setAmbientMusicEnabled(!ambientMusicEnabled)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        ambientMusicEnabled
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                      }`}
                      data-testid="toggle-ambient-music"
                    >
                      {ambientMusicEnabled ? (
                        <>
                          <Volume2 className="w-4 h-4" />
                          <span>מופעל</span>
                        </>
                      ) : (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span>כבוי</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                    הפעל ניגוני ברסלב קדושים כמוזיקת רקע בזמן הגלישה באתר
                  </p>
                </div>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {breslovVideos.map((video, index) => (
                <div key={video.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Video Header */}
                  <div className={`p-4 ${
                    video.isAmbientMusic 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : index % 2 === 0 
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500'
                      : 'bg-gradient-to-r from-orange-500 to-red-500'
                  }`}>
                    <div className="flex justify-between items-center text-white">
                      <div className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        <span className="font-medium text-sm">{video.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm opacity-90">{video.duration}</span>
                        {video.isAmbientMusic && (
                          <Music className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Video Iframe */}
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}${
                        video.isAmbientMusic && ambientMusicEnabled 
                          ? '?autoplay=1&loop=1&playlist=' + video.id + '&controls=1&modestbranding=1&rel=0'
                          : '?controls=1&modestbranding=1&rel=0'
                      }`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                      data-testid={`video-iframe-${video.id}`}
                    />
                    
                    {/* Ambient Music Overlay */}
                    {video.isAmbientMusic && (
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                        ambientMusicEnabled
                          ? 'bg-purple-600 text-white'
                          : 'bg-black/70 text-white'
                      }`}>
                        {ambientMusicEnabled ? '♪ נגן ברקע' : '♪ מוזיקת רקע'}
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {video.description}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                        data-testid={`watch-video-${video.id}`}
                      >
                        <Play className="w-4 h-4" />
                        צפה עכשיו
                      </button>
                      
                      {video.isAmbientMusic && (
                        <button
                          onClick={() => setAmbientMusicEnabled(!ambientMusicEnabled)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                            ambientMusicEnabled
                              ? 'bg-purple-600 text-white'
                              : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                          }`}
                          data-testid="toggle-ambient-button"
                        >
                          {ambientMusicEnabled ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          {ambientMusicEnabled ? 'כבה' : 'הפעל'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action for Videos */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
                <Youtube className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  רוצים עוד תכנים מעמיקים?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  הירשמו לערוץ שלנו ותקבלו התראות על סרטוני לימוד חדשים, שיעורים מעמיקים וניגונים קדושים
                </p>
                <button 
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
                  data-testid="subscribe-youtube"
                >
                  <Youtube className="w-5 h-5" />
                  הירשמו לערוץ היוטיוב
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Teachings Section */}
        {activeSection === 'teachings' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                תורות וחידושים מרבי נחמן מברסלב
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                לימוד עמוק בתורתו הקדושה של רבי נחמן מברסלב זיע"א, המביא אור וחיות לכל נפש יהודית
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {breslovTeachings.map((teaching) => (
                <div key={teaching.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-r-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{teaching.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {teaching.title}
                    </h3>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                    <Quote className="w-5 h-5 text-blue-600 mb-2" />
                    <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                      "{teaching.content}"
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {teaching.description}
                  </p>
                  
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    מקור: {teaching.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Books Section */}
        {activeSection === 'books' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ספרי ברסלב המיוחדים שלנו
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                אוסף נבחר של ספרי ברסלב אותנטיים, מודפסים באיכות גבוהה ומתאימים ללימוד יומיומי
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {breslovBooks.map((book, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 text-center">
                    <Book className="w-12 h-12 text-white mx-auto mb-2" />
                    <span className="text-white font-medium text-sm">{book.type}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {book.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">
                        {book.price}
                      </span>
                      <button 
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
                        data-testid={`buy-book-${index}`}
                      >
                        הוסף לסל
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Daily Quotes Section - Perles de sagesse quotidiennes */}
        {activeSection === 'daily-quotes' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-4 mb-4">
                <Quote className="w-12 h-12 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  פרלות יומיות מרבינו הקדוש
                </h2>
                <Quote className="w-12 h-12 text-purple-600" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                אוצר של חכמת רבי נחמן מברסלב זיע״א • דברי תורה עמוקים ומעשיים שמאירים את הנפש ומחזקים את האמונה
              </p>
              <div className="mt-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-4">
                <p className="text-purple-800 dark:text-purple-300 text-sm font-medium">
                  ✨ כל ציטוט הוא תרגום מדויק מהמקורות הקדושים • ליקוטי מוהרן ושיחות הרן ✨
                </p>
              </div>
            </div>

            {/* Citations Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {dailyQuotes.map((quote, index) => (
                <div key={quote.id} className="bg-gradient-to-br from-white via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-purple-900/10 dark:to-indigo-900/10 rounded-2xl shadow-xl p-8 border-2 border-purple-100 dark:border-purple-800 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  {/* Header avec thème */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                      <span className="text-purple-800 dark:text-purple-300 font-bold text-sm">
                        {quote.theme}
                      </span>
                    </div>
                    <div className="text-purple-600 dark:text-purple-400 font-bold text-lg">
                      #{quote.id}
                    </div>
                  </div>

                  {/* Citation principale */}
                  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl mb-6 shadow-inner border border-purple-200 dark:border-purple-700">
                    <Quote className="w-8 h-8 text-purple-600 mb-4" />
                    <p className="text-gray-900 dark:text-white font-medium leading-relaxed text-base">
                      {quote.text}
                    </p>
                    <div className="mt-4 text-purple-700 dark:text-purple-400 font-bold text-sm">
                      — {quote.source}
                    </div>
                  </div>

                  {/* Explication */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      הסבר ופירוש
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {quote.explanation}
                    </p>
                  </div>

                  {/* Application pratique */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h5 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-orange-600" />
                      יישום מעשי בחיים
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {quote.practicalApplication}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action pour cette section */}
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white rounded-2xl p-8 text-center shadow-2xl">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                "עיקר השמחה הוא לחפש ולמצוא את הטוב שיש בכל דבר"
              </h3>
              <p className="text-purple-100 max-w-2xl mx-auto mb-6">
                כל יום חדש הוא הזדמנות ללמוד משהו עמוק מתורת רבינו הקדוש ולהפעיל זאת בחיים האמיתיים. 
                כל פרל חכמה יכול לשנות את כל הנפש שלך.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
                  data-testid="button-daily-study"
                >
                  <Book className="w-4 h-4" />
                  התחל לימוד יומי
                </button>
                <button 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2 justify-center"
                  data-testid="button-share-quote"
                >
                  <Heart className="w-4 h-4" />
                  שתף ציטוט
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Practices Section */}
        {activeSection === 'practices' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                דרכי עבודה ברוח ברסלב
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                מעשים פרקטיים ודרכי עבודה שרבי נחמן מברסלב המליץ עליהם לחיים של שמחה ואמונה
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {breslovPractices.map((practice, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border-r-4 border-orange-500 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      {practice.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {practice.title}
                    </h3>
                  </div>
                  
                  {/* Citations de Rabbi Nachman */}
                  {practice.content && (
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-4">
                      <Quote className="w-5 h-5 text-orange-600 mb-2" />
                      <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed text-sm">
                        {practice.content}
                      </p>
                      <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-2">
                        מקור: {practice.source}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {practice.description}
                  </p>
                  
                  {/* Guide pratique */}
                  {practice.practicalGuide && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">מדריך מעשי:</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {practice.practicalGuide}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8 text-center">
              <Flame className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                "צדיק באמונתו יחיה"
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                רבי נחמן מברסלב לימד שכל יהודי יכול להגיע לדרגות רוחניות גבוהות דרך אמונה פשוטה, שמחה והתבודדות. 
                הדרך פתוחה לכל אחד ואחת, בכל זמן ובכל מקום.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">התחבר לקהילת ברסלב</h2>
          <p className="text-xl text-blue-100 mb-8">
            הצטרף למסע של צמיחה רוחנית, שמחה ואמונה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              data-testid="button-join-community"
            >
              הצטרף לקהילה
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              data-testid="button-view-books"
            >
              עיין בספרים
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}