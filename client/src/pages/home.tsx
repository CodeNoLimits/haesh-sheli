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
