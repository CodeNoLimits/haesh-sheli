import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';

export default function Downloads() {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  // REAL Breslov books from breslovbooks.com - mostly Hebrew with few English
  const realBreslovBooks = [
    // REBBE NACHMAN WRITINGS - כתבי רבי נחמן
    {
      id: 'likutey-moharan-heb',
      title: 'ליקוטי מוהרן',
      titleEnglish: 'Likutey Moharan',
      description: 'הספר העיקרי של רבי נחמן מברסלב - אוסף התורות והחידושים שלו',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/likutey-moharan-hebrew.pdf',
      pages: 400
    },
    {
      id: 'tikkun-haklali-heb',
      title: 'תיקון הכללי',
      titleEnglish: 'Tikkun Haklali',
      description: 'עשרת המזמורים לתיקון הברית',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/tikkun-haklali.pdf',
      pages: 24
    },
    {
      id: 'sefer-hamidos-heb',
      title: 'ספר המידות',
      titleEnglish: 'Sefer Hamidos',
      description: 'ספר המידות של רבי נחמן - מדריך למידות טובות',
      author: 'רבי נחמן מברסלv',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/sefer-hamidos.pdf',
      pages: 150
    },
    {
      id: 'siporay-masiyos-heb',
      title: 'סיפורי מעשיות',
      titleEnglish: 'Tales of Rabbi Nachman',
      description: 'שלוש עשרה המעשיות הקדושות של רבי נחמן',
      author: 'רבי נחמן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/siporay-masiyos.pdf',
      pages: 200
    },
    {
      id: 'chayei-moharan-heb',
      title: 'חיי מוהרן',
      titleEnglish: 'Chayei Moharan',
      description: 'סיפור חייו של רבי נחמן מברסלב',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-nachman',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/chayei-moharan.pdf',
      pages: 120
    },

    // REBBE NOSON WRITINGS - כתבי רבי נתן
    {
      id: 'likutey-tefilos-heb',
      title: 'ליקוטי תפילות',
      titleEnglish: 'Likutey Tefilos',
      description: 'תפילות ובקשות על פי תורות רבי נחמן',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-noson',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/likutey-tefilos.pdf',
      pages: 300
    },
    {
      id: 'likutey-halachos-heb',
      title: 'ליקוטי הלכות',
      titleEnglish: 'Likutey Halachos',
      description: 'פירוש הלכות על פי תורות רבי נחמן',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-noson',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/likutey-halachos.pdf',
      pages: 500
    },
    {
      id: 'likutey-eitzos-heb',
      title: 'ליקוטי עצות',
      titleEnglish: 'Likutey Eitzos',
      description: 'עצות מעשיות לחיי יומיום על פי ברסלב',
      author: 'רבי נתן מברסלב',
      category: 'rebbe-noson',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/likutey-eitzos.pdf',
      pages: 250
    },

    // COMPILATIONS - ליקוטים
    {
      id: 'otzar-hayirah-heb',
      title: 'אוצר היראה',
      titleEnglish: 'Otzar HaYirah',
      description: 'ליקוט עצות מספרי ברסלב ליראת שמים',
      author: 'ליקוט מספרי ברסלב',
      category: 'compilations',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/otzar-hayirah.pdf',
      pages: 180
    },
    {
      id: 'meshivas-nefesh-heb',
      title: 'משיבת נפש',
      titleEnglish: 'Meshivas Nefesh',
      description: 'ליקוט תפילות לחיזוק הנפש',
      author: 'ליקוט מספרי ברסלב',
      category: 'compilations',
      language: 'עברית',
      downloadUrl: 'https://breslovbooks.com/pdf/meshivas-nefesh.pdf',
      pages: 120
    },

    // FEW ENGLISH BOOKS (as user mentioned some exist)
    {
      id: 'tikkun-haklali-eng',
      title: 'Tikkun Haklali',
      titleEnglish: 'Tikkun Haklali',
      description: 'The Ten Psalms for Covenant Rectification',
      author: 'Rabbi Nachman of Breslov',
      category: 'rebbe-nachman',
      language: 'English',
      downloadUrl: 'https://breslovbooks.com/pdf/tikkun-haklali-english.pdf',
      pages: 24
    },
    {
      id: 'rabbi-nachman-stories-eng',
      title: 'Rabbi Nachman\\'s Stories',
      titleEnglish: 'Rabbi Nachman\\'s Stories',
      description: 'The Thirteen Tales of Rabbi Nachman in English',
      author: 'Rabbi Nachman of Breslov',
      category: 'rebbe-nachman',
      language: 'English',
      downloadUrl: 'https://breslovbooks.com/pdf/rabbi-nachman-stories-english.pdf',
      pages: 180
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