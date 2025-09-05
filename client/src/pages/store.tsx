export default function Store() {
  return (
    <div className="rtl home page-template-default page page-id-8 wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-5 elementor-page elementor-page-8">
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
                      <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item menu-item-695">
                        <a href="/store" className="elementor-item elementor-item-active" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>חנות</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-54">
                        <a href="/about" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>עלינו</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51">
                        <a href="/magazine" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>מגזין</a>
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

      {/* HERO BANNER */}
      <section style={{background: 'linear-gradient(to bottom, #f4e4bc, #e6d7a8)', padding: '4rem 0', position: 'relative', backgroundImage: 'url("https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/banner-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div style={{background: 'rgba(244, 228, 188, 0.9)', padding: '2rem', textAlign: 'center'}}>
          <h1 style={{fontSize: '3rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem', fontFamily: 'Noto Sans Hebrew, sans-serif'}}>
            חנות הספרים
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{background: '#f8f9fa', padding: '3rem 0', minHeight: '600px'}}>
        <div className="elementor-container">
          {/* FILTERS SIDEBAR */}
          <div style={{display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', alignItems: 'start'}}>
            
            {/* SIDEBAR */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#333'}}>
                סינון לפי..
              </h3>
              
              {/* Search */}
              <div style={{marginBottom: '2rem'}}>
                <label style={{fontWeight: 'bold', marginBottom: '0.5rem', display: 'block'}}>חיפוש חופשי</label>
                <input 
                  type="text" 
                  placeholder="חיפוש..."
                  style={{width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px'}}
                />
                <button style={{marginTop: '0.5rem', background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer'}}>
                  הצג תוצאות חיפוש
                </button>
              </div>

              {/* Categories */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem'}}>קטגוריות</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    ליקוטים
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    לנוער וילדים
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    ספרי רבנו כללי וליקוטים
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    ספרי רבי ישראל דוב אודסר
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    ספרי רבי נחמן מברסלב
                  </label>
                </div>
              </div>

              {/* Size */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem'}}>גודל וסוג כריכה</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    קטן /כיס
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    בינוני
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    גדול
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    ענק
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem'}}>טווח מחירים</h4>
                <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                  <input type="number" placeholder="₪" style={{flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px'}} />
                  <span>-</span>
                  <input type="number" placeholder="₪" style={{flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px'}} />
                </div>
                <button style={{marginTop: '0.5rem', background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', width: '100%'}}>
                  הצג תוצאות
                </button>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            <div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem'}}>
                
                {/* Product 1 */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <img 
                    src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/1-1-300x300.d110a0.webp" 
                    alt="אב&quot;י הנחל" 
                    style={{width: '100%', height: '250px', objectFit: 'cover'}}
                  />
                  <div style={{padding: '1rem'}}>
                    <h4 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>אב"י הנחל</h4>
                    <div style={{color: '#ffc107', marginBottom: '0.5rem'}}>⭐⭐⭐⭐⭐</div>
                    <p style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1.1rem'}}>10.00 ₪ – 35.00 ₪</p>
                    <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '0.5rem'}}>
                      בחר אפשרויות
                    </button>
                  </div>
                </div>

                {/* Product 2 */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <img 
                    src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/24-300x300.d110a0.webp" 
                    alt="אוצר היראה" 
                    style={{width: '100%', height: '250px', objectFit: 'cover'}}
                  />
                  <div style={{padding: '1rem'}}>
                    <h4 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>אוצר היראה</h4>
                    <div style={{color: '#ffc107', marginBottom: '0.5rem'}}>⭐⭐⭐⭐⭐</div>
                    <p style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1.1rem'}}>200.00 ₪</p>
                    <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '0.5rem'}}>
                      הוספה לסל
                    </button>
                  </div>
                </div>

                {/* Product 3 */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '3px', fontSize: '0.8rem'}}>
                    מבצע!
                  </div>
                  <img 
                    src="https://www.haesh-sheli.co.il/wp-content/uploads/woocommerce-placeholder-300x300.d110a0.webp" 
                    alt="אמונת חכמים" 
                    style={{width: '100%', height: '250px', objectFit: 'cover'}}
                  />
                  <div style={{padding: '1rem'}}>
                    <h4 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>אמונת חכמים</h4>
                    <div style={{marginBottom: '0.5rem'}}>
                      <span style={{textDecoration: 'line-through', color: '#999'}}>40.00 ₪</span>
                      <span style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1.1rem', marginLeft: '0.5rem'}}>35.00 ₪</span>
                    </div>
                    <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '0.5rem'}}>
                      הוספה לסל
                    </button>
                  </div>
                </div>

                {/* Product 4 */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <img 
                    src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/03/%D7%90%D7%9E%D7%95%D7%A0%D7%AA-%D7%A2%D7%99%D7%AA%D7%9A-300x300.b197b0.webp" 
                    alt="אמונת עתיך" 
                    style={{width: '100%', height: '250px', objectFit: 'cover'}}
                  />
                  <div style={{padding: '1rem'}}>
                    <h4 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>אמונת עתיך</h4>
                    <p style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1.1rem'}}>20.00 ₪</p>
                    <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '0.5rem'}}>
                      בחר אפשרויות
                    </button>
                  </div>
                </div>

                {/* Product 5 */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <img 
                    src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/44-300x300.d110a0.webp" 
                    alt="בעקבות הבעל שם טוב" 
                    style={{width: '100%', height: '250px', objectFit: 'cover'}}
                  />
                  <div style={{padding: '1rem'}}>
                    <h4 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>בעקבות הבעל שם טוב</h4>
                    <div style={{color: '#ffc107', marginBottom: '0.5rem'}}>⭐⭐⭐⭐⭐</div>
                    <div style={{marginBottom: '0.5rem'}}>
                      <span style={{textDecoration: 'line-through', color: '#999'}}>150.00 ₪</span>
                      <span style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1.1rem', marginLeft: '0.5rem'}}>115.00 ₪</span>
                    </div>
                    <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '0.5rem'}}>
                      הוספה לסל
                    </button>
                  </div>
                </div>

                {/* Product 6 */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <img 
                    src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/08/28-300x300.d110a0.webp" 
                    alt="חומש ליקוטי הלכות" 
                    style={{width: '100%', height: '250px', objectFit: 'cover'}}
                  />
                  <div style={{padding: '1rem'}}>
                    <h4 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>חומש ליקוטי הלכות</h4>
                    <div style={{color: '#ffc107', marginBottom: '0.5rem'}}>⭐⭐⭐⭐⭐</div>
                    <p style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1.1rem'}}>150.00 ₪ – 175.00 ₪</p>
                    <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '0.5rem'}}>
                      בחר אפשרויות
                    </button>
                  </div>
                </div>
              </div>

              {/* SPECIAL OFFERS SECTION */}
              <div style={{marginTop: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)', padding: '3rem', borderRadius: '15px'}}>
                <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#dc3545'}}>
                  למבצעים כנסו
                </h2>
                <a href="#" className="btn-primary" style={{textDecoration: 'none', fontSize: '1.2rem'}}>
                  בוא נבדוק את המבצעים
                </a>
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