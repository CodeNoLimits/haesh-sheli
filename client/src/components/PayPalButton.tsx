import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, CreditCard } from 'lucide-react';

interface PayPalButtonProps {
  amount: number;
  description: string;
  donorName?: string;
  donorEmail?: string;
  isRecurring?: boolean;
  onSuccess?: (transactionId: string) => void;
  onError?: (error: string) => void;
}

export function PayPalButton({ 
  amount, 
  description, 
  donorName, 
  donorEmail, 
  isRecurring = false,
  onSuccess,
  onError 
}: PayPalButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayPalPayment = async () => {
    setIsLoading(true);
    
    try {
      // Pour l'instant, on simule une redirection PayPal
      // Plus tard, on intégrera l'API PayPal réelle
      
      const paypalUrl = new URL('https://www.paypal.com/donate');
      paypalUrl.searchParams.set('business', 'donations@haesh-sheli.co.il');
      paypalUrl.searchParams.set('amount', amount.toString());
      paypalUrl.searchParams.set('item_name', description);
      paypalUrl.searchParams.set('currency_code', 'ILS');
      
      if (donorName) {
        paypalUrl.searchParams.set('first_name', donorName.split(' ')[0]);
        if (donorName.split(' ').length > 1) {
          paypalUrl.searchParams.set('last_name', donorName.split(' ').slice(1).join(' '));
        }
      }
      
      if (donorEmail) {
        paypalUrl.searchParams.set('email', donorEmail);
      }
      
      if (isRecurring) {
        paypalUrl.searchParams.set('p3', '1'); // Recurring
        paypalUrl.searchParams.set('t3', 'M'); // Monthly
      }
      
      // Ouvrir PayPal dans une nouvelle fenêtre
      const paypalWindow = window.open(paypalUrl.toString(), 'paypal', 'width=600,height=600');
      
      // Simuler le succès après 3 secondes (pour les tests)
      setTimeout(() => {
        setIsLoading(false);
        if (onSuccess) {
          onSuccess(`paypal_${Date.now()}`);
        }
        if (paypalWindow) {
          paypalWindow.close();
        }
      }, 3000);
      
    } catch (error) {
      setIsLoading(false);
      if (onError) {
        onError(error instanceof Error ? error.message : 'Erreur de paiement');
      }
    }
  };

  return (
    <Button
      onClick={handlePayPalPayment}
      disabled={isLoading}
      className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
    >
      {isLoading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          {isRecurring ? 'Configuration du don récurrent...' : 'Redirection vers PayPal...'}
        </div>
      ) : (
        <div className="flex items-center">
          <CreditCard className="h-5 w-5 mr-2" />
          {isRecurring ? 'Don récurrent PayPal' : 'Payer avec PayPal'}
        </div>
      )}
    </Button>
  );
}
