import type { Product } from '@/data/realProducts';

function normalize(str: string | null | undefined) {
  return (str || '').trim();
}

function priceRange(price: number, percent: number) {
  const delta = price * percent;
  return [price - delta, price + delta];
}

function getPrimaryPrice(product: Product): number {
  const first = (product.variants || [])[0];
  return first ? first.price : 0;
}

function scoreRelated(current: Product, candidate: Product): number {
  if (candidate.id === current.id) return -Infinity;
  let score = 0;

  // 1) Same category/author/subcategory
  if (normalize(candidate.category) === normalize(current.category)) score += 5;
  if (normalize(candidate.author) === normalize(current.author)) score += 4;
  if (normalize(candidate.subcategory) && normalize(candidate.subcategory) === normalize(current.subcategory)) score += 3;

  // 2) Similar price (+/- 30%)
  const currentPrice = getPrimaryPrice(current);
  const candidatePrice = getPrimaryPrice(candidate);
  const [minP, maxP] = priceRange(currentPrice, 0.3);
  if (candidatePrice >= minP && candidatePrice <= maxP) score += 2;

  // 3) Same language
  if (normalize(candidate.language) === normalize(current.language)) score += 2;

  // 4) Shared tags
  const currentTags = new Set((current.tags || []).map(normalize));
  const candidateTags = (candidate.tags || []).map(normalize);
  const sharedTags = candidateTags.filter(t => t && currentTags.has(t)).length;
  score += Math.min(sharedTags, 3); // cap tag bonus

  return score;
}

export function getRelatedProducts(
  currentProduct: Product,
  allProducts: Product[],
  limit: number = 4
): Product[] {
  const scored = allProducts
    .filter(p => p.id !== currentProduct.id)
    .map(p => ({ p, s: scoreRelated(currentProduct, p) }))
    .filter(({ s }) => s > -Infinity)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map(({ p }) => p);
  return scored;
}

function scoreFbt(current: Product, candidate: Product): number {
  if (candidate.id === current.id) return -Infinity;
  let score = 0;

  // 1) Same series or author (use subcategory/author)
  if (normalize(candidate.subcategory) && normalize(candidate.subcategory) === normalize(current.subcategory)) score += 5;
  if (normalize(candidate.author) === normalize(current.author)) score += 3;

  // 2) Completes a collection (e.g., more volumes)
  const currentVolumes = (current.variants || []).reduce((max, v) => Math.max(max, v.volumes || 1), 1);
  const candidateVolumes = (candidate.variants || []).reduce((max, v) => Math.max(max, v.volumes || 1), 1);
  if (candidateVolumes > 1 || currentVolumes > 1) score += 2;

  // 3) Similar format/binding
  const currentFormats = new Set((current.variants || []).map(v => normalize(v.format)));
  const currentBindings = new Set((current.variants || []).map(v => normalize(v.binding)));
  const candidateFormats = new Set((candidate.variants || []).map(v => normalize(v.format)));
  const candidateBindings = new Set((candidate.variants || []).map(v => normalize(v.binding)));
  const formatOverlap = [...candidateFormats].some(f => f && currentFormats.has(f));
  const bindingOverlap = [...candidateBindings].some(b => b && currentBindings.has(b));
  if (formatOverlap) score += 2;
  if (bindingOverlap) score += 1;

  return score;
}

export function getFrequentlyBoughtTogether(
  currentProduct: Product,
  allProducts: Product[],
  limit: number = 3
): Product[] {
  const scored = allProducts
    .filter(p => p.id !== currentProduct.id)
    .map(p => ({ p, s: scoreFbt(currentProduct, p) }))
    .filter(({ s }) => s > -Infinity)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map(({ p }) => p);
  return scored;
}


