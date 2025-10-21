import { useState } from 'react';
import { useRoute } from 'wouter';
import { realBreslovProducts } from '../data/realProducts';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { useToast } from '@/hooks/use-toast';
import { getBookDisplayTitle } from '../utils/bookTitleHelper';
import { convertImagePath } from '../utils/imagePathHelper';
import type { Product } from '../../../shared/schema';
import ProductRecommendations from '@/components/ProductRecommendations';
import { getRelatedProducts, getFrequentlyBoughtTogether } from '@/utils/recommendationEngine';

const productTranslations = {
  he: {
    notFound: 'מוצר לא נמצא',
    error: 'שגיאה: לא נמצאו גרסאות למוצר',
    freeShipping: 'משלוחים חינם החל מ- 399 ש"ח',
    addToCart: 'הוסף לסל',
    quantity: 'כמות',
    chooseVariant: 'בחר גרסה',
    price: 'מחיר',
    inStock: 'במלאי',
    outOfStock: 'אזל מהמלאי',
    description: 'תיאור',
    details: 'פרטים',
    author: 'מחבר',
    publisher: 'הוצאה',
    pages: 'עמודים',
    language: 'שפה',
    category: 'קטגוריה'
  },
  en: {
    notFound: 'Product not found',
    error: 'Error: No variants found for product',
    freeShipping: 'Free shipping from ₪399',
    addToCart: 'Add to Cart',
    quantity: 'Quantity',
    chooseVariant: 'Choose variant',
    price: 'Price',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    description: 'Description',
    details: 'Details',
    author: 'Author',
    publisher: 'Publisher',
    pages: 'Pages',
    language: 'Language',
    category: 'Category'
  },
  fr: {
    notFound: 'Produit non trouvé',
    error: 'Erreur: Aucune variante trouvée pour le produit',
    freeShipping: 'Livraison gratuite à partir de ₪399',
    addToCart: 'Ajouter au Panier',
    quantity: 'Quantité',
    chooseVariant: 'Choisir une variante',
    price: 'Prix',
    inStock: 'En Stock',
    outOfStock: 'Rupture de Stock',
    description: 'Description',
    details: 'Détails',
    author: 'Auteur',
    publisher: 'Éditeur',
    pages: 'Pages',
    language: 'Langue',
    category: 'Catégorie'
  },
  es: {
    notFound: 'Producto no encontrado',
    error: 'Error: No se encontraron variantes para el producto',
    freeShipping: 'Envío gratis desde ₪399',
    addToCart: 'Añadir al Carrito',
    quantity: 'Cantidad',
    chooseVariant: 'Elegir variante',
    price: 'Precio',
    inStock: 'En Stock',
    outOfStock: 'Agotado',
    description: 'Descripción',
    details: 'Detalles',
    author: 'Autor',
    publisher: 'Editorial',
    pages: 'Páginas',
    language: 'Idioma',
    category: 'Categoría'
  },
  ru: {
    notFound: 'Товар не найден',
    error: 'Ошибка: Варианты товара не найдены',
    freeShipping: 'Бесплатная доставка от ₪399',
    addToCart: 'Добавить в Корзину',
    quantity: 'Количество',
    chooseVariant: 'Выбрать вариант',
    price: 'Цена',
    inStock: 'В Наличии',
    outOfStock: 'Нет в Наличии',
    description: 'Описание',
    details: 'Детали',
    author: 'Автор',
    publisher: 'Издательство',
    pages: 'Страниц',
    language: 'Язык',
    category: 'Категория'
  }
};

