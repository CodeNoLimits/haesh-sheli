import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useStripe, useElements, Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Download, ShoppingCart, Crown, Sparkles } from 'lucide-react';
import { StripeNotConfiguredFallback } from '@/components/StripeNotConfiguredFallback';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const subscriptionTranslations = {
  he: {
    error: 'שגיאה',
    paymentError: 'שגיאה בתשלום',
    processing: 'מעבד...',
    joinSubscription: 'הצטרף להוראת קבע',
    activeSubscription: 'מנוי פעיל',
    paymentSystemUnavailable: 'מערכת התשלום אינה זמינה כרגע',
    paymentProcessingError: 'אירעה שגיאה בעיבוד התשלום',
    subscriptionCreationError: 'שגיאה ביצירת המנוי',
    contactUs: 'נשמח לעזור לך להצטרף למשפחת \'האש שלי\'',
    talkToUs: 'דבר איתנו',
    sendEmail: 'שלח מייל',
    joinNow: 'הצטרף עכשיו',
    perMonth: 'לחודש',
    loadingPlansError: 'שגיאה בטעינת תוכניות המנוי',
    loadingSubscriptionError: 'שגיאה בטעינת מצב המנוי',
    payWithPayPal: 'שלם עם PayPal',
    or: 'או',
    premium: 'פרימיום',
    benefits: 'יתרונות המנוי:',
    significantSavings: 'חסכון משמעותי!',
    savingsDesc: 'במקום לשלם על כל ספר בנפרד, קבל גישה לכל הספרים הדיגיטליים + הנחות על ספרים פיזיים!',
    guarantee: 'ניתן לבטל בכל עת • ללא התחייבות'
  },
  en: {
    error: 'Error',
    paymentError: 'Payment Error',
    processing: 'Processing...',
    joinSubscription: 'Join Subscription',
    activeSubscription: 'Active Subscription',
    paymentSystemUnavailable: 'Payment system is currently unavailable',
    paymentProcessingError: 'An error occurred processing the payment',
    subscriptionCreationError: 'Error creating subscription',
    contactUs: 'We\'d love to help you join the HaEsh Sheli family',
    talkToUs: 'Talk to Us',
    sendEmail: 'Send Email',
    joinNow: 'Join Now',
    perMonth: 'per month',
    loadingPlansError: 'Error loading subscription plans',
    loadingSubscriptionError: 'Error loading subscription status',
    payWithPayPal: 'Pay with PayPal',
    or: 'or',
    premium: 'Premium',
    benefits: 'Subscription Benefits:',
    significantSavings: 'Significant Savings!',
    savingsDesc: 'Instead of paying for each book separately, get access to all digital books + discounts on physical books!',
    guarantee: 'Cancel anytime • No commitment'
  },
  fr: {
    error: 'Erreur',
    paymentError: 'Erreur de Paiement',
    processing: 'Traitement...',
    joinSubscription: 'Rejoindre l\'Abonnement',
    activeSubscription: 'Abonnement Actif',
    paymentSystemUnavailable: 'Le système de paiement est actuellement indisponible',
    paymentProcessingError: 'Une erreur s\'est produite lors du traitement du paiement',
    subscriptionCreationError: 'Erreur lors de la création de l\'abonnement',
    contactUs: 'Nous serions ravis de vous aider à rejoindre la famille HaEsh Sheli',
    talkToUs: 'Parlez-nous',
    sendEmail: 'Envoyer un Email',
    joinNow: 'Rejoindre Maintenant',
    perMonth: 'par mois',
    loadingPlansError: 'Erreur de chargement des plans d\'abonnement',
    loadingSubscriptionError: 'Erreur de chargement du statut d\'abonnement',
    payWithPayPal: 'Payer avec PayPal',
    or: 'ou',
    premium: 'Premium',
    benefits: 'Avantages de l\'Abonnement:',
    significantSavings: 'Économies Importantes!',
    savingsDesc: 'Au lieu de payer chaque livre séparément, accédez à tous les livres numériques + réductions sur les livres physiques!',
    guarantee: 'Annuler à tout moment • Sans engagement'
  },
  es: {
    error: 'Error',
    paymentError: 'Error de Pago',
    processing: 'Procesando...',
    joinSubscription: 'Unirse a la Suscripción',
    activeSubscription: 'Suscripción Activa',
    paymentSystemUnavailable: 'El sistema de pago no está disponible actualmente',
    paymentProcessingError: 'Ocurrió un error al procesar el pago',
    subscriptionCreationError: 'Error al crear la suscripción',
    contactUs: 'Nos encantaría ayudarte a unirte a la familia HaEsh Sheli',
    talkToUs: 'Habla con Nosotros',
    sendEmail: 'Enviar Email',
    joinNow: 'Unirse Ahora',
    perMonth: 'por mes',
    loadingPlansError: 'Error al cargar los planes de suscripción',
    loadingSubscriptionError: 'Error al cargar el estado de suscripción',
    payWithPayPal: 'Pagar con PayPal',
    or: 'o',
    premium: 'Premium',
    benefits: 'Beneficios de la Suscripción:',
    significantSavings: '¡Ahorros Significativos!',
    savingsDesc: 'En lugar de pagar por cada libro por separado, ¡obtenga acceso a todos los libros digitales + descuentos en libros físicos!',
    guarantee: 'Cancelar en cualquier momento • Sin compromiso'
  },
  ru: {
    error: 'Ошибка',
    paymentError: 'Ошибка Платежа',
    processing: 'Обработка...',
    joinSubscription: 'Присоединиться к Подписке',
    activeSubscription: 'Активная Подписка',
    paymentSystemUnavailable: 'Платежная система в настоящее время недоступна',
    paymentProcessingError: 'Произошла ошибка при обработке платежа',
    subscriptionCreationError: 'Ошибка создания подписки',
    contactUs: 'Мы будем рады помочь вам присоединиться к семье HaEsh Sheli',
    talkToUs: 'Поговорите с Нами',
    sendEmail: 'Отправить Email',
    joinNow: 'Присоединиться Сейчас',
    perMonth: 'в месяц',
    loadingPlansError: 'Ошибка загрузки планов подписки',
    loadingSubscriptionError: 'Ошибка загрузки статуса подписки',
    payWithPayPal: 'Оплатить через PayPal',
    or: 'или',
    premium: 'Премиум',
    benefits: 'Преимущества Подписки:',
    significantSavings: 'Значительная Экономия!',
    savingsDesc: 'Вместо оплаты каждой книги отдельно, получите доступ ко всем цифровым книгам + скидки на физические книги!',
    guarantee: 'Отменить в любое время • Без обязательств'
  }
};

