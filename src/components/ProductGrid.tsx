import { Plus, Star } from "lucide-react";
import type { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, addToCart }) => {
  return (
    <div className="md:w-3/4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <div className="flex items-center gap-1 text-sm text-amber-600">
                  <Star className="w-4 h-4 fill-current" />
                  {product.rating}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">€{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;