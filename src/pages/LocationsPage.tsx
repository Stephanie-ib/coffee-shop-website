import { MapPin, Phone, Clock } from "lucide-react";
import { locations } from "../data/data";

const LocationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Locations</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-amber-600">{location.name}</h3>
            
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <span>{location.address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>{location.phone}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>{location.hours}</span>
              </div>
            </div>
            
            <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
              Get Directions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage