import { realBreslovProducts } from '../data/realProducts';
import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

export default function Store() {
  const { currentLanguage, setLanguage } = useLanguage();
  const products = Object.values(realBreslovProducts);
  
  console.log('✅ STORE DEBUG: Total products in realBreslovProducts:', Object.keys(realBreslovProducts).length);
  console.log('✅ STORE DEBUG: Products array length:', products.length);
  console.log('✅ STORE DEBUG: First 5 product IDs:', products.slice(0, 5).map(p => p.id));
  console.log('✅ STORE: Loading', products.length, 'books');

  return (
    <div style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      <section style={{background: '#333', color: 'white', padding: '8px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <span>משלוחים חינם החל מ- 399 ש"ח</span>
        </div>
      </section>

      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      <section style={{background: '#f8f9fa', padding: '3rem 0', minHeight: '100vh'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          
          <div style={{marginBottom: '2rem', padding: '1.5rem', background: '#d4edda', border: '2px solid #28a745', borderRadius: '8px'}}>
            <h2 style={{color: '#155724', margin: 0, fontSize: '1.5rem'}}>
              ✅ נמצאו {products.length} ספרים במלאי!
            </h2>
          </div>

          <div>
            <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem'}}>
              ספרי ברסלב המיוחדים שלנו
            </h1>
            <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '2rem'}}>
              מגוון ספרי קודש מברסלב במחירי הקרן
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem'}}>
              {products.map((product, index) => (
                <div key={product.id} className="transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 group cursor-pointer" style={{
                  background: 'white', 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)', 
                  position: 'relative'
                }}>
                  {/* Price Badge */}
                  <div className="transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:shadow-lg group-hover:rotate-3" style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#7c3aed',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    zIndex: 2
                  }}>
                    💎 מחיר הקרן
                  </div>
                  
                  {/* Image */}
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]}
                      alt={product.name}
                      className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-purple-100" style={{
                      width: '100%', 
                      height: '300px', 
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}>
                      <span className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">📖</span>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div style={{padding: '1.5rem'}}>
                    <h3 className="transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105" style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                      {product.name}
                    </h3>
                    
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-400" style={{color: '#ffc107', fontSize: '1.1rem', marginBottom: '0.8rem'}}>★★★★★</div>
                    
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-red-600 group-hover:font-extrabold" style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '0.5rem'}}>
                      {product.variants && product.variants.length > 0 ? 
                        `${Math.min(...product.variants.map(v => v.price))} ₪ – ${Math.max(...product.variants.map(v => v.price))} ₪` : 
                        'מחיר לא זמין'
                      }
                    </div>
                    
                    <div className="transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105" style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                      {product.category} • {product.variants?.length || 0} אפשרויות
                    </div>
                    
                    <button className="transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 hover:font-extrabold" style={{
                      background: '#007bff', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.8rem 1rem', 
                      borderRadius: '5px', 
                      cursor: 'pointer', 
                      width: '100%', 
                      fontWeight: 'bold'
                    }}>
                      צפייה בפרטים
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2" style={{textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginTop: '2rem'}}>
              <p className="transition-all duration-300 hover:text-gray-800 hover:scale-105" style={{fontSize: '1.1rem', color: '#666', marginBottom: '1rem'}}>
                מחפשים ספר נוסף? צרו קשר ונמצא עבורכם!
              </p>
              <button className="transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl hover:-translate-y-2" style={{background: '#28a745', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold'}}>
                צרו קשר לפרטים נוספים
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}