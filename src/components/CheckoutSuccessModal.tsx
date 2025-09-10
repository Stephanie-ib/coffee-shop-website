import { CheckCircle } from "lucide-react";

const CheckoutSuccessModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  orderTotal: number;
  orderNumber: string;
}> = ({ isOpen, onClose, orderTotal, orderNumber }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        <div className="p-8 text-center">
          {/* Success Animation */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          
          {/* Success Message */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed! 🎉</h3>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Brussels Brewery! Your order has been successfully placed.
          </p>
          
          {/* Order Details */}
          <div className="bg-amber-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Order Number:</span>
              <span className="text-sm font-bold text-amber-600">#{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Total Amount:</span>
              <span className="text-lg font-bold text-amber-600">€{orderTotal.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Estimated Time */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-1">Estimated pickup time:</p>
            <p className="text-lg font-semibold text-gray-800">15-20 minutes</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={onClose}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Continue Shopping
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-medium transition-colors duration-300"
            >
              Track Order
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-2"></div>
      </div>
    </div>
  );
};

export default CheckoutSuccessModal
