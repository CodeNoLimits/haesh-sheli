import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useStripe, useElements, Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, CreditCard, Truck, Shield, Heart, CheckCircle } from 'lucide-react';

// Load Stripe
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = stripePublicKey ? loadStripe(stripePublicKey) : null;

// Translations
const checkoutTranslations = {
  he: {
    cartEmpty: 'העגלה שלך ריקה',
    addProducts: 'הוסף מוצרים לעגלה כדי להמשיך לקופה',
    continueShopping: 'המשך קניות',
    error: 'שגיאה',
    paymentSystemUnavailable: 'מערכת התשלום אינה זמינה כרגע',
    paymentError: 'שגיאה בתשלום',
    paymentSuccess: 'תשלום בוצע בהצלחה!',
    orderConfirmed: 'ההזמנה שלך אושרה וקבלת מייל אישור',
    processingError: 'אירעה שגיאה בעיבוד התשלום',
    fillAllFields: 'יש למלא את כל השדות הנדרשים',
    paymentCreationError: 'שגיאה ביצירת התשלום',
    readyForPayment: 'מוכן לתשלום',
    proceedWithCard: 'ניתן להמשיך לתשלום באמצעות כרטיס אשראי',
    paymentSystemNotAvailable: 'מערכת תשלומים אינה זמינה',
    contactSupport: 'אנא צרו קשר עם שירות הלקוחות',
    contact: 'צור קשר',
    shippingDetails: 'פרטי משלוח',
    fillShippingDetails: 'אנא מלא את פרטי המשלוח שלך',
    email: 'אימייל',
    fullName: 'שם מלא',
    address: 'כתובת',
    city: 'עיר',
    postalCode: 'מיקוד',
    phone: 'טלפון',
    preparingPayment: 'מכין תשלום...',
    proceedToPayment: 'המשך לתשלום',
    shoppingCart: 'עגלת קניות',
    items: 'פריטים',
    quantity: 'כמות',
    subtotal: 'סכום ביניים',
    subscriptionDiscount: 'הנחת מנוי (5%)',
    total: 'סה"כ',
    spiritualMission: 'מחיר הקרן - תמיכה רוחנית',
    supportMessage: 'כל רכישה תומכת במשימה הרוחנית של הפצת תורת רבי נחמן מברסלב בכל העולם. הכסף שלך הולך ישירות לפעילות הרוחנית של קרן רבי ישראל.',
    nanachSlogan: 'נ נח נחמ נחמן מאומן! 🔥',
    shippingPolicy: 'מדיניות משלוח והחזרות',
    freeShipping: 'משלוח חינם על הזמנות מעל ₪399',
    deliveryTime: 'זמן משלוח: 3-7 ימי עסקים',
    returnPolicy: 'החזרה תוך 14 יום מקבלת המוצר',
    defectiveProduct: 'מוצר פגום - החלפה מיידית ללא עלות',
    customerService: 'שירות לקוחות: support@haesh-sheli.co.il',
    securePayment: 'תשלום מאובטח',
    completeCreditCard: 'אנא השלם את פרטי כרטיס האשראי כדי להשלים את ההזמנה',
    completePayment: 'השלם תשלום',
    processing: 'מעבד...',
    payWith: 'שלם עם',
    payWithPayPal: 'שלם עם PayPal',
    or: 'או'
  },
  en: {
    cartEmpty: 'Your Cart is Empty',
    addProducts: 'Add products to cart to proceed to checkout',
    continueShopping: 'Continue Shopping',
    error: 'Error',
    paymentSystemUnavailable: 'Payment system is currently unavailable',
    paymentError: 'Payment Error',
    paymentSuccess: 'Payment Successful!',
    orderConfirmed: 'Your order has been confirmed and you will receive a confirmation email',
    processingError: 'An error occurred processing the payment',
    fillAllFields: 'Please fill in all required fields',
    paymentCreationError: 'Error creating payment',
    readyForPayment: 'Ready for Payment',
    proceedWithCard: 'You can proceed to payment via credit card',
    paymentSystemNotAvailable: 'Payment System Not Available',
    contactSupport: 'Please contact customer service',
    contact: 'Contact Us',
    shippingDetails: 'Shipping Details',
    fillShippingDetails: 'Please fill in your shipping details',
    email: 'Email',
    fullName: 'Full Name',
    address: 'Address',
    city: 'City',
    postalCode: 'Postal Code',
    phone: 'Phone',
    preparingPayment: 'Preparing payment...',
    proceedToPayment: 'Proceed to Payment',
    shoppingCart: 'Shopping Cart',
    items: 'items',
    quantity: 'Quantity',
    subtotal: 'Subtotal',
    subscriptionDiscount: 'Subscription Discount (5%)',
    total: 'Total',
    spiritualMission: 'Foundation Price - Spiritual Support',
    supportMessage: 'Every purchase supports the spiritual mission of spreading Rabbi Nachman of Breslov\'s teachings worldwide. Your money goes directly to the spiritual activities of the Rabbi Israel Foundation.',
    nanachSlogan: 'Na Nach Nachma Nachman Meuman! 🔥',
    shippingPolicy: 'Shipping & Returns Policy',
    freeShipping: 'Free shipping on orders over ₪399',
    deliveryTime: 'Delivery time: 3-7 business days',
    returnPolicy: 'Return within 14 days of receiving the product',
    defectiveProduct: 'Defective product - immediate replacement at no cost',
    customerService: 'Customer service: support@haesh-sheli.co.il',
    securePayment: 'Secure Payment',
    completeCreditCard: 'Please complete credit card details to finalize your order',
    completePayment: 'Complete Payment',
    processing: 'Processing...',
    payWith: 'Pay with',
    payWithPayPal: 'Pay with PayPal',
    or: 'or'
  },
  fr: {
    cartEmpty: 'Votre Panier est Vide',
    addProducts: 'Ajoutez des produits au panier pour procéder au paiement',
    continueShopping: 'Continuer les Achats',
    error: 'Erreur',
    paymentSystemUnavailable: 'Le système de paiement est actuellement indisponible',
    paymentError: 'Erreur de Paiement',
    paymentSuccess: 'Paiement Réussi!',
    orderConfirmed: 'Votre commande a été confirmée et vous recevrez un email de confirmation',
    processingError: 'Une erreur s\'est produite lors du traitement du paiement',
    fillAllFields: 'Veuillez remplir tous les champs obligatoires',
    paymentCreationError: 'Erreur lors de la création du paiement',
    readyForPayment: 'Prêt pour le Paiement',
    proceedWithCard: 'Vous pouvez procéder au paiement par carte bancaire',
    paymentSystemNotAvailable: 'Système de Paiement Non Disponible',
    contactSupport: 'Veuillez contacter le service client',
    contact: 'Nous Contacter',
    shippingDetails: 'Détails de Livraison',
    fillShippingDetails: 'Veuillez remplir vos détails de livraison',
    email: 'Email',
    fullName: 'Nom Complet',
    address: 'Adresse',
    city: 'Ville',
    postalCode: 'Code Postal',
    phone: 'Téléphone',
    preparingPayment: 'Préparation du paiement...',
    proceedToPayment: 'Procéder au Paiement',
    shoppingCart: 'Panier d\'Achats',
    items: 'articles',
    quantity: 'Quantité',
    subtotal: 'Sous-total',
    subscriptionDiscount: 'Réduction Abonnement (5%)',
    total: 'Total',
    spiritualMission: 'Prix de la Fondation - Soutien Spirituel',
    supportMessage: 'Chaque achat soutient la mission spirituelle de diffusion des enseignements du Rabbi Nachman de Breslev dans le monde entier. Votre argent va directement aux activités spirituelles de la Fondation Rabbi Israël.',
    nanachSlogan: 'Na Nach Nachma Nachman Méouman! 🔥',
    shippingPolicy: 'Politique de Livraison et Retours',
    freeShipping: 'Livraison gratuite sur les commandes de plus de ₪399',
    deliveryTime: 'Délai de livraison: 3-7 jours ouvrables',
    returnPolicy: 'Retour sous 14 jours après réception du produit',
    defectiveProduct: 'Produit défectueux - remplacement immédiat sans frais',
    customerService: 'Service client: support@haesh-sheli.co.il',
    securePayment: 'Paiement Sécurisé',
    completeCreditCard: 'Veuillez compléter les détails de votre carte bancaire pour finaliser votre commande',
    completePayment: 'Finaliser le Paiement',
    processing: 'Traitement...',
    payWith: 'Payer avec',
    payWithPayPal: 'Payer avec PayPal',
    or: 'ou'
  },
  es: {
    cartEmpty: 'Tu Carrito está Vacío',
    addProducts: 'Agrega productos al carrito para proceder al pago',
    continueShopping: 'Continuar Comprando',
    error: 'Error',
    paymentSystemUnavailable: 'El sistema de pago no está disponible actualmente',
    paymentError: 'Error de Pago',
    paymentSuccess: '¡Pago Exitoso!',
    orderConfirmed: 'Tu pedido ha sido confirmado y recibirás un correo de confirmación',
    processingError: 'Ocurrió un error al procesar el pago',
    fillAllFields: 'Por favor completa todos los campos requeridos',
    paymentCreationError: 'Error al crear el pago',
    readyForPayment: 'Listo para el Pago',
    proceedWithCard: 'Puedes proceder al pago con tarjeta de crédito',
    paymentSystemNotAvailable: 'Sistema de Pago No Disponible',
    contactSupport: 'Por favor contacta al servicio al cliente',
    contact: 'Contáctanos',
    shippingDetails: 'Detalles de Envío',
    fillShippingDetails: 'Por favor completa tus detalles de envío',
    email: 'Correo Electrónico',
    fullName: 'Nombre Completo',
    address: 'Dirección',
    city: 'Ciudad',
    postalCode: 'Código Postal',
    phone: 'Teléfono',
    preparingPayment: 'Preparando pago...',
    proceedToPayment: 'Proceder al Pago',
    shoppingCart: 'Carrito de Compras',
    items: 'artículos',
    quantity: 'Cantidad',
    subtotal: 'Subtotal',
    subscriptionDiscount: 'Descuento de Suscripción (5%)',
    total: 'Total',
    spiritualMission: 'Precio de la Fundación - Apoyo Espiritual',
    supportMessage: 'Cada compra apoya la misión espiritual de difundir las enseñanzas del Rabí Najmán de Breslev en todo el mundo. Tu dinero va directamente a las actividades espirituales de la Fundación Rabí Israel.',
    nanachSlogan: '¡Na Nach Nachma Nachman Meumán! 🔥',
    shippingPolicy: 'Política de Envío y Devoluciones',
    freeShipping: 'Envío gratis en pedidos superiores a ₪399',
    deliveryTime: 'Tiempo de entrega: 3-7 días hábiles',
    returnPolicy: 'Devolución dentro de los 14 días posteriores a la recepción del producto',
    defectiveProduct: 'Producto defectuoso - reemplazo inmediato sin costo',
    customerService: 'Servicio al cliente: support@haesh-sheli.co.il',
    securePayment: 'Pago Seguro',
    completeCreditCard: 'Por favor completa los detalles de tu tarjeta de crédito para finalizar tu pedido',
    completePayment: 'Completar Pago',
    processing: 'Procesando...',
    payWith: 'Pagar con',
    payWithPayPal: 'Pagar con PayPal',
    or: 'o'
  },
  ru: {
    cartEmpty: 'Ваша Корзина Пуста',
    addProducts: 'Добавьте товары в корзину для оформления заказа',
    continueShopping: 'Продолжить Покупки',
    error: 'Ошибка',
    paymentSystemUnavailable: 'Платежная система в настоящее время недоступна',
    paymentError: 'Ошибка Оплаты',
    paymentSuccess: 'Оплата Успешна!',
    orderConfirmed: 'Ваш заказ подтвержден, и вы получите письмо с подтверждением',
    processingError: 'Произошла ошибка при обработке платежа',
    fillAllFields: 'Пожалуйста, заполните все обязательные поля',
    paymentCreationError: 'Ошибка создания платежа',
    readyForPayment: 'Готово к Оплате',
    proceedWithCard: 'Вы можете продолжить оплату кредитной картой',
    paymentSystemNotAvailable: 'Платежная Система Недоступна',
    contactSupport: 'Пожалуйста, свяжитесь со службой поддержки',
    contact: 'Связаться с Нами',
    shippingDetails: 'Детали Доставки',
    fillShippingDetails: 'Пожалуйста, заполните данные для доставки',
    email: 'Электронная Почта',
    fullName: 'Полное Имя',
    address: 'Адрес',
    city: 'Город',
    postalCode: 'Почтовый Индекс',
    phone: 'Телефон',
    preparingPayment: 'Подготовка платежа...',
    proceedToPayment: 'Перейти к Оплате',
    shoppingCart: 'Корзина Покупок',
    items: 'товаров',
    quantity: 'Количество',
    subtotal: 'Промежуточный Итог',
    subscriptionDiscount: 'Скидка по Подписке (5%)',
    total: 'Итого',
    spiritualMission: 'Цена Фонда - Духовная Поддержка',
    supportMessage: 'Каждая покупка поддерживает духовную миссию распространения учений Рабби Нахмана из Бреслева по всему миру. Ваши деньги идут непосредственно на духовную деятельность Фонда Рабби Израиля.',
    nanachSlogan: 'На Нах Нахма Нахман Меуман! 🔥',
    shippingPolicy: 'Политика Доставки и Возврата',
    freeShipping: 'Бесплатная доставка при заказе от ₪399',
    deliveryTime: 'Время доставки: 3-7 рабочих дней',
    returnPolicy: 'Возврат в течение 14 дней после получения товара',
    defectiveProduct: 'Дефектный товар - немедленная замена бесплатно',
    customerService: 'Служба поддержки: support@haesh-sheli.co.il',
    securePayment: 'Безопасная Оплата',
    completeCreditCard: 'Пожалуйста, заполните данные кредитной карты для завершения заказа',
    completePayment: 'Завершить Оплату',
    processing: 'Обработка...',
    payWith: 'Оплатить через',
    payWithPayPal: 'Оплатить через PayPal',
    or: 'или'
  }
};

