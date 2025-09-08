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
                      <span className="elementor-icon-list-text">
                        {currentLanguage === 'he' ? 'משלוחים חינם החל מ- 399 ש"ח' :
                         currentLanguage === 'en' ? 'Free shipping from 399 ₪' :
                         currentLanguage === 'fr' ? 'Livraison gratuite à partir de 399 ₪' :
                         currentLanguage === 'es' ? 'Envío gratis desde 399 ₪' :
                         currentLanguage === 'ru' ? 'Бесплатная доставка от 399 ₪' : 'משלוחים חינם החל מ- 399 ש"ח'}
                      </span>
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-1a9b8b1 elementor-section-height-full elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-items-middle" 
        style={{
          background: `url('/images/hero-books-composition.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white', 
          padding: '8rem 0',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center'
        }}>
        <div className="elementor-container elementor-column-gap-default" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%'}}>
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-heading" style={{textAlign: 'center'}}>
                <div className="elementor-widget-container" style={{background: 'rgba(0,0,0,0.3)', padding: '3rem', borderRadius: '15px', backdropFilter: 'blur(5px)'}}>
                  <h1 className="elementor-heading-title elementor-size-default" style={{
                    fontSize: currentLanguage === 'he' ? '3.8rem' : '3.2rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1.5rem', 
                    textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                    lineHeight: '1.2',
                    color: '#F5F5DC'
                  }}>
                    {currentLanguage === 'he' ? 'ספרי רבינו נחמן מברסלב זצ״ל' : 
                     currentLanguage === 'en' ? 'Books of Our Master Rabbi Nachman of Breslov' :
                     currentLanguage === 'fr' ? 'Livres de Notre Maître Rabbi Nachman de Breslov' :
                     currentLanguage === 'es' ? 'Libros de Nuestro Maestro Rabino Nachman de Breslov' :
                     currentLanguage === 'ru' ? 'Книги Нашего Учителя Рабби Нахмана из Бреслов' : 'ספרי רבינו נחמן מברסלב זצ״ל'}
                  </h1>
                  <h2 className="elementor-heading-subtitle" style={{
                    fontSize: currentLanguage === 'he' ? '2.8rem' : '2.2rem',
                    fontWeight: '300', 
                    marginBottom: '2.5rem', 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                    color: '#FFE4B5',
                    fontFamily: currentLanguage === 'he' ? 'Assistant, Rubik, serif' : 'Georgia, serif'
                  }}>
                    {currentLanguage === 'he' ? 'הדרך לאוצר שלך.' :
                     currentLanguage === 'en' ? 'The Path to Your Treasure.' :
                     currentLanguage === 'fr' ? 'Le Chemin vers Votre Trésor.' :
                     currentLanguage === 'es' ? 'El Camino hacia Tu Tesoro.' :
                     currentLanguage === 'ru' ? 'Путь к Вашему Сокровищу.' : 'הדרך לאוצר שלך.'}
                  </h2>
                  <p style={{fontSize: '1.4rem', marginBottom: '3rem', opacity: 0.95, textShadow: '1px 1px 3px rgba(0,0,0,0.7)', maxWidth: '800px', margin: '0 auto 3rem'}}>
                    {currentLanguage === 'he' ? 'גלו את אוצרות החכמה והחסידות באוסף המקיף ביותר של ספרי ברסלב' :
                     currentLanguage === 'en' ? 'Discover the treasures of wisdom and Hasidism in the most comprehensive collection of Breslov books' :
                     currentLanguage === 'fr' ? 'Découvrez les trésors de la sagesse et du hassidisme dans la collection la plus complète de livres Breslov' :
                     currentLanguage === 'es' ? 'Descubre los tesoros de la sabiduría y el jasidismo en la colección más completa de libros Breslov' :
                     currentLanguage === 'ru' ? 'Откройте для себя сокровища мудрости и хасидизма в самой полной коллекции книг Бреслов' : 'גלו את אוצרות החכמה והחסידות באוסף המקיף ביותר של ספרי ברסלב'}
                  </p>
                  <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <a href="/store" style={{textDecoration: 'none'}}>
                      <button style={{
                        background: 'linear-gradient(135deg, #dc3545, #c82333)', 
                        color: 'white', 
                        border: '3px solid #FFE4B5', 
                        padding: '1.2rem 2.5rem', 
                        borderRadius: '12px', 
                        cursor: 'pointer', 
                        fontSize: '1.2rem', 
                        fontWeight: 'bold', 
                        boxShadow: '0 6px 20px rgba(220, 53, 69, 0.4)', 
                        transition: 'all 0.3s ease',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }} 
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(220, 53, 69, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 53, 69, 0.4)';
                        }}
                      >
                        {currentLanguage === 'he' ? '🛒 עיינו בחנות' :
                         currentLanguage === 'en' ? '🛒 Browse Store' :
                         currentLanguage === 'fr' ? '🛒 Parcourir la Boutique' :
                         currentLanguage === 'es' ? '🛒 Explorar Tienda' :
                         currentLanguage === 'ru' ? '🛒 Просмотреть Магазин' : '🛒 עיינו בחנות'}
                      </button>
                    </a>
                    <a href="/downloads" style={{textDecoration: 'none'}}>
                      <button style={{
                        background: 'rgba(245, 245, 220, 0.15)', 
                        color: '#FFE4B5', 
                        border: '3px solid #FFE4B5', 
                        padding: '1.2rem 2.5rem', 
                        borderRadius: '12px', 
                        cursor: 'pointer', 
                        fontSize: '1.2rem', 
                        fontWeight: 'bold', 
                        transition: 'all 0.3s ease',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#FFE4B5';
                          e.currentTarget.style.color = '#8B4513';
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.textShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(245, 245, 220, 0.15)';
                          e.currentTarget.style.color = '#FFE4B5';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.textShadow = '1px 1px 2px rgba(0,0,0,0.7)';
                        }}
                      >
                        {currentLanguage === 'he' ? '📥 הורדות חינם' :
                         currentLanguage === 'en' ? '📥 Free Downloads' :
                         currentLanguage === 'fr' ? '📥 Téléchargements Gratuits' :
                         currentLanguage === 'es' ? '📥 Descargas Gratuitas' :
                         currentLanguage === 'ru' ? '📥 Бесплатные Загрузки' : '📥 הורדות חינם'}
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
      <section style={{
        background: 'linear-gradient(135deg, #F5F5DC 0%, #FAEBD7 50%, #F0E68C 100%)', 
        padding: '6rem 0',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.05"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1
        }}></div>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{
              fontSize: '2.8rem', 
              fontWeight: 'bold', 
              color: '#8B4513', 
              marginBottom: '1.5rem',
              textShadow: '2px 2px 4px rgba(139, 69, 19, 0.2)',
              fontFamily: currentLanguage === 'he' ? 'Assistant, Rubik, serif' : 'Georgia, serif'
            }}>
              {currentLanguage === 'he' ? 'ספרים מומלצים' :
               currentLanguage === 'en' ? 'Featured Books' :
               currentLanguage === 'fr' ? 'Livres en Vedette' :
               currentLanguage === 'es' ? 'Libros Destacados' :
               currentLanguage === 'ru' ? 'Рекомендуемые Книги' : 'ספרים מומלצים'}
            </h2>
            <div style={{width: '80px', height: '3px', background: 'linear-gradient(90deg, #dc3545, #8B4513)', margin: '0 auto 2rem'}}></div>
            <p style={{fontSize: '1.2rem', color: '#654321', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'}}>
              {currentLanguage === 'he' ? 'מבחר ספרים חשובים ומרכזיים בחסידות ברסלב לחיזוק הנפש והעבודה הרוחנית' :
               currentLanguage === 'en' ? 'Selection of important and central books in Breslov Hasidism for spiritual strengthening and divine service' :
               currentLanguage === 'fr' ? 'Sélection de livres importants et centraux du hassidisme Breslov pour le renforcement spirituel et le service divin' :
               currentLanguage === 'es' ? 'Selección de libros importantes y centrales del jasidismo Breslov para el fortalecimiento espiritual y el servicio divino' :
               currentLanguage === 'ru' ? 'Подборка важных и центральных книг хасидизма Бреслов для духовного укрепления и служения Всевышнему' : 'מבחר ספרים חשובים ומרכזיים בחסידות ברסלב לחיזוק הנפש והעבודה הרוחנית'}
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {/* Likutei Moharan */}
            <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}} 
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{height: '200px', overflow: 'hidden'}}>
                <img 
                  src="/assets/ליקוטי הלכות דק גדול 1_1757275769149.jpg" 
                  alt="ליקוטי הלכות" 
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <div style={{padding: '2rem'}}>
                <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>
                  {currentLanguage === 'he' ? 'ליקוטי הלכות' :
                   currentLanguage === 'en' ? 'Likutei Halachos' :
                   currentLanguage === 'fr' ? 'Likutei Halachos' :
                   currentLanguage === 'es' ? 'Likutei Halachos' :
                   currentLanguage === 'ru' ? 'Ликутей Алахот' : 'ליקוטי הלכות'}
                </h3>
                <p style={{color: '#666', marginBottom: '1.5rem'}}>
                  {currentLanguage === 'he' ? 'ספר ההלכות של רבי נתן מברסלב' :
                   currentLanguage === 'en' ? 'The halachic work by Rabbi Nathan of Breslov' :
                   currentLanguage === 'fr' ? 'L\'ouvrage halakhique de Rabbi Nathan de Breslov' :
                   currentLanguage === 'es' ? 'La obra halájica del Rabino Nathan de Breslov' :
                   currentLanguage === 'ru' ? 'Галахическое произведение Рабби Натана из Бреслов' : 'ספר ההלכות של רבי נתן מברסלב'}
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

            {/* Sefer Hamidos */}
            <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}} 
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{height: '200px', overflow: 'hidden'}}>
                <img 
                  src="/assets/ספר המידות 1_1757281125910.jpg" 
                  alt="ספר המידות" 
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <div style={{padding: '2rem'}}>
                <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>
                  {currentLanguage === 'he' ? 'ספר המידות' :
                   currentLanguage === 'en' ? 'Sefer Hamidos' :
                   currentLanguage === 'fr' ? 'Livre des Traits de Caractère' :
                   currentLanguage === 'es' ? 'Libro de los Rasgos de Carácter' :
                   currentLanguage === 'ru' ? 'Книга Качеств' : 'ספר המידות'}
                </h3>
                <p style={{color: '#666', marginBottom: '1.5rem'}}>
                  {currentLanguage === 'he' ? 'עצות מעשיות לתיקון המידות' :
                   currentLanguage === 'en' ? 'Practical advice for character improvement' :
                   currentLanguage === 'fr' ? 'Conseils pratiques pour l\'amélioration du caractère' :
                   currentLanguage === 'es' ? 'Consejos prácticos para la mejora del carácter' :
                   currentLanguage === 'ru' ? 'Практические советы по улучшению характера' : 'עצות מעשיות לתיקון המידות'}
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

            {/* Tikkun HaKlali */}
            <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}} 
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{height: '200px', overflow: 'hidden'}}>
                <img 
                  src="/assets/תיקון הכללי_1757281158220.jpg" 
                  alt="תיקון הכללי" 
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <div style={{padding: '2rem'}}>
                <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>
                  {currentLanguage === 'he' ? 'תיקון הכללי' :
                   currentLanguage === 'en' ? 'Tikkun HaKlali' :
                   currentLanguage === 'fr' ? 'Tikkun HaKlali' :
                   currentLanguage === 'es' ? 'Tikkun HaKlali' :
                   currentLanguage === 'ru' ? 'Тиккун Аклали' : 'תיקון הכללי'}
                </h3>
                <p style={{color: '#666', marginBottom: '1.5rem'}}>
                  {currentLanguage === 'he' ? 'עשרת המזמורים לתיקון הברית' :
                   currentLanguage === 'en' ? 'The ten psalms for covenant rectification' :
                   currentLanguage === 'fr' ? 'Les dix psaumes pour la rectification de l\'alliance' :
                   currentLanguage === 'es' ? 'Los diez salmos para la rectificación del pacto' :
                   currentLanguage === 'ru' ? 'Десять псалмов для исправления завета' : 'עשרת המזמורים לתיקון הברית'}
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

      {/* FOOTER */}
      <footer className="main-footer" style={{background: '#2d3436', color: 'white', padding: '3rem 0 2rem'}}>
        <div className="elementor-container">
          <div style={{textAlign: 'center', paddingTop: '2rem'}}>
            <div style={{color: '#999', fontSize: '0.9rem'}}>
              <p style={{marginBottom: '0.5rem'}}>
                {currentLanguage === 'he' ? 'כל הזכיות שמורות 2025 © קרן רבי ישראל דב אודסר זצ"ל' :
                 currentLanguage === 'en' ? 'All rights reserved 2025 © Rabbi Israel Dov Odesser Foundation' :
                 currentLanguage === 'fr' ? 'Tous droits réservés 2025 © Fondation Rabbi Israel Dov Odesser' :
                 currentLanguage === 'es' ? 'Todos los derechos reservados 2025 © Fundación Rabino Israel Dov Odesser' :
                 currentLanguage === 'ru' ? 'Все права защищены 2025 © Фонд Рабби Израэля Дова Одессера' : 'כל הזכיות שמורות 2025 © קרן רבי ישראל דב אודסר זצ"ל'}
              </p>
              <p>
                {currentLanguage === 'he' ? 'האתר נבנה ע"י מדיה מאסטר' :
                 currentLanguage === 'en' ? 'Website built by Media Master' :
                 currentLanguage === 'fr' ? 'Site web construit par Media Master' :
                 currentLanguage === 'es' ? 'Sitio web construido por Media Master' :
                 currentLanguage === 'ru' ? 'Сайт создан Media Master' : 'האתר נבנה ע"י מדיה מאסטר'}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
          <h2 style={{fontSize: '3rem', fontWeight: 'normal', color: '#333', marginBottom: '1rem', lineHeight: '1.3'}}>
            הדרך לאוצר שלך.
          </h2>
