import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Smartphone, Heart } from 'lucide-react';
import { PayPalButton } from './PayPalButton';

interface PaymentMethodSelectorProps {
  totalAmount: number;
  orderDescription: string;
  customerInfo?: {
    name?: string;
    email?: string;
  };
  onStripePayment: () => void;
  onPayPalSuccess: (transactionId: string) => void;
  onPayPalError: (error: string) => void;
}

export function PaymentMethodSelector({
  totalAmount,
  orderDescription,
  customerInfo,
  onStripePayment,
  onPayPalSuccess,
  onPayPalError
}: PaymentMethodSelectorProps) {
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'paypal'>('stripe');

  return (
    <div className="space-y-4">
      {/* Payment Method Selection */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          בחר אמצעי תשלום
        </h3>
        
        {/* Stripe Option */}
        <Card 
          className={`cursor-pointer transition-all ${
            selectedMethod === 'stripe' 
              ? 'ring-2 ring-blue-500 bg-blue-50' 
              : 'hover:bg-gray-50'
          }`}
          onClick={() => setSelectedMethod('stripe')}
        >
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedMethod === 'stripe' 
                  ? 'border-blue-500 bg-blue-500' 
                  : 'border-gray-300'
              }`}>
                {selectedMethod === 'stripe' && (
                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                )}
              </div>
              <CreditCard className="h-6 w-6 text-blue-600" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  כרטיס אשראי (Stripe)
                </div>
                <div className="text-sm text-gray-600">
                  Visa, Mastercard, American Express
                </div>
              </div>
              <div className="text-sm font-semibold text-blue-600">
                מאובטח
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PayPal Option */}
        <Card 
          className={`cursor-pointer transition-all ${
            selectedMethod === 'paypal' 
              ? 'ring-2 ring-orange-500 bg-orange-50' 
              : 'hover:bg-gray-50'
          }`}
          onClick={() => setSelectedMethod('paypal')}
        >
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedMethod === 'paypal' 
                  ? 'border-orange-500 bg-orange-500' 
                  : 'border-gray-300'
              }`}>
                {selectedMethod === 'paypal' && (
                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                )}
              </div>
              <Heart className="h-6 w-6 text-orange-600" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  PayPal
                </div>
                <div className="text-sm text-gray-600">
                  תשלום מהיר ובטוח עם PayPal
                </div>
              </div>
              <div className="text-sm font-semibold text-orange-600">
                פופולרי
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Button */}
      <div className="pt-4">
        {selectedMethod === 'stripe' ? (
          <Button
            onClick={onStripePayment}
            className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
          >
            <CreditCard className="h-5 w-5 mr-2" />
            שלם עם כרטיס אשראי
          </Button>
        ) : (
          <PayPalButton
            amount={totalAmount}
            description={orderDescription}
            donorName={customerInfo?.name}
            donorEmail={customerInfo?.email}
            isRecurring={false}
            onSuccess={onPayPalSuccess}
            onError={onPayPalError}
          />
        )}
      </div>

      {/* Security Notice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-800 font-medium">
            כל התשלומים מוגנים ומאובטחים
          </span>
        </div>
        <p className="text-xs text-green-700 mt-1">
          המידע שלך מוצפן ונשמר בצורה בטוחה
        </p>
      </div>
    </div>
  );
}