interface ShippingAddress {
  fullName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
}

const CheckoutForm = ({ clientSecret, orderSummary }: { 
  clientSecret: string; 
  orderSummary: any;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const { clearCart } = useCart();
  const { currentLanguage } = useLanguage();
  const t = checkoutTranslations[currentLanguage as keyof typeof checkoutTranslations] || checkoutTranslations.he;
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
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
      });

      if (error) {
        toast({
          title: t.paymentError,
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: t.paymentSuccess,
          description: t.orderConfirmed,
        });
        clearCart();
        queryClient.invalidateQueries({ queryKey: ['/api/user/subscription'] });
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: t.error,
        description: t.processingError,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (amount: number) => `₪${(amount / 100).toFixed(2)}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
        <PaymentElement />
      </div>
      
      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <ShoppingCart className="h-5 w-5" />
            {t.shoppingCart}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t.subtotal}:</span>
              <span>{formatPrice(orderSummary.subtotal)}</span>
            </div>
            {orderSummary.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>{t.subscriptionDiscount}:</span>
                <span>-{formatPrice(orderSummary.discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>{currentLanguage === 'he' ? 'מע"מ (17%)' : currentLanguage === 'fr' ? 'TVA (17%)' : currentLanguage === 'es' ? 'IVA (17%)' : currentLanguage === 'ru' ? 'НДС (17%)' : 'VAT (17%)'}:</span>
              <span>{formatPrice(orderSummary.vatAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>{currentLanguage === 'he' ? 'משלוח' : currentLanguage === 'fr' ? 'Livraison' : currentLanguage === 'es' ? 'Envío' : currentLanguage === 'ru' ? 'Доставка' : 'Shipping'}:</span>
              <span>{orderSummary.shippingAmount > 0 ? formatPrice(orderSummary.shippingAmount) : (currentLanguage === 'he' ? 'חינם! 🎉' : currentLanguage === 'fr' ? 'Gratuit! 🎉' : currentLanguage === 'es' ? '¡Gratis! 🎉' : currentLanguage === 'ru' ? 'Бесплатно! 🎉' : 'Free! 🎉')}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-base md:text-lg font-bold">
              <span>{t.total}:</span>
              <span className="text-blue-600">{formatPrice(orderSummary.totalAmount)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        type="submit" 
        className="w-full btn-breslov-primary text-white py-3 text-base md:text-lg font-bold shadow-lg" 
        disabled={!stripe || !elements || isLoading}
        data-testid="button-complete-payment"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            {t.processing}
          </div>
        ) : (
          <>
            <CreditCard className="mr-2 h-5 w-5" />
            {t.completePayment} - {formatPrice(orderSummary.totalAmount)}
          </>
        )}
      </Button>
    </form>
  );
};

export default function Checkout() {
  const { items, totalPrice, subtotalPrice, discount, isSubscriber, clearCart } = useCart();
  const { currentLanguage, setLanguage } = useLanguage();
  const t = checkoutTranslations[currentLanguage as keyof typeof checkoutTranslations] || checkoutTranslations.he;
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: '',
    addressLine1: '',
    city: '',
    region: '',
    postalCode: '',
    country: 'IL',
    phone: ''
  });
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [orderSummary, setOrderSummary] = useState<any>(null);
  const { toast } = useToast();
  
  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">{t.cartEmpty}</h2>
            <p className="text-gray-600 mb-4">{t.addProducts}</p>
            <Button asChild>
              <a href="/store">{t.continueShopping}</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const createPaymentIntent = useMutation({
    mutationFn: async () => {
      if (!shippingAddress.fullName || !email || !shippingAddress.addressLine1 || !shippingAddress.city) {
        throw new Error(t.fillAllFields);
      }

      const cartData = items.map(item => ({
        productId: item.productId,
        variantId: item.variantId,
        name: item.name,
        nameEnglish: item.nameEnglish,
        price: item.price,
        quantity: item.quantity,
        variant: item.variant
      }));

      const res = await apiRequest('POST', '/api/create-payment-intent', {
        cart: cartData,
        shippingAddress,
        billingAddress: shippingAddress,
        email,
        shippingMethod: 'standard'
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || t.paymentCreationError);
      }
      
      return await res.json();
    },
    onSuccess: (data) => {
      setClientSecret(data.clientSecret);
      setOrderSummary(data.orderSummary);
      toast({
        title: t.readyForPayment,
        description: t.proceedWithCard,
      });
    },
    onError: (error: any) => {
      toast({
        title: t.error,
        description: error.message || t.paymentCreationError,
        variant: "destructive",
      });
    }
  });

  const handleCreatePayment = () => {
    createPaymentIntent.mutate();
  };

  // Si Stripe n'est pas configuré, on affiche quand même PayPal et les infos de contact
  const showPayPalOnly = !stripePromise;

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {!clientSecret ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    {t.shippingDetails}
                  </CardTitle>
                  <CardDescription>
                    {t.fillShippingDetails}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email} *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.fullName} *</Label>
                    <Input 
                      id="fullName"
                      value={shippingAddress.fullName}
                      onChange={(e) => setShippingAddress(prev => ({...prev, fullName: e.target.value}))}
                      required 
                      data-testid="input-full-name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address1">{t.address} *</Label>
                    <Input 
                      id="address1"
                      value={shippingAddress.addressLine1}
                      onChange={(e) => setShippingAddress(prev => ({...prev, addressLine1: e.target.value}))}
                      required 
                      data-testid="input-address"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">{t.city} *</Label>
                      <Input 
                        id="city"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress(prev => ({...prev, city: e.target.value}))}
                        required 
                        data-testid="input-city"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">{t.postalCode}</Label>
                      <Input 
                        id="postalCode"
                        value={shippingAddress.postalCode}
                        onChange={(e) => setShippingAddress(prev => ({...prev, postalCode: e.target.value}))}
                        data-testid="input-postal-code"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone} *</Label>
                    <Input 
                      id="phone"
                      value={shippingAddress.phone}
                      onChange={(e) => setShippingAddress(prev => ({...prev, phone: e.target.value}))}
                      required 
                      data-testid="input-phone"
                    />
                  </div>
                  
                  {!showPayPalOnly && (
                    <Button 
                      onClick={handleCreatePayment}
                      className="w-full"
                      disabled={createPaymentIntent.isPending}
                      data-testid="button-proceed-to-payment"
                    >
                      {createPaymentIntent.isPending ? t.preparingPayment : t.proceedToPayment}
                    </Button>
                  )}
                  
                  {/* PayPal Button - Always visible */}
                  <div className="mt-4">
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">{showPayPalOnly ? t.payWith : t.or}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`https://www.paypal.com/paypalme/hashsheliclone/${totalPrice}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button 
                        type="button"
                        className="w-full bg-[#0070BA] hover:bg-[#005EA6] text-white py-3 text-lg font-bold shadow-lg"
                      >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21l1.263-8.01.032-.22a.805.805 0 0 1 .794-.679h1.645c3.287 0 5.857-1.337 6.61-5.207.037-.188.068-.37.093-.547a4.45 4.45 0 0 1 2.212 2.141z"/>
                          <path d="M6.956 8.925c.088-.47.43-.813.898-.858l7.096-.003c.84 0 1.607.095 2.282.295a5.98 5.98 0 0 1 .913.362c.315.15.603.33.862.538.094-.535.088-1.095-.09-1.652-.375-1.176-1.387-2.292-3.41-2.292H8.14a1.195 1.195 0 0 0-1.18 1.006L4.16 18.285a.718.718 0 0 0 .71.832h4.345l1.09-6.915.65-4.127z"/>
                        </svg>
                        {t.payWithPayPal || 'Payer avec PayPal'} - ₪{totalPrice}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      {t.shoppingCart} ({items.length} {t.items})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {items.map(item => (
                        <div key={item.id} className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">
                              {t.quantity}: {item.quantity} × ₪{item.price}
                            </p>
                            {item.variant && (
                              <p className="text-xs text-gray-500">
                                {item.variant.format} - {item.variant.size}
                              </p>
                            )}
                          </div>
                          <span className="font-medium">₪{item.price * item.quantity}</span>
                        </div>
                      ))}
                      
                      <Separator />
                      
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>{t.subtotal}:</span>
                          <span>₪{subtotalPrice}</span>
                        </div>
                        {isSubscriber && discount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>{t.subscriptionDiscount}:</span>
                            <span>-₪{discount}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-lg font-bold">
                          <span>{t.total}:</span>
                          <span>₪{totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Spiritual Mission */}
                <Card className="border-amber-200 bg-amber-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-amber-800 mb-2">💎 {t.spiritualMission}</h3>
                        <p className="text-sm text-amber-700">
                          {t.supportMessage}
                        </p>
                        <p className="text-sm text-amber-700 mt-2 font-medium">
                          {t.nanachSlogan}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Policies */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-green-800 mb-2">🛡️ {t.shippingPolicy}</h3>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• {t.freeShipping}</li>
                          <li>• {t.deliveryTime}</li>
                          <li>• {t.returnPolicy}</li>
                          <li>• {t.defectiveProduct}</li>
                          <li>• {t.customerService}</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <CreditCard className="h-8 w-8 mx-auto mb-2" />
                    {t.securePayment}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {t.completeCreditCard}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm clientSecret={clientSecret} orderSummary={orderSummary} />
                  </Elements>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}