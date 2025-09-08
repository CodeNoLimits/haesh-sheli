import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { currentLanguage, setLanguage } = useLanguage();
  
  return (
    <div className="rtl home page-template-default page page-id-13 wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-5 elementor-page elementor-page-13" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
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

      {/* HERO SECTION */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-1a9b8b1 elementor-section-height-full elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-items-middle" style={{background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)', color: 'white', padding: '6rem 0'}}>
        <div className="elementor-container elementor-column-gap-default" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-heading" style={{textAlign: 'center'}}>
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default" style={{fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                    {currentLanguage === 'he' ? 'ברוכים הבאים לעולם ברסלב' : 
                     currentLanguage === 'en' ? 'Welcome to the World of Breslov' :
                     currentLanguage === 'fr' ? 'Bienvenue dans le Monde de Breslov' :
                     currentLanguage === 'es' ? 'Bienvenidos al Mundo de Breslov' :
                     currentLanguage === 'ru' ? 'Добро пожаловать в мир Бреслов' : 'ברוכים הבאים לעולם ברסלב'}
                  </h1>
                  <p style={{fontSize: '1.3rem', marginBottom: '3rem', opacity: 0.9}}>
                    {currentLanguage === 'he' ? 'אוסף מקיף של ספרי רבי נחמן מברסלב ותלמידיו' :
                     currentLanguage === 'en' ? 'Comprehensive collection of Rabbi Nachman of Breslov and his students\' books' :
                     currentLanguage === 'fr' ? 'Collection complète des livres de Rabbi Nachman de Breslov et de ses étudiants' :
                     currentLanguage === 'es' ? 'Colección completa de libros del Rabino Nachman de Breslov y sus estudiantes' :
                     currentLanguage === 'ru' ? 'Полная коллекция книг Рабби Нахмана из Бреслов и его учеников' : 'אוסף מקיף של ספרי רבי נחמן מברסלב ותלמידיו'}
                  </p>
                  <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <a href="/store" style={{textDecoration: 'none'}}>
                      <button style={{background: 'white', color: '#dc3545', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', transition: 'transform 0.3s ease'}} 
                              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        {currentLanguage === 'he' ? 'עיינו בחנות' :
                         currentLanguage === 'en' ? 'Browse Store' :
                         currentLanguage === 'fr' ? 'Parcourir la Boutique' :
                         currentLanguage === 'es' ? 'Explorar Tienda' :
                         currentLanguage === 'ru' ? 'Просмотреть Магазин' : 'עיינו בחנות'}
                      </button>
                    </a>
                    <a href="/downloads" style={{textDecoration: 'none'}}>
                      <button style={{background: 'rgba(255,255,255,0.1)', color: 'white', border: '2px solid white', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', transition: 'all 0.3s ease'}}
                              onMouseEnter={(e) => {e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#dc3545';}}
                              onMouseLeave={(e) => {e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white';}}
                      >
                        {currentLanguage === 'he' ? 'הורדות חינם' :
                         currentLanguage === 'en' ? 'Free Downloads' :
                         currentLanguage === 'fr' ? 'Téléchargements Gratuits' :
                         currentLanguage === 'es' ? 'Descargas Gratuitas' :
                         currentLanguage === 'ru' ? 'Бесплатные Загрузки' : 'הורדות חינם'}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section style={{background: '#f8f9fa', padding: '5rem 0'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem'}}>
              {currentLanguage === 'he' ? 'ספרים מומלצים' :
               currentLanguage === 'en' ? 'Featured Books' :
               currentLanguage === 'fr' ? 'Livres en Vedette' :
               currentLanguage === 'es' ? 'Libros Destacados' :
               currentLanguage === 'ru' ? 'Рекомендуемые Книги' : 'ספרים מומלצים'}
            </h2>
            <p style={{fontSize: '1.1rem', color: '#666'}}>
              {currentLanguage === 'he' ? 'מבחר ספרים חשובים ומרכזיים בחסידות ברסלב' :
               currentLanguage === 'en' ? 'Selection of important and central books in Breslov Hasidism' :
               currentLanguage === 'fr' ? 'Sélection de livres importants et centraux du hassidisme Breslov' :
               currentLanguage === 'es' ? 'Selección de libros importantes y centrales del jasidismo Breslov' :
               currentLanguage === 'ru' ? 'Подборка важных и центральных книг хасидизма Бреслов' : 'מבחר ספרים חשובים ומרכזיים בחסידות ברסלב'}
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {/* Featured Book Cards - Static for demonstration */}
            <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}} 
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '3rem'}}>
                📖
              </div>
              <div style={{padding: '2rem'}}>
                <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>
                  {currentLanguage === 'he' ? 'ליקוטי מוהר"ן' :
                   currentLanguage === 'en' ? 'Likutei Moharan' :
                   currentLanguage === 'fr' ? 'Likutei Moharan' :
                   currentLanguage === 'es' ? 'Likutei Moharan' :
                   currentLanguage === 'ru' ? 'Ликутей Мохаран' : 'ליקוטי מוהר"ן'}
                </h3>
                <p style={{color: '#666', marginBottom: '1.5rem'}}>
                  {currentLanguage === 'he' ? 'הספר המרכזי של רבינו הקדוש' :
                   currentLanguage === 'en' ? 'The central book of our holy Rebbe' :
                   currentLanguage === 'fr' ? 'Le livre central de notre saint Rebbe' :
                   currentLanguage === 'es' ? 'El libro central de nuestro santo Rebe' :
                   currentLanguage === 'ru' ? 'Центральная книга нашего святого Ребе' : 'הספר המרכזי של רבינו הקדוש'}
                </p>
                <a href="/store" style={{textDecoration: 'none'}}>
                  <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                    {currentLanguage === 'he' ? 'צפה במוצר' :
                     currentLanguage === 'en' ? 'View Product' :
                     currentLanguage === 'fr' ? 'Voir le Produit' :
                     currentLanguage === 'es' ? 'Ver Producto' :
                     currentLanguage === 'ru' ? 'Посмотреть Товар' : 'צפה במוצר'}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}