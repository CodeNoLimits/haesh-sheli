import { useState } from 'react';
import { Star, Heart, Book, Lightbulb, Quote, Mountain, Music, Flame, Play, Volume2, VolumeX, Youtube } from 'lucide-react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BreslovWisdom() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('teachings');
  const [ambientMusicEnabled, setAmbientMusicEnabled] = useState(false);

  const breslovTeachings = [
    {
      id: 'joy',
      title: 'שמחה ואמונה',
      icon: '😊',
      content: 'מצוה גדולה להיות בשמחה תמיד. השמחה היא כח עצום שיכול להעלות את האדם מכל מצב ולחבר אותו לבורא עולם.',
      source: 'ליקוטי מוהר"ן תורה ב\'',
      description: 'רבי נחמן מברסלב מלמד שהשמחה היא לא רק רגש, אלא דרך חיים ושירות ה\'.'
    },
    {
      id: 'prayer',
      title: 'התבודדות ותפילה',
      icon: '🤲',
      content: 'התבודדות - להתיחד עם הבורא בדברי תחנונים ובקשות שאדם מבקש ומשיח לפני ה\' בלשון שמדבר.',
      source: 'ליקוטי מוהר"ן תורה נ"ב',
      description: 'הדרך המיוחדת של רבי נחמן לחיבור אישי עם הקדוש ברוך הוא.'
    },
    {
      id: 'faith',
      title: 'אמונה פשותה',
      icon: '💫',
      content: 'עיקר האמונה היא באמונה פשותה בלי שום חכמות, אלא באמונה תמימה פשוטה כמו ילד קטן.',
      source: 'ליקוטי מוהר"ן תורה ל"ג',
      description: 'רבי נחמן מדגיש את כח האמונה הפשוטה והתמימה.'
    },
    {
      id: 'tikkun',
      title: 'תיקון הנפש',
      icon: '🔧',
      content: 'כל אדם יכול לתקן את עצמו ולחזור בתשובה בכל רגע. אין שום יאוש בעולם כלל.',
      source: 'ליקוטי מוהר"ן תורה ו\'',
      description: 'המסר החזק של רבי נחמן שאין מצב של חוסר תקווה.'
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
      title: 'התבודדות יומית',
      description: 'שעה מדי יום לשיחה אישית עם ה\'',
      icon: <Mountain className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'אמירת תהילים',
      description: 'תהילים כתרופה לנפש ולגוף',
      icon: <Book className="w-6 h-6 text-green-600" />
    },
    {
      title: 'שמחה בעבודת ה\'',
      description: 'לשמוח בכל מצוה ובכל רגע',
      icon: <Heart className="w-6 h-6 text-red-600" />
    },
    {
      title: 'מוזיקה קדושה',
      description: 'ניגונים ושירים לעילוי הנשמה',
      icon: <Music className="w-6 h-6 text-purple-600" />
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex gap-2">
            {[
              { id: 'teachings', label: 'תורות ומאמרים', icon: <Book className="w-4 h-4" /> },
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {breslovPractices.map((practice, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {practice.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {practice.description}
                    </p>
                  </div>
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