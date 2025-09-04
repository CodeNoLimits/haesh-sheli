import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log("Newsletter subscription:", { name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground hebrew-text">
      {/* Top utility bar */}
      <div className="bg-gray-800 text-white text-sm py-1" data-testid="top-utility-bar">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300" data-testid="link-store-entrance">כניסה לחנות</a>
            <a href="#" className="hover:text-gray-300" data-testid="link-personal-area">אזור אישי</a>
            <a href="#" className="hover:text-gray-300" data-testid="link-contact">יצירת קשר</a>
          </div>
          <div data-testid="text-free-shipping">משלוחים חינם החל מ- 399 ש"ח</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50" data-testid="main-navigation">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://www.haesh-sheli.co.il/wp-content/uploads/2021/12/cropped-%D7%A7%D7%A8%D7%95-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%A8-%D7%90%D7%95%D7%93%D7%A1%D7%A8.d110a0.webp" 
                alt="האש שלי תקוף - קרן רבי ישראל" 
                className="h-12 w-auto"
                data-testid="img-logo"
              />
            </div>

            {/* Navigation menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="hover:text-red-200 font-medium" data-testid="link-home">דף הבית</a>
              <a href="#" className="hover:text-red-200 font-medium" data-testid="link-shop">חנות</a>
              <a href="#" className="hover:text-red-200 font-medium" data-testid="link-about">עלינו</a>
              <a href="#" className="hover:text-red-200 font-medium" data-testid="link-invite">מזמין</a>
              <a href="#" className="hover:text-red-200 font-medium" data-testid="link-contact-nav">צור קשר</a>
            </div>

            {/* Cart and search */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="חיפוש"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 rounded-md text-black w-40"
                  data-testid="input-search"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
              <Button
                variant="secondary"
                className="flex items-center gap-2"
                data-testid="button-cart"
              >
                <span>0.00 ₪</span>
                <span>0</span>
                <span>עגלת קניות</span>
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section 1 */}
      <section className="bg-gradient-to-l from-yellow-100 to-yellow-200 py-20 relative overflow-hidden" data-testid="hero-section-1">
        <div className="container mx-auto px-4 text-center">
          {/* Book image positioned on the left */}
          <div className="absolute right-10 top-10 hidden lg:block">
            <img 
              src="https://www.haesh-sheli.co.il/wp-content/uploads/2024/05/Copy-of-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-2.webp" 
              alt="ספר רבי נחמן" 
              className="w-48 h-auto"
              data-testid="img-hero-book"
            />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-gray-800" data-testid="text-main-title">ספרי רבינו נחמן מברסלב זצ''ל</h1>
            <h2 className="text-3xl font-semibold mb-4 text-gray-700" data-testid="text-subtitle">הדרך לאוצר שלך.</h2>
            <h3 className="text-2xl mb-8 text-gray-600 italic" data-testid="text-quote">''רק תנו לי את ליבכם ואוליך אתכם בדרך חדשה..'' (רבי נחמן)</h3>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-red-600"
                data-testid="button-enter-store"
              >
                כניסה לחנות
              </Button>
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-3 font-semibold"
                data-testid="button-discover-activity"
              >
                באו לגלות על הפעילות שלנו
              </Button>
            </div>
            
            <div className="mt-6">
              <a href="#" className="text-primary underline hover:text-red-600" data-testid="link-chametz-sale">
                לחצו כאן למעבר למכירת חמץ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="bg-white py-20" data-testid="hero-section-2">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800" data-testid="text-online-title">ספרי רבנו נחמן מברסלב זצ''ל</h2>
          <h3 className="text-3xl font-semibold mb-8 text-gray-600" data-testid="text-online-subtitle">עכשיו אונליין</h3>
          
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="https://www.haesh-sheli.co.il/wp-content/uploads/2024/05/Copy-of-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-2.webp" 
              alt="ספרי רבנו" 
              className="w-full h-auto rounded-xl shadow-lg"
              data-testid="img-books-hero"
            />
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-red-600"
              data-testid="button-enter-store-2"
            >
              כניסה לחנות
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="px-8 py-3 font-semibold"
              data-testid="button-discover-activity-2"
            >
              באו לגלות על הפעילות שלנו
            </Button>
          </div>
        </div>
      </section>

      {/* Lottery Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20" data-testid="lottery-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" data-testid="text-lottery-title">הגרלה כרטיס לאומן מתנה</h2>
            <h3 className="text-3xl font-semibold mb-6 text-primary" data-testid="text-lottery-subtitle">קח ספר... והטיסה לאומן עלינו!</h3>
            <p className="text-xl text-gray-600 mb-4" data-testid="text-luggage-question">מזוודה יש? ספר לדרך יש? תכינו את הלב!</p>
            <p className="text-lg text-gray-700 mb-6" data-testid="text-lottery-description">
              קרן רבי ישראל מזמינה אתכם להכנס להגרלת ההגרלות, כרטיס טיסה לציונו הקדוש של רבי נחמן באומן, עיר הגעגועים
            </p>
            <p className="text-lg text-gray-700 mb-8" data-testid="text-spiritual-experience">חוויה רוחנית בלתי נשכחת של תעצומות וכח!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-gray-800" data-testid="text-how-to-participate">איך משתתפים?</h4>
              <ol className="text-lg space-y-4 text-gray-700">
                <li className="flex items-start gap-3" data-testid="step-1">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                  <span>מבצעים רכישה באתר.</span>
                </li>
                <li className="flex items-start gap-3" data-testid="step-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                  <span>שולחים את פרטים עם מספר ההזמנה</span>
                </li>
                <li className="flex items-start gap-3" data-testid="step-3">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                  <span>ונכנסים להגרלה הגדולה.</span>
                </li>
                <li className="flex items-start gap-3" data-testid="step-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                  <span>מחכים לזכייה הגדולה, ולחוויות הרוחניות באומן!</span>
                </li>
              </ol>
              
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground px-8 py-4 font-semibold text-xl hover:bg-red-600"
                  data-testid="button-join-lottery"
                >
                  לחצו כאן להצטרף להגרלה
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/02/%D7%94%D7%92%D7%A8%D7%9C%D7%AA-%D7%98%D7%99%D7%A1%D7%94-%D7%9C%D7%A8%D7%91%D7%A0%D7%95-%D7%94%D7%A7%D7%93%D7%95%D7%A9-%D7%A7%D7%A8%D7%9F-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C.webp" 
                alt="הגרלת טיסה לרבנו הקדוש" 
                className="w-full h-auto rounded-xl shadow-lg"
                data-testid="img-lottery-banner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Books Gallery */}
      <section className="bg-white py-20" data-testid="books-gallery">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" data-testid="text-featured-books">ספרי רבנו המובילים</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Book 1: ליקוטי מוהרן */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1" data-testid="book-likutei-moharan">
              <a href="#">
                <img 
                  src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/6.d110a0.webp" 
                  alt="ליקוטי מוהרן" 
                  className="w-full h-64 object-cover"
                />
              </a>
            </div>
            
            {/* Book 2: ליקוטי תפילות */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1" data-testid="book-likutei-tefilot">
              <a href="#">
                <img 
                  src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/3.d110a0.webp" 
                  alt="ליקוטי תפילות" 
                  className="w-full h-64 object-cover"
                />
              </a>
            </div>
            
            {/* Book 3: חומש ליקוטי הלכות */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1" data-testid="book-chumash-likutei">
              <a href="#">
                <img 
                  src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/5.d110a0.webp" 
                  alt="חומש ליקוטי הלכות" 
                  className="w-full h-64 object-cover"
                />
              </a>
            </div>
            
            {/* Book 4: ליקוטי הלכות */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1" data-testid="book-likutei-halachot">
              <a href="#">
                <img 
                  src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/2.d110a0.webp" 
                  alt="ליקוטי הלכות" 
                  className="w-full h-64 object-cover"
                />
              </a>
            </div>
            
            {/* Book 5: סיפורי מעשיות */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1" data-testid="book-sipurei-maasiyot">
              <a href="#">
                <img 
                  src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/02/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-3.d110a0.webp" 
                  alt="סיפורי מעשיות" 
                  className="w-full h-64 object-cover"
                />
              </a>
            </div>
            
            {/* Book 6: כל בו לישועות */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1" data-testid="book-kol-bo">
              <a href="#">
                <img 
                  src="https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/1.d110a0.webp" 
                  alt="כל בו לישועות" 
                  className="w-full h-64 object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-muted py-20" data-testid="quote-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="quote-mark mb-4">"</div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800" data-testid="text-quote-intro">דף אחד מספרי רבנו</h3>
            <h4 className="text-4xl font-bold mb-8 text-primary" data-testid="text-quote-main">יהיה תיקון על הכל!</h4>
            <p className="text-2xl font-semibold text-gray-700" data-testid="text-quote-author">רבי נתן מברסלב</p>
            <div className="quote-mark mt-4 rotate-180">"</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20" data-testid="benefits-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4 text-gray-800" data-testid="text-free-shipping-benefit">משלוח מהיר עד הבית חינם</h4>
              <p className="text-gray-600">ברכישה מעל 299 ₪ מהחנות</p>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4 text-gray-800" data-testid="text-secure-purchase">רכישה מאובטחת</h4>
              <p className="text-gray-600">באמצעות תעודת SSL ובתקנים המחמירים ביותר</p>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4 text-gray-800" data-testid="text-largest-bookstore">חנות הספרים הגדולה ביותר לספרי רבנו אונליין</h4>
              <p className="text-gray-600">משלוחים לכל הארץ</p>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4 text-gray-800" data-testid="text-excellent-service">שירות לקוחות מעולה וזמין תמיד לשירותכם</h4>
              <p className="text-gray-600">עד 12 תשלומים ללא ריבית</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-secondary py-20" data-testid="categories-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" data-testid="text-categories-title">הקטגוריות בחנות</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800" data-testid="text-rabbeinu-writings">כל חיבורי רבנו הקדוש</h3>
              <Button
                className="bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-red-600"
                data-testid="button-rabbeinu-category"
              >
                לחצו כאן
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800" data-testid="text-rabbi-israel-books">כל ספרי רבי ישראל</h3>
              <Button
                className="bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-red-600"
                data-testid="button-rabbi-israel-category"
              >
                לחצו כאן
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="text-primary underline hover:text-red-600 text-lg" data-testid="link-more-categories">
              לקטגוריות נוספות לחצו כאן
            </a>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-white py-20" data-testid="information-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800" data-testid="text-discover-depth">בוא לגלות לעומק</h2>
            <p className="text-lg text-gray-700 mb-6">
              מעבר לרכישה של ספרי רבנו אנחנו מזמינים אתכם גולשים יקרים לקרוא ולעניין במאמרים מאירי עיניים על גודל הלימוד בספרי רבנו
            </p>
            <p className="text-lg text-gray-700">
              ולמידה על רבנו הקדוש, ועל חסידות ברסלב ותנועת החסידות מראשית הבעל שם טוב הקדוש ועד לאנשי שלומנו לדורת
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-20" data-testid="donation-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800" data-testid="text-join-distribution">הצטרפו עכשיו לפרסום והפצת ספרי רבי נחמן בעולם</h2>
          <h3 className="text-2xl font-semibold mb-8 text-gray-700" data-testid="text-help-opportunity">ההזדמנות שלכם לעזור ולתת יד לפרסום שם הצדיק בעולם</h3>
          
          <Button
            size="lg"
            className="bg-primary text-primary-foreground px-8 py-4 font-semibold text-xl hover:bg-red-600"
            data-testid="button-donation"
          >
            למעבר לתרומה להדפסה והפצת אור הצדיק לחצו כאן
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 text-white py-20" data-testid="newsletter-section">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-join-newsletter">הצטרפו עכשיו לרשימת תפוצה</h3>
            <h4 className="text-3xl font-bold mb-8" data-testid="text-discount-offer">וקבלו 10% הנחנה ברכישה ראשונה באתר</h4>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto flex-wrap" data-testid="form-newsletter">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-black"
                data-testid="input-name"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-black"
                data-testid="input-email"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-red-600"
                data-testid="button-join-newsletter"
              >
                צרפו אותי
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-testid="footer">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-4" data-testid="text-whatsapp-groups">לאחת מקבוצות הוווצאפ לחצו על האיקון</h4>
            <Button
              className="bg-green-500 text-white px-6 py-3 hover:bg-green-600"
              data-testid="button-whatsapp"
            >
              WhatsApp
            </Button>
          </div>
          
          <div className="text-center text-gray-400">
            <p className="mb-2" data-testid="text-copyright">כל הזכיות שמורות 2025 © קרן רבי ישראל דב אודסר זצ"ל</p>
            <p data-testid="text-built-by">האתר נבנה ע"י מדיה מאסטר</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
