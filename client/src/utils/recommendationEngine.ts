import type { Product } from '../../../shared/schema';

/**
 * Engine de recommandation pour trouver des livres similaires
 * Basé sur la catégorie, sous-catégorie et auteur
 */
export function getRelatedBooks(productId: string, allProducts: Product[], maxResults: number = 6): Product[] {
  const currentProduct = allProducts.find(p => p.id === productId);
  if (!currentProduct) return [];

  // Score de similarité basé sur plusieurs critères
  const scoredProducts = allProducts
    .filter(p => p.id !== productId) // Exclure le produit actuel
    .map(product => {
      let score = 0;

      // Même catégorie = score élevé
      if (product.category === currentProduct.category) {
        score += 10;
      }

      // Même sous-catégorie = score très élevé
      if (product.subcategory === currentProduct.subcategory) {
        score += 15;
      }

      // Même auteur = score élevé
      if (product.author === currentProduct.author) {
        score += 8;
      }

      // Même éditeur = score moyen
      if (product.publisher === currentProduct.publisher) {
        score += 5;
      }

      // Même langue = score moyen
      if (product.language === currentProduct.language) {
        score += 3;
      }

      // Même nombre de pages (±20%) = score faible
      if (currentProduct.pages && product.pages) {
        const pageDiff = Math.abs(product.pages - currentProduct.pages) / currentProduct.pages;
        if (pageDiff <= 0.2) {
          score += 2;
        }
      }

      return { product, score };
    })
    .filter(item => item.score > 0) // Seulement les produits avec un score positif
    .sort((a, b) => b.score - a.score) // Trier par score décroissant
    .slice(0, maxResults) // Prendre les meilleurs résultats
    .map(item => item.product);

  return scoredProducts;
}

/**
 * Trouve des livres par catégorie spécifique
 */
export function getBooksByCategory(category: string, allProducts: Product[], excludeId?: string): Product[] {
  return allProducts
    .filter(p => p.category === category && p.id !== excludeId)
    .slice(0, 6);
}

/**
 * Trouve des livres du même auteur
 */
export function getBooksByAuthor(author: string, allProducts: Product[], excludeId?: string): Product[] {
  return allProducts
    .filter(p => p.author === author && p.id !== excludeId)
    .slice(0, 6);
}

/**
 * Trouve des livres populaires (basé sur le nombre de variantes disponibles)
 */
export function getPopularBooks(allProducts: Product[], maxResults: number = 6): Product[] {
  return allProducts
    .map(product => ({
      product,
      popularity: product.variants?.length || 0
    }))
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, maxResults)
    .map(item => item.product);
}

/**
 * Trouve des livres récents (basé sur l'ISBN ou l'ordre dans la liste)
 */
export function getRecentBooks(allProducts: Product[], maxResults: number = 6): Product[] {
  // Pour l'instant, on prend les premiers de la liste
  // Plus tard, on pourra ajouter une propriété "dateAdded"
  return allProducts.slice(0, maxResults);
}
