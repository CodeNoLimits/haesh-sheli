import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AffiliationLink } from '../components/AffiliationLink';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, DollarSign, TrendingUp, Gift, Share2, Copy } from 'lucide-react';

export default function AffiliationPage() {
  const { currentLanguage } = useLanguage();
  const [userId, setUserId] = useState('');
  const [productId, setProductId] = useState('');
  const [campaign, setCampaign] = useState('illula-2024');

  const getText = (key: string) => {
    const texts = {
      title: {
        he: 'תוכנית השותפות',
        en: 'Affiliation Program',
        fr: 'Programme d\'affiliation'
      },
      subtitle: {
        he: 'הרוויחו כסף על ידי הפצת ספרי ברסלב',
        en: 'Earn money by spreading Breslov books',
        fr: 'Gagnez de l\'argent en diffusant les livres de Breslov'
      },
      howItWorks: {
        he: 'איך זה עובד',
        en: 'How it works',
        fr: 'Comment ça marche'
      },
      benefits: {
        he: 'היתרונות',
        en: 'Benefits',
        fr: 'Avantages'
      },
      joinNow: {
        he: 'הצטרף עכשיו',
        en: 'Join now',
        fr: 'Rejoignez maintenant'
      }
    };
    return texts[key as keyof typeof texts][currentLanguage as keyof typeof texts[keyof typeof texts]] || texts[key as keyof typeof texts].he;
  };

  const handleGenerateLink = () => {
    if (!userId) {
      alert(currentLanguage === 'he' ? 'אנא הזן מזהה משתמש' : 'Please enter user ID');
      return;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${currentLanguage === 'he' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getText('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getText('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de génération de lien */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-blue-600" />
                  צור קישור שותפות
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="userId">מזהה משתמש *</Label>
                  <Input
                    id="userId"
                    placeholder="הזן את המזהה שלך"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productId">מזהה מוצר (אופציונלי)</Label>
                  <Input
                    id="productId"
                    placeholder="הזן מזהה מוצר ספציפי"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign">קמפיין</Label>
                  <Input
                    id="campaign"
                    placeholder="illula-2024"
                    value={campaign}
                    onChange={(e) => setCampaign(e.target.value)}
                  />
                </div>

                <Button
                  onClick={handleGenerateLink}
                  className="w-full"
                  disabled={!userId}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  צור קישור
                </Button>
              </CardContent>
            </Card>

            {/* Lien généré */}
            {userId && (
              <AffiliationLink
                userId={userId}
                productId={productId || undefined}
                campaign={campaign}
              />
            )}
          </div>

          {/* Informations sur le programme */}
          <div className="space-y-6">
            {/* Comment ça marche */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  {getText('howItWorks')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">הצטרף לתוכנית</h4>
                      <p className="text-sm text-gray-600">מלא את הטופס וקבל את הקישור שלך</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">שתף עם חברים</h4>
                      <p className="text-sm text-gray-600">הפץ את הקישור ב-WhatsApp, Facebook וכו'</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">הרווח כסף</h4>
                      <p className="text-sm text-gray-600">קבל 10% מכל רכישה דרך הקישור שלך</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Avantages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-purple-600" />
                  {getText('benefits')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm">10% עמלה מכל רכישה</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">מעקב אחר קליקים ורכישות</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">תשלום חודשי אוטומטי</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">כלים קלים לשיתוף</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistiques globales */}
            <Card>
              <CardHeader>
                <CardTitle>סטטיסטיקות התוכנית</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">150+</div>
                    <div className="text-sm text-gray-600">שותפים פעילים</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">₪25,000</div>
                    <div className="text-sm text-gray-600">עמלות שולמו</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
