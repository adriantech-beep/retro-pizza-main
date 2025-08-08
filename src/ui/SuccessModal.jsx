import { CheckCircle } from "lucide-react";

const SuccessModal = ({ onCloseModal }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-6 text-center space-y-4">
        <CheckCircle className="text-[#ff4d00] w-12 h-12 mx-auto" />
        <h2 className="text-xl font-bold text-gray-800">Order Successful!</h2>
        <p className="text-gray-600">
          Thank you for your order. Your payment has been processed
          successfully.
        </p>
        <button
          onClick={onCloseModal}
          className="mt-4 px-6 py-2 text-[#ff4d00] rounded-md hover:bg[#ff4d00] transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
export default SuccessModal;
