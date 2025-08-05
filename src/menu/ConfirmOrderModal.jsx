import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmOrderModal = ({ orderItem, onCloseModal }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const { name, price } = orderItem;
  const totalItemPrice = price * quantity;

  const handleConfirm = () => {
    addToCart({
      id: orderItem.id,
      name: orderItem.name,
      price: totalItemPrice,
      imageUrl: orderItem.imageUrl,
      quantity,
    });
    onCloseModal?.();
    toast.success(`${orderItem.name} added to cart successfully`);
    navigate("/menu");
  };

  if (!orderItem)
    return (
      <p className="text-lg font-bold mb-4 text-[#ffe600]">
        No menu products to show
      </p>
    );

  return (
    <div className="bg-[#1a1a2e] p-6 rounded-xl text-white border border-[#ff4d00]/30 shadow-lg max-w-sm w-full">
      <h3 className="text-lg font-bold mb-4 text-[#ffe600]">Confirm Order</h3>
      <p className="mb-4">
        Add <strong className="text-[#ff4d00]">{name}</strong> to your cart?
      </p>

      <div className="flex items-center justify-between mt-4 p-4">
        <p className="text-[#ff4d00] text-xl font-bold">{totalItemPrice}</p>
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 text-white bg-gray-700 rounded"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            className="px-2 py-1 text-white bg-gray-700 rounded"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-2">
        <button
          onClick={() => onCloseModal?.()}
          className="px-3 py-1 border border-gray-500 rounded hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="px-3 py-1 bg-[#ff4d00] hover:bg-[#e94300] text-black font-semibold rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrderModal;
