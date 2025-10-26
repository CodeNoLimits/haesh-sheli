/**
 * Builder.io API Client
 * Fetch content from Builder.io sans SDK (pour éviter les conflits de dépendances)
 */

const BUILDER_API_KEY = import.meta.env.VITE_BUILDER_PUBLIC_KEY || '03781aef3e954725b18e9139cb9e6001';
const BUILDER_API_BASE = 'https://cdn.builder.io/api/v3/content';

export interface BuilderContent {
  id: string;
  name: string;
  data: {
    blocks: any[];
    [key: string]: any;
  };
  published?: string;
  meta?: {
    kind?: string;
    lastUpdated?: number;
  };
}

export interface BuilderResponse {
  results: BuilderContent[];
}

/**
 * Fetch content from Builder.io
 * @param modelName Model type ('page', 'section', 'symbol', etc.)
 * @param options Query options
 */
export async function fetchBuilderContent(
  modelName: string = 'page',
  options: {
    url?: string;
    query?: Record<string, any>;
    limit?: number;
    cachebust?: boolean;
  } = {}
): Promise<BuilderContent | null> {
  const { url, query = {}, limit = 1, cachebust = false } = options;

  // Build query params
  const params = new URLSearchParams({
    apiKey: BUILDER_API_KEY,
    limit: limit.toString(),
    ...(url && { url }),
    ...query,
    ...(cachebust && { cachebust: Date.now().toString() })
  });

  const fetchUrl = `${BUILDER_API_BASE}/${modelName}?${params}`;

  try {
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error(`Builder.io API error: ${response.status}`);
    }

    const data: BuilderResponse = await response.json();

    if (data.results && data.results.length > 0) {
      return data.results[0];
    }

    return null;
  } catch (error) {
    console.error('Error fetching Builder.io content:', error);
    return null;
  }
}

/**
 * Fetch multiple content entries
 */
export async function fetchBuilderContentMultiple(
  modelName: string = 'page',
  options: {
    query?: Record<string, any>;
    limit?: number;
  } = {}
): Promise<BuilderContent[]> {
  const { query = {}, limit = 100 } = options;

  const params = new URLSearchParams({
    apiKey: BUILDER_API_KEY,
    limit: limit.toString(),
    ...query
  });

  const fetchUrl = `${BUILDER_API_BASE}/${modelName}?${params}`;

  try {
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error(`Builder.io API error: ${response.status}`);
    }

    const data: BuilderResponse = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching Builder.io content:', error);
    return [];
  }
}

/**
 * Register Builder.io components
 * À utiliser dans ton code pour dire à Builder.io quels components React il peut utiliser
 */
export function registerBuilderComponents() {
  // Cette fonction sera appelée côté Builder.io
  // Tu peux la remplir plus tard avec tes components React custom
  return {
    // Exemple:
    // 'MyButton': MyButtonComponent,
    // 'MyHero': MyHeroComponent,
  };
}
