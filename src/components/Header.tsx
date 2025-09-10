import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";

const Header: React.FC<{ currentPage: string; setCurrentPage: (page: string) => void; cartItemsCount: number; toggleCart: () => void }> = ({ currentPage, setCurrentPage, cartItemsCount, toggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍵</span>
            <h1 className="text-2xl font-bold text-amber-900">Brussels Brewery</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['home', 'menu', 'locations'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize font-medium transition-colors ${
                  currentPage === page 
                    ? 'text-amber-600 border-b-2 border-amber-600' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {['home', 'menu', 'locations'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 capitalize font-medium ${
                  currentPage === page ? 'text-amber-600' : 'text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header