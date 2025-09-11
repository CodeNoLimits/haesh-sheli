import { realBreslovProducts } from '../data/realProducts';
import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { getBookDisplayTitle } from '../utils/bookTitleHelper';
import { getFirstProductImage } from '../utils/imagePathHelper';
import { useState, useMemo } from 'react';
import { useCart } from '../contexts/CartContext';

export default function Store() {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const { addItem, totalItems, setIsCartOpen } = useCart();
  
  // Filter states
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['עברית']); // Hebrew selected by default
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Function to detect language from book title
  const detectLanguageFromTitle = (product: any) => {
    const title = getBookDisplayTitle(product);
    const titleToCheck = title || product.name || '';
    
    // Hebrew detection - contains Hebrew characters
    if (/[\u0590-\u05FF]/.test(titleToCheck)) {
      return 'עברית';
    }
    
    // Russian detection - contains Cyrillic characters
    if (/[\u0400-\u04FF]/.test(titleToCheck)) {
      return 'Русский';
    }
    
    // French detection - French specific words or accents
    if (/[àâäéèêëïîôùûüÿç]/.test(titleToCheck) || 
        /\b(le|la|les|de|du|des|et|avec|pour|dans|sur|par|un|une|ce|cette|qui|que|dont|où|mais|ou|donc|or|ni|car|selon|depuis|pendant|avant|après|sous|sans|avec|contre|entre|parmi|chez|vers|jusqu|depuis|malgré|grâce|cause|suite|lors|durant|moyennant|faute|exception|travers|sein|bord|long|large|bout|sein)\b/i.test(titleToCheck)) {
      return 'Français';
    }
    
    // Spanish detection - Spanish specific words or accents
    if (/[áéíóúüñ¿¡]/.test(titleToCheck) || 
        /\b(el|la|los|las|de|del|y|en|que|es|se|no|te|le|da|su|por|son|con|para|al|lo|le|da|me|si|ya|todo|pero|más|hacer|go|tiempo|muy|puede|ahora|cada|así|vida|sobre|después|sin|hasta|año|contra|entre|durante|menos|tanto|casi|siempre|vez|lugar|bien|día|forma|aquí|allí|donde|cuando|mientras|antes|aunque|porque|como|qué|cuál|dónde|cuándo|cómo|por|qué)\b/i.test(titleToCheck)) {
      return 'Español';
    }
    
    // Default to English for Latin characters
    if (/^[a-zA-Z\s\-.,;:'"()!?0-9]+$/.test(titleToCheck)) {
      return 'English';
    }
    
    // Default fallback
    return 'עברית';
  };

  // Filter products based on selected criteria
  const filteredProducts = useMemo(() => {
    return Object.values(realBreslovProducts).filter(product => {
      // Language filter - detect from title
      const productLanguage = detectLanguageFromTitle(product);
      const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.includes(productLanguage);
      
      // Category filter  
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Search filter
      const matchesSearch = !searchTerm || 
        getBookDisplayTitle(product).toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
        
      return matchesLanguage && matchesCategory && matchesSearch;
    });
  }, [selectedLanguages, selectedCategory, searchTerm]);
  
  return (
    <div className="rtl home page-template-default page page-id-8 wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-5 elementor-page elementor-page-8" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      {/* TOP BAR */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ba655d5 elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile elementor-section-height-default" style={{background: '#333', color: 'white', padding: '8px 0'}}>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-icon-list--layout-inline elementor-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items" style={{display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0}}>
                    <li className="elementor-icon-list-item elementor-inline-item" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span className="elementor-icon-list-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 100 100" style={{width: '16px', height: '16px', fill: 'white'}}>
                          <g>
                            <path d="m72.341 48.514h17.306l-5.266-10.126h-10.872z"></path>
                            <path d="m85.059 62.331h3.516l.339-2.891h-3.529z"></path>
                            <path d="m75.463 62.1c-3.448 0-6.244 2.81-6.244 6.257 0 3.448 2.796 6.244 6.244 6.244s6.257-2.796 6.257-6.244c0-3.447-2.809-6.257-6.257-6.257zm0 9.515c-1.792 0-3.257-1.466-3.257-3.257 0-1.805 1.466-3.258 3.257-3.258 1.805 0 3.258 1.452 3.258 3.258 0 1.791-1.453 3.257-3.258 3.257z"></path>
                            <path d="m31.161 62.1c-3.448 0-6.257 2.81-6.257 6.257 0 3.448 2.81 6.244 6.257 6.244 3.448 0 6.244-2.796 6.244-6.244-.001-3.447-2.797-6.257-6.244-6.257zm0 9.515c-1.805 0-3.271-1.466-3.271-3.257 0-1.805 1.466-3.258 3.271-3.258 1.792 0 3.257 1.452 3.257 3.258 0 1.791-1.466 3.257-3.257 3.257z"></path>
                          </g>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">משלוחים חינם החל מ- 399 ש"ח</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      {/* MAIN CONTENT */}
      <section style={{background: '#f8f9fa', padding: '3rem 0', minHeight: '100vh', overflowY: 'auto'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          
          <div style={{display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'start', height: 'auto'}}>
            
            {/* FILTERS SIDEBAR */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', position: 'sticky', top: '2rem'}}>
              <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333'}}>
                {t('store')}
              </h2>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#dc3545'}}>
                {t('filterBy')}
              </h3>
              
              {/* Search */}
              <div style={{marginBottom: '2rem'}}>
                <label style={{fontWeight: 'bold', marginBottom: '0.8rem', display: 'block', color: '#333'}}>{t('freeSearch')}</label>
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  style={{width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '0.8rem'}}
                />
                <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                  {t('showResults')}
                </button>
              </div>

              {/* Categories */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>{t('categories')}</h4>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '1rem'}}
                >
                  <option value="all">{t('allCategories')}</option>
                  <option value="ספרי רבנו">ספרי רבנו</option>
                  <option value="תפילות">תפילות</option>
                  <option value="מועדי השנה">מועדי השנה</option>
                  <option value="ביוגרפיה">ביוגרפיה</option>
                  <option value="סיפורים">סיפורים</option>
                  <option value="חומשים ותנ&quot;ך">חומשים ותנ&quot;ך</option>
                  <option value="ליקוטי הלכות">ליקוטי הלכות</option>
                  <option value="ספרי ברסלב">ספרי ברסלב</option>
                  <option value="רבי נתן">רבי נתן</option>
                  <option value="מוסר">מוסר</option>
                  <option value="קבלה וחסידות">קבלה וחסידות</option>
                  <option value="ליקוטים">ליקוטים</option>
                </select>
              </div>
              
              {/* Edition Types */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>{t('editionType')}</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    {t('pocketEditions')}
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    {t('luxuryEditions')}
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    {t('completeSets')}
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    {t('illustratedEditions')}
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    {t('leatherBinding')}
                  </label>
                </div>
              </div>

              {/* Languages */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>{t('languages')}</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  {[
                    { key: 'עברית', label: t('hebrew') },
                    { key: 'English', label: t('english') },
                    { key: 'Français', label: t('french') },
                    { key: 'Русский', label: t('russian') },
                    { key: 'Español', label: t('spanish') }
                  ].map(lang => (
                    <label key={lang.key} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        checked={selectedLanguages.includes(lang.key)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLanguages(prev => [...prev, lang.key]);
                          } else {
                            setSelectedLanguages(prev => prev.filter(l => l !== lang.key));
                          }
                        }}
                        style={{marginLeft: '0.5rem'}} 
                      />
                      {lang.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>{t('priceRange')}</h4>
                <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', maxWidth: '100%', overflow: 'hidden'}}>
                  <input 
                    type="number" 
                    placeholder={t('minimum')}
                    style={{width: '70px', maxWidth: '70px', padding: '0.4rem', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'center', fontSize: '0.9rem'}}
                  />
                  <span style={{fontSize: '0.9rem', color: '#666'}}>-</span>
                  <input 
                    type="number" 
                    placeholder={t('maximum')}
                    style={{width: '70px', maxWidth: '70px', padding: '0.4rem', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'center', fontSize: '0.9rem'}}
                  />
                </div>
                <button style={{background: '#17a2b8', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                  {t('showResults')}
                </button>
              </div>
            </div>
            
            {/* PRODUCTS GRID */}
            <div>
              <div style={{marginBottom: '2rem'}}>
                <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem'}}>
                  {t('storeTitle')}
                </h1>
                <p style={{fontSize: '1.1rem', color: '#666'}}>
                  {t('storeSubtitle')}
                </p>
              </div>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem'}}>
                
                {/* Filtered Products */}
                {filteredProducts.map((product) => {
                  const variants = product.variants || [];
                  const minPrice = variants.length > 0 ? Math.min(...variants.map(v => v.price)) : 0;
                  const maxPrice = variants.length > 0 ? Math.max(...variants.map(v => v.price)) : 0;
                  const featuredVariant = variants.find(v => v.inStock) || variants[0];
                  
                  // Use the standardized helper to get the first product image
                  const imagePath = getFirstProductImage(product.images);
                  console.log('Product:', product.name, 'Images:', product.images, 'ImagePath:', imagePath);
                  
                  return (
                    <div key={product.id} style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                      {/* DEBUG INFO */}
                      <div style={{background: '#ffeb3b', padding: '5px', fontSize: '10px', color: '#000'}}>
                        DEBUG: {product.name} | Images: {product.images?.length || 0} | Path: {imagePath || 'EMPTY'}
                      </div>
                      
                      {imagePath ? (
                        <img 
                          src={imagePath}
                          alt={getBookDisplayTitle(product)}
                          style={{width: '100%', height: '300px', objectFit: 'cover'}}
                          onError={(e) => {
                            console.error('Image failed to load:', imagePath);
                            e.currentTarget.src = '/attached_assets/placeholder.jpg';
                          }}
                        />
                      ) : (
                        <div style={{width: '100%', height: '300px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}}>
                          No Image Available - Path Empty
                        </div>
                      )}
                      <div style={{padding: '1.5rem'}}>
                        <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                          {getBookDisplayTitle(product)}
                        </h3>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                          <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                            ★★★★★
                          </div>
                          <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>{t('ratedOutOf')}</span>
                        </div>
                        <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '0.5rem'}}>
                          {minPrice === maxPrice ? `${minPrice} ${t('shekel')}` : `${minPrice} ${t('shekel')} – ${maxPrice} ${t('shekel')}`}
                        </div>
                        <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                          {product.category} • {variants.length} {t('options')}
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem'}}>
                          <a href={`/product/${product.id}`} style={{textDecoration: 'none', flex: 1}}>
                            <button style={{background: '#007bff', color: 'white', border: 'none', padding: '0.8rem 1rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold', fontSize: '0.9rem'}}>
                              {t('viewProduct')}
                            </button>
                          </a>
                          <button 
                            onClick={() => {
                              if (featuredVariant) {
                                addItem({
                                  productId: product.id,
                                  variantId: featuredVariant.id,
                                  name: getBookDisplayTitle(product),
                                  nameEnglish: product.nameEnglish || product.name,
                                  variant: {
                                    format: featuredVariant.format,
                                    binding: featuredVariant.binding,
                                    size: featuredVariant.size
                                  },
                                  price: featuredVariant.price,
                                  quantity: 1,
                                  image: product.images?.[0] || ''
                                });
                                
                                // Show cart briefly to give visual feedback
                                setIsCartOpen(true);
                                setTimeout(() => setIsCartOpen(false), 1500);
                              }
                            }}
                            style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1rem', borderRadius: '5px', cursor: 'pointer', flex: 1, fontWeight: 'bold', fontSize: '0.9rem'}}
                          >
                            {t('addToCart')}
                          </button>
                        </div>
                        <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                          {t('freeShipping')}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* More products available notice */}
                <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                  <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '1rem'}}>
                    {t('moreProducts')}
                  </p>
                  <a href="/contact" style={{textDecoration: 'none'}}>
                    <button style={{background: '#28a745', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold'}}>
                      {t('contactForMore')}
                    </button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}