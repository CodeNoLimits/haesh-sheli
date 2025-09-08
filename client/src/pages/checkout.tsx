export default function Checkout() {
  return (
    <div className="rtl home page-template-default page page-id-checkout wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-5 elementor-page elementor-page-checkout">
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
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51">
                        <a href="/magazine" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>מגזין</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53">
                        <a href="/join" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>הצטרפו אלינו</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52">
                        <a href="/contact" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>צור קשר</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52">
                        <a href="/downloads" className="elementor-item" style={{color: 'white', textDecoration: 'none'}}>הורדות</a>
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

      {/* CHECKOUT CONTENT */}
      <section style={{background: '#f8f9fa', padding: '4rem 0', minHeight: '80vh'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          
          <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '3rem'}}>
            סיום הזמנה
          </h1>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start'}}>
            
            {/* BILLING FORM */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}>
              <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '2rem'}}>
                פרטי חיוב
              </h2>
              
              <form>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
                  <div>
                    <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                      שם פרטי *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl'}}
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                      שם משפחה *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl'}}
                    />
                  </div>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                    כתובת דואר אלקטרוני *
                  </label>
                  <input 
                    type="email" 
                    required
                    style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl'}}
                  />
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                    טלפון *
                  </label>
                  <input 
                    type="tel" 
                    required
                    style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl'}}
                  />
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                    כתובת מלאה *
                  </label>
                  <input 
                    type="text" 
                    required
                    style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl'}}
                  />
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
                  <div>
                    <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                      עיר *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl'}}
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                      מיקוד
                    </label>
                    <input 
                      type="text"
                      style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl'}}
                    />
                  </div>
                </div>

                <div style={{marginBottom: '2rem'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333'}}>
                    הערות להזמנה (אופציונלי)
                  </label>
                  <textarea 
                    rows={4}
                    style={{width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', direction: 'rtl', resize: 'vertical'}}
                    placeholder="הערות על ההזמנה, למשל הוראות מיוחדות למשלוח"
                  />
                </div>
              </form>
            </div>

            {/* ORDER SUMMARY */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}>
              <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '2rem'}}>
                סיכום הזמנה
              </h2>

              {/* Order Items */}
              <div style={{marginBottom: '2rem'}}>
                <div style={{borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem'}}>
                        ראש השנה שלי
                      </h4>
                      <p style={{color: '#666', fontSize: '0.9rem'}}>גדול סקאי - כמות: 1</p>
                    </div>
                    <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545'}}>
                      45.00 ₪
                    </div>
                  </div>
                </div>

                <div style={{borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem'}}>
                        תודה והודאה
                      </h4>
                      <p style={{color: '#666', fontSize: '0.9rem'}}>עור יוקרה 2 כרכים - כמות: 1</p>
                    </div>
                    <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545'}}>
                      380.00 ₪
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Summary */}
              <div style={{borderTop: '2px solid #eee', paddingTop: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{color: '#666'}}>סכום ביניים:</span>
                  <span style={{fontWeight: 'bold'}}>425.00 ₪</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{color: '#666'}}>משלוח:</span>
                  <span style={{color: '#28a745', fontWeight: 'bold'}}>חינם</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '1.3rem', fontWeight: 'bold', paddingTop: '1rem', borderTop: '1px solid #eee'}}>
                  <span>סה"כ:</span>
                  <span style={{color: '#dc3545'}}>425.00 ₪</span>
                </div>
              </div>

              {/* Payment Method */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem'}}>
                  אמצעי תשלום
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '1rem', border: '2px solid #e9ecef', borderRadius: '8px'}}>
                    <input type="radio" name="payment" value="credit" defaultChecked style={{marginLeft: '0.5rem'}} />
                    <span style={{fontWeight: 'bold'}}>כרטיס אשראי</span>
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '1rem', border: '2px solid #e9ecef', borderRadius: '8px'}}>
                    <input type="radio" name="payment" value="paypal" style={{marginLeft: '0.5rem'}} />
                    <span style={{fontWeight: 'bold'}}>PayPal</span>
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '1rem', border: '2px solid #e9ecef', borderRadius: '8px'}}>
                    <input type="radio" name="payment" value="bank" style={{marginLeft: '0.5rem'}} />
                    <span style={{fontWeight: 'bold'}}>העברה בנקאית</span>
                  </label>
                </div>
              </div>

              {/* Place Order Button */}
              <button 
                style={{
                  width: '100%', 
                  background: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  padding: '1.2rem', 
                  borderRadius: '8px', 
                  fontSize: '1.3rem', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                ביצוע הזמנה
              </button>

              <p style={{fontSize: '0.9rem', color: '#666', textAlign: 'center', marginTop: '1rem'}}>
                הנתונים שלכם מוגנים ומאובטחים
              </p>
            </div>
          </div>
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