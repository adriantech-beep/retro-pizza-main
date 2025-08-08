import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { Pencil, Trash2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const deleteItem = useCartStore((state) => state.deleteItem);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const token = useAuthStore.getState().token;

    if (!token) {
      // navigate("/login");
      navigate("/login", { state: { from: "/checkout" } });
      return;
    }

    navigate("/checkout");
  };

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f1e] text-white">
        <p className="text-xl text-gray-400">🛒 Your cart is empty.</p>
      </div>
    );

  return (
    <div className="min-h-screen p-6 bg-[#0f0f1e] text-white">
      <h2 className="text-2xl font-bold text-[#ff4d00] mb-6">🛒 Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-[#1a1a2e] border border-[#ff4d00]/20 rounded-lg p-4 shadow-md"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-20 h-20 object-cover rounded border border-[#ff4d00]/40"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#ffe600]">
                {item.name}
              </h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-lg font-medium text-[#ff4d00]">
                x{item.quantity}
              </p>
              <p className="text-lg font-bold text-[#ff4d00]">₱{item.price}</p>
            </div>

            <div className="flex gap-3">
              {/* <Pencil className="text-small font-small text-[#ff2200] cursor-pointer" /> */}

              <Trash2
                className="text-small font-small text-[#ff2200] cursor-pointer"
                onClick={() => deleteItem(item.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-8 border-t border-[#ff4d00]/30 pt-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Total:</h3>
        <p className="text-xl font-bold text-[#ffe600]">₱{totalPrice}</p>
      </div>

      <div className="mt-8 border-t border-[#ff4d00]/30 pt-4 flex justify-end  items-right">
        <button
          onClick={handleCheckout}
          className="text-lg font-semibold text-[#ffe600]"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
