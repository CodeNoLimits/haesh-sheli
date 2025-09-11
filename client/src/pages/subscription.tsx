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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      toast({
        title: "שגיאה",
        description: "מערכת התשלום אינה זמינה כרגע",
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
          title: "שגיאה בתשלום",
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
        title: "שגיאה",
        description: "אירעה שגיאה בעיבוד התשלום",
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
            הצטרף להוראת קבע - ₪{(plan.price / 100).toFixed(0)} לחודש
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

  const createSubscriptionMutation = useMutation({
    mutationFn: async (data: { email?: string; name?: string }) => {
      const res = await apiRequest('POST', '/api/create-subscription', data);
      return res.json();
    },
    onSuccess: (result) => {
      if (result.clientSecret) {
        setClientSecret(result.clientSecret);
        setShowPayment(true);
      } else {
        toast({
          title: "שגיאה",
          description: "לא ניתן ליצור את המנוי כרגע",
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "שגיאה",
        description: error.message || "אירעה שגיאה ביצירת המנוי",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsCreatingSubscription(false);
    }
  });

  const handleSubscribe = async () => {
    if (!stripePromise) {
      toast({
        title: "מערכת התשלום אינה זמינה",
        description: "אנא צור קשר עם השירות לקוחות: support@haesh-sheli.co.il",
        variant: "destructive",
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
            במקום לשלם על כל ספר בנפרד, קבל גישה לכל הספרים הדיגיטליים תמיד תמורת רק ₪99 לחודש!
          </p>
        </div>

        {/* Social proof */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
            🌟 מעל 5,000 חברים כבר נהנים מהמנוי המיוחד שלנו
          </p>
        </div>

        {/* Action button */}
        {isCurrentPlan ? (
          <Button className="w-full" disabled>
            <CheckCircle className="mr-2 h-5 w-5" />
            מנוי פעיל
          </Button>
        ) : showPayment && clientSecret && stripePromise ? (
          <Elements stripe={stripePromise} options={{ 
            clientSecret: clientSecret,
            appearance: {
              theme: 'stripe'
            }
          }}>
            <SubscriptionForm plan={plan} clientSecret={clientSecret} />
          </Elements>
        ) : showPayment && clientSecret && !stripePromise ? (
          <div className="section-surface-strong p-4 rounded-lg border border-primary/30">
            <h5 className="font-semibold text-primary mb-2">⚠️ מערכת התשלום אינה זמינה</h5>
            <p className="text-sm text-foreground">
              אנא צור קשר עם השירות לקוחות להשלמת המנוי: support@haesh-sheli.co.il
            </p>
          </div>
        ) : (
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

  // Fetch the HoRaat Keva plan
  const { data: plan, isLoading: planLoading } = useQuery({
    queryKey: ['/api/subscription-plans/horat-keva'],
    meta: { errorMessage: "שגיאה בטעינת תוכנית המנוי" }
  });

  // Check current user subscription status
  const { data: userSubscription } = useQuery({
    queryKey: ['/api/user/subscription'],
    meta: { errorMessage: "שגיאה בטעינת מצב המנוי" }
  });

  const isCurrentSubscriber = (userSubscription as any)?.user?.isSubscriber || false;

  if (planLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">טוען תוכנית מנוי...</p>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            שגיאה בטעינת תוכנית המנוי
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            אנא נסה שוב מאוחר יותר או צור קשר עם השירות לקוחות
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-surface dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            הוראת קבע - מנוי פרימיום
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            קבל גישה לכל הספרים הדיגיטליים של רבי נחמן מברסלב + הנחה על כל הקניות
          </p>
          
          {/* Benefits showcase */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
              <Download className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm font-medium">הורדות ללא הגבלה</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
              <ShoppingCart className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium">5% הנחה על קניות</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
              <Crown className="w-5 h-5 text-gold-accent mr-2" />
              <span className="text-sm font-medium">סטטוס חבר פרימיום</span>
            </div>
          </div>
        </div>

        {/* Main subscription card */}
        <div className="max-w-2xl mx-auto">
          <SubscriptionPlanCard 
            plan={plan as SubscriptionPlan} 
            isCurrentPlan={isCurrentSubscriber}
          />
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