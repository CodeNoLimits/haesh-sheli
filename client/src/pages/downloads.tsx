import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { breslovDownloadBooks } from '../data/downloadLinks';
import { useQuery } from '@tanstack/react-query';
import { Crown, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Downloads() {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  // Check subscription status for free access
  const { data: userSubscription } = useQuery({
    queryKey: ['/api/user/subscription'],
    retry: false,
    refetchOnWindowFocus: false,
  });

  const isSubscriber = (userSubscription as any)?.user?.isSubscriber || false;

  // Filter books based on search and filters
  const getFilteredBooks = () => {
    let books = breslovDownloadBooks;
    
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
      case 'Alim Letrufah':
        return currentLanguage === 'he' ? 'עלים לתרופה' : 'Alim Letrufah';
      case 'Ashreinu':
        return currentLanguage === 'he' ? 'אשרנו' : 'Ashreinu';
      case 'Brochures Hébraïques':
        return currentLanguage === 'he' ? 'חוברות בעברית' : 'Hebrew Pamphlets';
      case 'Chalukei Hanachal':
        return currentLanguage === 'he' ? 'חלוקי הנחל' : 'Chalukei Hanachal';
      case 'Chayei Moharan':
        return currentLanguage === 'he' ? 'חיי מוהר"ן' : 'Chayei Moharan';
      case 'Eitzos Mevu\'aros':
        return currentLanguage === 'he' ? 'עצות המבוארות' : 'Eitzos Mevu\'aros';
      case 'Eitzos Yesharos':
        return currentLanguage === 'he' ? 'עצות ישרות' : 'Eitzos Yesharos';
      case 'Hebrew Books':
        return currentLanguage === 'he' ? 'ספרים בעברית' : 'Hebrew Books';
      case 'Hishtapchs HaNefesh':
        return currentLanguage === 'he' ? 'השתפכות הנפש' : 'Hishtapchs HaNefesh';
      case 'Kochvei Ohr':
        return currentLanguage === 'he' ? 'כוכבי אור' : 'Kochvei Ohr';
      case 'Likutey Eitzos':
        return currentLanguage === 'he' ? 'לקוטי עצות' : 'Likutey Eitzos';
      case 'Likutey Halachos':
        return currentLanguage === 'he' ? 'ליקוטי הלכות' : 'Likutey Halachos';
      case 'Likutey Moharan':
        return currentLanguage === 'he' ? 'ליקוטי מוהר"ן' : 'Likutey Moharan';
      case 'Likutey Tefilos':
        return currentLanguage === 'he' ? 'ליקוטי תפילות' : 'Likutey Tefilos';
      case 'Megilat Koheles':
        return currentLanguage === 'he' ? 'מגילת קהלת' : 'Megilat Koheles';
      case 'Meshivas Nefesh':
        return currentLanguage === 'he' ? 'משיבת נפש' : 'Meshivas Nefesh';
      case 'Sefer Hamidos':
        return currentLanguage === 'he' ? 'ספר המידות' : 'Sefer Hamidos';
      case 'Shemos Hatzadikim':
        return currentLanguage === 'he' ? 'שמות הצדיקים' : 'Shemos Hatzadikim';
      case 'Shivchay & Sichos Haran':
        return currentLanguage === 'he' ? 'שבחי ושיחות הר"ן' : 'Shivchay & Sichos Haran';
      case 'Siddur':
        return currentLanguage === 'he' ? 'סידור' : 'Siddur';
      case 'Siporay Masiyos':
        return currentLanguage === 'he' ? 'ספורי מעשיות' : 'Siporay Masiyos';
      case 'Tikkun HaKlali':
        return currentLanguage === 'he' ? 'תיקון הכללי' : 'Tikkun HaKlali';
      case 'Torahs Utefilos':
        return currentLanguage === 'he' ? 'תורות ותפילות' : 'Torahs Utefilos';
      case 'Yimay Maharant':
        return currentLanguage === 'he' ? 'ימי מוהרנ"ת' : 'Yimay Maharant';
      default:
        return category;
    }
  };

  // Get unique categories from the books data
  const getUniqueCategories = () => {
    const categories = Array.from(new Set(breslovDownloadBooks.map(book => book.category)));
    return categories.sort();
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
                {getUniqueCategories().map(category => (
                  <option key={category} value={category}>
                    {getCategoryName(category)}
                  </option>
                ))}
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

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm">
            {currentLanguage === 'he' 
              ? `נמצאו ${filteredBooks.length} ספרים`
              : `Found ${filteredBooks.length} books`
            }
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                {currentLanguage === 'he' ? 'לא נמצאו ספרים' : 'No books found'}
              </p>
            </div>
          ) : (
            filteredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                      {getCategoryName(book.category)}
                    </span>
                  </div>

                  {/* Book Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {currentLanguage === 'he' ? book.title : book.titleEnglish}
                  </h3>

                  {/* Author */}
                  <p className="text-sm text-gray-600 mb-2">
                    {currentLanguage === 'he' ? 'מאת:' : 'By:'} {book.author}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  {/* Book Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{currentLanguage === 'he' ? `${book.pages} עמודים` : `${book.pages} pages`}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {book.language}
                    </span>
                  </div>

                  {/* Download Button */}
                  <button 
                    onClick={() => {
                      // Try direct download first, with fallback handling
                      const link = document.createElement('a');
                      link.href = book.downloadUrl;
                      link.target = '_blank';
                      link.rel = 'noopener noreferrer';
                      
                      // Add error handling
                      const timeout = setTimeout(() => {
                        alert(currentLanguage === 'he' ? 
                          `לא ניתן להוריד ${book.title} כרגע. אנא נסה שוב מאוחר יותר או פנה אלינו לקבלת הספר.` :
                          `Unable to download ${book.titleEnglish} right now. Please try again later or contact us for the book.`
                        );
                      }, 3000);
                      
                      // If successful, clear the timeout
                      link.onload = () => clearTimeout(timeout);
                      link.onerror = () => {
                        clearTimeout(timeout);
                        alert(currentLanguage === 'he' ? 
                          `שגיאה בהורדת ${book.title}. נא ליצור קשר לקבלת הספר.` :
                          `Error downloading ${book.titleEnglish}. Please contact us to get the book.`
                        );
                      };
                      
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 px-4 rounded-md font-medium transition-colors duration-200"
                  >
                    {currentLanguage === 'he' ? 'הורדה חינם' : 'Free Download'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-red-800 mb-3">
              {currentLanguage === 'he' ? 'הערה חשובה' : 'Important Note'}
            </h3>
            <p className="text-red-700 text-sm leading-relaxed">
              {currentLanguage === 'he' 
                ? 'כל הספרים זמינים להורדה חינמית מאתר breslovbooks.com. אנו מעודדים להדפיס ולהפיץ את הספרים לזכות הרבים.'
                : 'All books are available for free download from breslovbooks.com. We encourage printing and distributing these books for the merit of the many.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}