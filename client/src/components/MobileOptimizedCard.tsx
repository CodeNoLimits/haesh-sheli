import { Link } from 'wouter';
import { LazyImage } from './LazyImage';
import { Button } from '@/components/ui/button';
import { convertImagePath } from '../utils/imagePathHelper';
import type { Product } from '../../../shared/schema';

interface MobileOptimizedCardProps {
  product: Product;
}

export function MobileOptimizedCard({ product }: MobileOptimizedCardProps) {
  const getMinPrice = (product: Product) => {
    const prices = product.variants?.map(v => v.price).filter(p => p !== undefined) || [];
    return prices.length > 0 ? Math.min(...prices) : 0;
  };

  const getMaxPrice = (product: Product) => {
    const prices = product.variants?.map(v => v.price).filter(p => p !== undefined) || [];
    return prices.length > 0 ? Math.max(...prices) : 0;
  };

  const minPrice = getMinPrice(product);
  const maxPrice = getMaxPrice(product);
  const hasMultiplePrices = minPrice !== maxPrice;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-200">
      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden">
          <LazyImage
            src={convertImagePath(product.images[0])}
            alt={product.name}
            className="w-full h-full cursor-pointer hover:scale-105 transition-transform duration-200"
            placeholder="/images/placeholder-book.jpg"
            fallback="/images/book-fallback.jpg"
          />
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-3 lg:p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm lg:text-lg mb-2 text-gray-900 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Price - Mobile Optimized */}
        <div className="text-sm lg:text-lg font-bold text-blue-600 mb-2">
          {hasMultiplePrices ? (
            <div className="flex flex-col lg:flex-row lg:gap-1">
              <span>{minPrice}₪</span>
              <span className="text-xs lg:text-sm text-gray-500">- {maxPrice}₪</span>
            </div>
          ) : (
            <span>{minPrice}₪</span>
          )}
        </div>
        
        {/* Category - Mobile Optimized */}
        <div className="text-xs lg:text-sm text-gray-600 mb-3">
          {product.category}
        </div>
        
        {/* Stock Status */}
        {product.variants?.some(v => v.inStock) && (
          <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded mb-3 inline-block">
            במלאי
          </div>
        )}
        
        {/* Button - Mobile Optimized */}
        <Link href={`/product/${product.id}`}>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm lg:text-base py-2 lg:py-3"
          >
            צפייה בפרטים
          </Button>
        </Link>
      </div>
    </div>
  );
}
