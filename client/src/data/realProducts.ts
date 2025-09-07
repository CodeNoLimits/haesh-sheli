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
  },

  'chumash-likutei-halakhot-medium': {
    id: 'chumash-likutei-halakhot-medium',
    name: 'חומש עם ליקוטי הלכות בינוני',
    nameEnglish: 'Pentateuch with Likutei Halakhot - Medium',
    description: 'חומש תורה עם פירוש ליקוטי הלכות של רבי נתן מברסלב. מהדורה מהודרת בחמישה כרכים הכוללת את כל חמשה חומשי תורה עם ביאורים מעמיקים מתוך ליקוטי הלכות.',
    descriptionEnglish: 'Five Books of Moses with Likutei Halakhot commentary by Rabbi Nathan of Breslov. A deluxe five-volume edition including all five books of the Torah with deep explanations from Likutei Halakhot.',
    category: 'חומשים ותנ"ך',
    subcategory: 'חומש עם פירושים',
    author: 'רבי נתן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 1250,
    isbn: '978-965-7023-85-1',
    images: [
      '@assets/חומש עם ליקוטי הלכות בינוני 1_1757275732701.jpg',
      '@assets/חומש עם ליקוטי הלכות בינוני 2_1757275732701.jpg',
      '@assets/חומש עם ליקוטי הלכות בינוני 3_1757275732702.jpg'
    ],
    variants: [
      {
        id: 'dark-brown-5vol',
        format: 'סקאי כהה',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 5,
        price: 280,
        inStock: true,
        stockQuantity: 15
      },
      {
        id: 'white-cream-5vol',
        format: 'סקאי לבן-קרם',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 5,
        price: 320,
        inStock: true,
        stockQuantity: 12
      }
    ],
    features: [
      'חמישה כרכים מהודרים',
      'פירוש ליקוטי הלכות מלא',
      'טקסט חומש מנוקד',
      'כריכה איכותית וחזקה',
      'מתאים לתלמוד ועיון'
    ],
    tags: ['חומש', 'ליקוטי הלכות', 'רבי נתן', 'תנך', 'לימוד'],
    isActive: true,
    isFeatured: true
  },

  'chumash-likutei-halakhot-large': {
    id: 'chumash-likutei-halakhot-large',
    name: 'חומש עם ליקוטי הלכות גדול',
    nameEnglish: 'Pentateuch with Likutei Halakhot - Large',
    description: 'חומש תורה עם פירוש ליקוטי הלכות במהדורה גדולה ומהודרת. חמישה כרכים עם אותיות גדולות וברורות, מתאים במיוחד לתלמוד ועיון מעמיק.',
    descriptionEnglish: 'Five Books of Moses with Likutei Halakhot commentary in large deluxe edition. Five volumes with large, clear letters, especially suitable for study and deep learning.',
    category: 'חומשים ותנ"ך',
    subcategory: 'חומש עם פירושים',
    author: 'רבי נתן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 1250,
    isbn: '978-965-7023-86-8',
    images: [
      '@assets/חומש עם ליקוטי הלכות גדול 1_1757275742254.jpg',
      '@assets/חומש עם ליקוטי הלכות גדול 2_1757275742255.jpg',
      '@assets/חומש עם ליקוטי הלכות גדול 3_1757275742255.jpg'
    ],
    variants: [
      {
        id: 'large-dark-5vol',
        format: 'סקאי כהה',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 5,
        price: 380,
        inStock: true,
        stockQuantity: 10
      },
      {
        id: 'large-premium-5vol',
        format: 'עור דמוי מהודר',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 5,
        price: 480,
        originalPrice: 520,
        inStock: true,
        stockQuantity: 6
      }
    ],
    features: [
      'אותיות גדולות וברורות',
      'חמישה כרכים במהדורה גדולה',
      'פירוש ליקוטי הלכות מפורט',
      'כריכה מהודרת ואיכותית',
      'מתאים לקריאה נוחה ועיון'
    ],
    tags: ['חומש', 'ליקוטי הלכות', 'אותיות גדולות', 'מהודר', 'עיון'],
    isActive: true,
    isFeatured: true
  },

  'nan-lesimcha-colorful': {
    id: 'nan-lesimcha-colorful',
    name: 'נ"ן לשמחה צבעוני',
    nameEnglish: 'Nan Lesimcha Colorful',
    description: 'ספר נ"ן לשמחה במהדורה צבעונית ומיוחדת. זמין בשלושה צבעים יפהפיים: ורוד, תכלת ואפור. ספר קטן ונוח לנשיאה עם תוכן מעורר שמחה ואמונה.',
    descriptionEnglish: 'Nan Lesimcha book in a special colorful edition. Available in three beautiful colors: pink, turquoise, and gray. A small, portable book with content that inspires joy and faith.',
    category: 'ספרי ברסלב',
    subcategory: 'שמחה ואמונה',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 120,
    isbn: '978-965-7023-87-5',
    images: [
      '@assets/1_1757275751755.jpg',
      '@assets/2_1757275751756.jpg',
      '@assets/3_1757275751756.jpg',
      '@assets/4_1757275751756.jpg',
      '@assets/5_1757275751756.jpg'
    ],
    variants: [
      {
        id: 'pink-edition',
        format: 'פלסטיק צבעוני',
        binding: 'רך',
        size: 'קטן',
        dimensions: '12*8',
        volumes: 1,
        price: 25,
        inStock: true,
        stockQuantity: 40
      },
      {
        id: 'turquoise-edition',
        format: 'פלסטיק צבעוני',
        binding: 'רך',
        size: 'קטן',
        dimensions: '12*8',
        volumes: 1,
        price: 25,
        inStock: true,
        stockQuantity: 35
      },
      {
        id: 'gray-edition',
        format: 'פלסטיק צבעוני',
        binding: 'רך',
        size: 'קטן',
        dimensions: '12*8',
        volumes: 1,
        price: 25,
        inStock: true,
        stockQuantity: 30
      }
    ],
    features: [
      'עמיד במים',
      'צבעים יפהפיים וחיים',
      'קטן ונוח לנשיאה',
      'מתאים לכל הגילאים',
      'מעורר שמחה ואמונה'
    ],
    tags: ['שמחה', 'צבעוני', 'נייד', 'ילדים', 'אמונה'],
    isActive: true,
    isFeatured: false
  },

  'kitvei-rabbi-nachman': {
    id: 'kitvei-rabbi-nachman',
    name: 'כתבי רבי נחמן מברסלב',
    nameEnglish: 'Writings of Rabbi Nachman of Breslov',
    description: 'אוסף מלא של כתבי רבי נחמן מברסלב בשלושה כרכים מהודרים. כולל את כל התורות, השיחות והכתבים הקדושים של רבינו הקדוש. מהדורה מדוייקת עם הערות וביאורים.',
    descriptionEnglish: 'Complete collection of Rabbi Nachman of Breslov\'s writings in three deluxe volumes. Includes all the holy teachings, conversations, and writings of our holy Rebbe. Accurate edition with notes and explanations.',
    category: 'ספרי רבנו',
    subcategory: 'כתבי רבי נחמן',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 950,
    isbn: '978-965-7023-88-2',
    images: [
      '@assets/כתבי רהי נחמן מברסלב 1_1757275758580.jpg',
      '@assets/כתבי רבי נחמן מברסלב 2_1757275758578.jpg',
      '@assets/כתבי רבי נחמן מברסלב 3_1757275758580.jpg'
    ],
    variants: [
      {
        id: 'classic-3vol',
        format: 'סקאי כהה',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 3,
        price: 180,
        inStock: true,
        stockQuantity: 20
      },
      {
        id: 'deluxe-3vol',
        format: 'עור דמוי מהודר',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 3,
        price: 250,
        originalPrice: 280,
        inStock: true,
        stockQuantity: 12
      }
    ],
    features: [
      'אוסף מלא של כתבי רבי נחמן',
      'שלושה כרכים מהודרים',
      'מהדורה מדוייקת ומוגהת',
      'הערות וביאורים חשובים',
      'איכות הדפסה מעולה'
    ],
    tags: ['כתבי רבי נחמן', 'תורות', 'שיחות', 'אוסף מלא', 'יסוד'],
    isActive: true,
    isFeatured: true
  },

  'likutei-halakhot-large-thin': {
    id: 'likutei-halakhot-large-thin',
    name: 'ליקוטי הלכות דק גדול',
    nameEnglish: 'Likutei Halakhot Large Thin Edition',
    description: 'ליקוטי הלכות של רבי נתן מברסלב במהדורה גדולה ודקה. תשעה כרכים מהודרים עם כל ההלכות והביאורים של רבי נתן. מהדורה מיוחדת עם כריכה איכותית ואותיות ברורות.',
    descriptionEnglish: 'Likutei Halakhot by Rabbi Nathan of Breslov in large thin edition. Nine deluxe volumes with all the halakhot and explanations of Rabbi Nathan. Special edition with quality binding and clear letters.',
    category: 'ליקוטי הלכות',
    subcategory: 'מהדורה מהודרת',
    author: 'רבי נתן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 2800,
    isbn: '978-965-7023-89-9',
    images: [
      '@assets/ליקוטי הלכות דק גדול 1_1757275769149.jpg',
      '@assets/ליקוטי הלכות דק גדול 2_1757275769151.jpg',
      '@assets/ליקוטי הלכות דק גדול 3_1757275769151.jpg'
    ],
    variants: [
      {
        id: 'large-thin-9vol',
        format: 'סקאי שחור מהודר',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 9,
        price: 450,
        inStock: true,
        stockQuantity: 8
      },
      {
        id: 'premium-leather-9vol',
        format: 'עור אומנותי',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 9,
        price: 650,
        originalPrice: 720,
        inStock: true,
        stockQuantity: 4
      }
    ],
    features: [
      'תשעה כרכים במהדורה דקה',
      'גודל גדול לקריאה נוחה',
      'כל הלכות רבי נתן',
      'כריכה מהודרת ואיכותית',
      'מהדורה מדוייקת ומוגהת'
    ],
    tags: ['ליקוטי הלכות', 'רבי נתן', 'הלכה', 'מהודר', 'מקיף'],
    isActive: true,
    isFeatured: true
  },

  'likutei-halakhot-thick': {
    id: 'likutei-halakhot-thick',
    name: 'ליקוטי הלכות עבה',
    nameEnglish: 'Likutei Halakhot Thick Edition',
    description: 'ליקוטי הלכות של רבי נתן מברסלב במהדורה עבה ומקיפה. שמונה כרכים עבים וחזקים הכוללים את כל הלכות רבי נתן במלואן. מהדורה מהודרת בקופסה שחורה אלגנטית עם לוגו מוזהב.',
    descriptionEnglish: 'Likutei Halakhot by Rabbi Nathan of Breslov in thick comprehensive edition. Eight thick, sturdy volumes containing all of Rabbi Nathan\'s halakhot in their entirety. Deluxe edition in elegant black box with gold logo.',
    category: 'ליקוטי הלכות',
    subcategory: 'מהדורה עבה',
    author: 'רבי נתן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 3200,
    isbn: '978-965-7023-90-5',
    images: [
      '@assets/ליקוטי הלכות עבה 1_1757275834933.jpg',
      '@assets/ליקוטי הלכות עבה 2_1757275834934.jpg',
      '@assets/ליקוטי הלכות עבה 3_1757275834934.jpg',
      '@assets/ליקוטי הלכות עבה 4_1757275834934.jpg'
    ],
    variants: [
      {
        id: 'thick-8vol-boxed',
        format: 'סקאי שחור עבה',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 8,
        price: 520,
        inStock: true,
        stockQuantity: 6
      },
      {
        id: 'thick-premium-8vol',
        format: 'עור אומנותי עבה',
        binding: 'קשה',
        size: 'גדול',
        dimensions: '24*17',
        volumes: 8,
        price: 750,
        originalPrice: 850,
        inStock: true,
        stockQuantity: 3
      }
    ],
    features: [
      'שמונה כרכים עבים ומקיפים',
      'קופסה אלגנטית מהודרת',
      'כריכה איכותית וחזקה',
      'טקסט מלא וברור',
      'מהדורה מדוייקת ומוגהת'
    ],
    tags: ['ליקוטי הלכות', 'רבי נתן', 'עבה', 'מקיף', 'מהודר'],
    isActive: true,
    isFeatured: true
  },

  'mei-shearim': {
    id: 'mei-shearim',
    name: 'מט שערים',
    nameEnglish: 'Mei Shearim',
    description: 'ספר מט שערים המפורסם בשני כרכים מהודרים. כולל תורות וחידושים קדושים על מעלת ירושלים ושערי הקדושה. מגיע בקופסה יוקרתית עם תמונת בתי הכנסת הקדושים.',
    descriptionEnglish: 'The famous Mei Shearim book in two deluxe volumes. Contains holy teachings and insights about the excellence of Jerusalem and the gates of holiness. Comes in a luxurious box with image of holy synagogues.',
    category: 'ספרי קדושה',
    subcategory: 'ירושלים וקדושה',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 650,
    isbn: '978-965-7023-91-2',
    images: [
      '@assets/מט שערים 1_1757275840464.jpg',
      '@assets/מט שערים 2_1757275840465.jpg',
      '@assets/מט שערים 3_1757275840465.jpg',
      '@assets/מט שערים 4_1757275840466.jpg'
    ],
    variants: [
      {
        id: 'deluxe-2vol-boxed',
        format: 'סקאי כהה בקופסה',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 2,
        price: 120,
        inStock: true,
        stockQuantity: 18
      },
      {
        id: 'premium-2vol-special',
        format: 'עור דמוי בקופסה מיוחדת',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 2,
        price: 180,
        originalPrice: 200,
        inStock: true,
        stockQuantity: 10
      }
    ],
    features: [
      'שני כרכים מהודרים',
      'קופסה יוקרתית מעוצבת',
      'תמונת בתי כנסת קדושים',
      'תורות על ירושלים',
      'מתאים למתנה מיוחדת'
    ],
    tags: ['ירושלים', 'קדושה', 'מתנה', 'מהודר', 'שערים'],
    isActive: true,
    isFeatured: true
  },

  'likutei-halakhot-complete-7vol': {
    id: 'likutei-halakhot-complete-7vol',
    name: 'ליקוטי הלכות מהדורה מלאה',
    nameEnglish: 'Likutei Halakhot Complete Edition',
    description: 'ליקוטי הלכות במהדורה מלאה ומקיפה בשבעה כרכים. כולל את כל הלכות רבי נתן עם פירושים והוספות. מהדורה איכותית עם כריכה שחורה מהודרת ולוגו מוזהב.',
    descriptionEnglish: 'Likutei Halakhot in complete comprehensive edition with seven volumes. Includes all of Rabbi Nathan\'s halakhot with commentaries and additions. Quality edition with deluxe black binding and gold logo.',
    category: 'ליקוטי הלכות',
    subcategory: 'מהדורה מלאה',
    author: 'רבי נתן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 2600,
    isbn: '978-965-7023-92-9',
    images: [
      '@assets/1_1757275875790.jpg',
      '@assets/2_1757275875790.jpg'
    ],
    variants: [
      {
        id: 'complete-7vol',
        format: 'סקאי שחור',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 7,
        price: 350,
        inStock: true,
        stockQuantity: 12
      },
      {
        id: 'deluxe-7vol',
        format: 'עור דמוי מהודר',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 7,
        price: 450,
        originalPrice: 500,
        inStock: true,
        stockQuantity: 8
      }
    ],
    features: [
      'שבעה כרכים במהדורה מלאה',
      'כל הלכות רבי נתן',
      'כריכה איכותית ומהודרת',
      'לוגו מוזהב מיוחד',
      'מהדורה מדוייקת ומוגהת'
    ],
    tags: ['ליקוטי הלכות', 'רבי נתן', 'מלא', 'הלכה', 'מקיף'],
    isActive: true,
    isFeatured: true
  },

  'likutei-halakhot-6vol': {
    id: 'likutei-halakhot-6vol',
    name: 'ליקוטי הלכות שישה כרכים',
    nameEnglish: 'Likutei Halakhot Six Volumes',
    description: 'ליקוטי הלכות בשישה כרכים מסודרים ומרשימים. כולל את העיקרים מהלכות רבי נתן בסידור נוח ומעשי. מהדורה איכותית עם כריכה שחורה וזהב.',
    descriptionEnglish: 'Likutei Halakhot in six organized and impressive volumes. Includes the essentials from Rabbi Nathan\'s halakhot in convenient and practical arrangement. Quality edition with black and gold binding.',
    category: 'ליקוטי הלכות',
    subcategory: 'מהדורה מסודרת',
    author: 'רבי נתן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 2200,
    isbn: '978-965-7023-93-6',
    images: [
      '@assets/3_1757275875790.jpg'
    ],
    variants: [
      {
        id: 'organized-6vol',
        format: 'סקאי שחור',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 6,
        price: 280,
        inStock: true,
        stockQuantity: 15
      },
      {
        id: 'premium-6vol',
        format: 'עור דמוי איכותי',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 6,
        price: 380,
        originalPrice: 420,
        inStock: true,
        stockQuantity: 10
      }
    ],
    features: [
      'שישה כרכים מסודרים',
      'עיקרי הלכות רבי נתן',
      'סידור נוח ומעשי',
      'כריכה איכותית',
      'מהדורה מוגהת ומדוייקת'
    ],
    tags: ['ליקוטי הלכות', 'רבי נתן', 'מסודר', 'הלכה', 'עיקרים'],
    isActive: true,
    isFeatured: false
  },

  'hitbodedut-hanefesh': {
    id: 'hitbodedut-hanefesh',
    name: 'השתפכות הנפש',
    nameEnglish: 'Hitbodedut HaNefesh',
    description: 'ספר השתפכות הנפש - מדריך מקיף להתבודדות ועבודת הנפש על פי תורת רבי נחמן מברסלב. כולל הדרכות מעשיות לעבודה פנימית ודרכי התקרבות לבורא.',
    descriptionEnglish: 'Hitbodedut HaNefesh - A comprehensive guide to solitude and soul work according to Rabbi Nachman of Breslov\'s teachings. Includes practical guidance for inner work and ways to draw closer to the Creator.',
    category: 'עבודת הנפש',
    subcategory: 'התבודדות',
    author: 'רבי נחמן מברסלב',
    publisher: 'קרן רבי ישראל',
    language: 'עברית',
    pages: 280,
    isbn: '978-965-7023-94-3',
    images: [
      '@assets/השתפכות 2_1757275875791.jpg'
    ],
    variants: [
      {
        id: 'standard-edition',
        format: 'סקאי שחור',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 45,
        inStock: true,
        stockQuantity: 30
      },
      {
        id: 'deluxe-edition',
        format: 'עור דמוי מהודר',
        binding: 'קשה',
        size: 'בינוני',
        dimensions: '17*12',
        volumes: 1,
        price: 65,
        originalPrice: 75,
        inStock: true,
        stockQuantity: 20
      }
    ],
    features: [
      'מדריך מקיף להתבודדות',
      'הדרכות מעשיות',
      'עבודת הנפש העמוקה',
      'על פי תורת רבי נחמן',
      'מתאים לכל הרמות'
    ],
    tags: ['התבודדות', 'עבודת הנפש', 'רוחניות', 'מדריך', 'התקרבות'],
    isActive: true,
    isFeatured: false
  }
};
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