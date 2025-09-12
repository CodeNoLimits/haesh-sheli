import { useState, useMemo } from 'react';
import { realBreslovProducts } from '../data/realProducts';
import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
  SidebarTrigger,
  SidebarInput,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator
} from '@/components/ui/sidebar';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X, Filter } from 'lucide-react';
import type { Product } from '../../../shared/schema';

// Filter interfaces
interface Filters {
  categories: string[];
  formats: string[];
  sizes: string[];
  priceRange: [number, number];
  searchQuery: string;
  languages: string[];
}

export default function Store() {
  const { currentLanguage, setLanguage } = useLanguage();
  const allProducts = Object.values(realBreslovProducts);
  
  // Filter states
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    formats: [],
    sizes: [],
    priceRange: [0, 200],
    searchQuery: '',
    languages: []
  });
  
  // Extract unique filter options from products
  const filterOptions = useMemo(() => {
    const categories = new Set<string>();
    const formats = new Set<string>();
    const sizes = new Set<string>();
    const languages = new Set<string>();
    let minPrice = Infinity;
    let maxPrice = 0;
    
    allProducts.forEach(product => {
      categories.add(product.category);
      if (product.language) languages.add(product.language);
      
      product.variants?.forEach(variant => {
        if (variant.format) formats.add(variant.format);
        if (variant.size) sizes.add(variant.size);
        if (variant.price) {
          minPrice = Math.min(minPrice, variant.price);
          maxPrice = Math.max(maxPrice, variant.price);
        }
      });
    });
    
    return {
      categories: Array.from(categories).sort(),
      formats: Array.from(formats).sort(),
      sizes: Array.from(sizes).sort(),
      languages: Array.from(languages).sort(),
      priceRange: [Math.floor(minPrice), Math.ceil(maxPrice)] as [number, number]
    };
  }, [allProducts]);
  
  // Filtered products
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Search query filter
      if (filters.searchQuery && !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) 
          && !product.description?.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      
      // Language filter
      if (filters.languages.length > 0 && !filters.languages.includes(product.language || '')) {
        return false;
      }
      
      // Format and size filters (check variants)
      if (filters.formats.length > 0 || filters.sizes.length > 0 || filters.priceRange) {
        const hasMatchingVariant = product.variants?.some(variant => {
          const formatMatch = filters.formats.length === 0 || filters.formats.includes(variant.format || '');
          const sizeMatch = filters.sizes.length === 0 || filters.sizes.includes(variant.size || '');
          const priceMatch = !variant.price || (variant.price >= filters.priceRange[0] && variant.price <= filters.priceRange[1]);
          return formatMatch && sizeMatch && priceMatch;
        });
        
        if (!hasMatchingVariant) return false;
      }
      
      return true;
    });
  }, [allProducts, filters]);
  
  console.log('✅ STORE: Loading', allProducts.length, 'books, filtered to', filteredProducts.length);
  
  const toggleFilter = <T,>(key: keyof Filters, value: T) => {
    setFilters(prev => {
      const current = prev[key] as T[];
      const newValue = current.includes(value) 
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [key]: newValue };
    });
  };
  
  const clearAllFilters = () => {
    setFilters({
      categories: [],
      formats: [],
      sizes: [],
      priceRange: filterOptions.priceRange,
      searchQuery: '',
      languages: []
    });
  };

  return (
    <div style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      <section style={{background: '#333', color: 'white', padding: '8px 0'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 2rem'}}>
          <span>משלוחים חינם החל מ- 399 ש"ח</span>
        </div>
      </section>

      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen bg-background">
          <Sidebar className="border-r">
            <SidebarHeader className="border-b">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-semibold" data-testid="sidebar-title">🔍 מסנני חיפוש</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAllFilters}
                  data-testid="button-clear-filters"
                >
                  <X className="h-4 w-4" />
                  נקה הכל
                </Button>
              </div>
              <div className="px-4 pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="חיפוש ספרים..."
                    value={filters.searchQuery}
                    onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                    className="pl-10"
                    data-testid="input-search"
                  />
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-4 space-y-6">
              {/* Price Filter */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-base font-semibold mb-3" data-testid="label-price-range">
                  💰 טווח מחירים
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="space-y-3">
                    <Slider
                      min={filterOptions.priceRange[0]}
                      max={filterOptions.priceRange[1]}
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
                      className="w-full"
                      data-testid="slider-price-range"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span data-testid="text-price-min">{filters.priceRange[0]} ₪</span>
                      <span data-testid="text-price-max">{filters.priceRange[1]} ₪</span>
                    </div>
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* Categories Filter */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-base font-semibold mb-3" data-testid="label-categories">
                  📚 קטגוריות
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="space-y-2">
                    {filterOptions.categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Checkbox
                          id={`category-${category}`}
                          checked={filters.categories.includes(category)}
                          onCheckedChange={() => toggleFilter('categories', category)}
                          data-testid={`checkbox-category-${category}`}
                        />
                        <label 
                          htmlFor={`category-${category}`} 
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          data-testid={`text-category-${category}`}
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* Languages Filter */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-base font-semibold mb-3" data-testid="label-languages">
                  🌐 שפות
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="space-y-2">
                    {filterOptions.languages.map((language) => (
                      <div key={language} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Checkbox
                          id={`language-${language}`}
                          checked={filters.languages.includes(language)}
                          onCheckedChange={() => toggleFilter('languages', language)}
                          data-testid={`checkbox-language-${language}`}
                        />
                        <label 
                          htmlFor={`language-${language}`} 
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          data-testid={`text-language-${language}`}
                        >
                          {language}
                        </label>
                      </div>
                    ))}
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* Sizes Filter */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-base font-semibold mb-3" data-testid="label-sizes">
                  📏 גדלים
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="space-y-2">
                    {filterOptions.sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Checkbox
                          id={`size-${size}`}
                          checked={filters.sizes.includes(size)}
                          onCheckedChange={() => toggleFilter('sizes', size)}
                          data-testid={`checkbox-size-${size}`}
                        />
                        <label 
                          htmlFor={`size-${size}`} 
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          data-testid={`text-size-${size}`}
                        >
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* Formats Filter */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-base font-semibold mb-3" data-testid="label-formats">
                  🎨 עיצובים וכריכות
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {filterOptions.formats.slice(0, 10).map((format) => (
                      <div key={format} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Checkbox
                          id={`format-${format}`}
                          checked={filters.formats.includes(format)}
                          onCheckedChange={() => toggleFilter('formats', format)}
                          data-testid={`checkbox-format-${format}`}
                        />
                        <label 
                          htmlFor={`format-${format}`} 
                          className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          data-testid={`text-format-${format}`}
                        >
                          {format}
                        </label>
                      </div>
                    ))}
                    {filterOptions.formats.length > 10 && (
                      <div className="text-xs text-muted-foreground pt-2" data-testid="text-more-formats">
                        ועוד {filterOptions.formats.length - 10} אפשרויות...
                      </div>
                    )}
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex-1">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <SidebarTrigger data-testid="button-toggle-sidebar" />
                  <h1 className="text-3xl font-bold" data-testid="text-page-title">
                    ספרי ברסלב המיוחדים שלנו
                  </h1>
                </div>
                <div className="text-sm text-muted-foreground" data-testid="text-results-count">
                  נמצאו {filteredProducts.length} מתוך {allProducts.length} ספרים
                </div>
              </div>

              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <h2 className="text-green-800 text-lg font-semibold m-0" data-testid="text-inventory-status">
                  ✅ {filteredProducts.length} ספרים במלאי!
                </h2>
                <p className="text-green-700 text-sm mt-1 mb-0">
                  מגוון ספרי קודש מברסלב במחירי הקרן
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100"
                    data-testid={`card-product-${product.id}`}
                  >
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md">
                      💎 מחיר הקרן
                    </div>
                    
                    {/* Image */}
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        data-testid={`img-product-${product.id}`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div 
                        className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500"
                        data-testid={`placeholder-product-${product.id}`}
                      >
                        <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📖</span>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 
                        className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2"
                        data-testid={`text-title-${product.id}`}
                      >
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="text-yellow-400 text-sm" data-testid={`rating-${product.id}`}>★★★★★</div>
                      </div>
                      
                      <div 
                        className="text-lg font-bold text-red-600 mb-2 group-hover:text-red-700 transition-colors"
                        data-testid={`text-price-${product.id}`}
                      >
                        {product.variants && product.variants.length > 0 ? 
                          `${Math.min(...product.variants.map(v => v.price))} ₪ – ${Math.max(...product.variants.map(v => v.price))} ₪` : 
                          'מחיר לא זמין'
                        }
                      </div>
                      
                      <div 
                        className="text-sm text-gray-600 mb-4"
                        data-testid={`text-category-${product.id}`}
                      >
                        {product.category} • {product.variants?.length || 0} אפשרויות
                      </div>
                      
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
                        data-testid={`button-view-details-${product.id}`}
                      >
                        צפייה בפרטים
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12" data-testid="text-no-results">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">לא נמצאו תוצאות</h3>
                  <p className="text-gray-600 mb-4">נסו לשנות את מסנני החיפוש</p>
                  <Button onClick={clearAllFilters} data-testid="button-clear-filters-no-results">
                    נקה את כל המסננים
                  </Button>
                </div>
              )}
              
              <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100 mt-12">
                <p className="text-lg text-gray-700 mb-4" data-testid="text-contact-message">
                  מחפשים ספר נוסף? צרו קשר ונמצא עבורכם!
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg" data-testid="button-contact">
                  צרו קשר לפרטים נוספים
                </Button>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}