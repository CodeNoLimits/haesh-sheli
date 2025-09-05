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

      {/* MAIN CONTENT */}
      <section style={{background: '#f8f9fa', padding: '3rem 0', minHeight: '100vh'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          
          <div style={{display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'start'}}>
            
            {/* FILTERS SIDEBAR */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', position: 'sticky', top: '2rem'}}>
              <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333'}}>
                חנות הספרים
              </h2>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#dc3545'}}>
                סינון לפי..
              </h3>
              
              {/* Search */}
              <div style={{marginBottom: '2rem'}}>
                <label style={{fontWeight: 'bold', marginBottom: '0.8rem', display: 'block', color: '#333'}}>חיפוש חופשי</label>
                <input 
                  type="text" 
                  placeholder="חיפוש..."
                  style={{width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '0.8rem'}}
                />
                <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                  הצג תוצאות חיפוש
                </button>
              </div>

              {/* Categories */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>קטגוריות</h4>
                <select style={{width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '1rem'}}>
                  <option>קטגוריות</option>
                  <option>ליקוטים</option>
                  <option>לנוער וילדים</option>
                  <option>מועדי השנה</option>
                  <option>מכתבים</option>
                  <option>סטים</option>
                  <option>סיפורים ומעשיות</option>
                  <option>ספרי יסוד</option>
                  <option>ספרי רבי ישראל דוב אודסר</option>
                  <option>ספרי רבי נחמן מברסלב</option>
                  <option>ספרי רבי נתן</option>
                  <option>ספרי רבנו כללי וליקוטים</option>
                  <option>ספרי תלמידים</option>
                  <option>עצות</option>
                </select>
              </div>

              {/* Size and Type */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>גודל וסוג כריכה</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    בינוני
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    גדול
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    ענק
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    קטן /כיס
                  </label>
                </div>
              </div>

              {/* Topics */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>ערכים/נושאים</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    אמונה
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    התבודדות
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    התחזקות
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    ישועות
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    צדיק
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    שמחה
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    שבת חגים ומועדים
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    שיחות
                  </label>
                </div>
              </div>

              {/* Languages */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>שפות זרות</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    אנגלית
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    ספרדית
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    צרפתית
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    רוסית
                  </label>
                </div>
              </div>

              {/* Additional Categories */}
              <div style={{marginBottom: '2rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    תיקון הכללי
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginLeft: '0.5rem'}} />
                    תפילות
                  </label>
                </div>
                <button style={{marginTop: '1rem', background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                  הצג תוצאות
                </button>
              </div>

              {/* Price Range */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem', color: '#333'}}>טווח מחירים</h4>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem'}}>
                  <input 
                    type="number" 
                    placeholder="₪" 
                    style={{flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'center'}}
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    placeholder="₪" 
                    style={{flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'center'}}
                  />
                </div>
                <button style={{background: '#17a2b8', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                  הצג תוצאות
                </button>
              </div>
            </div>
            
            {/* PRODUCTS GRID */}
            <div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem'}}>
                
                {/* Product 1 - אב"י הנחל */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/1-1-300x300.d110a0.webp" 
                      alt="אב״י הנחל"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        אב"י הנחל
                      </h3>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                          ★★★★★
                        </div>
                        <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>דורג 5.00 מתוך 5</span>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        10.00 ₪ – 35.00 ₪
                      </div>
                      <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        בחר אפשרויות
                      </button>
                      <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                        למוצר זה יש מספר סוגים. ניתן לבחור את האפשרויות בעמוד המוצר
                      </p>
                    </div>
                  </a>
                </div>

                {/* Product 2 - אוצר היראה */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/24-300x300.d110a0.webp" 
                      alt="אוצר היראה"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        אוצר היראה
                      </h3>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                          ★★★★★
                        </div>
                        <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>דורג 5.00 מתוך 5</span>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        200.00 ₪
                      </div>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 3 - אמונת חכמים - SALE */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 2}}>
                    מבצע!!
                  </div>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/woocommerce-placeholder-300x300.d110a0.webp" 
                      alt="אמונת חכמים"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        אמונת חכמים
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                        <span style={{textDecoration: 'line-through', color: '#999', fontSize: '1rem'}}>40.00 ₪</span>
                        <span style={{color: '#dc3545', marginRight: '0.5rem'}}>35.00 ₪</span>
                      </div>
                      <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                        המחיר המקורי היה: 40.00 ₪. המחיר הנוכחי הוא: 35.00 ₪.
                      </p>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 4 - אמונת עתיך */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/03/%D7%90%D7%9E%D7%95%D7%A0%D7%AA-%D7%A2%D7%99%D7%AA%D7%9A-300x300.b197b0.webp" 
                      alt="אמונת עתיך"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        אמונת עתיך
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        20.00 ₪
                      </div>
                      <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        בחר אפשרויות
                      </button>
                      <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                        למוצר זה יש מספר סוגים. ניתן לבחור את האפשרויות בעמוד המוצר
                      </p>
                    </div>
                  </a>
                </div>

                {/* Product 5 - ביאור הליקוטים */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/woocommerce-placeholder-300x300.d110a0.webp" 
                      alt="ביאור הליקוטים"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        ביאור הליקוטים
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        75.00 ₪
                      </div>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 6 - בעקבות הבעל שם טוב - SALE */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 2}}>
                    מבצע!!
                  </div>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/44-300x300.d110a0.webp" 
                      alt="בעקבות הבעל שם טוב"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        בעקבות הבעל שם טוב
                      </h3>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                          ★★★★★
                        </div>
                        <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>דורג 5.00 מתוך 5</span>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                        <span style={{textDecoration: 'line-through', color: '#999', fontSize: '1rem'}}>150.00 ₪</span>
                        <span style={{color: '#dc3545', marginRight: '0.5rem'}}>115.00 ₪</span>
                      </div>
                      <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                        המחיר המקורי היה: 150.00 ₪. המחיר הנוכחי הוא: 115.00 ₪.
                      </p>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 7 - הראש השנה שלי */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/27-300x300.d110a0.webp" 
                      alt="הראש השנה שלי-ראש השנה"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        הראש השנה שלי-ראש השנה
                      </h3>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                          ★★★★★
                        </div>
                        <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>דורג 5.00 מתוך 5</span>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        120.00 ₪
                      </div>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 8 - השתפכות הנפש כיס - SALE */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 2}}>
                    מבצע!!
                  </div>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/03/%D7%9E%D7%95%D7%A7%D7%90%D7%A4-%D7%94%D7%93%D7%9E%D7%99%D7%94-%D7%94%D7%A9%D7%AA%D7%A4%D7%9B%D7%95%D7%AA-%D7%94%D7%A0%D7%A4%D7%A9_800x600-300x300.b197b0.webp" 
                      alt="השתפכות הנפש כיס כריכה רכה"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        השתפכות הנפש כיס כריכה רכה
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                        <span style={{textDecoration: 'line-through', color: '#999', fontSize: '1rem'}}>20.00 ₪</span>
                        <span style={{color: '#dc3545', marginRight: '0.5rem'}}>10.00 ₪</span>
                      </div>
                      <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                        המחיר המקורי היה: 20.00 ₪. המחיר הנוכחי הוא: 10.00 ₪.
                      </p>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 9 - השתפכות ומשיבת נפש */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/03/41-300x300.d110a0.webp" 
                      alt="השתפכות ומשיבת נפש"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        השתפכות ומשיבת נפש
                      </h3>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                          ★★★★★
                        </div>
                        <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>דורג 5.00 מתוך 5</span>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        20.00 ₪ – 35.00 ₪
                      </div>
                      <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        בחר אפשרויות
                      </button>
                      <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                        למוצר זה יש מספר סוגים. ניתן לבחור את האפשרויות בעמוד המוצר
                      </p>
                    </div>
                  </a>
                </div>

                {/* Product 10 - התגלות הדעת-פסח - SALE */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 2}}>
                    מבצע!!
                  </div>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/08/%D7%A9%D7%99%D7%A8-%D7%94%D7%A9%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%A0%D7%95%D7%AA-%D7%A7%D7%A8%D7%9F-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-6-300x300.d110a0.webp" 
                      alt="התגלות הדעת-פסח"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        התגלות הדעת-פסח
                      </h3>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                          ★★★★★
                        </div>
                        <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>דורג 5.00 מתוך 5</span>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                        <span style={{textDecoration: 'line-through', color: '#999', fontSize: '1rem'}}>170.00 ₪</span>
                        <span style={{color: '#dc3545', marginRight: '0.5rem'}}>148.00 ₪</span>
                      </div>
                      <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                        המחיר המקורי היה: 170.00 ₪. המחיר הנוכחי הוא: 148.00 ₪.
                      </p>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 11 - התחלת ההתחלות-פורים */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/08/%D7%A9%D7%99%D7%A8-%D7%94%D7%A9%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%A0%D7%95%D7%AA-%D7%A7%D7%A8%D7%9F-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-5-300x300.d110a0.webp" 
                      alt="התחלת ההתחלות-פורים"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        התחלת ההתחלות-פורים
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        120.00 ₪
                      </div>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 12 - התלמיד הגדול */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/03/%D7%94%D7%AA%D7%9C%D7%9E%D7%99%D7%93-%D7%94%D7%92%D7%93%D7%95%D7%9C-300x300.b197b0.webp" 
                      alt="התלמיד הגדול"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        התלמיד הגדול
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        75.00 ₪
                      </div>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 13 - זמרת הארץ */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/08/%D7%96%D7%9E%D7%A8%D7%AA-%D7%94%D7%90%D7%A8%D7%A5-%D7%97%D7%A0%D7%95%D7%AA-%D7%A7%D7%A8%D7%9F-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-300x300.d110a0.webp" 
                      alt="זמרת הארץ"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        זמרת הארץ
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        35.00 ₪
                      </div>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 14 - זמירות לשבת ברסלב - SALE */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 2}}>
                    מבצע!!
                  </div>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/03/%D7%96%D7%9E%D7%99%D7%A8%D7%95%D7%AA-2-300x300.b197b0.webp" 
                      alt="חדש! זמירות לשבת ברסלב"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        חדש! זמירות לשבת ברסלב
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                        <span style={{textDecoration: 'line-through', color: '#999', fontSize: '1rem'}}>55.00 ₪</span>
                        <span style={{color: '#dc3545', marginRight: '0.5rem'}}>35.00 ₪</span>
                      </div>
                      <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                        המחיר המקורי היה: 55.00 ₪. המחיר הנוכחי הוא: 35.00 ₪.
                      </p>
                      <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        בחר אפשרויות
                      </button>
                      <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                        למוצר זה יש מספר סוגים. ניתן לבחור את האפשרויות בעמוד המוצר
                      </p>
                    </div>
                  </a>
                </div>

                {/* Product 15 - ימי חג השבועות - SALE */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 2}}>
                    מבצע!!
                  </div>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/woocommerce-placeholder-300x300.d110a0.webp" 
                      alt="חדש! ימי חג השבועות"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        חדש! ימי חג השבועות
                      </h3>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                        <span style={{textDecoration: 'line-through', color: '#999', fontSize: '1rem'}}>10.00 ₪</span>
                        <span style={{color: '#dc3545', marginRight: '0.5rem'}}>7.00 ₪</span>
                      </div>
                      <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                        המחיר המקורי היה: 10.00 ₪. המחיר הנוכחי הוא: 7.00 ₪.
                      </p>
                      <button style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        הוספה לסל
                      </button>
                    </div>
                  </a>
                </div>

                {/* Product 16 - חומש ליקוטי הלכות */}
                <div style={{background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                  <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img 
                      src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/08/28-300x300.d110a0.webp" 
                      alt="חומש ליקוטי הלכות"
                      style={{width: '100%', height: '300px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '1.5rem'}}>
                      <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333'}}>
                        חומש ליקוטי הלכות
                      </h3>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <div style={{color: '#ffc107', fontSize: '1.1rem'}}>
                          ★★★★☆
                        </div>
                        <span style={{marginRight: '0.5rem', color: '#666', fontSize: '0.9rem'}}>דורג 4.50 מתוך 5</span>
                      </div>
                      <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                        150.00 ₪ – 175.00 ₪
                      </div>
                      <button style={{background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold'}}>
                        בחר אפשרויות
                      </button>
                      <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                        למוצר זה יש מספר סוגים. ניתן לבחור את האפשרויות בעמוד המוצר
                      </p>
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROMOTIONS SECTION */}
      <section style={{background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)', padding: '3rem 0', textAlign: 'center'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#2d3436', marginBottom: '2rem'}}>
            למבצעים כנסו
          </h2>
          <a href="#" style={{textDecoration: 'none', fontSize: '1.5rem', padding: '1.2rem 3rem', background: '#d63031', color: 'white', border: 'none', borderRadius: '10px', display: 'inline-block', fontWeight: 'bold'}}>
            בוא נבדוק את המבצעים
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer" style={{background: '#2d3436', color: 'white', padding: '3rem 0 2rem'}}>
        <div className="elementor-container">
          <div style={{textAlign: 'center', paddingTop: '2rem'}}>
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