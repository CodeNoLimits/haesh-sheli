export default function Magazine() {
  return (
    <div className="rtl home page-template-default page page-id-48 wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-5 elementor-page elementor-page-48">
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

      {/* MAIN HEADER */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ba655d5 elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile" style={{background: '#dc3545', padding: '1rem 0'}}>
        <div className="elementor-container elementor-column-gap-default" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          {/* LOGO COLUMN */}
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8cf799f">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-theme-site-logo elementor-widget-image">
                <div className="elementor-widget-container">
                  <a href="/">
                    <img 
                      width="185" 
                      height="300"
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2021/12/cropped-%D7%A7%D7%A8%D7%95-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%A8-%D7%90%D7%95%D7%93%D7%A1%D7%A8.d110a0.webp" 
                      className="attachment-full size-full wp-image-27" 
                      alt="האש שלי תוקף עד ביאת המשיח"
                      style={{height: '80px', width: 'auto'}}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION COLUMN */}
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-b208748">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-nav-menu__align-center elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu">
                <div className="elementor-widget-container">
                  <nav aria-label="תפריט" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-grow">
                    <ul id="menu-1-ac3cd0c" className="elementor-nav-menu" style={{display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0}}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-195">
                        <a href="/" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>דף הבית</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-695">
                        <a href="/store" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>חנות</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-54">
                        <a href="/about" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>עלינו</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item menu-item-51">
                        <a href="/magazine" className="elementor-item elementor-item-active" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>מגזין</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53">
                        <a href="/join" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>הצטרפו אלינו</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52">
                        <a href="/contact" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>צור קשר</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* CART COLUMN */}
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-884ebb2">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element toggle-icon--custom elementor-widget__width-auto elementor-menu-cart--empty-indicator-hide remove-item-position--top elementor-menu-cart--items-indicator-bubble elementor-menu-cart--cart-type-side-cart elementor-menu-cart--show-remove-button-yes elementor-widget elementor-widget-woocommerce-menu-cart">
                <div className="elementor-widget-container">
                  <div className="elementor-menu-cart__wrapper">
                    <div className="elementor-menu-cart__toggle_wrapper">
                      <div className="elementor-menu-cart__toggle elementor-button-wrapper">
                        <a id="elementor-menu-cart__toggle_button" href="#" className="elementor-menu-cart__toggle_button elementor-button elementor-size-sm" aria-expanded="false" style={{background: 'white', color: '#dc3545', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                          <span className="elementor-button-text">
                            <span className="woocommerce-Price-amount amount">
                              <span>0.00 <span className="woocommerce-Price-currencySymbol">₪</span></span>
                            </span>
                          </span>
                          <span className="elementor-button-icon">
                            <span className="elementor-button-icon-qty" data-counter="0">0</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{width: '16px', height: '16px', fill: 'currentColor'}}>
                              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{background: '#f8f9fa', padding: '6rem 0', minHeight: '70vh'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
          
          {/* HERO SECTION */}
          <div style={{marginBottom: '4rem'}}>
            <h1 style={{fontSize: '4rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '2rem', fontFamily: 'Noto Sans Hebrew, sans-serif'}}>
              מגזין
            </h1>
            <div style={{background: 'white', padding: '4rem 2rem', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}>
              <p style={{fontSize: '1.5rem', color: '#666', lineHeight: '1.8'}}>
                בקרוב יפתח כאן המגזין שלנו עם מאמרים מעמיקים, תוכן עשיר ועדכונים על פעילות הקרן
              </p>
            </div>
          </div>

          {/* COMING SOON SECTION */}
          <div style={{background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)', padding: '4rem', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'}}>
              <div style={{width: '150px', height: '150px', borderRadius: '50%', background: '#dc3545', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{width: '80px', height: '80px', fill: 'white'}}>
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H15.5L13.5 17H10.5L8.5 12H7L9.5 7H14.5L17 12Z"/>
                </svg>
              </div>
              
              <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                בקרוב...
              </h2>
              
              <p style={{fontSize: '1.3rem', color: '#333', lineHeight: '1.6', maxWidth: '600px', marginBottom: '2rem'}}>
                אנחנו עובדים קשה להכין עבורכם מגזין מקוון עשיר בתוכן איכותי, מאמרים מעמיקים על רבנו הקדוש, סיפורים מרגשים ועדכונים שוטפים על פעילות הקרן ברחבי העולם.
              </p>
              
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                <a href="/join" className="btn-primary" style={{textDecoration: 'none'}}>
                  הצטרפו לרשימת התפוצה
                </a>
                <a href="/contact" className="btn-secondary" style={{textDecoration: 'none'}}>
                  צרו קשר לעדכונים
                </a>
              </div>
            </div>
          </div>

          {/* FUTURE CONTENT PREVIEW */}
          <div style={{marginTop: '4rem'}}>
            <h3 style={{fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem'}}>
              מה תוכלו למצוא במגזין:
            </h3>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
              <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                  מאמרים על רבנו הקדוש
                </h4>
                <p style={{color: '#666'}}>
                  תוכן עמוק ומעשיר על תורתו ודרכו של רבי נחמן מברסלב
                </p>
              </div>
              
              <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                  סיפורים וחוויות
                </h4>
                <p style={{color: '#666'}}>
                  סיפורים מרגשים מפעילות ההפצה ברחבי העולם
                </p>
              </div>
              
              <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                  עדכונים ופעילויות
                </h4>
                <p style={{color: '#666'}}>
                  עדכונים שוטפים על פרויקטים וקמפיינים חדשים
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer" style={{background: '#333', color: 'white', padding: '3rem 0 2rem'}}>
        <div className="elementor-container">
          <div className="footer-content" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            
            {/* של רבי ישראל בר אודסר */}
            <div className="footer-section">
              <h4 style={{marginBottom: '1rem', color: '#dc3545', fontSize: '1.5rem', fontWeight: 'bold'}}>
                של רבי ישראל בר אודסר
              </h4>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <img 
                  src="https://www.haesh-sheli.co.il/wp-content/uploads/2021/12/cropped-%D7%A7%D7%A8%D7%95-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%A8-%D7%90%D7%95%D7%93%D7%A1%D7%A8.d110a0.webp" 
                  alt="האש שלי תוקף" 
                  style={{width: '100px', height: 'auto', marginLeft: '1rem'}}
                />
                <div>
                  <h5 style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1.2rem'}}>האש שלי תוקף</h5>
                  <p style={{color: '#dc3545', fontSize: '1rem'}}>עד ביאת המשיח</p>
                  <p style={{color: '#ccc', fontSize: '0.9rem'}}>קרן רבי ישראל דב אודסר זצ"ל</p>
                </div>
              </div>
            </div>
            
            {/* ניווט מהיר באתר */}
            <div className="footer-section">
              <h4 style={{marginBottom: '1rem', color: '#dc3545'}}>
                ניווט מהיר באתר
              </h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem'}}>
                  <a href="/" style={{color: '#ccc', textDecoration: 'none'}}>דף הבית</a>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <a href="#" style={{color: '#ccc', textDecoration: 'none'}}>שירות לקוחות</a>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <a href="/store" style={{color: '#ccc', textDecoration: 'none'}}>חנות הספרים</a>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <a href="#" style={{color: '#ccc', textDecoration: 'none'}}>מנות ומחירות</a>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <a href="#" style={{color: '#ccc', textDecoration: 'none'}}>משלוחים והחזרות</a>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <a href="#" style={{color: '#ccc', textDecoration: 'none'}}>תקנון ומדיניות האתר</a>
                </li>
              </ul>
            </div>
            
            {/* כתובת ושעות פתיחה */}
            <div className="footer-section">
              <h4 style={{marginBottom: '1rem', color: '#dc3545'}}>
                כתובת ושעות פתיחה
              </h4>
              <p style={{color: '#ccc', marginBottom: '0.5rem'}}>ת.ד בית שמש 366</p>
              <p style={{color: '#ccc', marginBottom: '0.5rem'}}>טלפון: *2320</p>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>פקס: 077-5150304</p>
              <a href="/contact" className="btn-primary" style={{textDecoration: 'none', fontSize: '0.9rem'}}>
                כל פרטי המתגה
              </a>
            </div>
            
            {/* לקוחות פעילים וחדשים */}
            <div className="footer-section">
              <h4 style={{marginBottom: '1rem', color: '#dc3545'}}>
                לקוחות פעילים וחדשים
              </h4>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>
                הרשמה לאחדות האו
              </p>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>
                כניסה לאזור האישי
              </p>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>
                פניה לשירות לקוחות
              </p>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>
                החלפת פעילות הבנו הקדוש
              </p>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>
                תקנון ומדיניות האתר
              </p>
            </div>
          </div>
          
          <div style={{textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #555'}}>
            <div style={{color: '#999', fontSize: '0.9rem'}}>
              <p style={{marginBottom: '0.5rem'}}>כל הזכיות שמורות 2025 © קרן רבי ישראל דב אודסר זצ"ל</p>
              <p>האתר נבנה ע"י מדיה מאסטר</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}