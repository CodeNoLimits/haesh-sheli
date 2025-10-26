import { useState } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Crown, Sparkles, Heart, BookOpen, Users, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionPlan {
  id: string;
  name: string;
  nameHebrew: string;
  description: string;
  descriptionHebrew: string;
  price: number;
  currency: string;
  features: string[];
  featuresHebrew: string[];
  isActive: boolean;
  popular?: boolean;
}

export default function Subscription() {
  const { currentLanguage, setLanguage } = useLanguage();
  const { toast } = useToast();
  
  // Plans d'abonnement simplifiés
  const plans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: 'Basic Plan',
      nameHebrew: 'תוכנית בסיסית',
      description: 'Perfect for beginners in Breslov',
      descriptionHebrew: 'מושלם למתחילים בברסלב',
      price: 18,
      currency: '₪',
      features: [
        'Weekly Torah insights',
        'Community access',
        'Basic audio content',
        'Email support'
      ],
      featuresHebrew: [
        'תובנות שבועיות מהתורה',
        'גישה לקהילה',
        'תוכן אודיו בסיסי',
        'תמיכה במייל'
      ],
      isActive: true
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      nameHebrew: 'תוכנית פרימיום',
      description: 'Complete Breslov experience',
      descriptionHebrew: 'חוויה מלאה בברסלב',
      price: 36,
      currency: '₪',
      features: [
        'All Basic features',
        'Premium audio shiurim',
        'Live Q&A with rabbis',
        'Priority support',
        'Exclusive articles',
        'Mobile app access'
      ],
      featuresHebrew: [
        'כל הפיצ\'רים הבסיסיים',
        'שיעורים פרימיום',
        'שאלות ותשובות חיים עם רבנים',
        'תמיכה עדיפות',
        'מאמרים בלעדיים',
        'גישה לאפליקציה'
      ],
      isActive: true,
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP Plan',
      nameHebrew: 'תוכנית VIP',
      description: 'Ultimate spiritual journey',
      descriptionHebrew: 'מסע רוחני אולטימטיבי',
      price: 72,
      currency: '₪',
      features: [
        'All Premium features',
        'Personal spiritual guidance',
        'One-on-one sessions',
        'Custom content creation',
        'Early access to new features',
        'VIP community access',
        'Special events invitation'
      ],
      featuresHebrew: [
        'כל הפיצ\'רים הפרימיום',
        'הדרכה רוחנית אישית',
        'מפגשים אחד על אחד',
        'יצירת תוכן מותאם',
        'גישה מוקדמת לפיצ\'רים',
        'גישה לקהילת VIP',
        'הזמנה לאירועים מיוחדים'
      ],
      isActive: true
    }
  ];

  const handleSubscribe = (plan: SubscriptionPlan) => {
    toast({
      title: currentLanguage === 'he' ? 'הצטרפות לתוכנית' : 'Joining Plan',
      description: currentLanguage === 'he' 
        ? `אתם מצטרפים לתוכנית ${plan.nameHebrew}. נחזור אליכם בקרוב עם פרטי התשלום.`
        : `You are joining the ${plan.name} plan. We will contact you soon with payment details.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {currentLanguage === 'he' ? 'הוראת קבע - האש שלי' : 'Subscription - Haesh Sheli'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {currentLanguage === 'he' ? 
              'הצטרפו לקהילה הגדולה של לומדי תורת רבי נחמן מברסלב. קבלו תוכן ייחודי, הדרכה רוחנית וחיבור לקהילה' :
              'Join the largest community of Rabbi Nachman of Breslov learners. Get unique content, spiritual guidance and community connection'
            }
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'he' ? 'בחרו את התוכנית המתאימה לכם' : 'Choose the plan that suits you'}
            </h2>
            <p className="text-xl text-gray-600">
              {currentLanguage === 'he' ? 
                'כל התוכניות כוללות גישה מלאה לתוכן הרב נחמן מברסלב' :
                'All plans include full access to Rabbi Nachman of Breslov content'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative overflow-hidden border-2 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-bold">
                    {currentLanguage === 'he' ? 'הכי פופולרי' : 'Most Popular'}
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                  <div className="flex justify-center mb-4">
                    {plan.id === 'basic' && <BookOpen className="w-12 h-12 text-blue-600" />}
                    {plan.id === 'premium' && <Star className="w-12 h-12 text-yellow-500" />}
                    {plan.id === 'vip' && <Crown className="w-12 h-12 text-purple-600" />}
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {currentLanguage === 'he' ? plan.nameHebrew : plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600">
                    {currentLanguage === 'he' ? plan.descriptionHebrew : plan.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">
                      {plan.currency}{plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {currentLanguage === 'he' ? '/חודש' : '/month'}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {(currentLanguage === 'he' ? plan.featuresHebrew : plan.features).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleSubscribe(plan)}
                    className={`w-full py-3 text-lg font-semibold ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    {currentLanguage === 'he' ? 'הצטרף עכשיו' : 'Join Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'he' ? 'מה תקבלו במנוי?' : 'What do you get with subscription?'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentLanguage === 'he' ? 'תוכן ייחודי' : 'Unique Content'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'he' ? 'מאמרים ושיעורים בלעדיים על תורת רבי נחמן' : 'Exclusive articles and lessons on Rabbi Nachman\'s teachings'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentLanguage === 'he' ? 'קהילה פעילה' : 'Active Community'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'he' ? 'הצטרפו לקהילה של אלפי לומדים' : 'Join a community of thousands of learners'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentLanguage === 'he' ? 'תמיכה אישית' : 'Personal Support'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'he' ? 'הדרכה ותמיכה אישית מהצוות' : 'Personal guidance and support from our team'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentLanguage === 'he' ? 'חוויה מיוחדת' : 'Special Experience'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'he' ? 'חוויה רוחנית מעשירה ומעצימה' : 'Enriching and empowering spiritual experience'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {currentLanguage === 'he' ? 'מוכנים להתחיל את המסע הרוחני?' : 'Ready to start your spiritual journey?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {currentLanguage === 'he' ? 
              'הצטרפו לאלפי אנשים שכבר התחילו את המסע שלהם עם תורת רבי נחמן מברסלב' :
              'Join thousands of people who have already started their journey with Rabbi Nachman of Breslov\'s teachings'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleSubscribe(plans[1])} // Premium plan
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg"
            >
              {currentLanguage === 'he' ? 'התחל עכשיו' : 'Start Now'}
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold text-lg border-white/30"
            >
              {currentLanguage === 'he' ? 'למד עוד' : 'Learn More'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}