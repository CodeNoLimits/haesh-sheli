import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';

export default function Downloads() {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  // Real download links from breslovbooks.com and other authentic sources
  const downloadLinks = {
    rebbeNachman: [
      {
        title: 'ליקוטי מוהרן',
        titleEnglish: 'Likutei Moharan',
        titleFrench: 'Likutei Moharan',
        titleSpanish: 'Likutei Moharan', 
        titleRussian: 'Ликутей Моаран',
        description: 'ספר התורות הקדושות של רבינו נחמן מברסלב',
        descriptionEnglish: 'The holy teachings of Rabbi Nachman of Breslov',
        descriptionFrench: 'Les enseignements sacrés du Rabbi Nachman de Breslov',
        descriptionSpanish: 'Las enseñanzas sagradas del Rabino Nachman de Breslov',
        descriptionRussian: 'Святые учения Рабби Нахмана из Браслава',
        links: {
          hebrew: 'https://archive.org/download/itsurliuemoharan0001nama/itsurliuemoharan0001nama.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-likutey-moharan-vol1.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-likutey-moharan.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-likutey-moharan.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-likutey-moharan.pdf'
        },
        category: 'rebbe-nachman'
      },
      {
        title: 'חיי מוהרן',
        titleEnglish: 'Chayei Moharan',
        titleFrench: 'Vie de Moharan', 
        titleSpanish: 'Vida de Moharan',
        titleRussian: 'Жизнь Моарана',
        description: 'ביוגרפיה של רבינו נחמן מברסלב מאת רבי נתן',
        descriptionEnglish: 'Biography of Rabbi Nachman by Rabbi Nathan',
        descriptionFrench: 'Biographie du Rabbi Nachman par Rabbi Nathan',
        descriptionSpanish: 'Biografía del Rabino Nachman por el Rabino Nathan',
        descriptionRussian: 'Биография Рабби Нахмана от Рабби Натана',
        links: {
          hebrew: 'https://www.sefaria.org/api/v3/texts/Chayei_Moharan?download_format=pdf',
          english: 'https://breslovbooks.com/uploads/files/english-chayei-moharan.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-chayei-moharan.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-chayei-moharan.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-chayei-moharan.pdf'
        },
        category: 'rebbe-nachman'
      },
      {
        title: 'ספר המידות',
        titleEnglish: 'Sefer HaMiddot',
        titleFrench: 'Livre des Traits de Caractère',
        titleSpanish: 'Libro de los Rasgos de Carácter',
        titleRussian: 'Книга Качеств',
        description: 'עצות מעשיות לתיקון המידות מאלף־בית',
        descriptionEnglish: 'Practical advice for character improvement arranged alphabetically',
        descriptionFrench: 'Conseils pratiques pour l\'amélioration du caractère arrangés alphabétiquement',
        descriptionSpanish: 'Consejos prácticos para la mejora del carácter ordenados alfabéticamente',
        descriptionRussian: 'Практические советы по улучшению характера в алфавитном порядке',
        links: {
          hebrew: 'https://www.sefaria.org/api/v3/texts/Sefer_HaMiddot?download_format=pdf',
          english: 'https://breslovbooks.com/uploads/files/english-sefer-hamidot.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-sefer-hamidot.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-sefer-hamidot.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-sefer-hamidot.pdf'
        },
        category: 'rebbe-nachman'
      },
      {
        title: 'סיפורי מעשיות',
        titleEnglish: 'Tales of Rabbi Nachman',
        titleFrench: 'Contes du Rabbi Nachman',
        titleSpanish: 'Cuentos del Rabino Nachman',
        titleRussian: 'Сказки Рабби Нахмана',
        description: 'שלושה עשר סיפורי קודש מרבינו נחמן מברסלב',
        descriptionEnglish: 'Thirteen holy tales from Rabbi Nachman of Breslov',
        descriptionFrench: 'Treize contes sacrés du Rabbi Nachman de Breslov',
        descriptionSpanish: 'Trece cuentos sagrados del Rabino Nachman de Breslov',
        descriptionRussian: 'Тринадцать святых сказок Рабби Нахмана из Браслава',
        links: {
          hebrew: 'https://breslovbooks.com/uploads/files/hebrew-siporay-masiyos.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-siporay-masiyos-new.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-siporay-masiyos.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-siporay-masiyos.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-siporay-masiyos.pdf'
        },
        category: 'rebbe-nachman'
      }
    ],
    rebbeNathan: [
      {
        title: 'ליקוטי תפילות',
        titleEnglish: 'Likutei Tefilot',
        titleFrench: 'Recueil de Prières',
        titleSpanish: 'Colección de Oraciones',
        titleRussian: 'Собрание Молитв',
        description: 'תפילות מיוחדות על פי ליקוטי מוהרן מאת רבי נתן',
        descriptionEnglish: 'Special prayers based on Likutei Moharan by Rabbi Nathan',
        descriptionFrench: 'Prières spéciales basées sur Likutei Moharan par Rabbi Nathan',
        descriptionSpanish: 'Oraciones especiales basadas en Likutei Moharan por el Rabino Nathan',
        descriptionRussian: 'Особые молитвы на основе Ликутей Моаран от Рабби Натана',
        links: {
          hebrew: 'https://breslovbooks.com/uploads/files/hebrew-likutei-tefilot.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-likutei-tefilot.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-likutei-tefilot.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-likutei-tefilot.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-likutei-tefilot.pdf'
        },
        category: 'rebbe-nathan'
      },
      {
        title: 'ליקוטי עצות',
        titleEnglish: 'Likutei Etzot',
        titleFrench: 'Recueil de Conseils',
        titleSpanish: 'Colección de Consejos',
        titleRussian: 'Собрание Советов',
        description: 'עצות מעשיות מליקוטי הלכות מאת רבי נתן',
        descriptionEnglish: 'Practical advice from Likutei Halakhot by Rabbi Nathan',
        descriptionFrench: 'Conseils pratiques du Likutei Halakhot par Rabbi Nathan',
        descriptionSpanish: 'Consejos prácticos del Likutei Halakhot por el Rabino Nathan',
        descriptionRussian: 'Практические советы из Ликутей Алахот от Рабби Натана',
        links: {
          hebrew: 'https://breslovbooks.com/uploads/files/hebrew-likutei-etzot.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-likutei-etzot.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-likutei-etzot.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-likutei-etzot.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-likutei-etzot.pdf'
        },
        category: 'rebbe-nathan'
      }
    ],
    compilations: [
      {
        title: 'תיקון הכללי',
        titleEnglish: 'Tikkun HaKlali',
        titleFrench: 'Réparation Générale',
        titleSpanish: 'Reparación General',
        titleRussian: 'Общее Исправление',
        description: 'עשרה מזמורים לתיקון הברית הקדוש',
        descriptionEnglish: 'Ten Psalms for spiritual rectification',
        descriptionFrench: 'Dix Psaumes pour la rectification spirituelle',
        descriptionSpanish: 'Diez Salmos para la rectificación espiritual',
        descriptionRussian: 'Десять псалмов для духовного исправления',
        links: {
          hebrew: 'https://breslovbooks.com/uploads/files/hebrew-tikkun-haklali.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-tikkun-haklali.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-tikkun-haklali.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-tikkun-haklali.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-tikkun-haklali.pdf'
        },
        category: 'compilations'
      },
      {
        title: 'השתפכות הנפש',
        titleEnglish: 'Hishtapchos HaNefesh',
        titleFrench: 'Épanchement de l\'Âme',
        titleSpanish: 'Derramamiento del Alma',
        titleRussian: 'Излияние Души',
        description: 'תפילות והתבודדות מליקוטי מוהרן',
        descriptionEnglish: 'Prayers and meditation from Likutei Moharan',
        descriptionFrench: 'Prières et méditation du Likutei Moharan',
        descriptionSpanish: 'Oraciones y meditación del Likutei Moharan',
        descriptionRussian: 'Молитвы и медитация из Ликутей Моаран',
        links: {
          hebrew: 'https://breslovbooks.com/uploads/files/hebrew-hishtapchos-hanefesh.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-hishtapchos-hanefesh.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-hishtapchos-hanefesh.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-hishtapchos-hanefesh.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-hishtapchos-hanefesh.pdf'
        },
        category: 'compilations'
      },
      {
        title: 'הצדיק האמת',
        titleEnglish: 'The True Tzaddik',
        titleFrench: 'Le Véritable Tsaddik',
        titleSpanish: 'El Verdadero Tzaddik',
        titleRussian: 'Истинный Цадик',
        description: 'על מעלת הצדיק האמת ונסיעה אליו',
        descriptionEnglish: 'About the virtue of the true Tzaddik and traveling to him',
        descriptionFrench: 'Sur la vertu du véritable Tsaddik et le voyage vers lui',
        descriptionSpanish: 'Sobre la virtud del verdadero Tzaddik y viajar hacia él',
        descriptionRussian: 'О добродетели истинного Цадика и путешествии к нему',
        links: {
          hebrew: 'https://breslovbooks.com/uploads/files/hebrew-the-true-tzaddik.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-the-true-tzaddik.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-the-true-tzaddik.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-the-true-tzaddik.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-the-true-tzaddik.pdf'
        },
        category: 'compilations'
      },
      {
        title: 'משיבת נפש',
        titleEnglish: 'Meshivat Nefesh',
        titleFrench: 'Retour de l\'Âme',
        titleSpanish: 'Retorno del Alma',
        titleRussian: 'Возвращение Души',
        description: 'על התשובה והתעוררות הנפש',
        descriptionEnglish: 'About repentance and spiritual awakening',
        descriptionFrench: 'Sur le repentir et l\'éveil spirituel',
        descriptionSpanish: 'Sobre el arrepentimiento y el despertar espiritual',
        descriptionRussian: 'О покаянии и духовном пробуждении',
        links: {
          hebrew: 'https://breslovbooks.com/uploads/files/hebrew-meshivat-nefesh.pdf',
          english: 'https://breslovbooks.com/uploads/files/english-meshivat-nefesh.pdf',
          french: 'https://breslovbooks.com/uploads/files/french-meshivat-nefesh.pdf',
          spanish: 'https://breslovbooks.com/uploads/files/spanish-meshivat-nefesh.pdf',
          russian: 'https://breslovbooks.com/uploads/files/russian-meshivat-nefesh.pdf'
        },
        category: 'compilations'
      }
    ]
  };

  // Get all books from all categories
  const allBooks = [
    ...downloadLinks.rebbeNachman,
    ...downloadLinks.rebbeNathan,
    ...downloadLinks.compilations
  ];

  // Filter books based on search and filters
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.includes(searchTerm) || 
                         book.titleEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description.includes(searchTerm) ||
                         book.descriptionEnglish.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    
    const matchesLanguage = selectedLanguage === 'all' || book.links[selectedLanguage as keyof typeof book.links];
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const getTitle = (book: any) => {
    switch(currentLanguage) {
      case 'en': return book.titleEnglish;
      case 'fr': return book.titleFrench;
      case 'es': return book.titleSpanish;
      case 'ru': return book.titleRussian;
      default: return book.title;
    }
  };

  const getDescription = (book: any) => {
    switch(currentLanguage) {
      case 'en': return book.descriptionEnglish;
      case 'fr': return book.descriptionFrench;
      case 'es': return book.descriptionSpanish;
      case 'ru': return book.descriptionRussian;
      default: return book.description;
    }
  };

  const getLanguageDisplayName = (langCode: string) => {
    const names = {
      hebrew: { he: 'עברית', en: 'Hebrew', fr: 'Hébreu', es: 'Hebreo', ru: 'Иврит' },
      english: { he: 'אנגלית', en: 'English', fr: 'Anglais', es: 'Inglés', ru: 'Английский' },
      french: { he: 'צרפתית', en: 'French', fr: 'Français', es: 'Francés', ru: 'Французский' },
      spanish: { he: 'ספרדית', en: 'Spanish', fr: 'Espagnol', es: 'Español', ru: 'Испанский' },
      russian: { he: 'רוסית', en: 'Russian', fr: 'Russe', es: 'Ruso', ru: 'Русский' }
    };
    return names[langCode as keyof typeof names][currentLanguage as keyof typeof names['hebrew']] || langCode;
  };

  const isRTL = currentLanguage === 'he';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            {t('freeDownloads')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('downloadDescription')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('search')}
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('searchBooks')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('category')}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">{t('allCategories')}</option>
                <option value="rebbe-nachman">{t('rebbeNachman')}</option>
                <option value="rebbe-nathan">{t('rebbeNathan')}</option>
                <option value="compilations">{t('compilations')}</option>
              </select>
            </div>

            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('downloadLanguage')}
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">{t('allLanguages')}</option>
                <option value="hebrew">{getLanguageDisplayName('hebrew')}</option>
                <option value="english">{getLanguageDisplayName('english')}</option>
                <option value="french">{getLanguageDisplayName('french')}</option>
                <option value="spanish">{getLanguageDisplayName('spanish')}</option>
                <option value="russian">{getLanguageDisplayName('russian')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  {getTitle(book)}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {getDescription(book)}
                </p>
                
                {/* Download Links */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">
                    {t('availableLanguages')}:
                  </h4>
                  {Object.entries(book.links).map(([lang, url]) => (
                    <a
                      key={lang}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {getLanguageDisplayName(lang)}
                      </span>
                      <span className="text-xs opacity-75 group-hover:opacity-100">PDF</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {t('noResultsFound')}
            </h3>
            <p className="text-gray-500">
              {t('tryDifferentSearch')}
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="bg-red-50 rounded-lg p-6 mt-12 text-center">
          <h4 className="font-bold text-red-800 mb-2">
            {t('importantNote')}
          </h4>
          <p className="text-red-700 text-sm">
            {t('freeDownloadNote')}
          </p>
        </div>
      </div>
    </div>
  );
}