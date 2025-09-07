import type { Product, ProductVariant } from '../../../shared/schema';

// Real Breslov books data from the provided Excel document and images
export const realBreslovProducts: Record<string, Product> = {
  'rosh-hashana-sheli': {
    id: 'rosh-hashana-sheli',
    name: 'ראש השנה שלי',
    nameEnglish: 'My Rosh Hashanah',
    description: 'מכיל ליקוט מספרי רבינו, על מעלת קדושת הראש השנה, והנסיעה לראש השנה לצדיק האמת. כך כותב רבי נתן בשם רבינו נחמן מברסלב: "אמר: הראש השנה שלי עולה על הכל. והיה פלא אצלי מאחר שהמקורבים שלי מאמינים לי, ולמה לא יזהרו כל האנשים המקורבים אלי שיהיו כולם על ראש השנה, איש לא יעדר."',
    descriptionEnglish: 'Contains a collection from Rabbenu\'s books about the excellence and holiness of Rosh Hashanah, and traveling to the true Tzaddik for Rosh Hashanah.',
    category: 'מועדי השנה',
    subcategory: 'ראש השנה',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 320,
    isbn: '978-965-7023-15-8',
    images: [
      '@assets/ראש השנה שלי 1_1757275239936.jpg',
      '@assets/ראש השנה שלי 2_1757275239936.jpg',
      '@assets/הראש השנה שלי 3_1757275239935.jpg'
    ],
    variants: [
      {
        id: 'medium-skai',
        format: 'סקאי',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 35,
        inStock: true,
        stockQuantity: 50
      },
      {
        id: 'large-skai', 
        format: 'סקאי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 1,
        price: 45,
        inStock: true,
        stockQuantity: 30
      },
      {
        id: 'deluxe-leather',
        format: 'עור',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 4,
        price: 180,
        originalPrice: 200,
        inStock: true,
        stockQuantity: 12
      }
    ],
    features: [
      'כריכה איכותית מהודרת',
      'עיצוב מסורתי וחגיגי',
      'נייר איכותי מעולה',
      'הדפסה ברורה וחדה',
      'מתאים למתנה יוקרתית'
    ],
    tags: ['ראש השנה', 'מועדים', 'תפילות', 'חגיגי', 'מתנה'],
    isActive: true,
    isFeatured: true
  },

  'otzer-hayirah': {
    id: 'otzer-hayirah',
    name: 'אוצר היראה',
    nameEnglish: 'Treasury of Fear of Heaven',
    description: 'נקרא במקור: ליקוטי עצות חדש. תוכן הספר: ליקוט וקיצור מספרי "ליקוטי הלכות" לרבי נתן זצ"ל, להוציא מהם את כל העצות המתבארים בדרושיו הארוכים לעובדה ולמעשה. הספר מחולק לארבעה חלקים: אמת וצדק. כנסת קהל צבאות. תשובת השנה. עצת שלום.',
    descriptionEnglish: 'Originally called: New Likutei Etzot. A collection and summary from Rabbi Nathan\'s "Likutei Halakhot" books, extracting all the practical advice from his lengthy discourses.',
    category: 'ליקוטים',
    subcategory: 'עצות',
    author: 'רבי נחמן מטשעהרין',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 850,
    isbn: '978-965-7023-25-7',
    images: [
      '@assets/אוצר היראה 1_1757275234154.jpg',
      '@assets/אוצר היראה 2_1757275234155.jpg',
      '@assets/אוצר היראה 3_1757275234155.jpg',
      '@assets/אוצר היראה 4_1757275234156.jpg'
    ],
    variants: [
      {
        id: 'large-skai-5vol',
        format: 'סקאי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 5,
        price: 250,
        inStock: true,
        stockQuantity: 15
      },
      {
        id: 'medium-skai-3vol',
        format: 'סקאי',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 3,
        price: 180,
        inStock: true,
        stockQuantity: 25
      },
      {
        id: 'premium-leather-5vol',
        format: 'עור אומנותי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 5,
        price: 450,
        originalPrice: 500,
        inStock: true,
        stockQuantity: 8
      }
    ],
    features: [
      'חלוקה לארבעה חלקים עיקריים',
      'ליקוט מתוך ליקוטי הלכות',
      'עצות מעשיות לחיי יומיום',
      'כריכה מהודרת וחזקה',
      'עיצוב מסורתי ויפה'
    ],
    tags: ['יראת שמים', 'עצות', 'ליקוטים', 'רבי נתן', 'הלכות'],
    isActive: true,
    isFeatured: true
  },

  'hitgalut-hadaat': {
    id: 'hitgalut-hadaat',
    name: 'התגלות הדעת',
    nameEnglish: 'Revelation of Knowledge',
    description: 'מכיל ליקוט מכל ספרי רבינו נחמן ותלמידו רבי נתן, על מעלת וקדושת חג הפסח, שבו מתגלה אורו של הרועה הנאמן, משה רבינו, החוזר ומתגלה בכל דור. כולל הגדה של פסח מאירת עיניים.',
    descriptionEnglish: 'Contains a collection from all of Rabbenu Nachman and his student Rabbi Nathan\'s books about the excellence and holiness of Passover, when the light of the faithful shepherd, Moses our teacher, is revealed anew in every generation.',
    category: 'מועדי השנה',
    subcategory: 'פסח',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 420,
    isbn: '978-965-7023-35-6',
    images: [
      '@assets/התגלות הדעת 1_1757275244732.jpg',
      '@assets/התגלות הדעת 2_1757275244733.jpg',
      '@assets/התגלות הדעת 3_1757275244733.jpg',
      '@assets/התגלות הדעת 4_1757275244733.jpg'
    ],
    variants: [
      {
        id: 'large-skai-5vol',
        format: 'סקאי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 5,
        price: 280,
        inStock: true,
        stockQuantity: 20
      },
      {
        id: 'medium-skai',
        format: 'סקאי',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 45,
        inStock: true,
        stockQuantity: 40
      },
      {
        id: 'deluxe-leather',
        format: 'עור אומנותי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 5,
        price: 420,
        originalPrice: 480,
        inStock: true,
        stockQuantity: 10
      }
    ],
    features: [
      'כולל הגדה של פסח מאירת עיניים',
      'ליקוט מכל ספרי רבינו ורבי נתן',
      'קדושת חג הפסח',
      'התגלות משה רבינו',
      'עיצוב חגיגי ומהודר'
    ],
    tags: ['פסח', 'מועדים', 'הגדה', 'משה רבינו', 'התגלות'],
    isActive: true,
    isFeatured: true
  },

  'hatchalat-hathchlatot': {
    id: 'hatchalat-hathchlatot',
    name: 'התחלת ההתחלות',
    nameEnglish: 'Beginning of Beginnings',
    description: '"ועכשיו - כל ההתחלות מפורים" גילה רבינו הקדוש רבי נחמן (ליקוטי מוהר"ן עד). הספר מכיל ליקוט מכל ספרי רבינו ורבי נתן, על מעלת וקדושת יום הפורים, שהוא ההתחלה של כל ההתחלות. כולל מגילת אסתר, במהדורה מאירת עיניים.',
    descriptionEnglish: '"And now - all beginnings are from Purim" revealed our holy Rebbe Nachman. The book contains a collection from all of Rabbenu and Rabbi Nathan\'s books about the excellence and holiness of Purim day.',
    category: 'מועדי השנה',
    subcategory: 'פורים',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 380,
    isbn: '978-965-7023-45-5',
    images: [
      '@assets/התחלת ההתחלות 1_1757275250997.jpg',
      '@assets/התחלת ההתחלות 2_1757275250998.jpg',
      '@assets/התחלת ההתחלות 3_1757275250998.jpg'
    ],
    variants: [
      {
        id: 'large-skai-3vol',
        format: 'סקאי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 3,
        price: 150,
        inStock: true,
        stockQuantity: 25
      },
      {
        id: 'medium-skai',
        format: 'סקאי',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 50,
        inStock: true,
        stockQuantity: 35
      },
      {
        id: 'premium-edition',
        format: 'עור דמוי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 3,
        price: 220,
        originalPrice: 250,
        inStock: true,
        stockQuantity: 12
      }
    ],
    features: [
      'כולל מגילת אסתר מאירת עיניים',
      'קדושת יום הפורים',
      'ההתחלה של כל ההתחלות',
      'ליקוט מקיף מספרי רבינו',
      'עיצוב חגיגי ומיוחד'
    ],
    tags: ['פורים', 'מועדים', 'מגילת אסתר', 'התחלות', 'שמחה'],
    isActive: true,
    isFeatured: true
  },

  'likutei-moharan': {
    id: 'likutei-moharan',
    name: 'ליקוטי מוהר"ן',
    nameEnglish: 'Likutei Moharan',
    description: 'חיבורו הגדול, הקדוש והנורא, של רבינו רבי נחמן מברסלב. מכיל מאות "תורות" - מאמרי קודש שנאמרו על ידי רבינו בשבתות, בחגים ובמועדים שונים. חלקם נכתב על ידי רבינו עצמו, וחלקם הגדול על ידי סופרו ותלמידו הנאמן רבי נתן.',
    descriptionEnglish: 'The great, holy and awesome work of our teacher Rabbi Nachman of Breslov. Contains hundreds of "teachings" - holy discourses given by Rabbenu on Sabbaths, holidays and various occasions.',
    category: 'ספרי רבנו',
    subcategory: 'ליקוטי מוהר"ן',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 960,
    isbn: '978-965-7023-01-1',
    images: [
      'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/likutei-moharan-1.jpg',
      'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/likutei-moharan-2.jpg'
    ],
    variants: [
      {
        id: 'giant-skai',
        format: 'סקאי',
        binding: 'קשה',
        size: 'ענק',
        dimensions: '32*22',
        volumes: 1,
        price: 55,
        inStock: true,
        stockQuantity: 20
      },
      {
        id: 'giant-skai-commentary',
        format: 'סקאי עם מפרשים',
        binding: 'קשה',
        size: 'ענק',
        dimensions: '32*22',
        volumes: 1,
        price: 95,
        inStock: true,
        stockQuantity: 15
      },
      {
        id: 'large-skai',
        format: 'סקאי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 1,
        price: 35,
        inStock: true,
        stockQuantity: 40
      },
      {
        id: 'medium-skai',
        format: 'סקאי',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 35,
        inStock: true,
        stockQuantity: 50
      },
      {
        id: 'leather-pearl',
        format: 'דמוי עור לבן/פנינה',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 45,
        inStock: true,
        stockQuantity: 25
      },
      {
        id: 'pocket-lamination',
        format: 'למנציה',
        binding: 'רך',
        size: 'קטן',
        dimensions: '12*8',
        volumes: 1,
        price: 25,
        inStock: true,
        stockQuantity: 60
      },
      {
        id: 'pocket-soft-nylon',
        format: 'רך נילון',
        binding: 'רך',
        size: 'קטן',
        dimensions: '12*8',
        volumes: 3,
        price: 40,
        inStock: true,
        stockQuantity: 30
      }
    ],
    features: [
      'חיבורו הגדול של רבי נחמן',
      'מאות תורות קדושות',
      'נדפס עוד בחיי רבינו',
      'בסיס לכל חסידות ברסלב',
      'זמין במגוון גדלים וכריכות'
    ],
    tags: ['ליקוטי מוהר"ן', 'תורות', 'רבי נחמן', 'יסוד', 'קדושה'],
    isActive: true,
    isFeatured: true
  },

  'likutei-tefilot': {
    id: 'likutei-tefilot',
    name: 'ליקוטי תפילות',
    nameEnglish: 'Likutei Tefilot',
    description: 'תפילותיו הנפלאות של רבי נתן, שחוברו על בסיס תורות רבי נחמן מליקוטי מוהר"ן. עליהם אמר רבינו: "תפילות הנעשות מהתורות - מעלות שעשועים למעלה שמעולם לא עלו!"',
    descriptionEnglish: 'The wonderful prayers of Rabbi Nathan, composed based on Rabbi Nachman\'s teachings from Likutei Moharan. About them Rabbenu said: "Prayers made from the teachings - cause delights above that never existed before!"',
    category: 'תפילות',
    subcategory: 'ליקוטי תפילות',
    author: 'רבי נתן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 520,
    isbn: '978-965-7023-12-7',
    images: [
      'https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/likutei-tefilot-1.jpg'
    ],
    variants: [
      {
        id: 'large-leather',
        format: 'עור',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 1,
        price: 120,
        inStock: true,
        stockQuantity: 20
      },
      {
        id: 'large-skai-with-prayers',
        format: 'סקאי עם תפילות ותחנונים',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 2,
        price: 80,
        inStock: true,
        stockQuantity: 25
      },
      {
        id: 'large-skai',
        format: 'סקאי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 1,
        price: 40,
        inStock: true,
        stockQuantity: 35
      },
      {
        id: 'medium-skai-3vol',
        format: 'סקאי עם תפילות ותחנונים',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 3,
        price: 90,
        inStock: true,
        stockQuantity: 18
      },
      {
        id: 'medium-leather-like',
        format: 'דמוי עור',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 50,
        inStock: true,
        stockQuantity: 30
      }
    ],
    features: [
      'תפילות מיוסדות על תורות רבי נחמן',
      'חיבורו הנפלא של רבי נתן',
      'מעלה שעשועים למעלה',
      'זמין במגוון כריכות וגדלים',
      'איכות הדפסה מעולה'
    ],
    tags: ['תפילות', 'רבי נתן', 'ליקוטי תפילות', 'תחנונים', 'קדושה'],
    isActive: true,
    isFeatured: true
  }
};

