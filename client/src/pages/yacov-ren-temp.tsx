export default function YacovRenTemp() {
  return (
    <div className="rtl yacov-ren-temp page-template-default page page-id-temp wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-5 elementor-page elementor-page-temp">
      {/* TOP BAR */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ba655d5 elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile elementor-section-height-default" style={{background: '#333', color: 'white', padding: '8px 0'}}>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-icon-list--layout-inline elementor-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items" style={{display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0}}>
                    <li className="elementor-icon-list-item elementor-inline-item" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span className="elementor-icon-list-text">יעקב הן - ממשק ניהול זמני</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEADER */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ba655d5 elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile" style={{background: '#dc3545', padding: '1rem 0'}}>
        <div className="elementor-container elementor-column-gap-default" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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

          <div className="elementor-column elementor-col-25 elementor-top-column">
            <nav aria-label="תפריט ראשי" style={{textAlign: 'center'}}>
              <ul style={{display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0}}>
                <li><a href="/" style={{color: 'white', textDecoration: 'none'}}>דף הבית</a></li>
                <li><a href="/store" style={{color: 'white', textDecoration: 'none'}}>חנות</a></li>
                <li><a href="/downloads" style={{color: 'white', textDecoration: 'none'}}>הורדות</a></li>
              </ul>
            </nav>
          </div>

          <div className="elementor-column elementor-col-25 elementor-top-column">
            <div style={{textAlign: 'left'}}>
              <a href="/" style={{background: 'white', color: '#dc3545', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none', fontSize: '0.9rem'}}>
                חזרה לאתר הראשי
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="elementor-section elementor-top-section" style={{background: '#f8f9fa', padding: '4rem 0'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h1 style={{fontSize: '3rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '2rem', textAlign: 'center'}}>
            יעקב הן - ממשק ניהול זמני
          </h1>
          <h2 style={{fontSize: '1.8rem', color: '#333', marginBottom: '3rem', textAlign: 'center'}}>
            לוח בקרה להתקדמות הפרויקט
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
            
            {/* Project Status */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                📊 סטטוס הפרויקט
              </h3>
              <ul style={{listStyle: 'none', padding: 0, lineHeight: '1.8'}}>
                <li style={{marginBottom: '0.5rem'}}>✅ עיצוב בסיסי הושלם</li>
                <li style={{marginBottom: '0.5rem'}}>✅ דפי מוצרים יושמו</li>
                <li style={{marginBottom: '0.5rem'}}>⚠️ מערכת תשלומים - בהמתנה</li>
                <li style={{marginBottom: '0.5rem'}}>🔄 תרגום רב-לשוני - בתהליך</li>
                <li style={{marginBottom: '0.5rem'}}>📱 אופטימיזציה למובייל - תוכנן</li>
              </ul>
            </div>

            {/* Latest Updates */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                🔄 עדכונים אחרונים
              </h3>
              <div style={{lineHeight: '1.8', fontSize: '0.9rem', color: '#666'}}>
                <p style={{marginBottom: '1rem'}}>
                  <strong>07/09/2025:</strong> תוקן עיצוב הראשי, נוסף ממשק יעקב הן
                </p>
                <p style={{marginBottom: '1rem'}}>
                  <strong>06/09/2025:</strong> יושמו כל דפי המוצרים עם אפשרויות גדלים
                </p>
                <p style={{marginBottom: '1rem'}}>
                  <strong>05/09/2025:</strong> הוקמה מערכת ההזמנות הבסיסית
                </p>
              </div>
            </div>

            {/* Technical Stack */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                ⚙️ מחסנית טכנולוגית
              </h3>
              <ul style={{listStyle: 'none', padding: 0, lineHeight: '1.8', fontSize: '0.9rem'}}>
                <li style={{marginBottom: '0.5rem'}}>Frontend: React + TypeScript</li>
                <li style={{marginBottom: '0.5rem'}}>Backend: Node.js + Express</li>
                <li style={{marginBottom: '0.5rem'}}>Database: PostgreSQL</li>
                <li style={{marginBottom: '0.5rem'}}>Styling: Tailwind CSS</li>
                <li style={{marginBottom: '0.5rem'}}>Hosting: Replit</li>
              </ul>
            </div>

            {/* Next Steps */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem'}}>
                📋 שלבים הבאים
              </h3>
              <ol style={{paddingRight: '1rem', lineHeight: '1.8', fontSize: '0.9rem', color: '#666'}}>
                <li style={{marginBottom: '0.5rem'}}>השלמת אינטגרציית Stripe</li>
                <li style={{marginBottom: '0.5rem'}}>הוספת תמיכה רב-לשונית מלאה</li>
                <li style={{marginBottom: '0.5rem'}}>אופטימיזציה למכשירים ניידים</li>
                <li style={{marginBottom: '0.5rem'}}>בדיקות יוזבוליטי</li>
                <li style={{marginBottom: '0.5rem'}}>העלאה לפרודקשן</li>
              </ol>
            </div>

          </div>

          {/* Action Buttons */}
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/store" style={{background: '#dc3545', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
              צפייה בחנות
            </a>
            <a href="/downloads" style={{background: '#28a745', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
              הורדות PDF
            </a>
            <a href="mailto:contact@haesh-sheli.co.il" style={{background: '#007bff', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
              צור קשר
            </a>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT NOTES */}
      <section className="elementor-section elementor-top-section" style={{background: '#fff3cd', padding: '2rem 0', borderTop: '3px solid #ffc107'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#856404', marginBottom: '1rem', textAlign: 'center'}}>
            🔧 הערות פיתוח
          </h3>
          <div style={{background: 'white', padding: '1.5rem', borderRadius: '8px', fontSize: '0.9rem', color: '#666', textAlign: 'center'}}>
            <p style={{marginBottom: '1rem'}}>
              <strong>עדכון אחרון:</strong> 07 בספטמבר 2025, 19:55
            </p>
            <p style={{marginBottom: '1rem'}}>
              דף זה נוצר עבור יעקב הן לניהול ומעקב אחר התקדמות הפרויקט.
              כל הפונקציונליות הבסיסית מוכנה, נותר לשלב תשלומים ופיצ'רים מתקדמים.
            </p>
            <p style={{fontSize: '0.8rem', color: '#999'}}>
              גרסה: 1.0.0-beta | סביבה: Development
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}