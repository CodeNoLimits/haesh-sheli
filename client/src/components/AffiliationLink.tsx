import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Share2, ExternalLink, Users, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AffiliationLinkProps {
  userId: string;
  productId?: string;
  campaign?: string;
}

export function AffiliationLink({ userId, productId, campaign = 'illula-2024' }: AffiliationLinkProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  // Générer le lien d'affiliation
  const baseUrl = window.location.origin;
  const affiliateUrl = productId 
    ? `${baseUrl}/product/${productId}?ref=${userId}&campaign=${campaign}`
    : `${baseUrl}/store?ref=${userId}&campaign=${campaign}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(affiliateUrl);
      setCopied(true);
      toast({
        title: "הקישור הועתק!",
        description: "הקישור הועתק ללוח",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "שגיאה",
        description: "לא ניתן להעתיק את הקישור",
        variant: "destructive",
      });
    }
  };

  const handleShareWhatsApp = () => {
    const message = encodeURIComponent(
      `שלום! גיליתי אתר מדהים לספרי ברסלב 📚\n\n` +
      `האתר: ${baseUrl}\n` +
      `קישור ישיר: ${affiliateUrl}\n\n` +
      `יש שם ספרים נדירים ומחירים מעולים! 🎉`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(affiliateUrl);
    const text = encodeURIComponent('גיליתי אתר מדהים לספרי ברסלב! 📚');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          קישור השותפות שלך
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Lien d'affiliation */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            הקישור שלך:
          </label>
          <div className="flex gap-2">
            <Input
              value={affiliateUrl}
              readOnly
              className="flex-1 font-mono text-sm"
            />
            <Button
              onClick={handleCopy}
              variant={copied ? "default" : "outline"}
              size="sm"
            >
              <Copy className="h-4 w-4" />
              {copied ? 'הועתק!' : 'העתק'}
            </Button>
          </div>
        </div>

        {/* Boutons de partage */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">
            שתף עם חברים:
          </label>
          
          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={handleShareWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Share2 className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            
            <Button
              onClick={handleShareFacebook}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Facebook
            </Button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">הסטטיסטיקות שלך</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span>0 קליקים</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span>₪0 רווח</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">איך זה עובד?</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• שתף את הקישור עם חברים ומשפחה</li>
            <li>• כל רכישה דרך הקישור שלך = 10% עמלה</li>
            <li>• התשלום יועבר בסוף כל חודש</li>
            <li>• עמלה מינימלית לתשלום: ₪50</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
