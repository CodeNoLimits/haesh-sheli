// Configuration Builder.io pour le site Haesh Sheli
export const builderConfig = {
  // Clés API Builder.io
  apiKey: process.env.VITE_BUILDER_PUBLIC_KEY || 'your_builder_api_key',
  spaceId: process.env.BUILDER_SPACE_ID || 'your_builder_space_id',
  
  // Configuration des modèles
  models: {
    page: 'page',
    product: 'product',
    blog: 'blog',
    hero: 'hero-section',
    testimonial: 'testimonial'
  },
  
  // Configuration des composants
  components: {
    'hero-section': {
      name: 'Hero Section',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text' },
        { name: 'backgroundImage', type: 'file' },
        { name: 'buttonText', type: 'text' },
        { name: 'buttonLink', type: 'url' }
      ]
    },
    'product-grid': {
      name: 'Product Grid',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'products', type: 'list', subFields: [
          { name: 'productId', type: 'text' },
          { name: 'title', type: 'text' },
          { name: 'price', type: 'number' },
          { name: 'image', type: 'file' }
        ]}
      ]
    },
    'testimonial': {
      name: 'Testimonial',
      fields: [
        { name: 'quote', type: 'longText', required: true },
        { name: 'author', type: 'text', required: true },
        { name: 'authorImage', type: 'file' },
        { name: 'authorTitle', type: 'text' }
      ]
    }
  },
  
  // Configuration des pages
  pages: {
    home: {
      model: 'page',
      url: '/',
      title: 'Accueil - Haesh Sheli'
    },
    about: {
      model: 'page',
      url: '/about',
      title: 'À propos - Haesh Sheli'
    },
    store: {
      model: 'page',
      url: '/store',
      title: 'Boutique - Haesh Sheli'
    }
  },
  
  // Configuration des environnements
  environments: {
    development: {
      apiKey: process.env.VITE_BUILDER_PUBLIC_KEY || 'dev_key',
      spaceId: process.env.BUILDER_SPACE_ID || 'dev_space'
    },
    production: {
      apiKey: process.env.VITE_BUILDER_PUBLIC_KEY || 'prod_key',
      spaceId: process.env.BUILDER_SPACE_ID || 'prod_space'
    }
  }
};

// Fonction pour récupérer le contenu Builder.io
export async function getBuilderContent(model: string, options: any = {}) {
  const { apiKey, spaceId } = builderConfig.environments.production;
  
  if (!apiKey || !spaceId) {
    console.warn('Builder.io API key or Space ID not configured');
    return null;
  }
  
  try {
    const url = `https://cdn.builder.io/api/v1/content/${model}?apiKey=${apiKey}&spaceId=${spaceId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Builder.io API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Builder.io content:', error);
    return null;
  }
}

// Fonction pour publier du contenu sur Builder.io
export async function publishBuilderContent(model: string, content: any) {
  const { apiKey, spaceId } = builderConfig.environments.production;
  
  if (!apiKey || !spaceId) {
    console.warn('Builder.io API key or Space ID not configured');
    return false;
  }
  
  try {
    const url = `https://builder.io/api/v1/content/${model}?apiKey=${apiKey}&spaceId=${spaceId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content)
    });
    
    if (!response.ok) {
      throw new Error(`Builder.io publish error: ${response.status}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error publishing to Builder.io:', error);
    return false;
  }
}
