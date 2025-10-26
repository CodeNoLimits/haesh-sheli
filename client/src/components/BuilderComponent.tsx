import React from 'react';

// Composant Builder.io simple sans dépendances complexes
interface BuilderComponentProps {
  model?: string;
  content?: any;
  apiKey?: string;
  spaceId?: string;
}

export function BuilderComponent({ 
  model = 'page', 
  content, 
  apiKey = 'your_builder_api_key',
  spaceId = 'your_builder_space_id' 
}: BuilderComponentProps) {
  
  // Si on a du contenu, on l'affiche
  if (content) {
    return (
      <div className="builder-content">
        {content.blocks?.map((block: any, index: number) => (
          <div key={index} className="builder-block">
            {renderBlock(block)}
          </div>
        ))}
      </div>
    );
  }

  // Sinon, on affiche un placeholder
  return (
    <div className="builder-placeholder">
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Contenu Builder.io
        </h3>
        <p className="text-gray-500 text-sm">
          Configurez Builder.io pour afficher du contenu dynamique
        </p>
        <div className="mt-4 text-xs text-gray-400">
          API Key: {apiKey ? '✓ Configuré' : '❌ Manquant'}<br/>
          Space ID: {spaceId ? '✓ Configuré' : '❌ Manquant'}
        </div>
      </div>
    </div>
  );
}

function renderBlock(block: any) {
  switch (block.type) {
    case 'text':
      return (
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-4">{block.text}</h1>
        </div>
      );
    case 'image':
      return (
        <img 
          src={block.image} 
          alt={block.alt || ''} 
          className="w-full h-auto rounded-lg"
        />
      );
    case 'button':
      return (
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          {block.text}
        </button>
      );
    default:
      return (
        <div className="p-4 border border-gray-200 rounded">
          <p className="text-sm text-gray-600">
            Bloc non reconnu: {block.type}
          </p>
        </div>
      );
  }
}

// Hook pour récupérer le contenu Builder.io
export function useBuilderContent(model: string, apiKey?: string, spaceId?: string) {
  const [content, setContent] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!apiKey || !spaceId) return;

    setLoading(true);
    
    // Simulation d'un appel API Builder.io
    const fetchContent = async () => {
      try {
        // Ici on ferait un vrai appel à l'API Builder.io
        // const response = await fetch(`https://cdn.builder.io/api/v1/content/${model}?apiKey=${apiKey}&spaceId=${spaceId}`);
        // const data = await response.json();
        
        // Pour l'instant, on simule du contenu
        const mockContent = {
          blocks: [
            {
              type: 'text',
              text: 'Bienvenue sur le site Haesh Sheli'
            },
            {
              type: 'image',
              image: '/images/hero-books-composition.png',
              alt: 'Livres de Breslov'
            },
            {
              type: 'button',
              text: 'Découvrir la boutique'
            }
          ]
        };
        
        setContent(mockContent);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [model, apiKey, spaceId]);

  return { content, loading, error };
}
