import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { breslovShiurim, getShiurimByCategory, type Shiur } from '../data/shiurim';
import { AudioPlayer } from '../components/AudioPlayer';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, Play, Download, Clock, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ShiurimPage() {
  const { currentLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedShiur, setSelectedShiur] = useState<Shiur | null>(null);

  // Extraire les catégories uniques
  const categories = useMemo(() => {
    const cats = [...new Set(breslovShiurim.map(shiur => shiur.category))];
    return ['all', ...cats];
  }, []);

  // Filtrer les Shiurim
  const filteredShiurim = useMemo(() => {
    let filtered = breslovShiurim;

    // Filtre par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(shiur => shiur.category === selectedCategory);
    }

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(shiur => 
        shiur.title.toLowerCase().includes(query) ||
        shiur.titleHebrew.includes(query) ||
        shiur.author.toLowerCase().includes(query) ||
        shiur.description?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const getShiurTitle = (shiur: Shiur) => {
    switch (currentLanguage) {
      case 'he':
        return shiur.titleHebrew;
      case 'en':
        return shiur.titleEnglish;
      case 'fr':
        return shiur.titleFrench;
      default:
        return shiur.title;
    }
  };

  const getShiurDescription = (shiur: Shiur) => {
    switch (currentLanguage) {
      case 'he':
        return shiur.descriptionHebrew || shiur.description;
      case 'en':
        return shiur.descriptionEnglish || shiur.description;
      case 'fr':
        return shiur.descriptionFrench || shiur.description;
      default:
        return shiur.description;
    }
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    }
    return `${minutes}min`;
  };

  const handlePlayShiur = (shiur: Shiur) => {
    setSelectedShiur(shiur);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {currentLanguage === 'he' ? 'שיעורים' : 'Shiurim'}
          </h1>
          <p className="text-gray-600">
            {currentLanguage === 'he' 
              ? 'שיעורים מוקלטים של הרב ישראל דב אודסר זצ"ל' 
              : 'Enregistrements audio du Rabbi Yisrael Dov Odesser zt"l'
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Filtres */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              {/* Recherche */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLanguage === 'he' ? 'חיפוש' : 'Recherche'}
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={currentLanguage === 'he' ? 'חיפוש שיעורים...' : 'Rechercher des shiurim...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Catégories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLanguage === 'he' ? 'קטגוריות' : 'Catégories'}
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-orange-100 text-orange-700 border border-orange-200'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' 
                        ? (currentLanguage === 'he' ? 'הכל' : 'Tous')
                        : category
                      }
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Player */}
            {selectedShiur && (
              <div className="mb-8">
                <AudioPlayer
                  audioUrl={selectedShiur.audioUrl}
                  title={getShiurTitle(selectedShiur)}
                  author={selectedShiur.author}
                  duration={selectedShiur.duration}
                />
              </div>
            )}

            {/* Liste des Shiurim */}
            <div className="space-y-4">
              {filteredShiurim.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    {currentLanguage === 'he' ? 'לא נמצאו שיעורים' : 'Aucun shiur trouvé'}
                  </p>
                </div>
              ) : (
                filteredShiurim.map((shiur) => (
                  <div key={shiur.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {getShiurTitle(shiur)}
                        </h3>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-2 space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {shiur.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {formatDuration(shiur.duration)}
                          </div>
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            {shiur.downloadCount || 0} {currentLanguage === 'he' ? 'הורדות' : 'téléchargements'}
                          </div>
                        </div>

                        {getShiurDescription(shiur) && (
                          <p className="text-gray-600 text-sm mb-4">
                            {getShiurDescription(shiur)}
                          </p>
                        )}

                        <div className="flex items-center space-x-2">
                          <Button
                            onClick={() => handlePlayShiur(shiur)}
                            className="flex items-center"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            {currentLanguage === 'he' ? 'השמע' : 'Écouter'}
                          </Button>
                          
                          <Button
                            variant="outline"
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = shiur.audioUrl;
                              link.download = `${getShiurTitle(shiur)}.mp3`;
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                            }}
                            className="flex items-center"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {currentLanguage === 'he' ? 'הורד' : 'Télécharger'}
                          </Button>
                        </div>
                      </div>

                      {/* Thumbnail */}
                      {shiur.thumbnail && (
                        <div className="ml-4">
                          <img
                            src={shiur.thumbnail}
                            alt={getShiurTitle(shiur)}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
