import { useState, useEffect } from "react";
import type { Product } from "../types";
import { products } from "../data/data";
import ProductGrid from "../components/ProductGrid";
import Filter from "../components/Filter";

const MenuPage: React.FC<{ addToCart: (product: Product) => void }> = ({ addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(20);

  useEffect(() => {
    let filtered = products;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    filtered = filtered.filter(p => p.price <= maxPrice);
    
    setFilteredProducts(filtered);
  }, [selectedCategory, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Menu</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <Filter 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default MenuPage;