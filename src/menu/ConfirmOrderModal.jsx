const ConfirmOrderModal = ({ quantity, setShowConfirm, onHandleAdd }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#1a1a2e] p-6 rounded-xl text-white border border-[#ff4d00]/30 shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-bold mb-4 text-[#ffe600]">Confirm Order</h3>
        <p className="mb-4">
          Add <strong>{quantity}</strong> x to your cart?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowConfirm(false)}
            className="px-3 py-1 border border-gray-500 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onHandleAdd}
            className="px-3 py-1 bg-[#ff4d00] hover:bg-[#e94300] text-black font-semibold rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderModal;