export default function Product() {
  const [match, params] = useRoute('/product/:id');
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();
  const { currentLanguage, setLanguage } = useLanguage();
  const t = productTranslations[currentLanguage as keyof typeof productTranslations] || productTranslations.he;
  const { toast } = useToast();
  
  const getProductName = (product: Product) => {
    switch(currentLanguage) {
      case 'en': return product.nameEnglish || product.name;
      case 'fr': return product.nameFrench || product.name;
      case 'es': return product.nameSpanish || product.name;
      case 'ru': return product.nameRussian || product.name;
      default: return product.name;
    }
  };

  if (!match || !params?.id) {
    return (
      <div className="min-h-screen" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
        <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
        <div className="container mx-auto px-4 py-8 text-center">{t.notFound}</div>
      </div>
    );
  }

  const product = realBreslovProducts[params.id];
  
  if (!product) {
    return (
      <div className="min-h-screen" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
        <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
        <div className="container mx-auto px-4 py-8 text-center">{t.notFound}</div>
      </div>
    );
  }

  const variants = product.variants || [];
  const currentVariant = variants.find(v => v.id === selectedVariant) || variants[0];
  
  if (!currentVariant) {
    return (
      <div className="min-h-screen" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
        <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
        <div className="container mx-auto px-4 py-8 text-center">{t.error}</div>
      </div>
    );
  }
  
  const displayName = getProductName(product);

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
      {/* BREADCRUMBS */}
      <section style={{background: '#f8f9fa', padding: '1rem 0', borderBottom: '1px solid #ddd'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <nav style={{fontSize: '0.9rem', color: '#666'}}>
            <a href="/" style={{color: '#dc3545', textDecoration: 'none'}}>דף הבית</a>
            <span style={{margin: '0 0.5rem'}}>←</span>
            <a href="/store" style={{color: '#dc3545', textDecoration: 'none'}}>חנות</a>
            <span style={{margin: '0 0.5rem'}}>←</span>
            <span style={{color: '#999'}}>{getBookDisplayTitle(product)}</span>
          </nav>
        </div>
      </section>

      {/* MAIN PRODUCT CONTENT */}
      <section style={{background: 'white', padding: '3rem 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start'}}>
            
            {/* PRODUCT IMAGES */}
            <div>
              <div style={{marginBottom: '1rem'}}>
                <img 
                  src={convertImagePath(product.images && product.images[selectedImage] || '')} 
                  alt={getBookDisplayTitle(product)}
                  style={{width: '100%', height: '500px', objectFit: 'contain', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: '#f9f9f9'}}
                />
              </div>
              
              {product.images && product.images.length > 1 && (
                <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center'}}>
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      style={{
                        border: selectedImage === index ? '2px solid #dc3545' : '1px solid #ddd',
                        borderRadius: '5px',
                        padding: '2px',
                        background: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      <img 
                        src={convertImagePath(image)} 
                        alt={`${getBookDisplayTitle(product)} ${index + 1}`}
                        style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '3px'}}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PRODUCT INFO */}
            <div>
              <div style={{marginBottom: '1rem'}}>
                <span style={{background: '#dc3545', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold'}}>
                  {product.category}
                </span>
              </div>

              <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem'}}>
                {getBookDisplayTitle(product)}
              </h1>

              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
                <div style={{color: '#ffc107', fontSize: '1.2rem', marginLeft: '0.5rem'}}>
                  ★★★★★
                </div>
                <span style={{color: '#666', fontSize: '0.9rem'}}>דורג 5.00 מתוך 5 (23 ביקורות)</span>
              </div>

              <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '2rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                <span style={{display: 'inline-block', verticalAlign: 'middle'}}>
                  {currentVariant.price} ₪
                </span>
                {currentVariant.originalPrice && (
                  <span style={{textDecoration: 'line-through', color: '#999', fontSize: '1.5rem', marginRight: '1rem', display: 'inline-block', verticalAlign: 'middle'}}>
                    {currentVariant.originalPrice} ₪
                  </span>
                )}
              </div>

              <p style={{fontSize: '1.1rem', color: '#666', lineHeight: '1.6', marginBottom: '2rem'}}>
                {currentLanguage === 'en' ? (product.descriptionEnglish || product.description) :
                 currentLanguage === 'fr' ? (product.descriptionFrench || product.description) :
                 currentLanguage === 'es' ? (product.descriptionSpanish || product.description) :
                 currentLanguage === 'ru' ? (product.descriptionRussian || product.description) :
                 product.description}
              </p>

              {/* VARIANT SELECTION */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>
                  בחר גודל וכריכה:
                </h3>
                <div style={{display: 'grid', gap: '0.8rem'}}>
                  {variants.map((variant) => (
                    <label 
                      key={variant.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        border: selectedVariant === variant.id ? '2px solid #dc3545' : '1px solid #ddd',
                        borderRadius: '8px',
                        cursor: variant.inStock ? 'pointer' : 'not-allowed',
                        opacity: variant.inStock ? 1 : 0.6,
                        background: selectedVariant === variant.id ? '#fef2f2' : 'white'
                      }}
                    >
                      <input 
                        type="radio" 
                        name="variant"
                        value={variant.id}
                        checked={selectedVariant === variant.id}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                        disabled={!variant.inStock}
                        style={{margin: 0}}
                      />
                      <div style={{flex: 1}}>
                        <div style={{fontWeight: 'bold', fontSize: '1rem'}}>
                          {variant.format} {variant.binding} - {variant.size}
                        </div>
                        <div style={{fontSize: '0.9rem', color: '#666'}}>
                          {variant.dimensions} • {variant.volumes === 1 ? 'חלק אחד' : `${variant.volumes} כרכים`}
                        </div>
                        <div style={{fontSize: '0.8rem', color: variant.inStock ? '#28a745' : '#dc3545'}}>
                          {variant.inStock ? 'במלאי' : 'אזל מהמלאי'}
                        </div>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', minWidth: '80px', textAlign: 'left', flexShrink: 0}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap'}}>
                          <span>{variant.price}₪</span>
                          {variant.originalPrice && (
                            <span style={{textDecoration: 'line-through', color: '#999', fontSize: '0.9rem'}}>
                              {variant.originalPrice}₪
                            </span>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUANTITY AND ADD TO CART */}
              <div style={{marginBottom: '2rem'}}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem'}}>
                  <label style={{fontWeight: 'bold', color: '#333'}}>כמות:</label>
                  <div style={{display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '5px'}}>
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{padding: '0.5rem 0.8rem', border: 'none', background: '#f8f9fa', cursor: 'pointer'}}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      style={{width: '60px', padding: '0.5rem', border: 'none', textAlign: 'center'}}
                      min="1"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      style={{padding: '0.5rem 0.8rem', border: 'none', background: '#f8f9fa', cursor: 'pointer'}}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    if (currentVariant.inStock) {
                      addItem({
                        productId: product.id,
                        variantId: currentVariant.id,
                        name: getBookDisplayTitle(product),
                        nameEnglish: product.nameEnglish || product.name,
                        image: product.images?.[0] || '',
                        price: currentVariant.price,
                        quantity: quantity,
                        variant: {
                          format: currentVariant.format,
                          binding: currentVariant.binding,
                          size: currentVariant.size
                        }
                      });
                      toast({
                        title: "נוסף לסל הקניות!",
                        description: `${getBookDisplayTitle(product)} נוסף בהצלחה לסל`,
                      });
                    }
                  }}
                  style={{
                    background: currentVariant.inStock ? '#dc3545' : '#999',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    cursor: currentVariant.inStock ? 'pointer' : 'not-allowed',
                    width: '100%',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}
                  disabled={!currentVariant.inStock}
                >
                  {currentVariant.inStock ? 
                    `הוספה לסל - ${(currentVariant.price * quantity).toFixed(2)} ₪` : 
                    'אזל מהמלאי'
                  }
                </button>
              </div>

              {/* PRODUCT FEATURES */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>
                  מאפיינים מיוחדים:
                </h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                  {(product.features || []).map((feature, index) => (
                    <li key={index} style={{marginBottom: '0.5rem', paddingRight: '1.5rem', position: 'relative'}}>
                      <span style={{position: 'absolute', right: 0, top: 0, color: '#dc3545', fontWeight: 'bold'}}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PRODUCT DETAILS */}
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>
                  פרטי המוצר:
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.9rem'}}>
                  <div><strong>שפה:</strong> {product.language}</div>
                  <div><strong>הוצאה:</strong> {product.publisher}</div>
                  {product.pages && <div><strong>עמודים:</strong> {product.pages}</div>}
                  {product.isbn && <div><strong>ISBN:</strong> {product.isbn}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section style={{background: '#f8f9fa', padding: '3rem 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center'}}>
            מוצרים דומים
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            {Object.values(realBreslovProducts).filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct) => (
              <div key={relatedProduct.id} style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <img 
                  src={(relatedProduct.images && relatedProduct.images[0] || '').replace('@assets/', '/attached_assets/')} 
                  alt={relatedProduct.name}
                  style={{width: '100%', height: '200px', objectFit: 'cover'}}
                />
                <div style={{padding: '1.5rem'}}>
                  <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                    {relatedProduct.name}
                  </h3>
                  <div style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                    {(relatedProduct.variants && relatedProduct.variants[0] || {price: 0}).price} ₪
                  </div>
                  <a href={`/product/${relatedProduct.id}`} style={{textDecoration: 'none'}}>
                    <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                      צפה במוצר
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Recommendations - Related */}
        <ProductRecommendations currentProduct={product as Product} recommendationType="related" />

        {/* Recommendations - Frequently bought together */}
        <ProductRecommendations currentProduct={product as Product} recommendationType="frequently-bought" />
      </div>
    </div>
  );
}