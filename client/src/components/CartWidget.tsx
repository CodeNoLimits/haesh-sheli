import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trash2, Plus, Minus } from 'lucide-react';

export const CartWidget: React.FC = () => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
  const { currentLanguage } = useLanguage();

  if (!isCartOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50" 
      onClick={() => setIsCartOpen(false)}
    >
      <div 
        className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="p-4 border-b border-border bg-primary text-primary-foreground">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              {currentLanguage === 'he' ? 'סל קניות' : 'Shopping Cart'}
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <p className="text-sm mt-1">
            {currentLanguage === 'he' 
              ? `${totalItems} פריטים • ${totalPrice.toFixed(2)} ₪`
              : `${totalItems} items • ₪${totalPrice.toFixed(2)}`
            }
          </p>
        </div>

        {/* Cart Items */}
        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>{currentLanguage === 'he' ? 'הסל ריק' : 'Cart is empty'}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    {/* Product Image - Clickable */}
                    <a 
                      href={`/product/${item.productId}`}
                      className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0 hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src={item.image || '/placeholder-book.jpg'} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </a>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <a 
                        href={`/product/${item.productId}`}
                        className="font-medium text-sm text-gray-900 truncate hover:text-primary block"
                      >
                        {currentLanguage === 'he' ? item.name : (item.nameEnglish || item.name)}
                      </a>
                      {item.variant && (
                        <p className="text-xs text-gray-600 mt-1">
                          {item.variant.format} • {item.variant.binding} • {item.variant.size}
                        </p>
                      )}
                      <p className="text-sm font-bold text-red-600 mt-1">
                        {item.price.toFixed(2)} ₪
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Payment Buttons */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50 space-y-3">
            <div className="mb-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>{currentLanguage === 'he' ? 'סה"כ:' : 'Total:'}</span>
                <span className="text-red-600">{totalPrice.toFixed(2)} ₪</span>
              </div>
            </div>
            
            {/* PayPal Direct Payment */}
            <a 
              href={`https://www.paypal.com/paypalme/hashsheliclone/${totalPrice.toFixed(2)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#0070BA] hover:bg-[#005EA6] text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21l1.263-8.01.032-.22a.805.805 0 0 1 .794-.679h1.645c3.287 0 5.857-1.337 6.61-5.207.037-.188.068-.37.093-.547a4.45 4.45 0 0 1 2.212 2.141z"/>
                  <path d="M6.956 8.925c.088-.47.43-.813.898-.858l7.096-.003c.84 0 1.607.095 2.282.295a5.98 5.98 0 0 1 .913.362c.315.15.603.33.862.538.094-.535.088-1.095-.09-1.652-.375-1.176-1.387-2.292-3.41-2.292H8.14a1.195 1.195 0 0 0-1.18 1.006L4.16 18.285a.718.718 0 0 0 .71.832h4.345l1.09-6.915.65-4.127z"/>
                </svg>
                <span>
                  {currentLanguage === 'he' ? 'תשלום' : 
                   currentLanguage === 'fr' ? 'Paiement' :
                   currentLanguage === 'es' ? 'Pago' :
                   currentLanguage === 'ru' ? 'Оплата' :
                   'Payment'} - PayPal
                </span>
              </div>
            </a>

            {/* Alternative: Full Checkout */}
            <a 
              href={`/checkout?fromCart=true`}
              className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg text-center transition-colors text-sm"
            >
              {currentLanguage === 'he' ? 'או מלא פרטי משלוח' : 
               currentLanguage === 'fr' ? 'Ou remplir les détails' :
               currentLanguage === 'es' ? 'O completar detalles' :
               currentLanguage === 'ru' ? 'Или заполнить детали' :
               'Or fill shipping details'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};