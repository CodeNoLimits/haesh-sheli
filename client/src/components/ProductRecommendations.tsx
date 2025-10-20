import React, { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { Product } from '../../../shared/schema';
import { useCart } from '@/contexts/CartContext';
import { convertImagePath } from '@/utils/imagePathHelper';
import { getBookDisplayTitle } from '@/utils/bookTitleHelper';
import { getRelatedProducts, getFrequentlyBoughtTogether } from '@/utils/recommendationEngine';
import { realBreslovProducts } from '@/data/realProducts';

interface ProductRecommendationsProps {
  currentProduct: Product;
  recommendationType: 'related' | 'frequently-bought';
}

export default function ProductRecommendations({ currentProduct, recommendationType }: ProductRecommendationsProps) {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: false, dragFree: true });
  const { addItem } = useCart();

  const allProducts = useMemo(() => Object.values(realBreslovProducts), []);

  const recommended = useMemo(() => {
    if (recommendationType === 'frequently-bought') {
      return getFrequentlyBoughtTogether(currentProduct, allProducts, 4);
    }
    return getRelatedProducts(currentProduct, allProducts, 4);
  }, [recommendationType, currentProduct, allProducts]);

  if (!recommended.length) return null;

  return (
    <section className="rtl" style={{ background: '#ffffff', padding: '2rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#333', marginBottom: '1rem', textAlign: 'right' }}>
          {recommendationType === 'frequently-bought' ? 'לקוחות שקנו גם' : 'מוצרים דומים'}
        </h2>

        {/* Desktop grid */}
        <div className="elementor-hidden-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1rem' }}>
          {recommended.map((p) => (
            <RecommendationCard key={p.id} product={p} onAddToCart={(variantPrice) => {
              const firstVariant = (p.variants || [])[0];
              if (!firstVariant) return;
              addItem({
                productId: p.id,
                variantId: firstVariant.id,
                name: getBookDisplayTitle(p),
                nameEnglish: p.nameEnglish || p.name,
                image: p.images?.[0] || '',
                price: variantPrice,
                quantity: 1,
                variant: {
                  format: firstVariant.format,
                  binding: firstVariant.binding,
                  size: firstVariant.size,
                },
              });
            }} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="elementor-hidden-desktop elementor-hidden-tablet" ref={emblaRef} style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {recommended.map((p) => (
              <div key={p.id} style={{ flex: '0 0 78%', minWidth: 0 }}>
                <RecommendationCard product={p} onAddToCart={(variantPrice) => {
                  const firstVariant = (p.variants || [])[0];
                  if (!firstVariant) return;
                  addItem({
                    productId: p.id,
                    variantId: firstVariant.id,
                    name: getBookDisplayTitle(p),
                    nameEnglish: p.nameEnglish || p.name,
                    image: p.images?.[0] || '',
                    price: variantPrice,
                    quantity: 1,
                    variant: {
                      format: firstVariant.format,
                      binding: firstVariant.binding,
                      size: firstVariant.size,
                    },
                  });
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RecommendationCard({ product, onAddToCart }: { product: Product; onAddToCart: (price: number) => void }) {
  const firstVariant = (product.variants || [])[0];
  const price = firstVariant ? firstVariant.price : 0;
  const img = convertImagePath(product.images?.[0] || '');

  return (
    <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <a href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={img} alt={getBookDisplayTitle(product)} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      </a>
      <div style={{ padding: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <a href={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
          <div style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.2, textAlign: 'right', direction: 'rtl' }}>
            {getBookDisplayTitle(product)}
          </div>
        </a>
        <div style={{ fontSize: '1rem', fontWeight: 800, color: '#dc3545', textAlign: 'left' }}>{price} ₪</div>
        <button
          onClick={() => onAddToCart(price)}
          style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.6rem 0.9rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 800 }}
        >
          הוסף לסל
        </button>
      </div>
    </div>
  );
}


