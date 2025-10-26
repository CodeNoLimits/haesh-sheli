/**
 * Builder.io Preview Page
 * Cette page affiche le contenu Builder.io en mode preview/edit
 */

import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { fetchBuilderContent, BuilderContent } from '../lib/builderClient';
import { Header } from '../components/Header';

export default function BuilderPreview() {
  const [location] = useLocation();
  const [content, setContent] = useState<BuilderContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get URL from query params (Builder.io sends ?url=/page-path)
  const params = new URLSearchParams(window.location.search);
  const pageUrl = params.get('url') || location;

  useEffect(() => {
    async function loadBuilderContent() {
      setLoading(true);
      setError(null);

      try {
        const builderContent = await fetchBuilderContent('page', {
          url: pageUrl,
          cachebust: true // Disable cache for preview mode
        });

        if (builderContent) {
          setContent(builderContent);
        } else {
          setError('Page non trouvée dans Builder.io');
        }
      } catch (err) {
        setError('Erreur de chargement du contenu Builder.io');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadBuilderContent();
  }, [pageUrl]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement du contenu Builder.io...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-2">Erreur</h2>
            <p className="text-red-700">{error}</p>
            <p className="text-sm text-red-600 mt-4">URL: {pageUrl}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-yellow-900 mb-2">Page non trouvée</h2>
            <p className="text-yellow-700">
              Aucun contenu Builder.io pour l'URL: {pageUrl}
            </p>
            <p className="text-sm text-yellow-600 mt-4">
              Crée une page dans Builder.io pour cette URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Builder.io Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Meta info (dev mode only) */}
        {import.meta.env.DEV && (
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
            <p className="font-bold text-blue-900">Builder.io Preview Mode</p>
            <p className="text-blue-700">Page ID: {content.id}</p>
            <p className="text-blue-700">Name: {content.name}</p>
            <p className="text-blue-700">URL: {pageUrl}</p>
          </div>
        )}

        {/* Render Builder.io blocks */}
        <div className="builder-content">
          {content.data.blocks && content.data.blocks.length > 0 ? (
            <div>
              {/*
                NOTE: Pour un rendu complet, il faudrait installer le SDK Builder.io
                Pour l'instant, on affiche juste les blocs en JSON
                Tu peux améliorer ça en créant des composants React pour chaque type de bloc
              */}
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
                {JSON.stringify(content.data, null, 2)}
              </pre>
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <p>Aucun contenu à afficher</p>
              <p className="text-sm mt-2">Ajoute des blocs dans l'éditeur Builder.io</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
