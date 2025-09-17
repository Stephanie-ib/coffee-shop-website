import React, { useState } from 'react';
import type { CartItem, Product } from './types';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CheckoutSuccessModal from './components/CheckoutSuccessModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    total: 0,
    orderNumber: ''
  });

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Generate a random order number
  const generateOrderNumber = () => {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const checkout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderNumber = generateOrderNumber();
    
    // Set order details for the modal
    setOrderDetails({
      total,
      orderNumber
    });
    
    // Clear cart and close it
    setCartItems([]);
    setIsCartOpen(false);
    
    // Show success modal
    setShowSuccessModal(true);
  };
  
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <MenuPage addToCart={addToCart} />;
      case 'locations':
        return <LocationsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartItemsCount={cartItemsCount}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        checkout={checkout}
      />

      <CheckoutSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        orderTotal={orderDetails.total}
        orderNumber={orderDetails.orderNumber}
      />

      <Footer />
    </div>
  );
};

export default App;