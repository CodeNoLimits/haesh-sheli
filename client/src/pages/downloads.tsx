import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';

export default function Downloads() {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  // REAL Breslov books from breslovbooks.com - authentic URLs from CSV
  const realBreslovBooks = [
    // REBBE NACHMAN WRITINGS - כתבי רבי נחמן
    {
      id: 'likutey-moharan-part1',
      title: 'ליקוטי מוהר"ן חלק א',
      titleEnglish: 'Likutey Moharan Part 1',
      description: 'חלק ראשון של הספר העיקרי של רבי נחמן מברסלב',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-likutey-moharan-part1.pdf',
      pages: 400
    },
    {
      id: 'likutey-moharan-part2',
      title: 'ליקוטי מוהר"ן חלק ב',
      titleEnglish: 'Likutey Moharan Part 2',
      description: 'חלק שני של הספר העיקרי של רבי נחמן מברסלב',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-likutey-moharan-part2.pdf',
      pages: 400
    },
    {
      id: 'likutey-moharan-aramaic',
      title: 'לקוטי מהר"ן השלם עם תרגום ארמי',
      titleEnglish: 'Likutey Moharan Complete with Aramaic Translation',
      description: 'ליקוטי מוהר"ן השלם עם תרגום לארמית',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-likutey-moharan-aramaic.pdf',
      pages: 800
    },
    {
      id: 'kitzur-likutey-moharan',
      title: 'קצור לקוטי מהר"ן',
      titleEnglish: 'Kitzur Likutey Moharan',
      description: 'קיצור ליקוטי מוהר"ן',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-kitzur-likutey-moharan.pdf',
      pages: 200
    },
    {
      id: 'kitzur-likutey-moharan-2',
      title: 'עוד ספר קיצור לקוטי מוהר\'ן',
      titleEnglish: 'Another Kitzur Likutey Moharan',
      description: 'עוד קיצור ליקוטי מוהר"ן',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-kitzur-likutey-moharan-2.pdf',
      pages: 180
    },
    {
      id: 'sipurey-maasiyot',
      title: 'ספורי מעשיות',
      titleEnglish: 'Tales of Rabbi Nachman',
      description: 'שלוש עשרה המעשיות הקדושות של רבי נחמן',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-sipurey-maasiyot.pdf',
      pages: 200
    },
    {
      id: 'sipurey-maasiyot-pictures',
      title: 'ספורי מעשיות עם ציורים',
      titleEnglish: 'Tales with Pictures',
      description: 'סיפורי המעשיות עם איורים מרהיבים',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-sipurey-maasiyot-pictures.pdf',
      pages: 250
    },
    {
      id: 'shivchey-haran',
      title: 'שבחי ושיחות הר\'ן',
      titleEnglish: 'Shivchey HaRan',
      description: 'שבחי ושיחות רבי נחמן מברסלב',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-shivchey-haran.pdf',
      pages: 150
    },
    {
      id: 'chayei-moharan',
      title: 'חיי מוהר"ן',
      titleEnglish: 'Chayei Moharan',
      description: 'סיפור חייו של רבי נחמן מברסלב',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-chayei-moharan.pdf',
      pages: 120
    },
    {
      id: 'sefer-hamidot-complete',
      title: 'ספר המידות השלם',
      titleEnglish: 'Sefer Hamidot Complete',
      description: 'ספר המידות המלא של רבי נחמן מברסלב',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-sefer-hamidot.pdf',
      pages: 200
    },
    {
      id: 'sefer-hamidot-short',
      title: 'ספר המידות הקצר',
      titleEnglish: 'Sefer Hamidot Short',
      description: 'ספר המידות בגרסה מקוצרת',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-sefer-hamidot-short.pdf',
      pages: 100
    },
    {
      id: 'tikkun-haklali',
      title: 'תיקון הכללי',
      titleEnglish: 'Tikkun Haklali',
      description: 'עשרת המזמורים לתיקון הברית',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-tikkun-haklali.pdf',
      pages: 24
    },

    // REBBE NOSON WRITINGS - כתבי רבי נתן
    {
      id: 'likutey-tefilot',
      title: 'ליקוטי תפילות',
      titleEnglish: 'Likutey Tefilot',
      description: 'תפילות ובקשות על פי תורות רבי נחמן',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-noson',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-likutey-tefilot.pdf',
      pages: 300
    },
    {
      id: 'likutey-halachot',
      title: 'ליקוטי הלכות - כל הסט',
      titleEnglish: 'Likutey Halachot Complete Set',
      description: 'פירוש הלכות על פי תורות רבי נחמן - כל הסט',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-noson',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-likutey-halachot-all.pdf',
      pages: 2000
    },
    {
      id: 'likutey-eitzot',
      title: 'לקוטי עצות',
      titleEnglish: 'Likutey Eitzot',
      description: 'עצות מעשיות לחיי יומיום על פי ברסלב',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-noson',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-likutey-eitzot.pdf',
      pages: 250
    },
    {
      id: 'yemey-maharnat',
      title: 'ימי מוהרנ\'ת - ימי התלאות',
      titleEnglish: 'Yemey Maharnat',
      description: 'ימי רבי נתן וימי התלאות',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-noson',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-yemey-maharnat.pdf',
      pages: 180
    },

    // COMPILATIONS AND OTHER BOOKS
    {
      id: 'alim-letrufa',
      title: 'עלים לתרופה',
      titleEnglish: 'Alim Letrufa',
      description: 'עלים לתרופה - ליקוט עצות רפואיות',
      author: 'ליקוט מספרי ברסלב',
      category: 'compilations',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-alim-letrufa.pdf',
      pages: 120
    },
    {
      id: 'meshivat-nefesh',
      title: 'משיבת נפש',
      titleEnglish: 'Meshivat Nefesh',
      description: 'ליקוט תפילות לחיזוק הנפש',
      author: 'ליקוט מספרי ברסלב',
      category: 'compilations',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-meshivat-nefesh.pdf',
      pages: 120
    },
    {
      id: 'hishtapchut-hanefesh',
      title: 'השתפכות הנפש',
      titleEnglish: 'Hishtapchut HaNefesh',
      description: 'השתפכות הנפש - תפילות והתבודדות',
      author: 'ליקוט מספרי ברסלב',
      category: 'compilations',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-hishtapchut-hanefesh.pdf',
      pages: 150
    },
    {
      id: 'siddur',
      title: 'סידור',
      titleEnglish: 'Siddur',
      description: 'סידור תפילות ברסלב',
      author: 'נוסח ברסלב',
      category: 'prayers',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-siddur.pdf',
      pages: 400
    },

    // PAMPHLETS - חוברות
    {
      id: 'pamphlet-rebbe',
      title: 'רבי',
      titleEnglish: 'Rebbe',
      description: 'חוברת על גדולת הצדיק',
      author: 'חוברות ברסלב',
      category: 'pamphlets',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-pamphlet-rebbe.pdf',
      pages: 20
    },
    {
      id: 'pamphlet-simcha',
      title: 'שמחה',
      titleEnglish: 'Joy',
      description: 'חוברת על מעלת השמחה',
      author: 'חוברות ברסלב',
      category: 'pamphlets',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-pamphlet-simcha.pdf',
      pages: 16
    },
    {
      id: 'pamphlet-emuna',
      title: 'אמונה',
      titleEnglish: 'Faith',
      description: 'חוברת על חיזוק האמונה',
      author: 'חוברות ברסלב',
      category: 'pamphlets',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-pamphlet-emuna.pdf',
      pages: 18
    },
    {
      id: 'pamphlet-teshuva',
      title: 'תשובה',
      titleEnglish: 'Repentance',
      description: 'חוברת על מעלת התשובה',
      author: 'חוברות ברסלב',
      category: 'pamphlets',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/uploads/files/hebrew-pamphlet-teshuva.pdf',
      pages: 20
    },

    // ENGLISH BOOKS
    {
      id: 'tikkun-haklali-english',
      title: 'Tikkun Haklali',
      titleEnglish: 'Tikkun Haklali',
      description: 'The Ten Psalms for Covenant Rectification',
      author: 'Rabbi Nachman of Breslov',
      category: 'rebbe-nachman',
      language: 'English',
      downloadUrl: 'https://breslovbooks.com/uploads/files/english-tikkun-haklali.pdf',
      pages: 24
    },
    {
      id: 'the-true-tzaddik',
      title: 'The True Tzadik',
      titleEnglish: 'The True Tzadik',
      description: 'About the nature of the true righteous leader',
      author: 'Breslov Research Institute',
      category: 'english-books',
      language: 'English',
      downloadUrl: 'https://breslovbooks.com/uploads/files/english-the-true-tzaddik.pdf',
      pages: 60
    },
    {
      id: 'holy-nation',
      title: 'Holy Nation on Shmiras Habris',
      titleEnglish: 'Holy Nation on Shmiras Habris',
      description: 'Guidance on personal holiness and purity',
      author: 'Breslov Research Institute',
      category: 'english-books',
      language: 'English',
      downloadUrl: 'https://breslovbooks.com/uploads/files/english-holy-nation-pamphlet.pdf',
      pages: 40
    },
    {
      id: 'likutei-etzot-english',
      title: 'Ongoing project - Likutay Eitzot: Current Draft',
      titleEnglish: 'Likutay Eitzot: Current Draft',
      description: 'Draft translation of Likutey Eitzot in English',
      author: 'Breslov Research Institute',
      category: 'english-books',
      language: 'English',
      downloadUrl: 'https://breslovbooks.com/uploads/files/english-likutei-etzot.pdf',
      pages: 200
    }
  ];

  // Filter books based on search and filters
  const getFilteredBooks = () => {
    let books = realBreslovBooks;
    
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      books = books.filter(book => 
        book.title.toLowerCase().includes(lowerQuery) ||
        book.titleEnglish.toLowerCase().includes(lowerQuery) ||
        book.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    if (selectedCategory !== 'all') {
      books = books.filter(book => book.category === selectedCategory);
    }
    
    if (selectedLanguage !== 'all') {
      books = books.filter(book => book.language === selectedLanguage);
    }
    
    return books;
  };

  const filteredBooks = getFilteredBooks();

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'rebbe-nachman':
        return currentLanguage === 'he' ? 'כתבי רבי נחמן' : 'Rebbe Nachman Writings';
      case 'rebbe-noson':
        return currentLanguage === 'he' ? 'כתבי רבי נתן' : 'Rebbe Noson Writings';
      case 'compilations':
        return currentLanguage === 'he' ? 'ליקוטים וקבצים' : 'Compilations';
      case 'prayers':
        return currentLanguage === 'he' ? 'תפילות' : 'Prayers';
      case 'pamphlets':
        return currentLanguage === 'he' ? 'חוברות' : 'Pamphlets';
      case 'english-books':
        return currentLanguage === 'he' ? 'ספרים באנגלית' : 'English Books';
      default:
        return currentLanguage === 'he' ? 'כל הספרים' : 'All Books';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header currentLanguage={currentLanguage} />
      
      <div className="container mx-auto px-4 py-8" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            {currentLanguage === 'he' ? 'הורדות חינמיות' : 'Free Downloads'}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {currentLanguage === 'he' 
              ? 'הורדו ספרי ברסלב האותנטיים - רוב הספרים זמינים בעברית עם כמה ספרים באנגלית'
              : 'Download authentic Breslov books - Most books available in Hebrew with some English books'
            }
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentLanguage === 'he' ? 'חיפוש' : 'Search'}
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={currentLanguage === 'he' ? 'חפש ספרים...' : 'Search books...'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentLanguage === 'he' ? 'קטגוריה' : 'Category'}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="all">{currentLanguage === 'he' ? 'כל הקטגוריות' : 'All Categories'}</option>
                <option value="rebbe-nachman">{currentLanguage === 'he' ? 'כתבי רבי נחמן' : 'Rebbe Nachman'}</option>
                <option value="rebbe-noson">{currentLanguage === 'he' ? 'כתבי רבי נתן' : 'Rebbe Noson'}</option>
                <option value="compilations">{currentLanguage === 'he' ? 'ליקוטים' : 'Compilations'}</option>
                <option value="prayers">{currentLanguage === 'he' ? 'תפילות' : 'Prayers'}</option>
                <option value="pamphlets">{currentLanguage === 'he' ? 'חוברות' : 'Pamphlets'}</option>
                <option value="english-books">{currentLanguage === 'he' ? 'ספרים באנגלית' : 'English Books'}</option>
              </select>
            </div>

            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentLanguage === 'he' ? 'שפה' : 'Language'}
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="all">{currentLanguage === 'he' ? 'כל השפות' : 'All Languages'}</option>
                <option value="עברית">{currentLanguage === 'he' ? 'עברית' : 'Hebrew'}</option>
                <option value="English">{currentLanguage === 'he' ? 'אנגלית' : 'English'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-gray-600">
          {currentLanguage === 'he' 
            ? `נמצאו ${filteredBooks.length} ספרים`
            : `Found ${filteredBooks.length} books`
          }
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-800 mb-2">
                      {currentLanguage === 'he' ? book.title : book.titleEnglish}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      book.language === 'עברית' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {book.language}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {getCategoryName(book.category)}
                  </span>
                  {book.pages && (
                    <span className="text-xs text-gray-500">
                      {currentLanguage === 'he' ? `${book.pages} עמודים` : `${book.pages} pages`}
                    </span>
                  )}
                </div>
                
                <div className="mt-4">
                  <a
                    href={book.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md text-center transition-colors"
                  >
                    📥 {currentLanguage === 'he' ? 'הורד PDF' : 'Download PDF'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {currentLanguage === 'he' ? 'לא נמצאו תוצאות' : 'No results found'}
            </p>
            <p className="text-gray-400 mt-2">
              {currentLanguage === 'he' ? 'נסה מונחי חיפוש אחרים' : 'Try different search terms'}
            </p>
          </div>
        )}

        {/* Important Note */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-amber-800 mb-2">
            {currentLanguage === 'he' ? 'הערה חשובה' : 'Important Note'}
          </h3>
          <p className="text-amber-700">
            {currentLanguage === 'he' 
              ? 'כל הספרים זמינים להורדה חינמית לפי רוח הברסלב - התורה שלמה תהיה חינם. הקישורים מובילים לאתר breslovbooks.com האותנטי.'
              : 'All books are available for free download in the spirit of Breslov - the entire Torah should be free. Links lead to the authentic breslovbooks.com site.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}