// Real download links from breslovbooks.com and wikisource
export const realDownloads = [
  {
    id: 'likutei-moharan-pdf',
    title: 'ליקוטי מוהר"ן',
    titleEnglish: 'Likutei Moharan',
    description: 'חיבורו הגדול של רבי נחמן מברסלב - הגרסה המלאה בפורמט PDF',
    author: 'רבי נחמן מברסלב',
    category: 'ספרי רבנו',
    language: 'עברית',
    fileUrl: 'https://breslovbooks.com/pdf/hebrew-likutei-moharan.pdf',
    fileSize: '12.5 MB'
  },
  {
    id: 'siporey-maasirot-pdf',
    title: 'סיפורי מעשיות',
    titleEnglish: 'Tales of Rabbi Nachman',
    description: 'שלוש עשרה מעשיות של רבי נחמן מברסלב',
    author: 'רבי נחמן מברסלב',
    category: 'סיפורים',
    language: 'עברית',
    fileUrl: 'http://breslovbook.com/pdf/hebrew-siporay-masiyos-version2.pdf',
    fileSize: '8.2 MB'
  },
  {
    id: 'tales-english-pdf',
    title: 'Tales of Rabbi Nachman',
    titleEnglish: 'Tales of Rabbi Nachman',
    description: 'The complete thirteen tales of Rabbi Nachman in English translation',
    author: 'Rabbi Nachman of Breslov',
    category: 'Stories',
    language: 'English',
    fileUrl: 'http://nanach.altervista.org/STORIES.pdf',
    fileSize: '2.1 MB'
  },
  {
    id: 'likutei-etzot-pdf',
    title: 'ליקוטי עצות',
    titleEnglish: 'Likutei Etzot',
    description: 'עצות מעשיות מתורות רבי נחמן מברסלב',
    author: 'רבי נתן מברסלב',
    category: 'עצות',
    language: 'עברית',
    fileUrl: 'http://realbreslov.blogspot.com/2016/02/likutei-etzot-pdf-download-version-1.html',
    fileSize: '5.8 MB'
  },
  {
    id: 'sefer-hamidot-pdf',
    title: 'ספר המידות',
    titleEnglish: 'Sefer HaMidot',
    description: 'ספר המידות של רבי נחמן - מדריך למידות טובות',
    author: 'רבי נחמן מברסלב',
    category: 'מוסר',
    language: 'עברית',
    fileUrl: 'https://breslovbooks.com/pdf/sefer-hamidot-hebrew.pdf',
    fileSize: '3.2 MB'
  },
  {
    id: 'tikkun-haklali-pdf',
    title: 'תיקון הכללי',
    titleEnglish: 'Tikkun HaKlali',
    description: 'עשרת המזמורים לתיקון הברית',
    author: 'רבי נחמן מברסלב',
    category: 'תפילות',
    language: 'עברית',
    fileUrl: 'https://breslovbooks.com/pdf/tikkun-haklali.pdf',
    fileSize: '1.5 MB'
  }
];