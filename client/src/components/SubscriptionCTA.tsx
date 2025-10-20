import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Crown, CheckCircle, ArrowRight, AlertCircle, Mail, Phone, Upload, X } from 'lucide-react';

interface SubscriptionStatus {
  configured: boolean;
  message: string;
}

interface SubscriptionCTAProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showManageLink?: boolean;
  className?: string;
  'data-testid'?: string;
}

// Pop-up Modal Component
function SubscriptionPopupModal({ onClose }: { onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ 
        zIndex: 9999, 
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
        style={{
          animation: 'fadeInScale 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Checkmarks List */}
        <div className="space-y-4 mb-6" dir="rtl">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
              <CheckCircle size={16} className="text-white" />
            </div>
            <p className="text-gray-700 font-medium text-lg">גישה מהירה וקלה</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
              <CheckCircle size={16} className="text-white" />
            </div>
            <p className="text-gray-700 font-medium text-lg">עדכונים אוטומטיים</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
              <CheckCircle size={16} className="text-white" />
            </div>
            <p className="text-gray-700 font-medium text-lg">חוויות משתמש משופרת</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
              <CheckCircle size={16} className="text-white" />
            </div>
            <p className="text-gray-700 font-medium text-lg">פעילה ללא אינטרנט</p>
          </div>
        </div>

        {/* Info Text */}
        <div className="text-center mb-6 p-4 bg-blue-50 rounded-xl" dir="rtl">
          <p className="text-gray-600 text-sm">
            לחץ על סמל ההתקנה בשורת הכתובות
          </p>
        </div>

        {/* Primary Button - Gradient */}
        <Button
          onClick={onClose}
          className="w-full text-lg font-bold py-6 rounded-xl mb-3"
          style={{
            background: 'linear-gradient(90deg, #1E90FF, #00CED1)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(30, 144, 255, 0.4)'
          }}
        >
          <Upload className="ml-2" size={20} />
          תתקן עכשיו
        </Button>

        {/* Secondary Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          className="w-full text-gray-500 hover:text-gray-700 text-sm"
        >
          אולי מאוחר יותר
        </Button>
      </div>
    </div>
  );
}

export function SubscriptionCTA({ 
  variant = 'primary', 
  size = 'md',
  showManageLink = true,
  className = '',
  'data-testid': testId
}: SubscriptionCTAProps) {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Show popup on mount (after 2 seconds delay)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('subscription-popup-seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('subscription-popup-seen', 'true');
  };

  // Check Stripe configuration
  const { data: stripeStatus } = useQuery<SubscriptionStatus>({
    queryKey: ['/api/stripe-status'],
    retry: false,
    refetchOnWindowFocus: false,
  });

  // Get user subscription status
  const { data: userSubscription, isLoading: subscriptionLoading } = useQuery({
    queryKey: ['/api/user/subscription'],
    retry: false,
    refetchOnWindowFocus: false,
  });

  const user = (userSubscription as any)?.user;
  const isSubscriber = user?.isSubscriber || false;
  const subscriptionStatus = user?.subscriptionStatus;

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'px-4 py-2 text-sm';
      case 'lg': return 'px-6 py-4 text-lg';
      default: return 'px-5 py-3 text-base';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary': return 'btn-breslov-secondary';
      default: return 'btn-breslov-primary';
    }
  };

  // Loading state
  if (subscriptionLoading) {
    return (
      <Button 
        disabled 
        className={`${getVariantClasses()} ${getSizeClasses()} ${className} opacity-50`}
        data-testid={testId || 'subscription-loading'}
      >
        טוען...
      </Button>
    );
  }

  // If user is already subscribed and active
  if (isSubscriber && subscriptionStatus === 'active') {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          disabled
          className="bg-green-600 hover:bg-green-700 text-white font-bold flex items-center gap-2"
          data-testid={testId || 'subscription-active'}
        >
          <CheckCircle className="w-4 h-4" />
          מנוי פעיל
        </Button>
        {showManageLink && (
          <Button 
            asChild
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            data-testid={testId ? `${testId}-manage` : 'subscription-manage'}
          >
            <a href="/subscription/manage">
              <ArrowRight className="w-4 h-4 mr-2" />
              ניהול מנוי
            </a>
          </Button>
        )}
      </div>
    );
  }

  // If Stripe is not configured, show fallback
  if (stripeStatus && !stripeStatus.configured) {
    return (
      <div className="space-y-4">
        <Alert className="border-amber-300 bg-amber-50 dark:bg-amber-950 dark:border-amber-500">
          <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertTitle className="text-amber-800 dark:text-amber-200">
            המנוי זמנית לא זמין
          </AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            לרכישת מנוי, אנא צרו קשר ישירות עם השירות לקוחות
          </AlertDescription>
        </Alert>
        
        {!showContactInfo ? (
          <Button 
            onClick={() => setShowContactInfo(true)}
            className={`${getVariantClasses()} ${getSizeClasses()} ${className} w-full`}
            data-testid={testId || 'subscription-contact-info'}
          >
            <Crown className="w-4 h-4 mr-2" />
            מידע על רכישת מנוי
          </Button>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-3">
            <h4 className="font-semibold text-foreground">צרו קשר לרכישת מנוי:</h4>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild 
                className="flex-1 btn-breslov-primary"
                data-testid={testId ? `${testId}-email` : 'contact-email'}
              >
                <a href="mailto:support@haesh-sheli.co.il?subject=בקשה לרכישת מנוי הוראת קבע&body=שלום, אני מעוניין/ת לרכוש מנוי הוראת קבע. אנא צרו איתי קשר.">
                  <Mail className="w-4 h-4 mr-2" />
                  שלח אימייל
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                data-testid={testId ? `${testId}-phone` : 'contact-phone'}
              >
                <a href="tel:+972-2-123-4567">
                  <Phone className="w-4 h-4 mr-2" />
                  התקשר
                </a>
              </Button>
            </div>
            
            <div className="text-xs text-center text-muted-foreground">
              support@haesh-sheli.co.il • 02-123-4567
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default CTA - user not subscribed, Stripe is configured
  return (
    <>
      {showPopup && <SubscriptionPopupModal onClose={handleClosePopup} />}
      <Button 
        asChild
        className={`${getVariantClasses()} ${getSizeClasses()} ${className}`}
        data-testid={testId || 'subscription-join'}
      >
        <a href="/subscription">
          <Crown className="w-4 h-4 mr-2" />
          הצטרף למנוי הוראת קבע
        </a>
      </Button>
    </>
  );
}