// Load Stripe (will need VITE_STRIPE_PUBLIC_KEY)
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = stripePublicKey ? loadStripe(stripePublicKey) : null;

interface SubscriptionPlan {
  id: string;
  name: string;
  nameHebrew: string;
  description: string;
  descriptionHebrew: string;
  price: number; // in agorot
  currency: string;
  features: string[];
  featuresHebrew: string[];
  isActive: boolean;
}

const SubscriptionForm = ({ plan, clientSecret }: { plan: SubscriptionPlan; clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const { currentLanguage } = useLanguage();
  const t = subscriptionTranslations[currentLanguage as keyof typeof subscriptionTranslations] || subscriptionTranslations.he;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      toast({
        title: t.error,
        description: t.paymentSystemUnavailable,
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Confirm the payment with the existing clientSecret
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/subscription/success`,
        },
      });

      if (error) {
        toast({
          title: t.paymentError,
          description: error.message,
          variant: "destructive",
        });
      } else {
        // Payment succeeded
        toast({
          title: "הצלחה!",
          description: "המנוי שלך הופעל בהצלחה",
        });
        queryClient.invalidateQueries({ queryKey: ['/api/user/subscription'] });
      }
    } catch (error: any) {
      console.error('Subscription error:', error);
      toast({
        title: t.error,
        description: t.paymentProcessingError,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
        <PaymentElement />
      </div>
      
      <Button 
        type="submit" 
        className="w-full btn-breslov-primary text-white py-3 text-lg font-bold shadow-lg" 
        disabled={!stripe || !elements || isLoading}
        data-testid="button-subscribe"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            מעבד...
          </div>
        ) : (
          <>
            <Crown className="mr-2 h-5 w-5" />
            {t.joinSubscription} - ₪{(plan.price / 100).toFixed(0)} {t.perMonth}
          </>
        )}
      </Button>
    </form>
  );
};

const SubscriptionPlanCard = ({ plan, isCurrentPlan }: { plan: SubscriptionPlan; isCurrentPlan?: boolean }) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isCreatingSubscription, setIsCreatingSubscription] = useState(false);
  const { toast } = useToast();
  const { currentLanguage } = useLanguage();
  const t = subscriptionTranslations[currentLanguage as keyof typeof subscriptionTranslations] || subscriptionTranslations.he;

  const createSubscriptionMutation = useMutation({
    mutationFn: async (data: { email?: string; name?: string }) => {
      const res = await apiRequest('POST', '/api/create-subscription', data);
      const result = await res.json();
      
      // Handle specific error responses from server
      if (!res.ok) {
        if (result.configured === false) {
          // Stripe not configured - throw specific error for fallback handling
          throw new Error(result.message || 'מערכת התשלומים אינה זמינה כרגע');
        }
        throw new Error(result.message || 'שגיאה ביצירת המנוי');
      }
      
      return result;
    },
    onSuccess: (result) => {
      if (result.clientSecret) {
        setClientSecret(result.clientSecret);
        setShowPayment(true);
        toast({
          title: "מוכן לתשלום!",
          description: "אנא מלא את פרטי התשלום למטה",
        });
      } else {
        toast({
          title: "שגיאה",
          description: "לא ניתן ליצור את המנוי כרגע - אנא נסה שוב",
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      console.error('Subscription creation error:', error);
      
      // Show appropriate error message
      let errorMessage = "נכשלנו בעיבוד הבקשה. אנא נסה שוב";
      let errorTitle = "אופס!";
      
      if (error.message?.includes('מערכת התשלומים')) {
        errorTitle = "יצירת קשר";
        errorMessage = "נתקלנו בקושי זמני. צוות השירות שלנו יעזור לך להשלים את המנוי. אנא פנה אלינו";
      }
      
      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
        duration: 6000, // Show longer for contact info
      });
    },
    onSettled: () => {
      setIsCreatingSubscription(false);
    }
  });

  const handleSubscribe = async () => {
    if (!stripePromise) {
      toast({
        title: "בואו נדבר!",
        description: "נשמח לעזור לך להצטרף למשפחת 'האש שלי'. צור איתנו קשר: support@haesh-sheli.co.il או דרך הוואטסאפ",
        duration: 8000,
      });
      return;
    }
    setIsCreatingSubscription(true);
    await createSubscriptionMutation.mutateAsync({});
  };

  if (!plan.isActive) return null;

  return (
    <Card className="relative overflow-hidden border-2 border-primary/30 shadow-xl">
      {/* Premium badge */}
      <div className="absolute top-4 right-4">
        <Badge className="btn-breslov-gold text-white font-bold">
          <Star className="w-3 h-3 mr-1" />
          פרימיום
        </Badge>
      </div>

      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          <div className="bg-primary p-3 rounded-full">
            <Crown className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <CardTitle className="text-2xl font-bold text-primary">
          {plan.nameHebrew}
        </CardTitle>
        
        <CardDescription className="text-center text-gray-600 dark:text-gray-300 mt-2">
          {plan.descriptionHebrew}
        </CardDescription>

        {/* Price display */}
        <div className="text-center mt-4">
          <div className="text-4xl font-bold text-primary">
            ₪{(plan.price / 100).toFixed(0)}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            לחודש • תשלום חוזר
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features list */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
            <Sparkles className="w-4 h-4 mr-2 text-gold-accent" />
            יתרונות המנוי:
          </h4>
          
          {plan.featuresHebrew.map((feature, index) => (
            <div key={index} className="flex items-start space-x-reverse space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Value proposition */}
        <div className="section-surface-strong p-4 rounded-lg border border-primary/30">
          <h5 className="font-semibold text-primary mb-2">💰 חסכון משמעותי!</h5>
          <p className="text-sm text-foreground">
            במקום לשלם על כל ספר בנפרד, קבל גישה לכל הספרים הדיגיטליים + הנחות על ספרים פיזיים!
          </p>
        </div>

        {/* Social proof */}
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-700 dark:text-green-300 text-center">
            🌟 אלפי משפחות בישראל כבר חלק ממשפחת 'האש שלי'
          </p>
          <p className="text-xs text-green-600 dark:text-green-400 text-center mt-1">
            "הספרים הדיגיטליים שינו את חיי הרוחניים" - שרה מירושלים
          </p>
        </div>

        {/* Action buttons - STRIPE + PAYPAL */}
        {isCurrentPlan ? (
          <Button className="w-full" disabled>
            <CheckCircle className="mr-2 h-5 w-5" />
            מנוי פעיל
          </Button>
        ) : showPayment && clientSecret && stripePromise ? (
          <>
            <Elements stripe={stripePromise} options={{ 
              clientSecret: clientSecret,
              appearance: {
                theme: 'stripe'
              }
            }}>
              <SubscriptionForm plan={plan} clientSecret={clientSecret} />
            </Elements>
            
            {/* OR PayPal */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">או</span>
              </div>
            </div>
            
            <a 
              href="https://www.paypal.com/paypalme/hashsheliclone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full block"
            >
              <Button 
                type="button"
                className="w-full bg-[#0070BA] hover:bg-[#005EA6] text-white py-3 text-lg font-bold shadow-lg"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .758-.653h8.025c1.583 0 3.097.338 4.287 1.277 1.203.946 1.823 2.326 1.823 3.992 0 3.85-2.568 6.28-6.508 6.28H9.573l-1.747 7.095a.642.642 0 0 1-.633.626zm-.232-2.13h.002.001zm3.106-12.605h3.766c2.664 0 4.45-1.615 4.45-4.25 0-1.148-.482-2.07-1.338-2.696-.863-.633-2.107-.948-3.601-.948h-6.83l-2.856 11.59h4.25c.634 0 1.195-.485 1.324-1.148l1.835-2.548z"/>
                </svg>
                שלם עם PayPal
              </Button>
            </a>
          </>
        ) : showPayment && clientSecret && !stripePromise ? (
          <div className="section-surface-strong p-4 rounded-lg border border-primary/30 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h5 className="font-semibold text-primary mb-2">💬 בואו נדבר אישית!</h5>
            <p className="text-sm text-foreground mb-3">
              נשמח לעזור לך להצטרף למשפחת 'האש שלי' בצורה הטובה ביותר
            </p>
            <div className="flex gap-2 flex-wrap">
              <a 
                href="https://wa.me/972501234567?text=שלום, אני מעוניין להצטרף למנוי הוראת קבע שלכם" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="sm" className="btn-breslov-primary text-white hover:bg-green-600">
                  💬 דבר איתנו
                </Button>
              </a>
              <a href="mailto:support@haesh-sheli.co.il?subject=הצטרפות למנוי הוראת קבע">
                <Button size="sm" variant="outline">
                  📧 שלח מייל
                </Button>
              </a>
              <a 
                href="https://www.paypal.com/paypalme/hashsheliclone" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-[#0070BA] hover:bg-[#005EA6] text-white">
                  PayPal 💳
                </Button>
              </a>
            </div>
          </div>
        ) : (
          <>
            <Button 
              onClick={handleSubscribe}
              disabled={isCreatingSubscription}
              className="w-full btn-breslov-primary text-white py-3 text-lg font-bold shadow-lg"
              data-testid="button-show-payment"
            >
              {isCreatingSubscription ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  יוצר מנוי...
                </div>
              ) : (
                <>
                  <Crown className="mr-2 h-5 w-5" />
                  הצטרף עכשיו - ₪{(plan.price / 100).toFixed(0)} לחודש
                </>
              )}
            </Button>
            
            {/* PayPal Button - TOUJOURS VISIBLE */}
            <div className="mt-3">
              <a 
                href="https://www.paypal.com/paypalme/hashsheliclone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button 
                  type="button"
                  className="w-full bg-[#0070BA] hover:bg-[#005EA6] text-white py-3 text-lg font-bold shadow-lg"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .758-.653h8.025c1.583 0 3.097.338 4.287 1.277 1.203.946 1.823 2.326 1.823 3.992 0 3.85-2.568 6.28-6.508 6.28H9.573l-1.747 7.095a.642.642 0 0 1-.633.626zm-.232-2.13h.002.001zm3.106-12.605h3.766c2.664 0 4.45-1.615 4.45-4.25 0-1.148-.482-2.07-1.338-2.696-.863-.633-2.107-.948-3.601-.948h-6.83l-2.856 11.59h4.25c.634 0 1.195-.485 1.324-1.148l1.835-2.548z"/>
                  </svg>
                  שלם עם PayPal
                </Button>
              </a>
            </div>
          </>
        )}

        {/* Guarantee */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          💯 ניתן לבטל בכל עת • ללא התחייבות
        </p>
      </CardContent>
    </Card>
  );
};

export default function SubscriptionPage() {
  const { toast } = useToast();
  const { currentLanguage, setLanguage } = useLanguage();

  // Fetch all subscription plans
  const { data: plans, isLoading: planLoading } = useQuery({
    queryKey: ['/api/subscription-plans'],
    meta: { errorMessage: "שגיאה בטעינת תוכניות המנוי" }
  });

  // Check current user subscription status
  const { data: userSubscription } = useQuery({
    queryKey: ['/api/user/subscription'],
    meta: { errorMessage: "שגיאה בטעינת מצב המנוי" }
  });

  const isCurrentSubscriber = (userSubscription as any)?.user?.isSubscriber || false;
  const currentUserPlan = (userSubscription as any)?.user?.subscriptionPlanId || null;

  if (planLoading) {
    return (
      <div 
        className="min-h-screen hero-surface dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
        data-testid="subscription-page"
      >
        <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-spin w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full mx-auto" />
            <p className="mt-4 text-gray-600 dark:text-gray-300">טוען תוכניות מנוי...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!plans || !Array.isArray(plans) || plans.length === 0) {
    return (
      <div 
        className="min-h-screen hero-surface dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
        data-testid="subscription-page"
      >
        <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">
              שגיאה בטעינת תוכניות המנוי
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              אנא נסה שוב מאוחר יותר או צור קשר עם השירות לקוחות
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Sort plans by price (ascending) for better display
  const sortedPlans = [...plans].sort((a, b) => a.price - b.price);

  return (
    <div 
      className="min-h-screen hero-surface dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
      data-testid="subscription-page"
    >
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            הוראת קבע - תמכו בהפצת אור רבינו
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            הצטרפו למשפחת 'האש שלי' וקבלו גישה לכל הספרים הדיגיטליים והנחות מיוחדות
          </p>
          
          {/* Benefits showcase */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
              <Download className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm font-medium">הורדות ללא הגבלה</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
              <ShoppingCart className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium">הנחה עד 20% על קניות</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
              <Crown className="w-5 h-5 text-gold-accent mr-2" />
              <span className="text-sm font-medium">סטטוס חבר פרימיום</span>
            </div>
          </div>
        </div>

        {/* Multiple subscription plans */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPlans.filter(plan => plan.id !== 'horat_keva_99').map((plan) => (
              <StripeNotConfiguredFallback key={plan.id} plan={plan as SubscriptionPlan}>
                <SubscriptionPlanCard 
                  plan={plan as SubscriptionPlan} 
                  isCurrentPlan={currentUserPlan === plan.id}
                />
              </StripeNotConfiguredFallback>
            ))}
          </div>
        </div>
        
        {/* WhatsApp CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold text-primary mb-4">
              יש לך שאלות? בוא נדבר אישית!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              צוות השירות שלנו כאן לעזור לך לבחור את המנוי המתאים ביותר עבורך
            </p>
            <a 
              href="https://wa.me/972501234567?text=שלום, אני מעוניין לשמוע עוד על תוכניות המנוי שלכם" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="btn-breslov-primary text-white px-8 py-3 text-lg font-bold hover:bg-green-600 transition-all duration-300 hover:scale-105">
                💬 דבר איתנו בווטסאפ
              </Button>
            </a>
          </div>
        </div>

        {/* FAQ or additional info */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            שאלות נפוצות
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  מתי אני יכול לבטל את המנוי?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  ניתן לבטל את המנוי בכל עת ללא עמלות ביטול. המנוי יישאר פעיל עד לסוף התקופה ששולמה.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  האם יש תקופת ניסיון?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  כל חברי המנוי נהנים מאחריות מלאה של 30 יום - אם לא מרוצה, נחזיר את כספך במלואו.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  כמה ספרים כלולים במנוי?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  המנוי כולל גישה לכל הספרים הדיגיטליים בספריה שלנו - מעל 100 ספרים של רבי נחמן מברסלב.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  האם ההנחה חלה על כל הספרים?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  כן! חברי המנוי מקבלים 5% הנחה על כל הספרים הפיזיים והמוצרים בחנות שלנו.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}