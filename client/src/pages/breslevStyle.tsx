import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { breslovDownloadBooks } from '../data/downloadLinks';

export default function BreslevStyle() {
  const { currentLanguage, setLanguage } = useLanguage();
  
  // Featured books (first 4)
  const featuredBooks = breslovDownloadBooks.slice(0, 4);
  
  // Recent books
  const recentBooks = breslovDownloadBooks.slice(4, 8);
  
  // Popular categories
  const popularCategories = [
    'Likutey Moharan',
    'Siporay Masiyos', 
    'Brochures Hébraïques',
    'Likutey Tefilos',
    'Sefer Hamidos'
  ];

  return (
    <div className="min-h-screen bg-white" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      {/* Top Banner - Similar to breslev.co.il */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              {currentLanguage === 'he' ? 'ברוכים הבאים לאוסף ספרי ברסלב' : 'Welcome to Breslov Books Collection'}
            </h2>
            <p className="text-red-100">
              {currentLanguage === 'he' 
                ? 'הורדות חינמיות של ספרי רבי נחמן מברסלב ותלמידיו'
                : 'Free downloads of Rabbi Nachman of Breslov and his students\' books'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Featured Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {currentLanguage === 'he' ? 'ספרים מובילים' : 'Featured Books'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
            {/* Main Featured Article - Large */}
            {featuredBooks.slice(0, 1).map((book, index) => (
              <div key={book.id} className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                      <div className="text-center p-6">
                        <h3 className="text-4xl font-bold text-red-800 mb-2">{book.title}</h3>
                        <p className="text-red-600 text-lg">{book.titleEnglish}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      {currentLanguage === 'he' ? 'מומלץ' : 'Featured'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                    <p className="text-gray-700 mb-4 line-clamp-3">{book.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {book.pages} {currentLanguage === 'he' ? 'עמודים' : 'pages'}
                      </span>
                      <button 
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = book.downloadUrl;
                          link.target = '_blank';
                          link.click();
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        {currentLanguage === 'he' ? 'הורד חינם' : 'Free Download'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Secondary Featured Articles */}
            <div className="col-span-1 space-y-6">
              {featuredBooks.slice(1, 3).map((book) => (
                <div key={book.id} className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 flex-shrink-0 flex items-center justify-center">
                    <div className="text-center p-2">
                      <div className="text-2xl font-bold text-orange-800 mb-1">📚</div>
                      <div className="text-xs text-orange-600">{book.category}</div>
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <h4 className="font-bold text-gray-800 mb-1 line-clamp-2">{book.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                    <p className="text-sm text-gray-700 line-clamp-2 mb-3">{book.description}</p>
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = book.downloadUrl;
                        link.target = '_blank';
                        link.click();
                      }}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      {currentLanguage === 'he' ? 'הורד ←' : 'Download →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section - Like breslev.co.il topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'he' ? 'הנושאים החמים באתר' : 'Popular Topics on Site'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center hover:from-blue-100 hover:to-blue-200 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">
                  {index === 0 ? '📖' : index === 1 ? '✨' : index === 2 ? '📜' : index === 3 ? '🙏' : '💫'}
                </div>
                <h3 className="font-medium text-gray-800 text-sm">
                  {currentLanguage === 'he' ? 
                    category === 'Likutey Moharan' ? 'ליקוטי מוהר"ן' :
                    category === 'Siporay Masiyos' ? 'ספורי מעשיות' :
                    category === 'Brochures Hébraïques' ? 'חוברות' :
                    category === 'Likutey Tefilos' ? 'ליקוטי תפילות' :
                    'ספר המידות'
                    : category
                  }
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Books Section - Similar to breslev videos */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="text-red-600 text-2xl mr-3">📚</div>
            <h2 className="text-2xl font-bold text-gray-800">
              {currentLanguage === 'he' ? 'הספרים החדשים' : 'Recent Books'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📖</div>
                    <div className="text-sm text-green-800 font-medium px-2">{book.category}</div>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {book.pages} {currentLanguage === 'he' ? 'עמ\'' : 'pages'}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-1 line-clamp-2 text-sm">{book.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                  <p className="text-xs text-gray-500">
                    {currentLanguage === 'he' ? 'הורדה' : 'Download'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Books by Categories - Similar to videos by lecturers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentLanguage === 'he' ? 'ספרים לפי קטגוריות' : 'Books by Categories'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'ליקוטי מוהר"ן', emoji: '📖', count: 5 },
              { name: 'ספורי מעשיות', emoji: '✨', count: 7 },
              { name: 'תפילות', emoji: '🙏', count: 4 },
              { name: 'הלכות', emoji: '📜', count: 3 },
              { name: 'חוברות', emoji: '📋', count: 12 },
              { name: 'אחרים', emoji: '💫', count: 8 }
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <h3 className="font-medium text-gray-800 text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} {currentLanguage === 'he' ? 'ספרים' : 'books'}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-red-800 mb-3">
            {currentLanguage === 'he' ? '🔥 האש שלי - ספרי ברסלב אמיתיים' : '🔥 My Fire - Authentic Breslov Books'}
          </h3>
          <p className="text-red-700 mb-4">
            {currentLanguage === 'he' 
              ? 'כל הספרים זמינים להורדה חינמית. אנו מעודדים להדפיס ולהפיץ את הספרים לזכות הרבים.'
              : 'All books are available for free download. We encourage printing and distributing these books for the merit of the many.'
            }
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              {currentLanguage === 'he' ? 'עיין בכל הספרים' : 'Browse All Books'}
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-2 rounded-md font-medium transition-colors">
              {currentLanguage === 'he' ? 'צור קשר' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}