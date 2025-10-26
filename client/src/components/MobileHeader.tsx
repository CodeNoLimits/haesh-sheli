import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MobileHeaderProps {
  onToggleSidebar: () => void;
  sidebarVisible: boolean;
  onSearchClick?: () => void;
  cartItemsCount?: number;
}

export function MobileHeader({ 
  onToggleSidebar, 
  sidebarVisible, 
  onSearchClick,
  cartItemsCount = 0 
}: MobileHeaderProps) {
  const { currentLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="lg:hidden bg-white shadow-sm border-b sticky top-0 z-40">
      {/* Main Header */}
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://www.haesh-sheli.co.il/wp-content/uploads/2021/12/cropped-%D7%A7%D7%A8%D7%95-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%A8-%D7%90%D7%95%D7%93%D7%A1%D7%A8.d110a0.webp"
            alt="האש שלי"
            className="h-8 w-auto"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Button */}
          {onSearchClick && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onSearchClick}
              className="p-2"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Cart Button */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="p-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white">
          <div className="px-4 py-2 space-y-1">
            <a href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              דף הבית
            </a>
            <a href="/store" className="block py-2 text-gray-700 hover:text-blue-600">
              חנות
            </a>
            <a href="/shiurim" className="block py-2 text-gray-700 hover:text-blue-600">
              שיעורים
            </a>
            <a href="/donate" className="block py-2 text-gray-700 hover:text-blue-600">
              תרומות
            </a>
            <a href="/affiliation" className="block py-2 text-gray-700 hover:text-blue-600">
              תוכנית שותפות
            </a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
              עלינו
            </a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">
              צור קשר
            </a>
          </div>
        </div>
      )}

      {/* Filter Toggle */}
      <div className="px-4 pb-2">
        <Button
          onClick={onToggleSidebar}
          className="w-full flex items-center justify-center"
          variant="outline"
        >
          <Search className="h-4 w-4 mr-2" />
          מסננים
        </Button>
      </div>
    </div>
  );
}
