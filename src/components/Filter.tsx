import { Filter as FilterIcon } from "lucide-react";

interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

const Filter: React.FC<FilterProps> = ({ 
  selectedCategory, 
  setSelectedCategory, 
  maxPrice, 
  setMaxPrice 
}) => {
  return (
    <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-lg h-fit">
      <div className="flex items-center gap-2 mb-6">
        <FilterIcon className="w-5 h-5 text-amber-600" />
        <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          <option value="coffee">Coffee</option>
          <option value="beverages">Beverages</option>
          <option value="pastries">Pastries</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Max Price: €{maxPrice}</label>
        <input
          type="range"
          min="0"
          max="20"
          step="0.5"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Filter;